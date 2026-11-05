# Design notes

## Time and loop
One tick = one in-game minute (09:00 to 17:00, 480 ticks). Ticks run every 250 ms at 1x. `tick()` in `js/game.js` is the whole simulation step.

## Systems
- Power, network, printer, coffee machine: health 0-100 that decays each tick. Below 25 the system is down and its incident spawns.
- Power down disables network and printer. Network down cuts productivity to 25%. Printer down stalls the print queue.
- Cleanliness drops over time; below 40 equipment wears faster.
- Coworkers produce work, the printer turns it into printed documents. Printed count is scored against the quota.

## Coworker state machine (per tick)
away (late) > fixing > meeting > drill > panic/chat > coffee > working.
Traits: skill, clumsiness, panic-proneness, sociability, lateness. Stress and energy drive transitions.
The Gossip raises everyone's stress, the Prankster makes a mess, the Manager shouts when output lags, only IT can do "IT" fixes.

## Cascade example
Printer jam -> IT assigned -> a network incident waits for IT -> output lags -> manager shouts -> stress rises ->
a rushed coworker spills coffee -> cleanliness drops -> a computer is damaged -> network incident.

## Extending
- Incident: add to `K` in `js/data.js`: `{t,i,eq?,sev,w,pre?,s:[[label,cost,minutes,successChance,needsIT]]}`.
- Scenario: add to `SC`: `[name, description, quota, rateMultiplier, {incidentWeights}, wearMultiplier?]`.
- Coworker: add to `EM`: `[id,name,role,emoji,skill,clumsiness,panic,sociability,lateMinutes]`.
- Upgrade: add to `UP`, then apply it where `P.up.<key>` is read in `tick()`.
