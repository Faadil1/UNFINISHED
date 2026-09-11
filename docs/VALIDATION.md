# Validation Summary

UNFINISHED separates the public demo from its source-neutral evaluation mode so the product can be judged without confusing storytelling with evidence.

## What has been exercised

The browser prototype has been exercised for:

- deterministic successor-state creation;
- cross-browser successor handoff;
- preservation of human lineage across sessions;
- route traversal after completion;
- self-completion refusal;
- stale/local state refusal rather than silent overwrite;
- optional names and notes;
- mobile keyboard and reduced-motion behavior;
- human-readable creation receipts.

Selected evidence is available in [`../proof/`](../proof/).

## Matched-condition evaluation

Author / technical mode can generate paired HUMAN and WORLD conditions where the following are held constant:

```text
anchor
vector
reach
pressure
tension
engineBias
```

The source condition can then vary without changing the playable geometry or deterministic engine state.

The purpose is to test whether a previous human matters because they are causally upstream of the player’s problem, rather than because the interface merely displays human attribution.

## Evidence discipline

Cross-browser handoff QA is treated as **handoff proof**, not as independent cold-user evidence.

The prototype does not claim production proof for:

- shared durable backend persistence;
- atomic shared concurrency / CAS;
- authoritative Decentraland identity;
- final Decentraland Mobile avatar/camera/collision/performance behavior;
- reconnect/offline recovery;
- production moderation/griefing controls.

Those remain integration boundaries rather than hidden assumptions.
