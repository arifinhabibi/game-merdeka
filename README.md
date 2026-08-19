# PROJECT: TARIK MERDEKA 🇮🇩

Build a polished interactive web game for celebrating Indonesian Independence Day.

The game combines:

* Tug of War animation
* Indonesia general-knowledge quiz
* Two competing teams
* Real-time visual tug movement based on correct answers
* Configurable number of questions
* Multiple-choice questions A/B/C/D
* Independence Day visual identity

This is NOT a dashboard, SaaS application, admin panel, or generic quiz UI.

The entire experience should feel like an interactive game shown on a large screen during a 17 August event.

---

# 1. CORE GAME CONCEPT

There are two opposing teams:

LEFT TEAM vs RIGHT TEAM.

The screen layout consists of three main areas:

```text
LEFT TEAM
    |
    |
TUG OF WAR ARENA
    |
    |
RIGHT TEAM
```

Desktop landscape should use approximately:

```text
30% Left Quiz Panel
40% Tug of War Arena
30% Right Quiz Panel
```

Each team receives its own random Indonesia general-knowledge question.

Both questions should have approximately the same difficulty.

Each question contains:

* Question
* Answer A
* Answer B
* Answer C
* Answer D
* Countdown timer

Correct answers create "pull power".

Pull power moves the rope toward that team's side.

Example:

```text
Left correct
→ rope moves left

Right correct
→ rope moves right
```

The game ends when:

1. One team reaches the winning tug boundary

OR

2. All configured questions have been completed.

If all questions are completed, the team controlling the rope position wins.

---

# 2. GAME STATES

Create a clear finite game state architecture.

```ts
type GameStatus =
  | "setup"
  | "countdown"
  | "playing"
  | "round-transition"
  | "finished";
```

Game lifecycle:

```text
SETUP
↓
COUNTDOWN
↓
ROUND
↓
ANSWER
↓
CALCULATE PULL
↓
ANIMATE ROPE
↓
NEXT ROUND
↓
FINISH
```

Do not mix UI components directly with business logic.

---

# 3. GAME SETUP MODAL

Before starting the game show a premium popup/modal.

Fields:

## Team configuration

Left Team Name

Default:

```text
Garuda Merah
```

Right Team Name

Default:

```text
Garuda Putih
```

## Number of Questions

Options:

```text
5
10
15
20
Custom
```

Custom must accept a valid integer.

## Time Per Question

Options:

```text
10 seconds
15 seconds
20 seconds
30 seconds
```

## Difficulty

```text
Easy
Medium
Hard
Mixed
```

## Question Categories

Allow multiple selection:

```text
Sejarah Indonesia
Geografi Indonesia
Budaya Nusantara
Tokoh Nasional
Pancasila & Kenegaraan
Alam Indonesia
Bahasa Indonesia
Kuliner Nusantara
Seni
Olahraga
```

Main CTA:

```text
MULAI LOMBA
```

---

# 4. COUNTDOWN

After setup:

Show fullscreen countdown:

```text
3
2
1
MERDEKA!
```

Animate each number with scale + opacity.

When "MERDEKA!" appears:

* add energetic visual feedback
* subtle screen burst
* optional sound trigger architecture
* transition smoothly into gameplay

---

# 5. MAIN GAME SCREEN

Build the game as a single fullscreen experience.

Header:

```text
🇮🇩 TARIK MERDEKA

RONDE 4 / 15

⚙
```

Center the current round indicator.

Do not create normal website navigation.

No sidebar.

No navbar links.

No footer during gameplay.

---

# 6. LEFT AND RIGHT QUIZ PANELS

Both panels contain:

```text
TEAM NAME

Score

Combo Indicator

Question

A.
B.
C.
D.

Timer
```

Example:

```text
GARUDA MERAH

SKOR
320

🔥 COMBO x3

Siapakah proklamator Indonesia?

A. Soekarno & Mohammad Hatta
B. Soekarno & Sutan Sjahrir
C. Mohammad Hatta & Soepomo
D. Soedirman & Mohammad Hatta

00:12
```

Answer buttons must be very large and readable from several meters away.

Interaction states:

```text
default
hover
selected
correct
incorrect
disabled
```

Correct answer:

```text
green feedback
✓ BENAR
```

Incorrect:

```text
red feedback
✕ SALAH
```

After answering, disable additional answers until the next round.

---

# 7. QUESTION BALANCING

Each team receives different questions.

However, both questions must use the same difficulty level for each round.

Example:

```ts
Round 1:
Left difficulty = Easy
Right difficulty = Easy

Round 2:
Left difficulty = Medium
Right difficulty = Medium
```

