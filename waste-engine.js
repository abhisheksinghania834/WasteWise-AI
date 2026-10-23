/**
 * WasteWise decision engine.
 * Pure functions are kept separate from the DOM so they can be tested with Node.
 * This is transparent rule-based guidance, not a generative AI model.
 */
export function matchRule(query, rules) {
  const normalized = String(query ?? "").toLowerCase().trim().replace(/\\s+/g, " ");
  if (!normalized || !Array.isArray(rules)) return null;

  let best = null;
  let bestScore = -1;
  for (const rule of rules) {
    for (const rawTerm of rule.terms ?? []) {
      const term = String(rawTerm).toLowerCase().trim();
      if (!term) continue;
      const matches = normalized === term || normalized.includes(term);
      if (!matches) continue;
      // Prefer exact phrases and longer, more specific terms over broad matches.
      const score = (normalized === term ? 1000 : 0) + term.length;
      if (score > bestScore) {
        best = rule;
        bestScore = score;
      }
    }
  }
  return best;
}

export function buildContextNote({ setting = "home", condition = "clean", goal = "dispose" } = {}) {
  const notes = [];
  if (setting === "shared") {
    notes.push("Shared bins may have stricter signage or collection rules; check the building instructions before placing this item.");
  } else if (setting === "school") {
    notes.push("Use the school's labelled collection points or ask the facilities team if the correct stream is unclear.");
  } else if (setting === "public") {
    notes.push("Use a clearly labelled public bin or take the item with you if no suitable option is available.");
  } else {
    notes.push("Check the collection rules for your home address; accepted materials can vary by service.");
  }

  if (condition === "soiled") {
    notes.push("Because the item is food-soiled, keep it out of clean recycling unless your local program explicitly accepts it.");
  } else if (condition === "damaged") {
    notes.push("Because the item is damaged, avoid handling sharp edges or leaking contents and check for a safer specialist drop-off.");
  } else {
    notes.push("The item is marked clean/empty; follow the local service's preparation instructions.");
  }

  if (goal === "reuse") {
    notes.push("Your priority is reuse: consider repair, refill, donation, or a take-back program before disposal when safe.");
  } else if (goal === "recycle") {
    notes.push("Your priority is recycling: verify that the exact material and item format are accepted locally before using that bin.");
  } else {
    notes.push("Your priority is safe disposal: for batteries, electronics, medicines, chemicals, or unknown items, prefer an authorised collection service.");
  }
  return notes;
}
