import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { build, root } from "./build.mjs";

await build();
const files = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/lab.html": ["lab.html", "text/html; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/app.js": ["app.js", "text/javascript; charset=utf-8"],
  "/markdown.js": ["markdown.js", "text/javascript; charset=utf-8"],
  "/content.js": ["content.js", "text/javascript; charset=utf-8"]
};
const server = createServer(async (request, response) => {
  const file = files[new URL(request.url, "http://localhost").pathname];
  if (!file || !["GET", "HEAD"].includes(request.method)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const body = await readFile(resolve(root, "_site", file[0]));
    response.writeHead(200, { "Content-Type": file[1] });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch (error) {
    console.error(error);
    response.writeHead(500);
    response.end("Unable to read site asset");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(Number(process.env.PORT || 4173), "127.0.0.1", () => {
  console.log(`Labs: http://127.0.0.1:${server.address().port}`);
});