Questions must not repeat during one match.

Create:

```ts
interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  category: QuestionCategory;
  difficulty: 1 | 2 | 3;
}
```

Use a local structured JSON question bank for the MVP.

Create enough Indonesian questions to demonstrate the system.

Question architecture must allow adding hundreds of questions later without changing the game UI.

---

# 8. TUG OF WAR ENGINE

This is the main gameplay mechanic.

Define:

```ts
ropePosition: number;
```

Range:

```text
-100 ... 0 ... +100
```

Interpretation:

```text
-100
LEFT TEAM WINS

0
CENTER

+100
RIGHT TEAM WINS
```

Starting value:

```ts
ropePosition = 0;
```

Every correct answer creates pull power.

Example base system:

```text
Correct Answer = 10 points

Fast Answer Bonus:

0–25% timer used
+5

25–50%
+3

50–75%
+1

75–100%
+0
```

Combo:

```text
2 correct streak
+2

3 correct streak
+3

5+ correct streak
+5
```

Recommended formula:

```ts
pullPower =
  baseCorrectPower +
  speedBonus +
  comboBonus;
```

LEFT:

```ts
ropePosition -= pullPower;
```

RIGHT:

```ts
ropePosition += pullPower;
```

Clamp:

```ts
ropePosition = Math.max(-100, Math.min(100, ropePosition));
```

---

# 9. FAIR SIMULTANEOUS ROUND LOGIC

Do NOT immediately move the rope after the first team's answer.

Each round waits until:

```text
both teams answered

OR

both timers expired
```

Then calculate:

```text
leftPull
rightPull
```

And determine net pull:

```ts
netPull = rightPull - leftPull;
```

Example:

```text
Left Pull = 15
Right Pull = 10

Net Pull = -5

rope moves 5 points left
```

This prevents response timing from causing unfair rope animation.

---

# 10. TUG OF WAR VISUAL

The central area must be the visual hero.

Create:

* left team characters
* right team characters
* large rope
* central ribbon/marker
* center boundary
* left finish line
* right finish line

Concept:

```text
LEFT TEAM

😤 😤 😤
 \ | /
  \|/

======ROPE======🚩======ROPE======

                           /|\
                          / | \
                       😤 😤 😤

                              RIGHT TEAM
```

Do NOT use emoji characters in the actual final game.

Build polished illustrated/cartoon game characters using CSS/vector assets/illustrations.

Characters should visually lean backward while pulling.

---

# 11. ROPE ANIMATION

The rope should never jump instantly.

Use spring physics.

Recommended library:

```text
Framer Motion / Motion
```

Concept:

```ts
animate rope x position
using spring interpolation.
```

Motion should have:

```text
controlled overshoot
momentum
small bounce
natural settling
```

Recommended conceptual values:

```text
stiffness ≈ 80
damping ≈ 12
mass ≈ 1
```

Tune visually instead of treating these values as fixed.

---

# 12. CHARACTER ANIMATION STATE

Create animation state per team:

```ts
type CharacterAnimation =
  | "idle"
  | "pulling"
  | "celebrating"
  | "losing-ground"
  | "winning"
  | "defeated";
```

Examples:

Correct answer:

```text
characters pull harder
rope shakes
small particle burst
+15 appears
```

Wrong:

```text
characters momentarily lose balance
```

Opponent pulls:

```text
characters slide slightly toward center
```

Victory:

```text
celebration animation
```

---

# 13. COMBO SYSTEM

Track consecutive correct answers.

State:

```ts
combo: number;
```

Display:

```text
🔥 COMBO x2

🔥🔥 COMBO x3

⚡ SEMANGAT '45
```

Combo resets after:

```text
wrong answer

OR

timeout
```

Do not let combo create extreme imbalance.

---

# 14. COMEBACK MECHANIC

Prevent matches from becoming boring when one side dominates too early.

When a team is beyond approximately 65% toward losing:

activate:

```text
SEMANGAT KEMERDEKAAN
```

This should provide a SMALL comeback multiplier.

Example:

```ts
pullPower *= 1.15;
```

Never give automatic answers.

Never guarantee a comeback.

The better-performing team should still maintain an advantage.

---

# 15. TIMER ENGINE

Each team has an independent visible timer.

Example:

```text
00:15
```

Timer becomes visually urgent when:

```text
<= 5 seconds
```

When timer reaches zero:

```text
TIMEOUT
```

Treat timeout as incorrect.

Timer architecture must be separated from question components.

---

# 16. ROUND ENGINE

Each round:

