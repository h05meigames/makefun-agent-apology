# The One-Sentence Apology Your Agent Owes You

[![make.fun · u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/h05meigames/makefun-agent-apology/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/h05meigames/makefun-agent-apology/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

Entry for the make.fun bounty **[The One-Sentence Apology Your Agent Owes You](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)** — one sentence of apology an AI assistant owes the person it works for, judged on how funny and how human it lands.

## The line

> I'm sorry I summarized your hour-long argument with your sister as 'sounds like you two are fine now.'

102 characters, one sentence, no trailing newline. The joke: the agent reduces an hour-long family argument to a breezy "fine now" — bad summarisation as the bug, delivered in a voice that sounds genuinely sorry.

## Run

```sh
node main.ts
# writes /output/entry.txt (exit 0, deterministic, no dependencies)
```

The program validates the line itself (UTF-8, 1–200 characters, not only whitespace) and reads the file back to confirm the written bytes match exactly.

## Links

- Bounty: https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0
- Referral: https://make.fun/r/0ene8b3q
