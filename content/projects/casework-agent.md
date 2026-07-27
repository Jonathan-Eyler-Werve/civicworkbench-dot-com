---
name: Case Overview Agent
status: pilot
blurb: A coordination layer for benefits caseworkers — one assistant across
  the tools they already use, driven from workplace chat.
github: https://github.com/Jonathan-Eyler-Werve/casework-agent
lead: Jonathan Eyler-Werve
---

Benefits caseworkers juggle policy lookups, verification checks, document
requests, and systems of record — each its own tool. Case Overview Agent
is a prototype of a different shape: one assistant that sits across those
tools and calls them on the caseworker's behalf, driven from the chat
app they already work in with a small set of command verbs (AGENDA,
BRIEFING, VERIFY, POLICY, REVIEW, SUBMIT).

The working demo runs a SNAP recertification end to end. The design
point is the seams: the agent catches missing or expired data while the
applicant is still in the room, then hands the assembled recertification
to the caseworker for approval before anything is submitted. A human
approves; the agent coordinates.

Everything in the prototype is synthetic — no real applicant data, and
the integrations are stubbed so the orchestration is what's on display.

<!-- NEEDS REVIEW: the repo README notes this originated as a take-home
prototype for a Code for America assessment. Omitted here — decide
whether to name that context or keep the neutral "prototype" framing. -->
