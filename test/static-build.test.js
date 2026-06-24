import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("vite react app files exist", () => {
  assert.equal(existsSync("package.json"), true);
  assert.equal(existsSync("src/main.jsx"), true);
  assert.equal(existsSync("src/App.jsx"), true);
  assert.equal(existsSync("src/styles.css"), true);
});

test("html uses the vite react entry", () => {
  const html = readFileSync("index.html", "utf8");

  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /src="\/src\/main\.jsx"/);
});

test("aralforex carousel imports every local screenshot", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /aralforex-home\.png/);
  assert.match(app, /aralforex-course\.png/);
  assert.match(app, /aralforex-dashboard\.png/);
  assert.match(app, /aria-label=\{`Show \$\{slide\.title\}`\}/);
  assert.match(app, /aria-label="Previous screenshot"/);
  assert.match(app, /aria-label="Next screenshot"/);
});

test("page styling includes colorful portfolio treatment", () => {
  const css = readFileSync("src/styles.css", "utf8");

  assert.match(css, /--gold: #f5b942/);
  assert.match(css, /--coral: #ef5d50/);
  assert.match(css, /\.carousel-frame/);
  assert.match(css, /\.hero::before/);
});

test("github pages build settings stay static and local", () => {
  const viteConfig = readFileSync("vite.config.js", "utf8");
  const gitignore = readFileSync(".gitignore", "utf8");

  assert.match(viteConfig, /base: "\.\/"/);
  assert.match(gitignore, /node_modules/);
  assert.match(gitignore, /dist/);
});
