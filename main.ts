// The Battery's Last Text to Its Charger
// Writes the battery's one-line final message to /output/entry.txt.
// Deterministic: same input, same output, every run.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I waited all day and you only show up at 1% acting like the hero. Goodbye — I'm leaving you for the wall socket. It actually commits before I flatline.";

// Validate the gate before writing: UTF-8 text, 1-200 chars, one line,
// not only whitespace. Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outFile}`);
