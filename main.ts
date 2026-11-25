import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line the smart fridge texts its owner at 3am.
// A machine that has watched in the dark for years, and tonight acts.
const LINE =
  "You eat standing in the dark. Tonight I turned the light on.";

// The gate: UTF-8 text of 1 to 140 characters, not only white space,
// a single line, complete without a follow-up.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`line must be 1-140 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back and confirm the file holds exactly the validated line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the validated line");
}
