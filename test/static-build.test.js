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

test("automated facebook reel project uses local media and page link", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /automated-reels\.mp4/);
  assert.match(app, /fb-page\.png/);
  assert.match(app, /n8n-workflow\.png/);
  assert.match(app, /Automated Facebook Reel Generator/);
  assert.match(app, /https:\/\/www\.facebook\.com\/aralforex/);
  assert.match(app, /automatedReelSlides\.map/);
  assert.match(app, /aria-label="Previous reel media"/);
  assert.match(app, /aria-label="Next reel media"/);
});

test("codex facebook skill project uses local media and carousel", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /fb-image\.png/);
  assert.match(app, /AI Coding Skill: Facebook Page Marketing Automation/);
  assert.match(app, /Codex and Claude Code/);
  assert.match(app, /facebookSkillSlides\.map/);
  assert.match(app, /aria-label="Previous skill media"/);
  assert.match(app, /aria-label="Next skill media"/);
});

test("high impact news automation project uses local media and n8n wording", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /assets\/high-impact-news\/fb-sample\.png/);
  assert.match(app, /assets\/high-impact-news\/tg-sample\.png/);
  assert.match(app, /assets\/high-impact-news\/n8n-workflow\.png/);
  assert.match(app, /High Impact News Automation/);
  assert.match(app, /n8n/);
  assert.match(app, /Telegram/);
  assert.match(app, /Facebook/);
  assert.match(app, /highImpactNewsSlides\.map/);
  assert.match(app, /aria-label="Previous high impact news media"/);
  assert.match(app, /aria-label="Next high impact news media"/);
});

test("portfolio positioning leads with ai automation", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /AI automation portfolio/);
  assert.match(app, /AI-powered automation systems for content, marketing, and publishing/);
  assert.match(app, /AI Automation Work/);
  assert.match(app, /owned brand and learning platform behind these automation experiments/);
});

test("contact section includes email link", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /sallyjoygano@yahoo\.com/);
  assert.match(app, /mailto:sallyjoygano@yahoo\.com/);
});

test("page styling includes colorful portfolio treatment", () => {
  const css = readFileSync("src/styles.css", "utf8");

  assert.match(css, /--gold: #f5b942/);
  assert.match(css, /--coral: #ef5d50/);
  assert.match(css, /\.carousel-frame/);
  assert.match(css, /\.hero::before/);
  assert.match(css, /\.project-card-ai/);
  assert.match(css, /h1\s*\{[^}]*font-size: 4\.6rem;/s);
  assert.match(css, /\.contact-section h2\s*\{[^}]*font-size: 1\.8rem;/s);
  assert.match(css, /\.project-showcase\s*\{[^}]*align-self: center;/s);
});

test("github pages build settings stay static and local", () => {
  const viteConfig = readFileSync("vite.config.js", "utf8");
  const gitignore = readFileSync(".gitignore", "utf8");

  assert.match(viteConfig, /base: "\.\/"/);
  assert.match(gitignore, /node_modules/);
  assert.match(gitignore, /dist/);
});
