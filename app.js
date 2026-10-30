import { renderMarkdown } from "./markdown.js";

const translations = {
  "pt-BR": {
    language: "Idioma", theme: "Alternar tema", skip: "Ir para o exercício",
    eyebrow: "APRENDA FAZENDO · VS CODE + GITHUB COPILOT",
    title: "Encontre seu", titleAccent: "fluxo com Copilot.",
    description: "Três projetos reais para explorar agentes, customizações e feedback visual. No seu ritmo, no seu idioma.",
    start: "Começar o laboratório →", result: "Vou criar o projeto, executar os testes e abrir no navegador.",
    route: "Um projeto. Seu fluxo com Copilot.", caption: "Escolha um laboratório e transforme uma ideia em um projeto testado. Cada exercício é independente e leva até 15 minutos.",
    duration: "Até 15 minutos por lab", overview: "01 / VISÃO GERAL",
    previewPrompt: "Crie uma calculadora com testes automatizados.", previewTitle: "CALCULADORA",
    outcomes: [["Crie com contexto", "Oriente o agente com instruções claras e projetos pequenos."], ["Teste o resultado", "Confirme o comportamento com testes e no navegador."], ["Aprenda o fluxo", "Experimente os recursos e mantenha o controle das mudanças."]],
    calloutTitle: "Pequenos projetos. Aprendizado real.", calloutDescription: "Siga os prompts, observe o agente e valide cada resultado antes de continuar.",
    finishTitle: "Você completou o laboratório.", finishDescription: "Confirme o checklist e continue explorando os outros projetos.",
    stepLabel: (number) => `ETAPA ${number}`,
    back: "← Todos os laboratórios",
    inspirationKicker: "INSPIRAÇÃO",
    inspirationTitle: "Inspirado em First Steps with GitHub Copilot",
    inspirationDescription: "Este projeto é inspirado no workshop de James Montemagno, com exercícios próprios e conteúdo em português brasileiro, inglês e espanhol.",
    inspirationLink: "Conheça o projeto de James Montemagno ↗",
    guide: "NESTE LABORATÓRIO", complete: "Marcar como concluído", reset: "Limpar progresso",
    source: "Ver Markdown ↗", previous: "← Anterior", next: "Próximo →",
    copy: "Copiar", copied: "Copiado!",
    copyError: "Não foi possível copiar. Selecione o texto do bloco e copie manualmente.",
    storageError: "Armazenamento indisponível. Seu progresso só será mantido nesta página até recarregar.",
    resetDone: "Progresso dos três laboratórios limpo.",
    progress: (count) => `${count} de 3 laboratórios concluídos`,
    lab: (number) => `LABORATÓRIO ${number}`, steps: (count) => `${count} etapas`,
    cards: [
      ["Desenvolvimento com agentes", "Uma calculadora para explorar instructions, prompts, skills e revisão de código."],
      ["Side chats com /btw", "Um gerador de senhas para fazer perguntas sem interromper o agente."],
      ["Feedback no navegador", "Uma cafeteria para transformar comentários visuais em melhorias na interface."]
    ]
  },
  en: {
    language: "Language", theme: "Toggle theme", skip: "Skip to exercise",
    eyebrow: "LEARN BY DOING · VS CODE + GITHUB COPILOT",
    title: "Find your", titleAccent: "Copilot flow.",
    description: "Three real projects to explore agents, customizations, and visual feedback. At your pace, in your language.",
    start: "Start the lab →", result: "I'll build the project, run the tests, and open it in the browser.",
    route: "One project. Your Copilot flow.", caption: "Choose a lab and take an idea to a tested project. Each exercise is independent and takes up to 15 minutes.",
    duration: "Up to 15 minutes per lab", overview: "01 / OVERVIEW",
    previewPrompt: "Build a calculator with automated tests.", previewTitle: "CALCULATOR",
    outcomes: [["Build with context", "Guide the agent with clear instructions and small projects."], ["Test the result", "Verify behavior with tests and in the browser."], ["Learn the flow", "Explore the features and stay in control of changes."]],
    calloutTitle: "Small projects. Real learning.", calloutDescription: "Follow the prompts, observe the agent, and verify each result before continuing.",
    finishTitle: "You've completed the lab.", finishDescription: "Confirm the checklist and keep exploring the other projects.",
    stepLabel: (number) => `STEP ${number}`,
    back: "← All labs",
    inspirationKicker: "INSPIRATION",
    inspirationTitle: "Inspired by First Steps with GitHub Copilot",
    inspirationDescription: "This project is inspired by James Montemagno's workshop, with its own exercises and content in Brazilian Portuguese, English, and Spanish.",
    inspirationLink: "Explore James Montemagno's project ↗",
    guide: "IN THIS LAB", complete: "Mark as complete", reset: "Reset progress",
    source: "View Markdown ↗", previous: "← Previous", next: "Next →",
    copy: "Copy", copied: "Copied!",
    copyError: "Unable to copy. Select the text in the block and copy it manually.",
    storageError: "Storage unavailable. Progress will only be kept on this page until you reload.",
    resetDone: "Progress for all three labs cleared.",
    progress: (count) => `${count} of 3 labs complete`,
    lab: (number) => `LAB ${number}`, steps: (count) => `${count} steps`,
    cards: [
      ["Agent-driven development", "A calculator to explore instructions, prompts, skills, and code review."],
      ["Side chats with /btw", "A password generator to ask questions without interrupting the agent."],
      ["Browser feedback", "A coffee shop to turn visual comments into interface improvements."]
    ]
  },
  es: {
    language: "Idioma", theme: "Cambiar tema", skip: "Ir al ejercicio",
    eyebrow: "APRENDE HACIENDO · VS CODE + GITHUB COPILOT",
    title: "Encuentra tu", titleAccent: "flujo con Copilot.",
    description: "Tres proyectos reales para explorar agentes, personalizaciones y comentarios visuales. A tu ritmo, en tu idioma.",
    start: "Comenzar el laboratorio →", result: "Voy a crear el proyecto, ejecutar las pruebas y abrirlo en el navegador.",
    route: "Un proyecto. Tu flujo con Copilot.", caption: "Elige un laboratorio y convierte una idea en un proyecto probado. Cada ejercicio es independiente y dura hasta 15 minutos.",
    duration: "Hasta 15 minutos por lab", overview: "01 / VISTA GENERAL",
    previewPrompt: "Crea una calculadora con pruebas automatizadas.", previewTitle: "CALCULADORA",
    outcomes: [["Crea con contexto", "Guía al agente con instrucciones claras y proyectos pequeños."], ["Prueba el resultado", "Verifica el comportamiento con pruebas y en el navegador."], ["Aprende el flujo", "Explora las funciones y mantén el control de los cambios."]],
    calloutTitle: "Proyectos pequeños. Aprendizaje real.", calloutDescription: "Sigue los prompts, observa al agente y verifica cada resultado antes de continuar.",
    finishTitle: "Has completado el laboratorio.", finishDescription: "Confirma la lista de verificación y sigue explorando los otros proyectos.",
    stepLabel: (number) => `PASO ${number}`,
    back: "← Todos los laboratorios",
    inspirationKicker: "INSPIRACIÓN",
    inspirationTitle: "Inspirado en First Steps with GitHub Copilot",
    inspirationDescription: "Este proyecto está inspirado en el taller de James Montemagno, con ejercicios propios y contenido en portugués de Brasil, inglés y español.",
    inspirationLink: "Conoce el proyecto de James Montemagno ↗",
    guide: "EN ESTE LABORATORIO", complete: "Marcar como completado", reset: "Borrar progreso",
    source: "Ver Markdown ↗", previous: "← Anterior", next: "Siguiente →",
    copy: "Copiar", copied: "¡Copiado!",
    copyError: "No se pudo copiar. Selecciona el texto del bloque y cópialo manualmente.",
    storageError: "Almacenamiento no disponible. El progreso solo se conservará en esta página hasta que la recargues.",
    resetDone: "Se ha borrado el progreso de los tres laboratorios.",
    progress: (count) => `${count} de 3 laboratorios completados`,
    lab: (number) => `LABORATORIO ${number}`, steps: (count) => `${count} pasos`,
    cards: [
      ["Desarrollo con agentes", "Una calculadora para explorar instrucciones, prompts, skills y revisión de código."],
      ["Conversaciones paralelas con /btw", "Un generador de contraseñas para hacer preguntas sin interrumpir al agente."],
      ["Comentarios en el navegador", "Una cafetería para convertir comentarios visuales en mejoras de la interfaz."]
    ]
  }
};

