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

test("discord channel generator project uses local media after aralforex", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /assets\/dicord-generator\/config-dashboard\.png/);
  assert.match(app, /assets\/dicord-generator\/loading\.png/);
  assert.match(app, /assets\/dicord-generator\/sample-dc\.png/);
  assert.match(app, /Discord Channel Auto Generator/);
  assert.match(app, /automated messages, rules, and auth/);
  assert.match(app, /Python, FastAPI, Discord API/);
  assert.match(app, /discordGeneratorSlides\.map/);
  assert.match(app, /aria-label="Previous Discord generator media"/);
  assert.match(app, /aria-label="Next Discord generator media"/);
  assert.match(app, /discord-carousel-frame/);
  assert.ok(app.indexOf("Discord Channel Auto Generator") > app.indexOf("<h3>AralForex</h3>"));
});

test("portfolio positioning leads with ai automation", () => {
  const app = readFileSync("src/App.jsx", "utf8");

  assert.match(app, /AI automation portfolio/);
  assert.match(app, /AI-powered automation systems for content, marketing, and publishing/);
  assert.match(app, /<a href="#work">Projects<\/a>/);
  assert.match(app, /AI Automation Work/);
  assert.match(app, /owned brand and learning platform behind these automation experiments/);
});

test("projects nav includes dropdown links to project cards", () => {
  const app = readFileSync("src/App.jsx", "utf8");
  const css = readFileSync("src/styles.css", "utf8");

  assert.match(app, /className="nav-dropdown"/);
  assert.match(app, /className="nav-dropdown-menu"/);
  assert.match(app, /id="automated-facebook-reel-generator"/);
  assert.match(app, /id="facebook-page-marketing-automation"/);
  assert.match(app, /id="high-impact-news-automation"/);
  assert.match(app, /id="aralforex-project"/);
  assert.match(app, /id="discord-channel-auto-generator"/);
  assert.match(app, /href="#automated-facebook-reel-generator"/);
  assert.match(app, /href="#facebook-page-marketing-automation"/);
  assert.match(app, /href="#high-impact-news-automation"/);
  assert.match(app, /href="#aralforex-project"/);
  assert.match(app, /href="#discord-channel-auto-generator"/);
  assert.match(css, /\.nav-dropdown-menu/);
  assert.match(css, /\.nav-dropdown:hover \.nav-dropdown-menu/);
  assert.match(css, /\.nav-dropdown:focus-within \.nav-dropdown-menu/);
});

test("tech skills section groups portfolio capabilities", () => {
  const app = readFileSync("src/App.jsx", "utf8");
  const css = readFileSync("src/styles.css", "utf8");

  assert.match(app, /<a href="#tech-skills">Tech Skills<\/a>/);
  assert.match(app, /id="tech-skills"/);
  assert.match(app, /Tech Skills/);
  assert.match(app, /AI \/ Data/);
  assert.match(app, /Python/);
  assert.match(app, /scikit-learn/);
  assert.match(app, /Text Classification/);
  assert.match(app, /FastAPI/);
  assert.match(app, /AWS ECR/);
  assert.match(app, /AWS ECS/);
  assert.match(app, /GitHub Actions/);
  assert.match(app, /n8n/);
  assert.match(app, /Web APIs/);
  assert.match(app, /Discord API/);
  assert.match(app, /Appian Low-Code/);
  assert.match(app, /Appian Associate Certification/);
  assert.match(app, /PostgreSQL/);
  assert.match(css, /\.skills-grid/);
  assert.match(css, /\.skill-list/);
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