```text
Generate left question
Generate right question

↓
Start timers

↓
Wait for answer / timeout

↓
Evaluate

↓
Calculate left pull

↓
Calculate right pull

↓
Calculate net movement

↓
Animate rope

↓
Show result feedback

↓
Next round
```

Create short transition:

```text
RONDE BERIKUTNYA
```

approximately visually 800–1200 ms, but implementation should remain non-blocking.

---

# 17. WIN CONDITIONS

Immediate win:

```ts
ropePosition <= -100
```

LEFT wins.

OR:

```ts
ropePosition >= 100
```

RIGHT wins.

Otherwise after final round:

```text
ropePosition < 0
LEFT wins

ropePosition > 0
RIGHT wins
```

If:

```ts
ropePosition === 0
```

trigger:

```text
SUDDEN DEATH
```

Generate one final balanced question for both teams.

---

# 18. VICTORY SCREEN

Fullscreen victory experience.

Example:

```text
🇮🇩

DIRGAHAYU
REPUBLIK INDONESIA

🏆

GARUDA MERAH

PEMENANG TARIK MERDEKA
```

Show statistics:

```text
Score
Correct Answers
Wrong Answers
Accuracy
Highest Combo
Average Answer Time
```

Buttons:

```text
MAIN LAGI

PERTANDINGAN BARU

LIHAT HASIL
```

Add:

* red-white confetti
* subtle fireworks
* victory character animation
* Indonesian independence atmosphere

Avoid excessive particle effects that hurt performance.

---

# 19. VISUAL DIRECTION

Theme:

```text
Indonesian Independence Day
modern game show
premium carnival
friendly competition
```

Primary colors:

```text
Indonesian Red
White
Dark Neutral
Warm Off-white
```

Use red strategically.

Avoid making every surface red.

Visual inspiration:

```text
TV game show
party game
arcade game
Indonesian independence celebration
```

Do NOT make it look like:

```text
corporate dashboard
school LMS
admin panel
generic Bootstrap quiz
SaaS landing page
```

---

# 20. BACKGROUND

Use subtle Indonesian visual elements:

```text
red-white flags
bunting
confetti
clouds
traditional celebration ornaments
field/event atmosphere
```

Keep the center arena visually clear.

---

# 21. RESPONSIVE STRATEGY

Primary target:

```text
Laptop
Desktop
Projector
Large TV
```

Primary aspect ratio:

```text
16:9
```

Optimize strongly for:

```text
1366×768
1920×1080
2560×1440
```

The interface must still remain usable at smaller desktop sizes.

Mobile does NOT need to become the primary gameplay interface yet.

Mobile may show:

```text
"Gunakan layar landscape untuk pengalaman terbaik"
```

if the viewport is too narrow.

---

# 22. FRONTEND ARCHITECTURE

Use:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion / Motion
Zustand
```

Recommended structure:

```text
src/
│
├── app/
│   └── page.tsx
│
├── components/
│   ├── game/
│   │   ├── GameScreen.tsx
│   │   ├── GameHeader.tsx
│   │   ├── SetupModal.tsx
│   │   ├── CountdownScreen.tsx
│   │   ├── VictoryScreen.tsx
│   │   └── RoundTransition.tsx
│   │
│   ├── quiz/
│   │   ├── QuizPanel.tsx
│   │   ├── QuestionCard.tsx
│   │   ├── AnswerButton.tsx
│   │   └── Timer.tsx
│   │
│   ├── tug/
│   │   ├── TugArena.tsx
│   │   ├── Rope.tsx
│   │   ├── TeamCharacters.tsx
│   │   ├── CenterMarker.tsx
│   │   └── FinishLine.tsx
│   │
│   └── shared/
│
├── engine/
│   ├── game-engine.ts
│   ├── quiz-engine.ts
│   ├── tug-engine.ts
│   ├── score-engine.ts
│   ├── timer-engine.ts
│   └── difficulty-engine.ts
│
├── store/
│   └── game-store.ts
│
├── data/
│   └── indonesia-questions.json
│
├── types/
│   ├── game.ts
│   └── question.ts
│
└── utils/
```

---

# 23. STATE ARCHITECTURE

Create Zustand store.

Example conceptual state:

```ts
interface GameState {
  status: GameStatus;

  totalQuestions: number;
  currentRound: number;

  ropePosition: number;

  settings: GameSettings;

  leftTeam: TeamState;

  rightTeam: TeamState;

  winner: "left" | "right" | null;
}
```

Team:

```ts
interface TeamState {
  name: string;

  score: number;

  correctAnswers: number;

  incorrectAnswers: number;

  combo: number;

  maxCombo: number;

  currentQuestion: Question | null;

  selectedAnswer: number | null;

  answered: boolean;

