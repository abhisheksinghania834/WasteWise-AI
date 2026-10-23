# WasteWise — Make waste less wasteful

WasteWise is a responsive, no-account-required waste-sorting and habit-building web app. It provides general disposal guidance for common household items, a material library, a personal in-browser action tracker, and a short knowledge quiz.

**Repository:** https://github.com/abhisheksinghania834/WasteWise-AI
**Expected live URL after Pages is enabled:** https://abhisheksinghania834.github.io/WasteWise-AI/

## Features
- Context-aware quick sorter for common household items, including food scraps, paper, plastic, glass, metal, batteries, electronics, textiles, medicines, flexible plastic and household chemicals.
- Personalised guidance uses disposal setting (home/shared bins/school or workplace/public place), item condition (clean/soiled/damaged), and the user's priority (safe disposal/recycling/reuse).
- Specific phrase matching prefers longer, more precise item terms and provides a safe fallback for unknown items.
- Searchable/filterable materials library.
- Personal action tracker stored in browser local storage, with a rolling seven-day count.
- Three-question interactive quiz with answer feedback.
- Responsive design, keyboard focus states, semantic landmarks, skip link, live status announcements, and reduced-motion support.
- No account, application server, API key, or external AI inference API required.
- Automated unit tests for decision matching, unknown inputs, specificity, and contextual guidance run with `node --test` before deployment.

## Tech stack
HTML5, CSS3, vanilla JavaScript ES modules, browser local storage, GitHub Actions and GitHub Pages. No build step is required.

## AI transparency
The deployed item sorter is a deterministic keyword/rule-based assistant, not a generative AI model or computer-vision classifier. AI-assisted development helped draft the initial implementation, but the deployed product does not call a generative AI service. This avoids client-side secret keys and paid API dependencies while keeping sorting suggestions transparent. Any future model integration should use a secure server-side proxy and clearly label generated guidance.

## Run locally
Open `index.html` in a browser or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Enable and deploy GitHub Pages
GitHub Pages must be enabled once for this repository before Actions can publish. Open [WasteWise Pages settings](https://github.com/abhisheksinghania834/WasteWise-AI/settings/pages) and choose **GitHub Actions** as the build/deployment source. The repository's workflow checks JavaScript syntax, runs automated tests, and only then uploads and deploys the static site on pushes to `main`. Follow the result in the [Actions tab](https://github.com/abhisheksinghania834/WasteWise-AI/actions).

## Automated tests

Run `node --test` from the repository root. The tests cover case-insensitive matching, preference for specific phrases, natural-language item descriptions, blank/unknown inputs, and context-sensitive advice.

## Verify before submitting
1. Try “banana peel”, “plastic bottle”, “old battery”, “cardboard box”, and an unknown item in Quick Sort.
2. Search and filter the materials cards.
3. Log an action and reload in the same browser to confirm local persistence.
4. Complete the quiz; try resetting the action counter.
5. Check mobile layout and keyboard-only navigation.
6. Open the public deployed site in a private window without signing in.

## Safety, scope and limitations
Municipal rules vary by location and service. The guide is general education, not authoritative local disposal advice. Follow local guidance especially for batteries, chemicals, medicines, electronics, and damaged items. Unknown items intentionally prompt users to check local authority guidance. The tracker records self-reported actions only; it does not estimate kilograms diverted or emissions avoided. No measured environmental impact or user-test results are claimed.

## Responsible review
AI assistance was used to help draft the implementation and documentation. Review code, test on real devices, and validate local disposal guidance before claiming the app is fully field-tested. Do not claim municipal approval, user testing, or environmental outcomes unless those activities actually happened.
