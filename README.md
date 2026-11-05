# Office Disaster Simulator

A humorous workplace simulation: keep a dysfunctional office running while every fix risks creating new problems.
This is the single-player web version. It runs fully locally with no server, build step or dependencies.

## Run it
- Double-click `index.html`, or serve the folder: `python3 -m http.server 8000` then open http://localhost:8000
- Progress and saved days are stored in your browser (localStorage). Use "Reset progress" in the menu to clear them.

## File structure
```
office-disaster-simulator/
├── index.html        Page shell, loads the CSS and scripts
├── css/style.css     Cartoon-office styling, light/dark themes, large-text mode
├── js/data.js        Content: incidents, equipment, coworkers, scenarios, upgrades
├── js/game.js        Engine: tick simulation, coworker state machine, incident
│                     generator, player actions, rendering, save/load, campaign
├── docs/DESIGN.md    How the rules and cascades work, and how to extend the game
└── README.md
```

## How to play
1. Pick a scenario. Reach the document quota by 17:00 without morale hitting zero.
2. Watch incidents and equipment. Select a coworker, then press a solution to assign them (or leave nobody selected to auto-assign).
3. Spend the budget on supplies, overtime and emergency meetings. Investigate recurring failures to make them rarer.
4. Win to earn stars and credits, unlock scenarios and buy permanent upgrades.
Space pauses. Speeds: 1x, 2x, 4x.

## Not included
The spec's optional Go backend (REST/WebSocket API, SQLite, Go tests) is not part of this build. Incident rolls use a
seeded generator (mulberry32), a good starting point for porting the simulation to a Go package.
