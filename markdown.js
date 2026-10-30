// This renderer supports the Markdown constructs used by the workshop.
export function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function safeURL(value) {
  return /^(https?:\/\/|\.\/|#)/i.test(value) ? escapeHTML(value) : "#";
}

export function inline(value) {
  const tokens = [];
  const token = (html) => {
    tokens.push(html);
    return `\u0000${tokens.length - 1}\u0000`;
  };
  let text = value.replace(/`([^`]+)`/g, (_, code) => token(`<code>${escapeHTML(code)}</code>`));
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, label, url) =>
    token(`<img src="${safeURL(url)}" alt="${escapeHTML(label)}" loading="lazy">`));
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) =>
    token(`<a href="${safeURL(url)}">${escapeHTML(label)}</a>`));
  text = escapeHTML(text).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // Resolve inner code tokens in link labels as well.
  for (let pass = 0; pass < 2; pass++) {
    text = text.replace(/\u0000(\d+)\u0000/g, (_, index) => tokens[Number(index)]);
  }
  return text;
}

export function renderMarkdown(markdown, copyLabel = "Copy") {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const output = [];
  const headings = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) { index++; continue; }
    if (/^```/.test(line)) {
      const code = [];
      index++;
      while (index < lines.length && !/^```/.test(lines[index])) code.push(lines[index++]);
      index++;
      output.push(`<div class="code-block"><span class="prompt-label">Copilot</span><button type="button" class="copy-button">${escapeHTML(copyLabel)}</button><pre><code>${escapeHTML(code.join("\n"))}</code></pre></div>`);
      continue;
    }
    const heading = /^(#{1,6}) (.+)$/.exec(line);
    if (heading) {
      const level = Math.min(6, Number(heading[1].length) + 1);
      const id = `section-${headings.length}`;
      headings.push({ id, text: heading[2], level });
      output.push(`<h${level} id="${id}">${inline(heading[2])}</h${level}>`);
      index++;
      continue;
    }
    if (/^\|/.test(line) && /^\|[\s:|-]+\|$/.test(lines[index + 1] || "")) {
      const cells = (row) => row.trim().replace(/^\||\|$/g, "").split("|").map((cell) => inline(cell.trim()));
      const header = cells(line);
      index += 2;
      const rows = [];
      while (index < lines.length && /^\|/.test(lines[index])) {
        rows.push(`<tr>${cells(lines[index++]).map((cell) => `<td>${cell}</td>`).join("")}</tr>`);
      }
      output.push(`<div class="table-wrap"><table><thead><tr>${header.map((cell) => `<th scope="col">${cell}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>`);
      continue;
    }
    if (/^[-*] |^\d+\. /.test(line)) {
      const ordered = /^\d+\./.test(line);
      const pattern = ordered ? /^\d+\. / : /^[-*] /;
      const items = [];
      while (index < lines.length && pattern.test(lines[index])) {
        let item = lines[index++].replace(pattern, "");
        while (index < lines.length && /^ {2,}\S/.test(lines[index])) item += ` ${lines[index++].trim()}`;
        items.push(`<li>${inline(item)}</li>`);
      }
      const tag = ordered ? "ol" : "ul";
      output.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }
    if (/^>/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>/.test(lines[index])) quote.push(lines[index++].replace(/^> ?/, ""));
      output.push(`<blockquote>${inline(quote.join(" "))}</blockquote>`);
      continue;
    }
    if (/^---+$/.test(line)) { output.push("<hr>"); index++; continue; }
    const video = /^<video src="(https:\/\/[^"]+)" title="([^"]*)"[^>]*><\/video>$/.exec(line);
    if (video) {
      output.push(`<video src="${safeURL(video[1])}" aria-label="${escapeHTML(video[2])}" controls preload="none"></video>`);
      index++;
      continue;
    }
    const paragraph = [line];
    index++;
    while (index < lines.length && lines[index].trim() && !/^(#{1,6} |```|>|\||[-*] |\d+\. |---|<video)/.test(lines[index])) {
      paragraph.push(lines[index++]);
    }
    output.push(`<p>${inline(paragraph.join(" "))}</p>`);
  }
  return { html: output.join("\n"), headings };
}
