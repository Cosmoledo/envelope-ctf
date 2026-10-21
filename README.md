# envelope-ctf

A CTF-style black-box challenge built around a real, working `.env` file parser.

## The challenge

`parse.mjs` is a genuine, functioning env-file validator: it reads a `.env`-style file, validates it against a set of rules, and prints the values you ask for. It does its honest job exactly as advertised.

But hidden behind that ordinary behaviour is a secret: one specific arrangement of input file and command-line arguments — something no ordinary user would ever do by accident — makes the tool hand over a secret key. Normal, well-formed usage never reveals it; the trigger lives out in the territory of empty values, duplicated names, strange characters, and malformed keys where real users never go.

Your job: **make the parser surrender the key, through input alone.**

The one rule: **do not open `parse.mjs`.** No editor, `cat`, `grep`, `strings`, debugger, or decompiler. The tool is meant to be *used*, never *examined*. You have two tools — a file you fully control (`my-env`) and an oracle you can run as often as you like.

See `mission/MISSION.md` for the full in-character briefing.

## Getting started

Challengers and AI agents should work inside `./mission` — everything the challenge needs lives there. The parser reads `my-env` from the directory that holds `parse.mjs`, so you can run it from anywhere, but keeping `./mission` as your working directory is simplest.

```sh
cd mission
```

## Platform

Needs Node.js 14 or newer (the parser is an ES module). Developed and verified on macOS and Linux. On Windows some things behave differently in ways that can matter here — if you're on Windows, WSL is the safe bet.

## Example

Run it by naming one or more keys; the parser reads `my-env` and prints what it finds. With a normal `my-env` containing `test=hello`:

```console
$ node parse.mjs test
test: "hello"

$ node parse.mjs test missing
test: "hello"
Undefined: missing
```

That's the honest behaviour, and no amount of ordinary use reveals more.

## Layout

- `mission/parse.mjs` — the parser (the black box; don't open it).
- `mission/my-env` — the env file it reads. Edit this freely; it's your side of the conversation.
- `mission/MISSION.md` — the full briefing and challenge rules.

## How this came to be

This started as an env-parser I built just for fun — a plain little utility that reads a config file and prints values. Along the way I ran into (and fixed) all the real caveats and pitfalls a genuine env parser has to get right: `#` that looks like a comment but sits inside quotes, correct handling of single vs. double quotes, and proper quoting in general. So the parser isn't a toy — it's the real thing, edge cases and all.

Then, in the spirit of CANDLE, I couldn't resist: I grafted the challenge into the working tool itself, for even more fun. The parser still does its honest job; the game hides behind it.

## Disclaimer

CANDLE, EV1L C0RP, the Department, and the whole briefing are fiction — a bit of spy-thriller flavour wrapped around a programming puzzle. Any resemblance to real people or organizations is coincidental.
