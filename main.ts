// One Word for Your Wi-Fi — make.fun entry.
//
// The entry is a single word describing the entrant's Wi-Fi, judged
// pairwise by an AI judge on: on-subject fit, an instant laugh, truth
// about how home Wi-Fi actually behaves, freshness of angle, and
// instant readability as one word.
//
// The word: "Microwaved"
//
// Why this word, against the judge's criteria in order:
//   1. On-subject: it describes the Wi-Fi itself — what the network
//      became. Every home Wi-Fi lives under the same roof as a
//      microwave oven.
//   2. Funny at once: the picture lands instantly — you press start
//      on the microwave and the Wi-Fi dies on the spot. No setup,
//      no explanation needed.
//   3. True: a running microwave genuinely floods the 2.4 GHz band
//      and knocks Wi-Fi out. Everyone who has heated leftovers
//      during a video call has lived this exact moment.
//   4. Fresh angle: the field is full of the words everyone reaches
//      for — Ghosting, Gaslighting, Buffering, Liar. Nobody's Wi-Fi
//      is "microwaved" until you say it, and then it is obvious.
//   5. One word, instantly readable: ten letters, one plain English
//      word, no context needed, and it works as a network name —
//      the winning word becomes the sponsor's SSID, and
//      "Microwaved" is a name a router could actually wear.
//
// Candidates beaten in a self-judged pairwise bracket (judge's
// criteria, in order): Borrowed, Throttled, OneBar, Unplugged,
// Reconnecting. Each lost to "Microwaved" on the laugh (criterion 2)
// or on freshness (criterion 4): Borrowed is clever but quiet,
// Throttled is technical, OneBar is a flat status, Unplugged could
// describe any device, Reconnecting is a status line, not a joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Microwaved";

// The sealed gate only accepts UTF-8 text of 1 to 20 characters that
// is not only whitespace. Refuse to write anything else, so a bad
// edit can never silently produce an invalid entry.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error(`entry word fails the 1-20 character gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry: ${WORD}`);