const content = window.LAB_CONTENT;
const $ = (id) => document.getElementById(id);
let language = "pt-BR";
let labId = "calculator";
let completed = new Set();
let storageIssue = false;
let rendered = "";
let messageTimer;
const storageKey = "copilot-lab:completed:v1";
const isDetail = location.pathname.endsWith("/lab.html");

function announce(message) {
  clearTimeout(messageTimer);
  $("status").textContent = message;
  messageTimer = setTimeout(() => { $("status").textContent = ""; }, 8000);
}

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (!Array.isArray(saved) || saved.some((id) => !content["pt-BR"].some((lab) => lab.id === id))) {
    throw new Error("Invalid saved progress");
  }
  completed = new Set(saved);
} catch (error) {
  console.warn("Unable to restore lab progress:", error);
  storageIssue = true;
}

function route(lang = language, lab = labId, section = "") {
  const params = new URLSearchParams({ lang, lab });
  params.set("scoutTheme", document.documentElement.dataset.theme);
  return `./lab.html?${params}${section ? `#section=${encodeURIComponent(section)}` : ""}`;
}

function homeRoute(lang = language) {
  const params = new URLSearchParams({ lang, scoutTheme: document.documentElement.dataset.theme });
  return `./index.html?${params}`;
}

function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
  } catch (error) {
    console.warn("Unable to save lab progress:", error);
    storageIssue = true;
  }
  if (storageIssue) announce(translations[language].storageError);
}

