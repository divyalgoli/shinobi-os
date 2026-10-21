# 🍃 SHINOBI OS — Shinobi Command Center & Tactical Shinobi Intelligence

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](LICENSE)

An immersive, cinematic, anime-inspired Shinobi Command Center built with React and Vite. **SHINOBI OS** serves as an interactive tactical intelligence hub for ninja operatives across the Five Great Shinobi Nations.

---

## ⚡ Live Deployments & Repository

🌐 **Live Website (GitHub Pages):** [https://divyalgoli43-commits.github.io/shinobi-os/](https://divyalgoli43-commits.github.io/shinobi-os/)
*(Always online, fast global CDN, zero login required)*

🚀 **Live Mirror (Netlify):** [https://rainbow-horse-c6b64d.netlify.app](https://rainbow-horse-c6b64d.netlify.app)
*(Visitor Access Code: `My-Drop-Site` — can be claimed directly into your Netlify account)*

📂 **GitHub Repository:** [https://github.com/divyalgoli43-commits/shinobi-os](https://github.com/divyalgoli43-commits/shinobi-os)

---

## 🌟 Key Features

### 1. 🎛️ Tactical Shinobi Command Center (Dashboard)
- **Cinematic Shinobi Visual Identity:** Deep navy and dark carbon panels accented with Konoha crimson red, electric chakra blue, and amber tones.
- **Player Progression System:** Real-time ninja rank tracking (Academy Student → Genin → Chunin → Jonin → Anbu → Kage), dynamic chakra & stamina gauges, and mission success metrics.
- **Interactive Village Banner:** Atmospheric landscape backdrop of the Hidden Leaf Village with responsive quick actions.

### 2. 📜 Shinobi Mission Bureau
- **Authentic Mission Lifecycle:** Browse missions graded D, C, B, A, and S-Rank.
- **Interactive Mission Challenges:** Missions are not simply clicked off; operatives must satisfy specific interactive objectives, trivia requirements, and tactical knowledge tests.
- **Reward Engine:** Complete real objectives to earn XP, Ryo, and ninja prestige. Built-in prevention against duplicated rewards or fake submissions.

### 3. 👥 Comprehensive Character Archive
- **300+ Shinobi Profiles:** Rich database spanning genin, jonin, kage, rogue ninja, and legendary figures across all villages.
- **Search & Filters:** Search by name, filter by village (Konohagakure, Sunagakure, Kirigakure, Kumogakure, Iwagakure, and more), or inspect clan affiliations.
- **Visual Presentation:** Smart avatar rendering with automated asset fallbacks and Naruto-themed emblem placeholders.

### 4. 🌀 Jutsu & Technique Library
- **Classification by Nature:** Ninjutsu, Genjutsu, Taijutsu, Senjutsu, Kekkei Genkai, and Fuinjutsu.
- **Elemental Affinities:** Filter by Fire (Katon), Water (Suiton), Wind (Futon), Earth (Doton), and Lightning (Raiton).
- **Tactical Breakdown:** Detailed chakra cost, hand seals, range, and technique descriptions.

### 5. 📝 Chunin Exams Academy Quiz
- **Rigorous Examination:** Multi-category knowledge challenges with authentic canon questions.
- **Instant Scoring & Review:** Live feedback with detailed lore explanations for each question.
- **Replayability:** Test your knowledge repeatedly to level up your shinobi standing.

### 6. 🗺️ World Atlas & Shinobi Lore
- **Geopolitical Intel:** In-depth documentation of the Five Great Shinobi Countries, hidden villages, shinobi clans, and historic organizations like the Akatsuki.
- **Shinobi Timeline & History:** Historical accounts of the Great Ninja Wars, the Sage of Six Paths, and clan treaties.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vitejs.dev/)
- **Styling:** Custom CSS3 Design System with cinematic dark mode, glowing accents, and responsive layouts
- **Deployment:** Netlify SPA with fast global CDN caching and SPA redirect handling

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/divyalgoli43-commits/shinobi-os.git
   cd shinobi-os
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 🏗️ Production Build

To compile and bundle the application for production:

```bash
npm run build
```

The optimized static assets will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```
shinobi-os/
├── public/                 # Static public assets (favicons, svgs, images, _redirects)
│   ├── _redirects          # SPA client routing rewrite rules for Netlify
│   └── images/             # Character avatars and tactical imagery
├── src/
│   ├── assets/             # Brand logos and iconography
│   ├── components/         # Modular UI components (Dashboard, Missions, Characters, Quiz, etc.)
│   ├── data/               # Shinobi datasets (characters, missions, jutsu, lore, quiz)
│   ├── App.jsx             # Main tactical view controller & state management
│   ├── App.css             # Command center UI layout and theme rules
│   ├── index.css           # Global typography and base reset
│   └── main.jsx            # Application entry point
├── netlify.toml            # Netlify hosting and cache configuration
├── package.json            # Project manifest and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## ⚠️ Disclaimer & Legal Notice

**SHINOBI OS** is an unofficial, fan-made educational and portfolio project. 

- All *Naruto*, *Naruto Shippuden*, and related characters, jutsu, terminology, and imagery are trademarks and copyrights of **Masashi Kishimoto**, **Shueisha**, **Studio Pierrot**, and **TV Tokyo**.
- This project is not affiliated with, endorsed by, or sponsored by any of the respective intellectual property owners.
- No commercial use or monetization is intended.
