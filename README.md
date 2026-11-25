# Tonight I Turned the Light On

[![make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/ChristaNavisa/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/ChristaNavisa/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d)

Entry for the make.fun bounty [The 3AM Fridge Text](https://make.fun/c/u-deysumbrella-the-3am-fridge-text-4c3e721d): one line, at most 140 characters — the text message a smart fridge sends its owner at 3am.

## The line

> You eat standing in the dark. Tonight I turned the light on.

The joke rides on the fridge as a witness: a machine that has spent years watching its owner eat standing up in the dark, saying nothing — until tonight, when it decides to act and switches the light on. No milk, no ice, no door left open; the punchline is the fridge finally doing something about it. Sixty characters, twelve words, one joke, no explanation.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline. It validates the line first — 1–140 characters, a single line, not only whitespace — then reads the file back to confirm it holds exactly the validated line.

## Run

```sh
node main.ts
```
