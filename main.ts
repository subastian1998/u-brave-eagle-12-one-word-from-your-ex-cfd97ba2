import { mkdirSync, writeFileSync } from "node:fs";

// The one word my ex would use to describe me.
const ENTRY = "Clingy";

// Gate self-check: exactly one word, 1-24 characters, not only whitespace.
if (!/^\S{1,24}$/.test(ENTRY)) {
  throw new Error(
    "entry fails the gate: must be exactly one word of 1-24 non-whitespace characters",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