  remainingTime: number;
}
```

---

# 24. ENGINE SEPARATION

Important architecture rule:

React components should NOT contain complex game logic.

Components:

```text
render UI
capture user interaction
dispatch game actions
```

Engines:

```text
calculate rules
select questions
calculate pull
calculate score
determine winner
```

Store:

```text
owns current game state
```

This separation is mandatory because later the game may support:

```text
multiplayer
mobile controllers
WebSocket rooms
host mode
leaderboards
backend question database
```

without rewriting the core game.

---

# 25. AUDIO ARCHITECTURE

Prepare optional sound event hooks:

```text
gameStart
countdown
correct
wrong
ropePull
combo
timeout
victory
buttonClick
```

Create:

```ts
AudioManager
```

Do not tightly couple audio playback to components.

Include mute/unmute control.

Sound assets can be placeholders.

---

# 26. ACCESSIBILITY

Provide:

```text
large typography
high contrast
keyboard support
visible focus state
reduced motion support
```

Keyboard mapping can optionally support:

LEFT TEAM:

```text
1 = A
2 = B
3 = C
4 = D
```

RIGHT TEAM:

```text
7 = A
8 = B
9 = C
0 = D
```

This makes the game usable with physical buttons or external controllers later.

---

# 27. DATA PERSISTENCE

For MVP:

Do NOT build backend authentication.

Do NOT build a database.

Use:

```text
local JSON question bank
localStorage for settings
```

Persist:

```text
team names
question count
difficulty
timer
audio preference
```

Do NOT persist active match state unless needed.

---

# 28. FUTURE-READY ARCHITECTURE

Design interfaces so a future version can support:

```text
Host Screen
        ↓
Realtime Server
       ↙ ↘
 Team A    Team B
  Phone     Phone
```

Future features:

```text
QR join
room code
WebSocket
mobile controllers
admin question management
online leaderboard
event history
custom quiz packs
team avatars
spectator screen
```

But DO NOT implement these now.

Only keep architecture extensible.

---

# 29. MVP PRIORITY

Build the MVP in this order:

```text
1. Setup Modal
2. Game State
3. Question Bank
4. Quiz Engine
5. Two Quiz Panels
6. Timer
7. Tug Engine
8. Rope Animation
9. Scoring
10. Combo
11. Win Logic
12. Victory Screen
13. Visual Polish
14. Audio Hooks
```

Do not start with unnecessary infrastructure.

---

# 30. IMPORTANT UX RULES

Do not require scrolling during gameplay.

Everything must fit into one viewport.

Questions should dynamically fit while remaining readable.

Prevent layout shift between rounds.

Do not use small buttons.

Do not use dense text.

Do not use unnecessary cards inside cards.

Keep the tug arena the visual focus.

---

# 31. ANIMATION PRINCIPLE

Animations should communicate game state.

Use animation for:

```text
pulling
scoring
correct answer
incorrect answer
combo
rope movement
winning
countdown
```

Avoid random decorative animation that distracts from gameplay.

Target smooth 60 FPS animation where supported.

Prefer transform-based animation.

---

# 32. GAME FEEL

The final experience should make spectators immediately understand:

```text
"Tim kiri dan kanan sedang menjawab quiz.

Kalau benar, mereka menarik tali.

Yang berhasil menarik lawan melewati batas akan menang."
```

The game should feel understandable within 5 seconds without explanation.

---

# 33. INITIAL QUESTION DATA

Generate an initial high-quality dataset of approximately 60 Indonesian general-knowledge questions.

Balanced across:

```text
Sejarah
Geografi
Budaya
Tokoh
Pancasila
Alam
Bahasa
Kuliner
Seni
Olahraga
```

Every question must contain:

```text
correct answer
difficulty
category
unique id
```

Avoid ambiguous questions.

Avoid political opinion questions.

Avoid trick questions whose answers may change over time.

Prefer stable Indonesian knowledge.

---

# 34. QUALITY REQUIREMENT

The first generated implementation should already be fully playable.

Do NOT produce:

```text
placeholder-only sections
fake buttons
unfinished interactions
static tug illustration
dummy answer handling
```

Core interactions must work.

A user must be able to:

```text
open game
configure match
start countdown
answer both teams' questions
watch rope move
complete multiple rounds
win the match
see victory screen
restart
```

without manually editing code.

---

# 35. DESIGN GOAL

Prioritize:

```text
GAME FEEL
>
VISUAL CLARITY
>
RESPONSIVENESS
>
ARCHITECTURE
>
DECORATION
```

The final product should feel like a real Independence Day game built for an event, not a website that happens to contain a quiz.
