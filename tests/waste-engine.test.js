import test from "node:test";
import assert from "node:assert/strict";
import { matchRule, buildContextNote } from "../waste-engine.js";

const rules = [
  { terms: ["oil"], title: "General oil" },
  { terms: ["cooking oil", "used cooking oil"], title: "Cooking oil" },
  { terms: ["battery", "old battery"], title: "Battery" },
  { terms: ["plastic bottle"], title: "Plastic bottle" }
];

test("matches case-insensitively and ignores surrounding whitespace", () => {
  assert.equal(matchRule("  PLASTIC BOTTLE ", rules).title, "Plastic bottle");
});

test("prefers a specific multi-word match over a broad term", () => {
  assert.equal(matchRule("used cooking oil", rules).title, "Cooking oil");
});

test("matches a known item embedded in a natural-language phrase", () => {
  assert.equal(matchRule("where should my old battery go?", rules).title, "Battery");
});

test("returns null for blank and unknown items", () => {
  assert.equal(matchRule("   ", rules), null);
  assert.equal(matchRule("mystery composite widget", rules), null);
  assert.equal(matchRule("plastic bottle", []), null);
});

test("context note adapts to shared bins, soiled condition, and recycling goal", () => {
  const note = buildContextNote({ setting: "shared", condition: "soiled", goal: "recycle" }).join(" ");
  assert.match(note, /Shared bins/);
  assert.match(note, /food-soiled/);
  assert.match(note, /exact material/);
});

test("context note provides safe defaults for missing context", () => {
  const note = buildContextNote().join(" ");
  assert.match(note, /home address/);
  assert.match(note, /clean\/empty/);
  assert.match(note, /safe disposal/);
});
