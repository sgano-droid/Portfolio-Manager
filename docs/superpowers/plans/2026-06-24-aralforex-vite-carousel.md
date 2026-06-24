# AralForex Vite Carousel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the static portfolio to a GitHub Pages-compatible Vite React app with an AralForex image carousel and a richer color treatment.

**Architecture:** Keep the app as a static frontend with `index.html` as the Vite entry, `src/App.jsx` for the page, and `src/styles.css` for styling. Use local image imports so Vite fingerprints and deploys screenshots correctly.

**Tech Stack:** Vite, React, CSS, Node built-in test runner for static file checks.

---

### Task 1: Static React App Shell

**Files:**
- Create: `package.json`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Modify: `index.html`

- [ ] **Step 1: Add a file-structure test**

Create `test/static-build.test.js` that asserts the Vite entry and React files exist.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test`
Expected: FAIL because the app files do not exist yet.

- [ ] **Step 3: Add the minimal Vite React shell**

Add `package.json`, replace `index.html` with a Vite root, create `src/main.jsx`, and move the current page content into `src/App.jsx`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test`
Expected: PASS.

### Task 2: AralForex Carousel And Color

**Files:**
- Modify: `src/App.jsx`
- Create: `src/styles.css`
- Modify: `src/main.jsx`
- Test: `test/static-build.test.js`

- [ ] **Step 1: Add tests for image references and carousel markup**

Update `test/static-build.test.js` to assert that `src/App.jsx` imports all three `assets/aralforex` screenshots and includes carousel controls.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test`
Expected: FAIL because the carousel has not been added yet.

- [ ] **Step 3: Implement carousel and visual styling**

Add a small React carousel with previous/next buttons, dot controls, and screenshot images. Move styling into `src/styles.css` with a warmer, more colorful palette.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test`
Expected: PASS.

### Task 3: GitHub Pages Build Verification

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add static build scripts**

Add `dev`, `build`, `preview`, and `test` scripts.

- [ ] **Step 2: Verify syntax and build**

Run: `npm test`
Expected: PASS.

Run: `npm run build`
Expected: Vite emits `dist/` with no errors.
