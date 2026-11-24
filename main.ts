// One Sentence for a Traveler from 1800.
//
// The program writes a single sentence (at most 200 characters) to
// /output/entry.txt. The sentence explains the modern internet to a
// person arriving from the year 1800, using only things such a person
// already knows: a road, a post office, a library, a market stall.
// It is one picture, not a list of features, and every word in it
// would have made sense in 1800.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Picture every library, post office, and market stall in the world joined by one road, so any letter, book, or song reaches any door in a blink.";

if (SENTENCE.length > 200 || SENTENCE.trim().length === 0) {
  throw new Error(
    `entry sentence must be 1-200 characters, got ${SENTENCE.length}`,
  );
}
if ((SENTENCE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");

console.log(`wrote ${SENTENCE.length} characters to ${outPath}`);
