# WasteWise — Make waste less wasteful

WasteWise is a responsive, no-account-required waste-sorting and habit-building web app. It provides general disposal guidance for common household items, a material library, a personal in-browser action tracker, and a short knowledge quiz.

**Live app:** https://abhisheksinghania834.github.io/WasteWise-AI/ (available after Pages deployment succeeds).

## Features
- Quick sorter with general rules for food scraps, paper, plastic, glass, metal, batteries, electronics, textiles, medicines, flexible plastic and household chemicals.
- Searchable and filterable materials guide.
- Personal waste-wise action tracker stored in browser local storage, with a rolling seven-day count.
- Three-question interactive quiz with answer feedback.
- Responsive visual design, keyboard focus states, semantic landmarks, skip link, live status announcements, and reduced-motion support.
- No account, server, tracking pixel, API key or external AI inference API is required.

## Tech stack
HTML5, CSS3, vanilla JavaScript ES modules, browser local storage, GitHub Actions and GitHub Pages. This app intentionally has no build step.

## AI transparency
The deployed item sorter is a deterministic keyword/rule-based assistant, not a generative AI model or computer-vision classifier. AI-assisted development helped draft the initial implementation, but no generative AI service is called at runtime. This avoids client-side secret keys and paid API dependencies while keeping the sorting suggestions transparent. A future model integration should use a secure server-side proxy and clearly label generated guidance.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## GitHub Pages deployment
1. Open repository **Settings → Pages** and select **GitHub Actions** as the deployment source if prompted.
2. The workflow validates the app on pushes to `main`, then deploys the repository root.
3. Check **Actions** for a successful `Validate and deploy WasteWise` run.

## Verify before submitting
1. Try “banana peel”, “plastic bottle”, “old battery”, “cardboard box”, and an unknown item in Quick Sort.
2. Search and filter the materials cards.
3. Log an action and reload the page in the same browser to confirm local persistence.
4. Complete all quiz questions; try resetting the action counter.
5. Check mobile layout and keyboard-only navigation.
6. Test the public deployed site in a private window without signing in.

## Safety, scope and limitations
Municipal rules vary by location and service. The guide is general education, not authoritative local disposal advice. Follow local guidance especially for batteries, chemicals, medicines, electronics and damaged items. Unknown items intentionally prompt users to check a local authority. The tracker records self-reported actions only; it does not estimate kilograms diverted or emissions avoided. No environmental impact numbers or user-test results are claimed.

## Responsible review
AI assistance was used to help draft the implementation and docs. Review the code, test on real devices, and validate local guidance before claiming the app is fully field-tested. Do not claim municipal approval, user testing or measured environmental outcomes unless those activities actually happened.
