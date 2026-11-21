import { mkdirSync, writeFileSync } from "node:fs";

const text = `The tide comes in whether anyone is watching. It did this before there were harbours, before there were names for the moon that pulls it, and it will still be doing it long after the names are gone.`;

// The entry must be 1-280 Unicode code points, and not only whitespace.
const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}
if (text.trim().length === 0) {
  throw new Error("entry.txt must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
