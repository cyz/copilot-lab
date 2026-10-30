import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

export const root = fileURLToPath(new URL("../", import.meta.url));
export const languages = ["pt-BR", "en", "es"];
export const labs = [
  { id: "calculator", file: "lab-01.md", minutes: 15, steps: 8 },
  { id: "passwords", file: "lab-03.md", minutes: 15, steps: 5 },
  { id: "browser", file: "lab-02.md", minutes: 15, steps: 4 }
];

export async function collectContent(base = root) {
  const content = {};
  for (const language of languages) {
    content[language] = [];
    for (const lab of labs) {
      const path = `content/${language}/${lab.file}`;
      const markdown = await readFile(resolve(base, path), "utf8");
      if (!markdown.startsWith("# ") || !markdown.includes("```")) {
        throw new Error(`Invalid lab document: ${path}`);
      }
      content[language].push({ ...lab, path, markdown });
    }
  }
  return content;
}

export async function build(output = resolve(root, "_site")) {
  const content = await collectContent();
  await mkdir(output, { recursive: true });
  for (const asset of ["index.html", "styles.css", "app.js", "markdown.js", "THIRD_PARTY_NOTICES"]) {
    await copyFile(resolve(root, asset), resolve(output, asset));
  }
  await copyFile(resolve(root, "index.html"), resolve(output, "lab.html"));
  await writeFile(resolve(output, "content.js"), `window.LAB_CONTENT = ${JSON.stringify(content).replaceAll("<", "\\u003c")};\n`);
  await writeFile(resolve(output, ".nojekyll"), "");
  return content;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await build();
  console.log("Built 3 labs in 3 languages in _site/");
}
