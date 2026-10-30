import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, access } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { runInNewContext } from "node:vm";
import { build, collectContent, root, languages, labs } from "../scripts/build.mjs";
import { renderMarkdown, inline } from "../markdown.js";

test("all three languages contain every complete lab and matching code-block counts", async () => {
  const content = await collectContent();
  for (const language of languages) {
    assert.equal(content[language].length, 3);
    for (const [index, lab] of content[language].entries()) {
      const original = content["pt-BR"][index].markdown;
      assert.equal(lab.id, labs[index].id);
      assert.equal(lab.minutes, 15, "Every lab has a maximum estimated duration of 15 minutes");
      assert.equal(lab.path, `content/${language}/${lab.file}`);
      assert.match(lab.markdown.split("\n").find((line) => line.includes("15")), /15/);
      assert.doesNotMatch(lab.markdown, /60[–-]75|15[–-]20|approximately 20 minutes|aproximadamente 20 minutos/);
      assert.equal(lab.markdown.match(/^```/gm).length, original.match(/^```/gm).length, `${language}/${lab.id}: code blocks`);
      assert.equal(lab.markdown.match(/^#{1,6} /gm).length, original.match(/^#{1,6} /gm).length, `${language}/${lab.id}: headings`);
      for (const command of new Set(original.match(/\/(?:btw|init|create-[a-z-]+)/g) || [])) {
        assert.ok(lab.markdown.includes(command), `${language}/${lab.id}: missing ${command}`);
      }
      const rendered = renderMarkdown(lab.markdown);
      assert.ok(rendered.html.includes("<table>"));
      assert.equal(rendered.html.match(/class="copy-button"/g).length, original.match(/^```/gm).length / 2);
      assert.ok(!rendered.html.includes("\u0000"), "Unresolved inline placeholder");
    }
  }
});

test("exercise folders and customizations are localized consistently without Portuguese leftovers", async () => {
  const content = await collectContent();
  const names = {
    "pt-BR": {
      passwordFolder: "gerador-senhas-agent", calculatorFolder: "calculadora-copilot-lab",
      architecture: "arquitetura", calculator: "calculadora", operation: "nova-operacao",
      argument: "nome_operacao", multiplication: "multiplicacao", division: "divisao"
    },
    en: {
      passwordFolder: "password-generator-agent", calculatorFolder: "calculator-copilot-lab",
      architecture: "architecture", calculator: "calculator", operation: "new-operation",
      argument: "operation_name", multiplication: "multiplication", division: "division"
    },
    es: {
      passwordFolder: "generador-contrasenas-agent", calculatorFolder: "calculadora-copilot-lab",
      architecture: "arquitectura", calculator: "calculadora", operation: "nueva-operacion",
      argument: "nombre_operacion", multiplication: "multiplicacion", division: "division"
    }
  };
  for (const language of languages) {
    const locale = names[language];
    const calculator = content[language].find((lab) => lab.id === "calculator").markdown;
    const passwords = content[language].find((lab) => lab.id === "passwords").markdown;
    assert.equal(passwords.split(locale.passwordFolder).length - 1, 3, `${language}: folder creation, Explorer, and session must agree`);
    assert.equal(calculator.split(locale.calculatorFolder).length - 1, 2, `${language}: calculator folder must match Explorer`);
    for (const identifier of [
      `.github/instructions/${locale.architecture}.instructions.md`,
      `.github/instructions/${locale.calculator}.instructions.md`,
      `src/${locale.calculator}/`,
      `src/routes/${locale.calculator}.js`,
      `.github/prompts/${locale.operation}.prompt.md`,
      `name: ${locale.operation}`,
      `\${input:${locale.argument}}`,
      `/${locale.operation} ${locale.multiplication}`,
      `.github/skills/${locale.calculator}-dogfooding/SKILL.md`,
      `\`${locale.division}\``
    ]) assert.ok(calculator.includes(identifier), `${language}: missing localized identifier ${identifier}`);
    assert.equal(calculator.split(`/${locale.operation}`).length - 1, 5, `${language}: prompt creation, fallback, two invocations, and checklist must agree`);
    if (language !== "pt-BR") {
      for (const lab of content[language]) {
        assert.doesNotMatch(lab.markdown, /\b(?:gerador-senhas-agent|arquitetura|nova-operacao|nome_operacao|multiplicacao|divisao|Crie|Não|Verificação|Conclusão)\b/iu, `${language}/${lab.id}: untranslated Portuguese`);
      }
    }
    if (language === "en") assert.doesNotMatch(calculator, /calculadora/iu);
  }
});

test("Markdown preserves exact copyable code, tables, media, and headings", () => {
  const source = '# Title\n\n## Step\n\n```text\n${input:name}\n<test> & "quotes"\n```\n\n| A | B |\n| --- | --- |\n| one | `two` |\n\n> **Note**\n\n1. First\n2. Second\n\n<video src="https://example.com/demo.mp4" title="Demo" controls></video>';
  const result = renderMarkdown(source, "Copiar");
  assert.equal(result.headings[1].id, "section-1");
  assert.match(result.html, /\$\{input:name\}/);
  assert.match(result.html, /&lt;test&gt; &amp; &quot;quotes&quot;/);
  assert.match(result.html, /<th scope="col">A<\/th>/);
  assert.match(result.html, /<td><code>two<\/code><\/td>/);
  assert.match(result.html, /<ol><li>First<\/li><li>Second<\/li><\/ol>/);
  assert.match(result.html, /aria-label="Demo" controls preload="none"/);
  assert.ok(!result.html.includes("autoplay"));
});

test("Markdown escapes arbitrary HTML and rejects executable URLs", () => {
  assert.equal(inline('<script>alert("x")</script>'), "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;");
  assert.match(inline("[bad](javascript:alert)"), /href="#"/);
  assert.match(inline("![bad](data:text/html,test)"), /src="#"/);
  assert.equal(inline("[`command`](https://example.com)"), '<a href="https://example.com"><code>command</code></a>');
  assert.match(inline("`**literal**`"), /<code>\*\*literal\*\*<\/code>/);
});

test("build emits only static assets, valid data, and relative project paths", async () => {
  const directory = await mkdtemp(resolve(tmpdir(), "copilot-lab-test-"));
  try {
    const content = await build(directory);
    const context = { window: {} };
    runInNewContext(await readFile(resolve(directory, "content.js"), "utf8"), context);
    assert.equal(context.window.LAB_CONTENT.es.length, 3);
    assert.equal(context.window.LAB_CONTENT.en[0].markdown, content.en[0].markdown);
    const html = await readFile(resolve(directory, "index.html"), "utf8");
    assert.ok(html.includes("<title>Copilot Quick Labs by @cyz</title>"));
    assert.ok(html.includes("Copilot Quick Labs <strong>by @cyz</strong>"));
    assert.doesNotMatch(html, /Copilot Lab/);
    assert.doesNotMatch(html, /id="inspiration"/);
    assert.ok(html.includes('class="inspiration-banner home-only"'));
    assert.ok(html.includes('href="https://jamesmontemagno.github.io/first-steps-with-github-copilot/"'));
    assert.match(html, /<h2 id="inspiration-title">Inspirado em First Steps with GitHub Copilot<\/h2>/);
    assert.doesNotMatch(html, /footer-copy|Aprenda, revise e valide/);
    for (const path of ["./styles.css", "./content.js", "./app.js"]) assert.ok(html.includes(path));
    for (const file of ["index.html", "lab.html", "styles.css", "app.js", "markdown.js", "content.js", "THIRD_PARTY_NOTICES", ".nojekyll"]) await access(resolve(directory, file));
    assert.equal(await readFile(resolve(directory, "lab.html"), "utf8"), html);
    assert.ok(!html.includes('src="/'), "Assets must work under a GitHub Pages subpath");
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("light, dark, and editor-preview accents use blue without leftover purple", async () => {
  const css = await readFile(resolve(root, "styles.css"), "utf8");
  assert.match(css, /--cp-accent: #0969da;/);
  assert.match(css, /--cp-accent: #58a6ff;/);
  assert.match(css, /--cp-demo-accent: #58a6ff;/);
  assert.match(css, /--cp-demo-glow: #122e56;/);
  assert.doesNotMatch(css, /#(?:6f42c1|8250df|a371f7|bf8cff|25205e)|rgba\(111, 66, 193|rgba\(163, 113, 247/i);
});

test("README local Markdown links resolve", async () => {
  const readme = await readFile(resolve(root, "README.md"), "utf8");
  const links = [...readme.matchAll(/\]\((\.\/[^)]+)\)/g)].map((match) => match[1]);
  for (const link of links) await access(resolve(root, link));
});