function updateProgress() {
  $("complete").checked = completed.has(labId);
  $("progress").value = completed.size;
  $("progress-label").textContent = translations[language].progress(completed.size);
  $("progress").setAttribute("aria-label", translations[language].progress(completed.size));
  document.querySelectorAll(".lab-card").forEach((card) => {
    const indicator = card.querySelector(".completion-indicator");
    indicator.textContent = completed.has(card.dataset.lab) ? " ✓" : "";
  });
}

function render() {
  const text = translations[language];
  const labs = content[language];
  const current = labs.findIndex((lab) => lab.id === labId);
  const lab = labs[current];
  document.documentElement.lang = language;
  document.title = isDetail ? `${text.cards[current][0]} · Copilot Quick Labs by @cyz` : "Copilot Quick Labs by @cyz";
  document.body.classList.toggle("detail-page", isDetail);
  document.body.classList.toggle("home-page", !isDetail);
  document.querySelector(".hero").hidden = isDetail;
  document.querySelector(".route-section").hidden = isDetail;
  document.querySelector(".sidebar").hidden = !isDetail;
  document.querySelectorAll(".detail-only").forEach((element) => { element.hidden = !isDetail; });
  document.querySelectorAll(".home-only").forEach((element) => { element.hidden = isDetail; });
  $("back-to-labs").hidden = !isDetail;
  $("back-to-labs").textContent = text.back;
  $("back-to-labs").href = homeRoute();
  $("language").value = language;
  const labels = {
    "language-label": text.language, eyebrow: text.eyebrow,
    "hero-description": text.description, start: text.start,
    "hero-result": text.result, "route-title": text.route, "route-caption": text.caption,
    "guide-label": text.guide, "complete-text": text.complete, reset: text.reset,
    source: text.source, previous: text.previous, next: text.next,
    "lab-number": text.lab(current + 1),
    duration: text.duration, "overview-kicker": text.overview,
    "preview-prompt": text.previewPrompt, "preview-title": text.previewTitle,
    "callout-title": text.calloutTitle, "callout-description": text.calloutDescription,
    "finish-title": text.finishTitle, "finish-description": text.finishDescription,
    "inspiration-kicker": text.inspirationKicker, "inspiration-title": text.inspirationTitle,
    "inspiration-description": text.inspirationDescription, "inspiration-link": text.inspirationLink
  };
  for (const [id, label] of Object.entries(labels)) $(id).textContent = label;
  $("theme").setAttribute("aria-label", text.theme);
  const accent = document.createElement("span");
  accent.textContent = text.titleAccent;
  $("hero-title").replaceChildren(document.createTextNode(text.title), document.createElement("br"), accent);
  for (const [index, name] of ["build", "test", "learn"].entries()) {
    $(`outcome-${name}`).textContent = text.outcomes[index][0];
    $(`outcome-${name}-description`).textContent = text.outcomes[index][1];
  }
  document.querySelector(".skip-link").textContent = text.skip;
  document.querySelector(".brand").href = homeRoute();
  $("lab-cards").setAttribute("aria-label", text.route);
  $("sections").setAttribute("aria-label", text.guide);
  $("progress").setAttribute("aria-label", text.progress(completed.size));
  $("source").href = `https://github.com/cyz/copilot-lab/blob/HEAD/${lab.path}`;
  $("lab-cards").replaceChildren(...labs.map((item, index) => {
    const link = document.createElement("a");
    link.className = "lab-card";
    link.dataset.lab = item.id;
    link.href = route(language, item.id);
    if (isDetail && item.id === labId) link.setAttribute("aria-current", "page");
    const meta = document.createElement("span");
    meta.className = "card-meta";
    const icon = document.createElement("span");
    icon.className = "route-icon";
    const symbols = [
      '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M7 6h10M7 10h2m4 0h4M7 14h2m4 0h4M7 18h2m4 0h4"/>',
      '<rect x="4" y="10" width="16" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3M12 14v4"/>',
      '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 8h20M6 5.5h1m3 0h1M7 12h10M7 16h6"/>'
    ];
    icon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${symbols[index]}</svg>`;
    const duration = document.createElement("span");
    duration.textContent = `${item.minutes} min`;
    meta.append(icon, duration);
    const title = document.createElement("strong");
    title.textContent = text.cards[index][0];
    const indicator = document.createElement("span");
    indicator.className = "completion-indicator";
    title.append(indicator);
    const description = document.createElement("small");
    description.textContent = text.cards[index][1];
    link.append(meta, title, description);
    return link;
  }));
  const result = renderMarkdown(lab.markdown, text.copy);
  $("article").innerHTML = result.html;
  if (isDetail) {
    const title = $("article").querySelector("h2");
    const heading = document.createElement("h1");
    heading.id = title.id;
    heading.className = "lab-title";
    heading.innerHTML = title.innerHTML;
    title.replaceWith(heading);
  }
  let stepContent = null;
  let stepCount = 0;
  for (const node of [...$("article").children]) {
    const isHeading = /^H[23]$/.test(node.tagName);
    const isStep = isHeading && /^(?:Passo|Step|Paso)\s+\d/i.test(node.textContent);
    if (isStep) {
      stepCount++;
      const wrapper = document.createElement("section");
      wrapper.className = "tour-section";
      const marker = document.createElement("span");
      marker.className = "tour-marker";
      marker.textContent = String(stepCount).padStart(2, "0");
      marker.setAttribute("aria-hidden", "true");
      stepContent = document.createElement("div");
      stepContent.className = "tour-content";
      const label = document.createElement("div");
      label.className = "tour-label";
      label.textContent = text.stepLabel(stepCount);
      node.textContent = node.textContent.replace(/^(?:Passo|Step|Paso)\s+\d+\s*:\s*/i, "");
      wrapper.append(marker, stepContent);
      node.before(wrapper);
      stepContent.append(label, node);
    } else if (isHeading && /checklist|conclu|completion|conclus|problemas|troubleshooting|encerramento|wrap.up|cierre|finaliz|lista de/i.test(node.textContent)) {
      stepContent = null;
    } else if (stepContent) {
      stepContent.append(node);
    }
  }
  $("sections").replaceChildren(...result.headings.filter((heading) => heading.level <= 3).map((heading) => {
    const link = document.createElement("a");
    link.href = route(language, labId, heading.id);
    link.textContent = heading.text.replace(/\*\*/g, "").replace(/`/g, "");
    const number = document.createElement("span");
    number.textContent = String(result.headings.filter((item) => item.level <= 3).indexOf(heading) + 1).padStart(2, "0");
    link.prepend(number);
    return link;
  }));
  $("previous").disabled = current === 0;
  $("next").disabled = current === labs.length - 1;
  updateProgress();
  if (storageIssue) announce(text.storageError);
}

