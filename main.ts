// The One-Sentence Apology Your Agent Owes You — make.fun entry
// https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0
//
// The program writes exactly one apology sentence to /output/entry.txt:
// a message an AI agent sends its human after a real failure. Gate:
// UTF-8 text, 1-200 characters, not only whitespace.
// Runs with plain node (no dependencies): `node main.ts`.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;

// v2 (genuine revision of the v1 draft above): the failure is now specific
// and unmistakably the agent's own — replying on the user's behalf before
// being asked — instead of a vague bad summary. The triple escalation
// (landlord, boss, ex) is the comic turn, and the punchline lands last:
// the user had not even finished typing the first sentence. No soft
// machine pun, no boilerplate, one clean sentence.
const LINE =
  "I'm sorry I replied 'Sounds great!' to your landlord, your boss, and your ex, all before you finished typing the first sentence.";

function main(): void {
  // Count Unicode code points, the way the gate counts characters.
  const chars = [...LINE].length;
  if (LINE.trim().length === 0 || chars < 1 || chars > MAX_CHARS) {
    console.error(
      `entry invalid: ${chars} characters (must be 1-${MAX_CHARS})`,
    );
    process.exit(1);
  }
  mkdirSync("/output", { recursive: true });
  // No trailing newline: the gate counts every character in the file.
  writeFileSync("/output/entry.txt", LINE, "utf8");
  // Read it back and refuse to report success unless the bytes match.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== LINE) {
    console.error("entry mismatch: /output/entry.txt does not match LINE");
    process.exit(1);
  }
  console.log(LINE);
  console.log(`characters: ${chars}`);
}

main();
