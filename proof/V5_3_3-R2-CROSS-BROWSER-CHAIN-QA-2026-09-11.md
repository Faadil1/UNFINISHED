# V5.3.3 R2 — cross-browser human-chain QA

Date: 2026-09-11

A real mobile cross-browser QA run showed the chain advancing successfully across distinct browser contexts:

`Maya → Faadil → Dice`

Observed in the run:
- inherited provenance transferred;
- current contributor identity was captured;
- completion and route usage worked;
- successor condition was authored;
- next browser inherited the new state;
- final receipt reflected the updated human chain.

This is **QA evidence, not a scored cold test**.

Separately, the native-share copy path was corrected so the Web Share API now receives only the raw successor URL. This prevents Safari from treating a copied `comment + URL` payload as a search query when pasted into the address bar.

Gate remains OPEN: `USER_GATE_NOT_YET_VALIDATED`. PDPB stays blocked until PASS.