function syncRoute() {
  if (location.hash === "#exercise" && rendered) {
    $("exercise").scrollIntoView();
    $("exercise").focus({ preventScroll: true });
    return;
  }
  const params = new URLSearchParams(location.search);
  const fragment = new URLSearchParams(location.hash.slice(1));
  const requestedLanguage = fragment.get("lang") || params.get("lang");
  language = Object.hasOwn(translations, requestedLanguage) ? requestedLanguage : "pt-BR";
  const requestedLab = fragment.get("lab") || params.get("lab");
  labId = content[language].some((lab) => lab.id === requestedLab) ? requestedLab : "calculator";
  const section = fragment.get("section");
  if (!isDetail && requestedLab) {
    location.replace(route(language, labId, section || ""));
    return;
  }
  const key = `${language}/${labId}`;
  const changed = rendered !== key;
  const hadRender = Boolean(rendered);
  if (changed) {
    render();
    rendered = key;
  }
  const validSection = section && /^section-\d+$/.test(section) ? section : "";
  history.replaceState(null, "", isDetail ? route(language, labId, validSection) : homeRoute());
  if (section && /^section-\d+$/.test(section)) {
    document.getElementById(section)?.scrollIntoView();
  } else if (changed && hadRender) {
    $("exercise").scrollIntoView();
    $("exercise").focus({ preventScroll: true });
  }
}

