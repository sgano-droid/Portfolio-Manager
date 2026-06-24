# Automated FB Reel Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the Automated Facebook Reel Generator as the newest featured portfolio project.

**Architecture:** Keep the app as a static Vite React page. Add local media imports in `src/App.jsx`, render one new project card above AralForex, and add minimal CSS for the reel/video display.

**Tech Stack:** Vite, React, CSS, Node built-in test runner.

---

### Task 1: Static Coverage For The New Project

**Files:**
- Modify: `test/static-build.test.js`

- [ ] **Step 1: Add assertions for the reel project assets and copy**

Add checks that `src/App.jsx` imports `automated-reels.mp4`, `fb-page.png`, and `n8n-workflow.png`, includes the project name, and links to `https://www.facebook.com/aralforex`.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL because the new project is not rendered yet.

### Task 2: Project Card And Copy

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/styles.css`

- [ ] **Step 1: Add the new media imports and card**

Add the Automated Facebook Reel Generator card above AralForex with role, tech stack, Facebook page link, a playable muted video, and the two supporting screenshots.

- [ ] **Step 2: Update portfolio copy**

Update hero/current focus/focus text to include automation and content systems alongside web platforms and learning systems.

- [ ] **Step 3: Run verification**

Run: `npm test`
Expected: PASS.

Run: `npm run build`
Expected: PASS and Vite emits `dist/`.
