# HANDOFF

## Goal

Maintain and continue the Portfolio Manager React/Vite portfolio at `/Users/macbook/Documents/Portfolio Manager`, with the current emphasis on AI automation, content publishing workflows, and practical API-driven systems.

## Current Progress

- Main app lives in `src/App.jsx`; styling lives in `src/styles.css`; static checks live in `test/static-build.test.js`.
- Portfolio currently includes these Projects:
  - `Automated Facebook Reel Generator`
  - `AI Coding Skill: Facebook Page Marketing Automation`
  - `High Impact News Automation`
  - `AralForex`
  - `Discord Channel Auto Generator`
- Header navigation now includes:
  - `Projects` dropdown with direct links to each project card.
  - `Focus`
  - `Tech Skills`
  - `Contact`
- Project cards have stable ids for dropdown navigation:
  - `automated-facebook-reel-generator`
  - `facebook-page-marketing-automation`
  - `high-impact-news-automation`
  - `aralforex-project`
  - `discord-channel-auto-generator`
- A `Tech Skills` section exists after `Focus` and before `Contact`, grouped into:
  - `AI / Data`
  - `Backend / Deployment`
  - `Automation / APIs`
  - `Platforms / Workflow`
- Hero/focus copy has been shifted away from generic web platforms and toward AI automation:
  - Hero eyebrow: `AI automation portfolio`
  - Hero title: `I build AI-powered automation systems for content, marketing, and publishing.`
  - Work title: `AI Automation Work`
- Contact email is present as a mailto link: `sallyjoygano@yahoo.com`.
- New local assets are wired from:
  - `assets/automated-fb-reels/`
  - `assets/codex-skill-fb-post-generator/`
  - `assets/high-impact-news/`
  - `assets/aralforex/`
  - `assets/dicord-generator/`
- A reusable personal Codex skill was created for future project additions:
  - `/Users/macbook/.codex/skills/add-portfolio-project/SKILL.md`
  - `/Users/macbook/.codex/skills/add-portfolio-project/agents/openai.yaml`

## What Worked

- Existing portfolio pattern is simple and repeatable:
  - Import assets explicitly at the top of `src/App.jsx`.
  - Define a slide array near the other slide arrays.
  - Add one `useState`, one current slide variable, and previous/next handlers.
  - Render an `<article className="project-card ...">` in the Projects section.
  - Give each project card a stable `id`.
  - Add a matching link in the `Projects` dropdown.
  - Use `.carousel-frame`, `.carousel-controls`, and `.carousel-dots`.
- Placement is now user-directed and project-fit dependent; the Discord project was intentionally placed after AralForex.
- For screenshot-heavy media where cropping looks bad, add a small project-specific carousel frame class and use `object-fit: contain`.
- User prefers carousel media for project screenshots/videos, especially on laptop layouts.
- Useful verification commands:
  - `npm test`
  - `npm run build`
- Last known verification after adding the Discord project, Tech Skills section, and Projects dropdown:
  - `npm test` passed 13/13 tests.
  - `npm run build` succeeded.
- The `add-portfolio-project` skill validated successfully with:
  - `python3 /Users/macbook/.codex/skills/.system/skill-creator/scripts/quick_validate.py /Users/macbook/.codex/skills/add-portfolio-project`

## What Didn't Work

- The first high-impact-news static test correctly failed before implementation because the project and assets were not yet wired into `src/App.jsx`.
- The first skill validation failed because the skill description contained angle brackets. Removing them fixed validation.
- The first `agents/openai.yaml` default prompt lost the `$` because it was passed through the shell; it was corrected to `Use $add-portfolio-project to add a new project to the portfolio.`

## Next Steps

- For future project additions, invoke or follow `/Users/macbook/.codex/skills/add-portfolio-project/SKILL.md`.
- Keep additions surgical:
  - Update `src/App.jsx`.
  - Add only minimal CSS in `src/styles.css` when visual distinction is needed.
  - Add or update one targeted static test in `test/static-build.test.js`.
  - Update the `Projects` dropdown link and project id together.
- Before claiming completion, run:
  - `npm test`
  - `npm run build`
- If the user asks for visual/layout polish, inspect the rendered page or run the dev server before making layout claims.
- If adding Facebook-related projects, default link is `https://www.facebook.com/aralforex` unless the user gives a different URL.