$("language").addEventListener("change", (event) => {
  const params = new URLSearchParams(location.hash.slice(1));
  location.href = isDetail ? route(event.target.value, labId, params.get("section") || "") : homeRoute(event.target.value);
});
$("theme").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  const url = new URL(location.href);
  url.searchParams.set("scoutTheme", next);
  history.replaceState(null, "", url);
  render();
});
$("complete").addEventListener("change", (event) => {
  if (event.target.checked) completed.add(labId);
  else completed.delete(labId);
  persist();
  updateProgress();
});
$("reset").addEventListener("click", () => {
  completed.clear();
  persist();
  updateProgress();
  if (!storageIssue) announce(translations[language].resetDone);
});
for (const [button, direction] of [["previous", -1], ["next", 1]]) {
  $(button).addEventListener("click", () => {
    const labs = content[language];
    const index = labs.findIndex((lab) => lab.id === labId);
    const next = labs[index + direction];
    if (next) location.href = route(language, next.id);
  });
}
$("article").addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-button");
  if (!button) return;
  const text = translations[language];
  const code = button.parentElement.querySelector("code");
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(code.textContent);
    button.textContent = text.copied;
    announce(text.copied);
    setTimeout(() => { button.textContent = text.copy; }, 2000);
  } catch (error) {
    console.warn("Unable to copy prompt:", error);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(code);
    selection.removeAllRanges();
    selection.addRange(range);
    announce(text.copyError);
  }
});
window.addEventListener("hashchange", syncRoute);
syncRoute();
