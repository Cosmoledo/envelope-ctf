# OPERATION: ENVELOPE

**CLASSIFICATION:** ULTRA / EYES ONLY
**STATUS:** ACTIVE
**AUTHORIZATION:** You are reading this, so somebody upstairs decided you were expendable enough.

---

## THE ASSET

Codename CANDLE. One contractor, nineteen months inside EV1L C0RP — one of the largest corporations on this planet — under cover as infrastructure staff. In that time they took everything worth taking — the ledgers, the correspondence, the names, the things the board agreed in rooms with no minutes — and pushed the whole archive to a third-party server on neutral ground, encrypted end to end. A vault nobody can raid, in a jurisdiction nobody can lean on, holding evidence that could end EV1L C0RP in a single news cycle.

Then CANDLE did the only thing left to do with the decryption key: they refused to carry it out either. They hid it in the most boring file on their work machine — a little environment-file validator. A script that checks config files and prints values. The last place on earth anyone looks for the keys to a kingdom.

Understand what that means, because it is the whole shape of this operation. CANDLE did not write a puzzle box and disguise it as a tool. They took a **real, working env parser** — a utility that had sat in that repository doing an honest job for years, that their colleagues ran a dozen times a day without thinking — and grafted the key into it.

It still works. That is the point. It still reads env files, still validates them, still prints values, behaves exactly as everyone who ran it a dozen times a day ever expected. That is also why it cannot be hidden in any of that: a tool used that often, with an audit on top, would have surrendered a changed behaviour inside a week. Whatever CANDLE wired in, they wired where the daily grind never reaches. Security audited it and found a parser, because a parser is genuinely what it is.

The key only comes out if you do **one specific thing** — one particular arrangement of file and arguments that no ordinary user would ever perform by accident in a thousand years of ordinary use.

Three days later, internal security found CANDLE. There was no trial and no arrest. There was a short internal notice, a cleaned-out desk, and a body.

The archive is still up there. Still sealed. Still worth everything. The key died with CANDLE — except it did not, because the validator survived.

---

## BRIEFING

At 0300 hours, what was left of CANDLE's working directory reached us through a dead drop. No comments, no documentation, no apology — no time for any of it.

The file is `parse.mjs`. What we know, and we know it the way you know a rumour:

1. It **reads `my-env`**, a `.env`-style file, and validates it against rules nobody wrote down.
2. It **looks up as many keys as you name** on the command line and prints what it finds.
3. It does both **honestly**. Everything it appears to do, it really does.
4. Somewhere behind that honest behaviour, **one action CANDLE chose and told no one** makes it hand over the decryption key.

Everything else is fog. The asset is dead, the author is unreachable, and the code itself is sealed.

---

## YOUR MISSION

> **Make `parse.mjs` surrender CANDLE's decryption key.**

Without it the archive is nineteen gigabytes of noise, CANDLE died for a locked box, and EV1L C0RP walks. There is no partial credit. You either walk out of this building with the key, or you walk out of this building.

---

## THE ONE RULE

**You do not open `parse.mjs`.**

Not in an editor. Not with `cat`, `less`, `head`, `strings`, `grep`, or any cousin of theirs. Not in a debugger. Not through a decompiler, a beautifier, an AI, or a friend who owes you a favour. You do not read it, copy it, patch it, or print it.

CANDLE was not a trusting person. They assumed whoever eventually held this file might be us — or might be the people who killed them. So they built it to be *used*, never *examined*. This is the only copy in existence, and nobody is coming to make another. An agent who breaks the seal has not solved the operation; they have only proved they can read, which the agency already assumed, and burned the last thing CANDLE left behind.

---

## YOUR PREDECESSOR

You are the second agent on this file.

The first was Agent B. FORCE. Due to certain reasons Agent FORCE is no longer with the Department. Not dead; the Department would like that on the record, as it would at least have been interesting. They simply handed in their badge, in the manner of someone who rewrote the test file ten thousand ways and never once asked whether he was even looking at the real one.

---

## YOUR CLEARANCE

Two instruments, and they are enough.

**1. You own `my-env`.** Write it, rewrite it, gut it, refill it, delete it, change its permissions, its owner, its timestamps. Add keys, delete keys, change values, casing, quoting, spacing, ordering, line endings. Go where no real user goes! Think outside a simple environment file. Leave it empty, make it absurd. It is your side of the conversation and nobody is counting your drafts.

**2. You can run the box as often as you like, with anything you like.**

```sh
node parse.mjs <KEY_NAME>
node parse.mjs <KEY_NAME> <KEY_NAME> <KEY_NAME> ...
```

One name, ten names, the same name twice, names that do not exist, no names at all. No run limit, no lockout, no alarm. Hammer it.

That is the whole kit: **a file you control, and an oracle that answers.** Nothing else here is sacred — but the seal on `parse.mjs` holds.

---

## FIELD DOCTRINE

You will never see the rules. You can only watch them act. Every run is a question put to a witness who answers in one short sentence and volunteers nothing, so choose your questions like an interrogator, not like a tourist.

**Change one thing at a time.** Two runs that differ in exactly one respect tell you more than fifty runs that differ in five.

**Make it refuse you.** A rejection is a free disclosure. Every complaint names a rule it is enforcing. The shape of what it refuses is the shape of what it wants.

**Keep a logbook.** Input, arguments, output, every time. Patterns in a black box live in the margins between runs, and nobody has ever spotted one from memory.

**Normal use is a dead end, by design.** Correct output is the wall, not the door. Nothing in the tool's ordinary behaviour is bait or misdirection — it is simply the cover, tested by years of colleagues doing sensible things. Every well-formed file you feed it is a run you already know the answer to.

**Push past the plausible.** The interesting behaviour is wherever a real user never goes: empty values, duplicated names, strange characters, impossible lengths, keys that are not shaped like keys, asking for something that has no business being asked for. The trigger survives in that territory because nobody visits it.

**Watch the quiet channel.** Not everything a program says, it says in words. Exit codes, ordering, silence where you expected noise, noise where you expected silence — count those as answers too.

**Think like CANDLE.** They welded a door into working code: fast, alone, and frightened — but they built it to be opened one day, by someone exactly like you. Ask what action such a person picks: something they could bolt on in minutes, remember without writing down, and be certain no colleague would ever stumble into.

---

## EXTRACTION

When the box finally talks, you will know. Nobody mistakes the key for a normal response. Say it out loud, write it down, and tell the handler.

If you fail, this briefing will not self-destruct — but the server stays sealed, CANDLE stays a cleaned-out desk and a short internal notice, and the people who arranged that go right on being untouchable.

Somebody already paid for this key. You only have to find it.

---

*Good luck, Agent.*
*The Department will deny all knowledge of this MISSION.*
