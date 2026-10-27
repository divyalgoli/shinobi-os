
import { useState } from "react";
import characters from "./data/characters";
import quizQuestions from "./data/quizQuestions";
import jutsu from "./data/jutsu";
import missions from "./data/missions";
import { getMissionChallenges, getMissionPassCriteria } from "./data/missionChallenges";
import { nations, villages, clans, organizations, locations, history } from "./data/worldLore";

import "./App.css";

function getShinobiRankTitle(xp) {
  if (xp >= 15000) return "👑 HOKAGE RANK";
  if (xp >= 9000) return "🗡️ ANBU CAPTAIN";
  if (xp >= 5000) return "⚔️ JONIN RANK";
  if (xp >= 2000) return "📜 CHUNIN RANK";
  return "⚡ GENIN RANK";
}

function getShinobiRankDetails(xp) {
  if (xp >= 15000) {
    return {
      title: "👑 HOKAGE RANK",
      rankName: "Hokage",
      minXP: 15000,
      nextXP: null,
      progressPercent: 100,
      badgeColor: "#f59e0b",
      badgeClass: "rank-hokage",
    };
  }
  if (xp >= 9000) {
    const percent = Math.min(100, Math.round(((xp - 9000) / (15000 - 9000)) * 100));
    return {
      title: "🗡️ ANBU CAPTAIN",
      rankName: "Anbu Captain",
      minXP: 9000,
      nextXP: 15000,
      progressPercent: percent,
      badgeColor: "#a855f7",
      badgeClass: "rank-anbu",
    };
  }
  if (xp >= 5000) {
    const percent = Math.min(100, Math.round(((xp - 5000) / (9000 - 5000)) * 100));
    return {
      title: "⚔️ JONIN RANK",
      rankName: "Jonin",
      minXP: 5000,
      nextXP: 9000,
      progressPercent: percent,
      badgeColor: "#e11d48",
      badgeClass: "rank-jonin",
    };
  }
  if (xp >= 2000) {
    const percent = Math.min(100, Math.round(((xp - 2000) / (5000 - 2000)) * 100));
    return {
      title: "📜 CHUNIN RANK",
      rankName: "Chunin",
      minXP: 2000,
      nextXP: 5000,
      progressPercent: percent,
      badgeColor: "#38bdf8",
      badgeClass: "rank-chunin",
    };
  }
  const percent = Math.min(100, Math.round((xp / 2000) * 100));
  return {
    title: "⚡ GENIN RANK",
    rankName: "Genin",
    minXP: 0,
    nextXP: 2000,
    progressPercent: percent,
    badgeColor: "#10b981",
    badgeClass: "rank-genin",
  };
}

const QUIZ_CATEGORIES = [
  "All Categories",
  "Characters & Backgrounds",
  "Villages, Clans & Organizations",
  "Jutsu & Chakra",
  "Kekkei Genkai & Natures",
  "Tailed Beasts & Jinchuriki",
  "Kage, History & Wars",
  "Story Arcs & Battles",
  "Shinobi Terminology & Lore",
];

function generateExamQuestions(category = "All Categories", difficulty = "All Difficulties", length = 10) {
  let pool = quizQuestions;
  if (category && category !== "All Categories") {
    pool = pool.filter((q) => q.category === category);
  }
  if (difficulty && difficulty !== "All Difficulties") {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }
  if (!pool || pool.length === 0) {
    pool = quizQuestions;
  }

  // Fisher-Yates shuffle
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  const targetCount =
    length === "All" || length === "All Questions" || Number(length) >= shuffled.length
      ? shuffled.length
      : Math.max(1, Number(length) || 10);
  const subset = shuffled.slice(0, targetCount);

  // Shuffle options for each question and safely preserve correct answer index
  return subset.map((q) => {
    const correctText = q.options[q.answer];
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    const newAnswerIndex = shuffledOptions.indexOf(correctText);

    return {
      ...q,
      options: shuffledOptions,
      answer: newAnswerIndex >= 0 ? newAnswerIndex : q.answer,
    };
  });
}

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");
  const [playerName, setPlayerName] = useState(() => {
    try {
      return localStorage.getItem("shinobiPlayerName") || "Leaf Shinobi";
    } catch {
      return "Leaf Shinobi";
    }
  });
  const [tempPlayerName, setTempPlayerName] = useState(() => {
    try {
      return localStorage.getItem("shinobiPlayerName") || "Leaf Shinobi";
    } catch {
      return "Leaf Shinobi";
    }
  });
  const [ambientFX, setAmbientFX] = useState(() => {
    try {
      return localStorage.getItem("shinobiAmbientFX") !== "disabled";
    } catch {
      return true;
    }
  });

  const [search, setSearch] = useState("");
  const [village, setVillage] = useState("All Villages");
  const [characterRank, setCharacterRank] = useState("All Ranks");
  const [visibleCount, setVisibleCount] = useState(24);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favoriteCharacters, setFavoriteCharacters] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shinobiFavorites") || "[]");
    } catch {
      return [];
    }
  });
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const [selectedNation, setSelectedNation] = useState(null);
  const [jutsuSearch, setJutsuSearch] = useState("");
  const [jutsuType, setJutsuType] = useState("All Types");
  const [jutsuRank, setJutsuRank] = useState("All Ranks");
  const [visibleJutsuCount, setVisibleJutsuCount] = useState(24);
  const [selectedJutsu, setSelectedJutsu] = useState(null);

  // Mission State with localStorage Persistence
  const [missionSearch, setMissionSearch] = useState("");
  const [missionRank, setMissionRank] = useState("All Ranks");
  const [missionCategory, setMissionCategory] = useState("All Categories");
  const [missionStatus, setMissionStatus] = useState("All");
  const [completedMissions, setCompletedMissions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shinobiCompletedMissions") || "[]");
    } catch {
      return [];
    }
  });
  const [missionXP, setMissionXP] = useState(() => {
    try {
      const saved = localStorage.getItem("shinobiMissionXP");
      return saved !== null ? Number(saved) : 0;
    } catch {
      return 0;
    }
  });
  const [inProgressMissions, setInProgressMissions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shinobiInProgressMissions") || "[]");
    } catch {
      return [];
    }
  });
  const [activeMission, setActiveMission] = useState(null);
  const [activeChallenges, setActiveChallenges] = useState([]);
  const [missionStageIndex, setMissionStageIndex] = useState(0);
  const [missionStageResults, setMissionStageResults] = useState([]);
  const [missionSelectedAnswer, setMissionSelectedAnswer] = useState(null);
  const [missionAnswerChecked, setMissionAnswerChecked] = useState(false);
  const [missionOutcome, setMissionOutcome] = useState(null);

  // World Lore State
  const [loreTab, setLoreTab] = useState("Villages & Nations");
  const [loreSearch, setLoreSearch] = useState("");
  const [selectedLoreItem, setSelectedLoreItem] = useState(null);

  const [quizCategory, setQuizCategory] = useState("All Categories");
  const [quizDifficulty, setQuizDifficulty] = useState("All Difficulties");
  const [quizLength, setQuizLength] = useState(10);
  const [activeQuestions, setActiveQuestions] = useState(() =>
    generateExamQuestions("All Categories", "All Difficulties", 10)
  );

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);

  const filteredCharacters = characters.filter((character) => {
    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      character.name.toLowerCase().includes(query) ||
      (character.clan && character.clan.toLowerCase().includes(query)) ||
      (character.nature && character.nature.toLowerCase().includes(query)) ||
      (character.village && character.village.toLowerCase().includes(query)) ||
      (character.role && character.role.toLowerCase().includes(query)) ||
      (character.rank && character.rank.toLowerCase().includes(query)) ||
      (Array.isArray(character.aliases) && character.aliases.some((a) => a.toLowerCase().includes(query))) ||
      (Array.isArray(character.abilities) && character.abilities.some((a) => a.toLowerCase().includes(query))) ||
      (Array.isArray(character.affiliation) && character.affiliation.some((a) => a.toLowerCase().includes(query)));

    const matchesVillage =
      village === "All Villages" ||
      character.village === village ||
      (character.village && village && (
        character.village.toLowerCase() === village.toLowerCase().replace(" village", "") ||
        village.toLowerCase().includes(character.village.toLowerCase()) ||
        character.village.toLowerCase().includes(village.toLowerCase())
      ));

    const matchesRank =
      characterRank === "All Ranks" ||
      (character.rank && character.rank.toLowerCase().includes(characterRank.toLowerCase()));

    const matchesFavorite =
      !showFavoritesOnly || favoriteCharacters.includes(character.id);

    return matchesSearch && matchesVillage && matchesRank && matchesFavorite;
  });

  function toggleFavorite(characterId) {
    setFavoriteCharacters((previous) => {
      const updated = previous.includes(characterId)
        ? previous.filter((id) => id !== characterId)
        : [...previous, characterId];

      localStorage.setItem("shinobiFavorites", JSON.stringify(updated));
      return updated;
    });
  }

  function resetQuiz(category = quizCategory, difficulty = quizDifficulty, length = quizLength) {
    const newExam = generateExamQuestions(category, difficulty, length);
    setActiveQuestions(newExam);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setAnswerChecked(false);
  }

  function navigate(page) {
    setActivePage(page);
    setMobileNavOpen(false);
    setSelectedCharacter(null);
    setSelectedNation(null);
    setSelectedLoreItem(null);
    setLoreSearch("");
    setSelectedJutsu(null);
    setActiveMission(null);
    setMissionSearch("");
    setMissionRank("All Ranks");
    setMissionCategory("All Categories");
    setMissionStatus("All");
    setJutsuSearch("");
    setJutsuType("All Types");
    setJutsuRank("All Ranks");
    setVisibleJutsuCount(24);
    setSearch("");
    setVillage("All Villages");
    setCharacterRank("All Ranks");
    setVisibleCount(24);

    if (page === "World Atlas") {
      setLoreTab("Villages & Nations");
    } else if (page === "World Lore") {
      setLoreTab("Clans & Bloodlines");
    }

    if (page === "Chunin Exams") {
      resetQuiz(quizCategory, quizDifficulty, quizLength);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSavePlayerName(e) {
    if (e) e.preventDefault();
    const trimmed = tempPlayerName.trim() || "Leaf Shinobi";
    setPlayerName(trimmed);
    try {
      localStorage.setItem("shinobiPlayerName", trimmed);
    } catch (err) {
      console.error(err);
    }
    setSettingsOpen(false);
  }

  function handleResetAllProgress() {
    try {
      localStorage.removeItem("shinobiCompletedMissions");
      localStorage.removeItem("shinobiInProgressMissions");
      localStorage.removeItem("shinobiMissionXP");
      localStorage.removeItem("shinobiFavorites");
    } catch (err) {
      console.error(err);
    }
    setCompletedMissions([]);
    setInProgressMissions([]);
    setMissionXP(0);
    setFavoriteCharacters([]);
    setResetConfirmOpen(false);
    setSettingsOpen(false);
  }

  function openCharacter(character) {
    setSelectedCharacter(character);
    setActivePage("Characters");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function checkAnswer() {
    if (selectedAnswer === null || answerChecked) return;

    const currentQuestion = activeQuestions[questionIndex];
    if (currentQuestion && selectedAnswer === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    setAnswerChecked(true);
  }

  function nextQuestion() {
    if (!answerChecked) return;

    if (questionIndex + 1 < activeQuestions.length) {
      setQuestionIndex((previousIndex) => previousIndex + 1);
      setSelectedAnswer(null);
      setAnswerChecked(false);
    } else {
      setQuizFinished(true);
    }
  }

  function completeMission(mission) {
    const missionId = mission.id ?? mission.title;
    if (completedMissions.includes(missionId)) return;
    const reward = Number(mission.reward ?? mission.xp ?? 100);

    setCompletedMissions((previous) => {
      const updated = [...previous, missionId];
      try {
        localStorage.setItem("shinobiCompletedMissions", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    setInProgressMissions((previous) => {
      const updated = previous.filter((id) => id !== missionId);
      try {
        localStorage.setItem("shinobiInProgressMissions", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    setMissionXP((previous) => {
      const updated = previous + (Number.isFinite(reward) ? reward : 100);
      try {
        localStorage.setItem("shinobiMissionXP", String(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  }

  function launchMission(mission, isReview = false) {
    const missionId = mission.id ?? mission.title;
    const challenges = getMissionChallenges(mission);
    setActiveChallenges(challenges);
    setActiveMission(mission);

    if (isReview || completedMissions.includes(missionId)) {
      setMissionOutcome("review");
      setMissionStageIndex(0);
      setMissionStageResults(challenges.map((_, i) => ({ stage: i + 1, passed: true })));
      setMissionSelectedAnswer(null);
      setMissionAnswerChecked(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setInProgressMissions((previous) => {
      if (previous.includes(missionId)) return previous;
      const updated = [...previous, missionId];
      try {
        localStorage.setItem("shinobiInProgressMissions", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });

    setMissionStageIndex(0);
    setMissionStageResults([]);
    setMissionSelectedAnswer(null);
    setMissionAnswerChecked(false);
    setMissionOutcome(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function abandonMission(missionId, event) {
    if (event) event.stopPropagation();
    setInProgressMissions((previous) => {
      const updated = previous.filter((id) => id !== missionId);
      try {
        localStorage.setItem("shinobiInProgressMissions", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
    if (activeMission && (activeMission.id === missionId || activeMission.title === missionId)) {
      setActiveMission(null);
    }
  }

  function checkMissionStage() {
    if (missionSelectedAnswer === null || missionAnswerChecked) return;
    const currentChallenge = activeChallenges[missionStageIndex];
    if (!currentChallenge) return;

    const isCorrect = missionSelectedAnswer === currentChallenge.answer;
    setMissionStageResults((previous) => [
      ...previous,
      {
        stage: missionStageIndex + 1,
        passed: isCorrect,
        selectedAnswer: missionSelectedAnswer,
      },
    ]);
    setMissionAnswerChecked(true);
  }

  function advanceMissionStage() {
    if (!missionAnswerChecked) return;
    const totalStages = activeChallenges.length || 3;
    const passCriteria = getMissionPassCriteria(activeMission.rank, totalStages);

    if (missionStageIndex + 1 < totalStages) {
      setMissionStageIndex((prev) => prev + 1);
      setMissionSelectedAnswer(null);
      setMissionAnswerChecked(false);
    } else {
      const passCount = missionStageResults.filter((r) => r.passed).length;
      if (passCount >= passCriteria) {
        completeMission(activeMission);
        setMissionOutcome("success");
      } else {
        setMissionOutcome("failed");
      }
    }
  }

  function retryActiveMission() {
    if (!activeMission) return;
    setMissionStageIndex(0);
    setMissionStageResults([]);
    setMissionSelectedAnswer(null);
    setMissionAnswerChecked(false);
    setMissionOutcome(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetMissions() {
    if (window.confirm("Are you sure you want to reset all completed and in-progress missions and earned XP?")) {
      setCompletedMissions([]);
      setInProgressMissions([]);
      setMissionXP(0);
      setActiveMission(null);
      try {
        localStorage.removeItem("shinobiCompletedMissions");
        localStorage.removeItem("shinobiInProgressMissions");
        localStorage.removeItem("shinobiMissionXP");
      } catch (e) {
        console.error(e);
      }
    }
  }

  function MissionsPage() {
    const missionCategories = [
      "All Categories",
      ...new Set(missions.map((m) => m.category).filter(Boolean)),
    ];

    const completedCount = completedMissions.length;
    const inProgressCount = inProgressMissions.length;
    const availableCount = Math.max(0, missions.length - completedCount - inProgressCount);

    const filteredMissions = missions.filter((mission) => {
      const title = mission.title ?? mission.name ?? "";
      const description = mission.description ?? "";
      const location = mission.location ?? mission.village ?? "";
      const client = mission.client ?? "";
      const arc = mission.arc ?? "";
      const category = mission.category ?? "";
      const rank = mission.rank ?? "D";
      const id = mission.id ?? mission.title;
      const isComplete = completedMissions.includes(id);
      const isInProgress = inProgressMissions.includes(id);

      const query = missionSearch.trim().toLowerCase();
      const matchesSearch =
        !query ||
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        location.toLowerCase().includes(query) ||
        client.toLowerCase().includes(query) ||
        arc.toLowerCase().includes(query) ||
        category.toLowerCase().includes(query);

      const matchesRank =
        missionRank === "All Ranks" || rank.toUpperCase() === missionRank.toUpperCase();

      const matchesCategory =
        missionCategory === "All Categories" || category === missionCategory;

      const matchesStatus =
        missionStatus === "All" ||
        (missionStatus === "Available" && !isComplete && !isInProgress) ||
        (missionStatus === "In Progress" && isInProgress) ||
        (missionStatus === "Completed" && isComplete);

      return matchesSearch && matchesRank && matchesCategory && matchesStatus;
    });

    if (activeMission) {
      const challenges = activeChallenges;
      const currentChallenge = challenges[missionStageIndex] || challenges[0];
      const totalStages = challenges.length || 3;
      const passCriteria = getMissionPassCriteria(activeMission.rank, totalStages);
      const passedCount = missionStageResults.filter((r) => r.passed).length;
      const objectives = activeMission.objectives || [];

      return (
        <section className="section mission-console">
          <div className="mission-console-topbar">
            <button
              className="mission-console-back"
              onClick={() => setActiveMission(null)}
              type="button"
            >
              ← Back to Mission Board
            </button>
            <div className="mission-meta-pills" style={{ margin: 0 }}>
              <span className={`mission-rank rank-${String(activeMission.rank).charAt(0).toLowerCase()}`}>
                {String(activeMission.rank).toUpperCase()}-RANK
              </span>
              <span className="mission-meta-pill">
                📍 <strong>{activeMission.location || activeMission.village}</strong>
              </span>
              <span className="mission-meta-pill">
                👤 Client: <strong>{activeMission.client}</strong>
              </span>
              <span className="mission-meta-pill">
                💰 <strong>{activeMission.ryoReward}</strong>
              </span>
              <span className="mission-meta-pill">
                ⚡ <strong>+{activeMission.reward} XP</strong>
              </span>
            </div>
          </div>

          <div className="mission-console-header">
            <p className="eyebrow">
              {activeMission.category} · {activeMission.arc}
            </p>
            <div className="mission-console-title-row">
              <h2>{activeMission.title}</h2>
              <span className="status-in-progress-tag">
                {missionOutcome === "success" || missionOutcome === "review"
                  ? "✓ MISSION COMPLETED"
                  : missionOutcome === "failed"
                  ? "✗ MISSION COMPROMISED"
                  : "▶ IN PROGRESS"}
              </span>
            </div>
          </div>

          {missionOutcome === "success" || missionOutcome === "review" ? (
            <div className="mission-debrief-screen">
              <div className="mission-debrief-emblem">🏆</div>
              <p className="eyebrow">MISSION EVALUATION · OFFICIAL DEBRIEF</p>
              <h2>Mission Accomplished!</h2>
              <p style={{ color: "#aab3c4", fontSize: "15px", lineHeight: "1.7", margin: "14px 0" }}>
                Outstanding shinobi execution! You fulfilled all critical village directives for this {activeMission.rank}-rank assignment. The client has expressed great satisfaction with Konoha's rapid deployment.
              </p>

              <div className="mission-debrief-stats">
                <div className="mission-debrief-stat-card">
                  <span>OBJECTIVES ACHIEVED</span>
                  <strong style={{ color: "#74d99f" }}>
                    {passedCount} / {totalStages} ({Math.round((passedCount / totalStages) * 100)}%)
                  </strong>
                </div>
                <div className="mission-debrief-stat-card">
                  <span>CHAKRA REWARD CREDITED</span>
                  <strong style={{ color: "#e8bd63" }}>+{activeMission.reward} XP</strong>
                </div>
                <div className="mission-debrief-stat-card">
                  <span>BOUNTY EARNED</span>
                  <strong style={{ color: "#71d5a0" }}>{activeMission.ryoReward}</strong>
                </div>
                <div className="mission-debrief-stat-card">
                  <span>CURRENT SHINOBI RANK</span>
                  <strong style={{ color: "#ffc47b", fontSize: "16px" }}>{getShinobiRankTitle(missionXP)}</strong>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  className="primary-button"
                  onClick={() => setActiveMission(null)}
                  type="button"
                >
                  Return to Mission Board →
                </button>
              </div>
            </div>
          ) : missionOutcome === "failed" ? (
            <div className="mission-debrief-screen">
              <div className="mission-debrief-emblem">⚠️</div>
              <p className="eyebrow" style={{ color: "#ff7575" }}>
                OPERATIONAL FAILURE · CLIENT REQUIREMENTS NOT MET
              </p>
              <h2>Mission Compromised!</h2>
              <p style={{ color: "#aab3c4", fontSize: "15px", lineHeight: "1.7", margin: "14px 0" }}>
                The squad encountered unexpected resistance or tactical miscalculations. You satisfied {passedCount} of {totalStages} operational objectives, but {activeMission.rank}-rank clearance requires at least {passCriteria} successful objectives.
              </p>

              <div className="mission-debrief-stats">
                <div className="mission-debrief-stat-card">
                  <span>OBJECTIVES COMPLETED</span>
                  <strong style={{ color: "#ff7575" }}>
                    {passedCount} / {totalStages}
                  </strong>
                </div>
                <div className="mission-debrief-stat-card">
                  <span>REQUIRED TO PASS</span>
                  <strong style={{ color: "#f5cc82" }}>
                    {passCriteria} of {totalStages} ({activeMission.rank}-Rank)
                  </strong>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  className="primary-button mission-btn-in-progress"
                  onClick={retryActiveMission}
                  type="button"
                >
                  ↻ Retry Mission
                </button>
                <button
                  className="mission-console-back"
                  onClick={() => setActiveMission(null)}
                  type="button"
                >
                  ← Return to Mission Board
                </button>
              </div>
            </div>
          ) : (
            <div className="mission-console-grid">
              {/* Left Column: Briefing & Live Checklist */}
              <div className="mission-intel-sidebar">
                <div className="mission-sidebar-card">
                  <h3>Intelligence Briefing</h3>
                  <p className="mission-briefing-text">{activeMission.description}</p>
                </div>

                <div className="mission-sidebar-card">
                  <h3>Operational Objectives</h3>
                  <div className="checklist-items">
                    {objectives.map((obj, idx) => {
                      let status = "pending";
                      let icon = "⚬";
                      let tag = "Pending";

                      if (idx < missionStageResults.length) {
                        const result = missionStageResults[idx];
                        if (result.passed) {
                          status = "completed";
                          icon = "✓";
                          tag = "Accomplished";
                        } else {
                          status = "failed";
                          icon = "✗";
                          tag = "Compromised";
                        }
                      } else if (idx === missionStageIndex) {
                        status = "active";
                        icon = "▶";
                        tag = "In Progress";
                      }

                      return (
                        <div key={idx} className={`checklist-item ${status}`}>
                          <span className="checklist-icon">{icon}</span>
                          <div>
                            <strong>{obj}</strong>
                            <div style={{ fontSize: "11px", opacity: 0.8, marginTop: "2px" }}>
                              {tag}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mission-sidebar-card">
                  <h3>Passing Standards</h3>
                  <p className="mission-briefing-text">
                    Requirement: Pass at least <strong>{passCriteria} of {totalStages}</strong> objectives ({activeMission.rank}-Rank standard).
                  </p>
                  <div style={{ marginTop: "10px", fontSize: "13px", color: "#e5ad6b" }}>
                    Current Score: <strong>{passedCount} Passed</strong> / {missionStageResults.length} Completed
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Challenge Stage */}
              <div className="mission-challenge-card">
                <div className="challenge-stage-bar">
                  <span>
                    STAGE {missionStageIndex + 1} OF {totalStages}
                  </span>
                  <span>
                    Passing: {passedCount} / {missionStageIndex + (missionAnswerChecked ? 1 : 0)}
                  </span>
                </div>

                <div className="mission-progress-track">
                  <div
                    className="mission-progress-bar"
                    style={{
                      width: `${((missionStageIndex + 1) / totalStages) * 100}%`,
                    }}
                  />
                </div>

                <div className="eyebrow" style={{ color: "#d99b55" }}>
                  OBJECTIVE {missionStageIndex + 1} CHALLENGE
                </div>
                <div className="challenge-question-prompt">
                  {currentChallenge?.question}
                </div>

                <div className="mission-options-list">
                  {currentChallenge?.options?.map((opt, oIdx) => {
                    let optClass = "mission-option-btn";
                    if (missionSelectedAnswer === oIdx) optClass += " selected";
                    if (missionAnswerChecked) {
                      if (oIdx === currentChallenge.answer) optClass += " correct";
                      else if (missionSelectedAnswer === oIdx) optClass += " incorrect";
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        className={optClass}
                        disabled={missionAnswerChecked}
                        onClick={() => {
                          if (!missionAnswerChecked) setMissionSelectedAnswer(oIdx);
                        }}
                      >
                        <span className="mission-option-letter">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {missionAnswerChecked && (
                  <div
                    className={`mission-feedback-box ${
                      missionSelectedAnswer === currentChallenge.answer
                        ? "correct"
                        : "incorrect"
                    }`}
                  >
                    <strong>
                      {missionSelectedAnswer === currentChallenge.answer
                        ? "✓ Objective Accomplished! Tactical success."
                        : `✗ Objective Compromised! The correct response was: ${
                            currentChallenge.options[currentChallenge.answer]
                          }`}
                    </strong>
                    {currentChallenge.explanation && (
                      <p style={{ margin: "8px 0 0", color: "inherit", opacity: 0.9 }}>
                        {currentChallenge.explanation}
                      </p>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                  {!missionAnswerChecked ? (
                    <button
                      className="primary-button"
                      disabled={missionSelectedAnswer === null}
                      onClick={checkMissionStage}
                      type="button"
                    >
                      Confirm Action
                    </button>
                  ) : (
                    <button
                      className="primary-button"
                      onClick={advanceMissionStage}
                      type="button"
                    >
                      {missionStageIndex + 1 === totalStages
                        ? "Finalize Mission Report →"
                        : "Proceed to Next Objective →"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      );
    }

    return (
      <section className="section missions-page">
        <p className="eyebrow">MISSION CONTROL · SHINOBI ASSIGNMENT BOARD</p>
        <h2>Shinobi Mission Board</h2>
        <p>
          Accept verified assignments across the Five Great Nations, complete real tactical objectives,
          earn Ryo and Chakra Experience, and advance your shinobi rank.
        </p>

        <div className="mission-summary-grid">
          <div className="mission-summary-card">
            <span>AVAILABLE</span>
            <strong>{availableCount}</strong>
          </div>
          <div className="mission-summary-card">
            <span>IN PROGRESS</span>
            <strong style={{ color: "#f5cc82" }}>{inProgressCount}</strong>
          </div>
          <div className="mission-summary-card">
            <span>COMPLETED</span>
            <strong style={{ color: "#74d99f" }}>{completedCount}</strong>
          </div>
          <div className="mission-summary-card">
            <span>XP EARNED</span>
            <strong style={{ color: "#f16a5d" }}>{missionXP} XP</strong>
          </div>
        </div>

        <div className="mission-controls">
          <input
            type="search"
            placeholder="Search missions by title, objective, client, location, arc, or category..."
            value={missionSearch}
            onChange={(event) => setMissionSearch(event.target.value)}
          />
          <select value={missionRank} onChange={(event) => setMissionRank(event.target.value)}>
            <option value="All Ranks">All Ranks (D to S)</option>
            <option value="D">D-Rank (Basic)</option>
            <option value="C">C-Rank (Intermediate)</option>
            <option value="B">B-Rank (Advanced)</option>
            <option value="A">A-Rank (Jonin Elite)</option>
            <option value="S">S-Rank (Kage Level)</option>
          </select>
          <select value={missionCategory} onChange={(event) => setMissionCategory(event.target.value)}>
            {missionCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mission-controls-extra">
          <div className="mission-status-toggles">
            {[
              ["All", `All (${missions.length})`],
              ["Available", `Available (${availableCount})`],
              ["In Progress", `In Progress (${inProgressCount})`],
              ["Completed", `Completed (${completedCount})`],
            ].map(([statusVal, label]) => (
              <button
                key={statusVal}
                type="button"
                className={`mission-status-toggle ${missionStatus === statusVal ? "active" : ""}`}
                onClick={() => setMissionStatus(statusVal)}
              >
                {label}
              </button>
            ))}
          </div>

          {(completedMissions.length > 0 || inProgressMissions.length > 0) && (
            <button
              type="button"
              className="mission-reset-btn"
              onClick={resetMissions}
              title="Reset all completed and in-progress missions and earned XP"
            >
              ↻ Reset Progress
            </button>
          )}
        </div>

        <p className="archive-count" style={{ marginTop: "16px" }}>
          {filteredMissions.length} {filteredMissions.length === 1 ? "mission" : "missions"} found
        </p>

        <div className="missions-grid">
          {filteredMissions.map((mission, index) => {
            const id = mission.id ?? mission.title ?? index;
            const title = mission.title ?? "Untitled Mission";
            const rank = mission.rank ?? "D";
            const description = mission.description ?? "A village assignment.";
            const category = mission.category ?? "Field Assignment";
            const reward = Number(mission.reward ?? 100);
            const ryoReward = mission.ryoReward ?? "5,000 Ryo";
            const location = mission.location ?? mission.village ?? "Shinobi World";
            const client = mission.client ?? "Village Elder";
            const recommendedRank = mission.recommendedRank ?? "Genin";
            const arc = mission.arc ?? "";
            const objectives = Array.isArray(mission.objectives) ? mission.objectives : [];
            const isComplete = completedMissions.includes(id);
            const isInProgress = inProgressMissions.includes(id);

            return (
              <article
                className={`mission-board-card ${isComplete ? "mission-complete" : ""}`}
                key={id}
              >
                <div className="mission-board-top">
                  <span className={`mission-rank rank-${String(rank).charAt(0).toLowerCase()}`}>
                    {String(rank).toUpperCase()}-RANK
                  </span>
                  {isComplete ? (
                    <span className="mission-rank rank-d" style={{ background: "rgba(73, 168, 120, 0.15)", color: "#71d5a0" }}>
                      ✓ COMPLETED
                    </span>
                  ) : isInProgress ? (
                    <span className="status-in-progress-tag">
                      ▶ IN PROGRESS
                    </span>
                  ) : (
                    <span className="mission-rank" style={{ background: "#252c3c", color: "#8c97a8" }}>
                      AVAILABLE
                    </span>
                  )}
                </div>

                <p className="eyebrow">{category} {arc ? `· ${arc}` : ""}</p>
                <h3>{title}</h3>

                <div className="mission-meta-pills">
                  <span className="mission-meta-pill">
                    📍 <strong>{location}</strong>
                  </span>
                  <span className="mission-meta-pill">
                    👤 Client: <strong>{client}</strong>
                  </span>
                  <span className="mission-meta-pill">
                    ⚡ Req: <strong>{recommendedRank}</strong>
                  </span>
                </div>

                <p className="mission-board-description">{description}</p>

                {objectives.length > 0 && (
                  <div className="mission-objectives">
                    <div className="mission-objectives-title">Key Mission Objectives</div>
                    <ul>
                      {objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mission-board-bottom">
                  <div className="mission-reward-badge">
                    <span className="xp-reward">+{reward} XP</span>
                    <span className="ryo-reward">💰 {ryoReward}</span>
                  </div>

                  {isComplete ? (
                    <button
                      className="primary-button"
                      onClick={() => launchMission(mission, true)}
                      type="button"
                    >
                      Review Debrief ✓
                    </button>
                  ) : isInProgress ? (
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <button
                        className="primary-button mission-btn-in-progress"
                        onClick={() => launchMission(mission)}
                        type="button"
                      >
                        Resume Mission →
                      </button>
                      <button
                        className="text-link"
                        onClick={(e) => abandonMission(id, e)}
                        type="button"
                        style={{ color: "#ff7575", fontSize: "12px" }}
                        title="Abandon mission and return to Available"
                      >
                        Abandon
                      </button>
                    </div>
                  ) : (
                    <button
                      className="primary-button"
                      onClick={() => launchMission(mission)}
                      type="button"
                    >
                      Accept Mission →
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredMissions.length === 0 && (
          <p className="empty-state">No missions found matching your filter selection. Try adjusting your search query or rank filter.</p>
        )}

        <p className="mission-note">
          ✓ Real Mission Gameplay: Accepting an assignment places it in progress. You must fulfill all operational requirements to earn XP and rewards.
        </p>
      </section>
    );
  }

  function CharacterCard({ character }) {
    const [imgFailed, setImgFailed] = useState(false);
    const initial = character.name ? character.name.charAt(0) : "忍";
    const resolvedImg = character.image;

    return (
      <article className="character-card">
        <div className="character-image-wrap">
          {resolvedImg && !imgFailed ? (
            <img
              className="character-image"
              src={resolvedImg}
              alt={character.name}
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="character-placeholder-avatar">
              <span className="placeholder-kanji">忍</span>
              <span className="placeholder-initial">{initial}</span>
            </div>
          )}

          <span className="character-tag">
            {character.village ? character.village.toUpperCase() : "SHINOBI"}
          </span>

          <div className="character-overlay">
            <span>{character.rank ? character.rank.toUpperCase() : "NINJA"}</span>
            <h3>{character.name}</h3>
            <p>{character.nature}</p>
          </div>
        </div>

        <div className="character-card-body">
          <h3>{character.name}</h3>
          <p>{character.role} · {character.nature}</p>

          <button
            type="button"
            className={`favorite-button ${favoriteCharacters.includes(character.id) ? "is-favorite" : ""}`}
            onClick={() => toggleFavorite(character.id)}
            aria-label={favoriteCharacters.includes(character.id) ? `Remove ${character.name} from favorites` : `Add ${character.name} to favorites`}
            aria-pressed={favoriteCharacters.includes(character.id)}
          >
            {favoriteCharacters.includes(character.id) ? "★ Favorited" : "☆ Add Favorite"}
          </button>

          <button
            className="primary-button"
            onClick={() => openCharacter(character)}
          >
            View Profile →
          </button>
        </div>
      </article>
    );
  }

  function ProfileAvatar({ character }) {
    const [failed, setFailed] = useState(false);
    const resolvedImg = character.image;

    if (!resolvedImg || failed) {
      return (
        <div className="profile-placeholder-avatar">
          <span className="placeholder-kanji-lg">忍</span>
          <span className="placeholder-initial-lg">
            {character.name ? character.name.charAt(0) : "忍"}
          </span>
          <span className="placeholder-sub">
            {character.clan || character.village || "SHINOBI"}
          </span>
        </div>
      );
    }

    return (
      <img
        className="profile-image"
        src={resolvedImg}
        alt={character.name}
        onError={() => setFailed(true)}
      />
    );
  }

  function WorldAtlasPage() {
    const tabs = [
      { id: "Villages & Nations", icon: "🗺️", count: villages.length, data: villages },
      { id: "Clans & Bloodlines", icon: "🏯", count: clans.length, data: clans },
      { id: "Organizations", icon: "⚔️", count: organizations.length, data: organizations },
      { id: "Iconic Locations", icon: "⛩️", count: locations.length, data: locations },
      { id: "Historical Eras", icon: "📜", count: history.length, data: history },
    ];

    const activeTabData = tabs.find((t) => t.id === loreTab) || tabs[0];

    const filteredItems = activeTabData.data.filter((item) => {
      const q = loreSearch.trim().toLowerCase();
      if (!q) return true;
      const name = item.name ?? item.title ?? "";
      const japaneseName = item.japaneseName ?? "";
      const leader = item.leader ?? item.founder ?? "";
      const nation = item.nation ?? item.village ?? item.region ?? "";
      const desc = item.description ?? item.summary ?? "";
      const kekkei = item.kekkeiGenkai ?? "";
      const origin = item.origin ?? "";
      const type = item.type ?? "";
      return (
        name.toLowerCase().includes(q) ||
        japaneseName.toLowerCase().includes(q) ||
        leader.toLowerCase().includes(q) ||
        nation.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        kekkei.toLowerCase().includes(q) ||
        origin.toLowerCase().includes(q) ||
        type.toLowerCase().includes(q)
      );
    });

    const activeDossierItem = selectedLoreItem || selectedNation;

    return (
      <section className="atlas-section">
        <div className="atlas-hero">
          <div>
            <p className="eyebrow">GEOGRAPHICAL & WORLD INTELLIGENCE</p>
            <h2>Shinobi World Atlas & Lore</h2>
            <p>
              Explore the five great nations, minor hidden villages, legendary clans,
              covert organizations, sacred realms, and pivotal historical eras of the ninja world.
            </p>
          </div>
          <div className="atlas-hero-symbol">忍界</div>
        </div>

        <div className="atlas-stats">
          <div className="atlas-stat">
            <span>VILLAGES & NATIONS</span>
            <strong>{String(villages.length).padStart(2, "0")}</strong>
          </div>
          <div className="atlas-stat">
            <span>CLANS & BLOODLINES</span>
            <strong>{String(clans.length).padStart(2, "0")}</strong>
          </div>
          <div className="atlas-stat">
            <span>ORGANIZATIONS</span>
            <strong>{String(organizations.length).padStart(2, "0")}</strong>
          </div>
        </div>

        {activeDossierItem ? (
          <div className="lore-dossier">
            <button
              className="text-link"
              onClick={() => {
                setSelectedLoreItem(null);
                setSelectedNation(null);
              }}
              type="button"
            >
              ← Back to {loreTab} Archive
            </button>

            {/* Dossier Banner */}
            <div
              className="lore-dossier-banner"
              style={{
                "--nation-color": activeDossierItem.color || "#d44040",
              }}
            >
              <div className="lore-dossier-symbol">
                {activeDossierItem.symbol || activeDossierItem.kanji || (activeDossierItem.timeframe ? "📜" : "忍")}
              </div>
              <div>
                <p className="eyebrow">
                  {activeDossierItem.nation || activeDossierItem.village || activeDossierItem.type || activeDossierItem.region || "CONFIDENTIAL LORE"}
                  {activeDossierItem.kage ? ` · ${activeDossierItem.kage}` : ""}
                </p>
                <h2>
                  {activeDossierItem.name || activeDossierItem.title}
                  {activeDossierItem.japaneseName && (
                    <span style={{ fontSize: "18px", color: "#a49fb5", marginLeft: "10px", fontWeight: "normal" }}>
                      ({activeDossierItem.japaneseName})
                    </span>
                  )}
                </h2>
                {activeDossierItem.leader && (
                  <span className="nation-leader-tag" style={{ color: activeDossierItem.color || "#e5ad6b" }}>
                    Leader: {activeDossierItem.leader}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Fact Boxes */}
            <div className="lore-dossier-grid">
              {activeDossierItem.nation && (
                <div className="lore-fact-box">
                  <span>SOVEREIGN NATION</span>
                  <strong>{activeDossierItem.nation}</strong>
                </div>
              )}
              {activeDossierItem.founder && (
                <div className="lore-fact-box">
                  <span>FOUNDER</span>
                  <strong>{activeDossierItem.founder}</strong>
                </div>
              )}
              {activeDossierItem.foundedBy && (
                <div className="lore-fact-box">
                  <span>FOUNDED BY</span>
                  <strong>{activeDossierItem.foundedBy}</strong>
                </div>
              )}
              {activeDossierItem.village && (
                <div className="lore-fact-box">
                  <span>VILLAGE / AFFILIATION</span>
                  <strong>{activeDossierItem.village}</strong>
                </div>
              )}
              {activeDossierItem.kekkeiGenkai && (
                <div className="lore-fact-box">
                  <span>KEKKEI GENKAI / HIDEN</span>
                  <strong style={{ color: "#ff8989" }}>{activeDossierItem.kekkeiGenkai}</strong>
                </div>
              )}
              {activeDossierItem.base && (
                <div className="lore-fact-box">
                  <span>HEADQUARTERS BASE</span>
                  <strong>{activeDossierItem.base}</strong>
                </div>
              )}
              {activeDossierItem.region && (
                <div className="lore-fact-box">
                  <span>GEOGRAPHICAL REGION</span>
                  <strong>{activeDossierItem.region}</strong>
                </div>
              )}
              {activeDossierItem.timeframe && (
                <div className="lore-fact-box">
                  <span>HISTORICAL TIMEFRAME</span>
                  <strong>{activeDossierItem.timeframe}</strong>
                </div>
              )}
              {activeDossierItem.participants && (
                <div className="lore-fact-box">
                  <span>KEY PARTICIPANTS</span>
                  <strong>{activeDossierItem.participants}</strong>
                </div>
              )}
              {activeDossierItem.status && (
                <div className="lore-fact-box">
                  <span>CURRENT ERA STATUS</span>
                  <strong>{activeDossierItem.status}</strong>
                </div>
              )}
            </div>

            {/* Comprehensive Description */}
            <div className="lore-dossier-section">
              <h3>Dossier Intelligence Summary</h3>
              <p>{activeDossierItem.description || activeDossierItem.summary}</p>
            </div>

            {/* Clan Origin */}
            {activeDossierItem.origin && (
              <div className="lore-dossier-section">
                <h3>Ancestral Origins</h3>
                <p>{activeDossierItem.origin}</p>
              </div>
            )}

            {/* Strategic Objective for Organizations */}
            {activeDossierItem.objective && (
              <div className="lore-dossier-section">
                <h3>Core Strategic Objective</h3>
                <p>{activeDossierItem.objective}</p>
              </div>
            )}

            {/* Uniform */}
            {activeDossierItem.uniform && (
              <div className="lore-dossier-section">
                <h3>Uniform & Standard Regalia</h3>
                <p>{activeDossierItem.uniform}</p>
              </div>
            )}

            {/* Military Strength */}
            {activeDossierItem.militaryStrength && (
              <div className="lore-dossier-section">
                <h3>Military Strategy & Prowess</h3>
                <p>{activeDossierItem.militaryStrength}</p>
              </div>
            )}

            {/* Specialties / Traits */}
            {Array.isArray(activeDossierItem.specialties) && (
              <div className="lore-dossier-section">
                <h3>Specialized Disciplines</h3>
                <div className="nation-traits">
                  {activeDossierItem.specialties.map((spec) => (
                    <span key={spec}>{spec}</span>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(activeDossierItem.traits) && (
              <div className="lore-dossier-section">
                <h3>Clan Traits & Cultural Hallmarks</h3>
                <div className="nation-traits">
                  {activeDossierItem.traits.map((trait) => (
                    <span key={trait}>{trait}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Signature Techniques */}
            {Array.isArray(activeDossierItem.signatureTechniques) && (
              <div className="lore-dossier-section">
                <h3>Signature Secret Techniques</h3>
                <div className="nation-traits">
                  {activeDossierItem.signatureTechniques.map((tech) => (
                    <span key={tech} style={{ background: "#2a1c22", borderColor: "#7b3543", color: "#ffb8b8" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Notable Members / Shinobi */}
            {Array.isArray(activeDossierItem.notableShinobi) && (
              <div className="lore-dossier-section">
                <h3>Notable Historical & Modern Shinobi</h3>
                <p>{activeDossierItem.notableShinobi.join(" · ")}</p>
              </div>
            )}

            {Array.isArray(activeDossierItem.notableMembers) && (
              <div className="lore-dossier-section">
                <h3>Prominent Clan Figures</h3>
                <p>{activeDossierItem.notableMembers.join(" · ")}</p>
              </div>
            )}

            {Array.isArray(activeDossierItem.members) && (
              <div className="lore-dossier-section">
                <h3>Confirmed Operatives & Members</h3>
                <p>{activeDossierItem.members.join(" · ")}</p>
              </div>
            )}

            {/* Prominent Clans in Village */}
            {Array.isArray(activeDossierItem.prominentClans) && (
              <div className="lore-dossier-section">
                <h3>Prominent Noble Clans</h3>
                <p>{activeDossierItem.prominentClans.join(" · ")}</p>
              </div>
            )}

            {/* Key Landmarks */}
            {Array.isArray(activeDossierItem.keyLandmarks) && (
              <div className="lore-dossier-section">
                <h3>Key Landmarks & Defenses</h3>
                <p>{activeDossierItem.keyLandmarks.join(" · ")}</p>
              </div>
            )}

            {/* Key Events / Operations */}
            {Array.isArray(activeDossierItem.keyEvents) && (
              <div className="lore-dossier-section">
                <h3>Major Historical Events at this Location</h3>
                <ul className="lore-events-list">
                  {activeDossierItem.keyEvents.map((evt, i) => (
                    <li key={i}>{evt}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(activeDossierItem.notableOperations) && (
              <div className="lore-dossier-section">
                <h3>Classified Operations & Engagements</h3>
                <ul className="lore-events-list">
                  {activeDossierItem.notableOperations.map((op, i) => (
                    <li key={i}>{op}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(activeDossierItem.keyOutcomes) && (
              <div className="lore-dossier-section">
                <h3>Enduring Global Impacts & Outcomes</h3>
                <ul className="lore-events-list">
                  {activeDossierItem.keyOutcomes.map((out, i) => (
                    <li key={i}>{out}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cross-Archive Navigation Actions */}
            <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {activeDossierItem.name && activeDossierItem.nation && (
                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch("");
                    const targetVillage = activeDossierItem.name.replace(" Village", "");
                    setVillage(targetVillage);
                    setSelectedCharacter(null);
                    setActivePage("Characters");
                  }}
                  type="button"
                >
                  Explore Characters from {activeDossierItem.name} →
                </button>
              )}
              {activeDossierItem.kekkeiGenkai && (
                <button
                  className="primary-button"
                  onClick={() => {
                    setSearch(activeDossierItem.name.replace(" Clan", ""));
                    setSelectedCharacter(null);
                    setActivePage("Characters");
                  }}
                  type="button"
                >
                  Search {activeDossierItem.name} Members in Archive →
                </button>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Tab Navigation */}
            <div className="lore-tabs-bar">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`lore-tab-btn ${loreTab === tab.id ? "active" : ""}`}
                  onClick={() => {
                    setLoreTab(tab.id);
                    setLoreSearch("");
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.id}</span>
                  <span className="lore-tab-count">{tab.count}</span>
                </button>
              ))}
            </div>

            {/* Lore Controls */}
            <div className="lore-controls">
              <input
                type="search"
                placeholder={`Search ${loreTab} by name, leader, specialty, or lore...`}
                value={loreSearch}
                onChange={(e) => setLoreSearch(e.target.value)}
              />
            </div>

            <p className="archive-count">
              {filteredItems.length} {filteredItems.length === 1 ? "entry" : "entries"} in {loreTab}
            </p>

            {/* Lore Cards Grid */}
            <div className="lore-cards-grid">
              {filteredItems.map((item) => {
                const title = item.name ?? item.title ?? "Unknown";
                const subtitle =
                  item.japaneseName ||
                  item.nation ||
                  item.village ||
                  item.timeframe ||
                  item.type ||
                  "";
                const symbol = item.symbol || item.kanji || (item.timeframe ? "📜" : "忍");
                const desc = item.description || item.summary || "";
                const color = item.color || "#d44040";

                return (
                  <article
                    key={item.id}
                    className="lore-card"
                    style={{ "--nation-color": color }}
                    onClick={() => setSelectedLoreItem(item)}
                  >
                    <div className="lore-card-header">
                      <div>
                        <h3 className="lore-card-title">{title}</h3>
                        {subtitle && <div className="lore-card-subtitle">{subtitle}</div>}
                      </div>
                      <span className="lore-card-symbol">{symbol}</span>
                    </div>

                    <p className="lore-card-desc">
                      {desc.length > 150 ? `${desc.slice(0, 150)}...` : desc}
                    </p>

                    <div className="lore-tag-row">
                      {item.leader && (
                        <span className="lore-tag">
                          Leader: <strong>{item.leader.split(" (")[0]}</strong>
                        </span>
                      )}
                      {item.kekkeiGenkai && (
                        <span className="lore-tag lore-tag-highlight">
                          {item.kekkeiGenkai.split(" /")[0]}
                        </span>
                      )}
                      {item.kage && <span className="lore-tag">{item.kage}</span>}
                      {item.region && <span className="lore-tag">📍 {item.region.split(" (")[0]}</span>}
                      {item.timeframe && <span className="lore-tag">⏳ {item.timeframe}</span>}
                      {item.type && <span className="lore-tag">{item.type}</span>}
                    </div>

                    <div style={{ marginTop: "14px", display: "flex", justifyContent: "flex-end" }}>
                      <span style={{ fontSize: "12px", color: "#f16a5d", fontWeight: "700" }}>
                        View Dossier ↗
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredItems.length === 0 && (
              <p className="empty-state">No lore entries found matching "{loreSearch}".</p>
            )}
          </>
        )}

        <div className="atlas-note">
          <span className="atlas-note-symbol">巻</span>
          <div>
            <h3>Shinobi Historical & Geographical Field Notes</h3>
            <p>
              Select any nation, clan, organization, landmark, or historical era to inspect full intelligence dossiers, notable figures, and lasting geopolitical outcomes. Historical facts are derived from official canon timelines.
            </p>
          </div>
        </div>
      </section>
    );
  }

  function JutsuLibraryPage() {
    const filteredJutsu = jutsu.filter((item) => {
      const query = jutsuSearch.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        (item.japaneseName && item.japaneseName.toLowerCase().includes(query)) ||
        (item.user && item.user.toLowerCase().includes(query)) ||
        (Array.isArray(item.knownUsers) && item.knownUsers.some((u) => u.toLowerCase().includes(query))) ||
        (item.nature && item.nature.toLowerCase().includes(query)) ||
        (item.type && item.type.toLowerCase().includes(query)) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        (item.detailedDescription && item.detailedDescription.toLowerCase().includes(query));

      const matchesType =
        jutsuType === "All Types" ||
        item.type === jutsuType ||
        (jutsuType === "Kekkei Genkai" && item.type.startsWith("Kekkei"));

      const matchesRank =
        jutsuRank === "All Ranks" || item.rank === jutsuRank;

      return matchesSearch && matchesType && matchesRank;
    });

    const displayedJutsu = filteredJutsu.slice(0, visibleJutsuCount);

    return (
      <section className="section jutsu-section">
        <p className="eyebrow">SHINOBI TECHNIQUE DATABASE</p>
        <h2>Jutsu Library</h2>
        <p>Study techniques, chakra natures, ranks, and the shinobi who use them.</p>

        {selectedJutsu ? (
          <div className="jutsu-detail">
            <button className="text-link" onClick={() => setSelectedJutsu(null)}>
              ← Back to Jutsu Library
            </button>
            <div className="jutsu-detail-symbol">忍</div>
            <p className="eyebrow">{selectedJutsu.type} · RANK {selectedJutsu.rank}</p>
            <h2>
              {selectedJutsu.name}
              {selectedJutsu.japaneseName && (
                <span className="jutsu-japanese-title"> ({selectedJutsu.japaneseName})</span>
              )}
            </h2>
            <p>{selectedJutsu.detailedDescription || selectedJutsu.description}</p>
            <div className="jutsu-facts">
              <div><span>TYPE</span><strong>{selectedJutsu.type}</strong></div>
              <div><span>CHAKRA NATURE</span><strong>{selectedJutsu.nature}</strong></div>
              <div><span>RANK</span><strong>{selectedJutsu.rank}</strong></div>
              <div><span>PRIMARY USER</span><strong>{selectedJutsu.user}</strong></div>
              {selectedJutsu.classification && (
                <div><span>CLASSIFICATION</span><strong>{selectedJutsu.classification}</strong></div>
              )}
            </div>

            {(selectedJutsu.requirements || selectedJutsu.limitations) && (
              <div className="jutsu-extra-grid">
                {selectedJutsu.requirements && (
                  <div className="jutsu-extra-card">
                    <span className="eyebrow">REQUIREMENTS & PREREQUISITES</span>
                    <p>{selectedJutsu.requirements}</p>
                  </div>
                )}
                {selectedJutsu.limitations && (
                  <div className="jutsu-extra-card">
                    <span className="eyebrow">LIMITATIONS & DRAWBACKS</span>
                    <p>{selectedJutsu.limitations}</p>
                  </div>
                )}
              </div>
            )}

            {Array.isArray(selectedJutsu.knownUsers) && selectedJutsu.knownUsers.length > 0 && (
              <div className="jutsu-tag-section">
                <span className="eyebrow">KNOWN PRACTITIONERS & MASTERS</span>
                <div className="jutsu-tags-list">
                  {selectedJutsu.knownUsers.map((u) => (
                    <span key={u} className="jutsu-tag-item">{u}</span>
                  ))}
                </div>
              </div>
            )}

            {Array.isArray(selectedJutsu.relatedTechniques) && selectedJutsu.relatedTechniques.length > 0 && (
              <div className="jutsu-tag-section">
                <span className="eyebrow">RELATED TECHNIQUES & DERIVATIVES</span>
                <div className="jutsu-tags-list">
                  {selectedJutsu.relatedTechniques.map((r) => (
                    <span key={r} className="jutsu-tag-item jutsu-tag-gold">{r}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="jutsu-controls">
              <input
                type="search"
                placeholder="Search jutsu, user, chakra nature, or type..."
                value={jutsuSearch}
                onChange={(event) => {
                  setJutsuSearch(event.target.value);
                  setVisibleJutsuCount(24);
                }}
              />
              <select
                value={jutsuType}
                onChange={(event) => {
                  setJutsuType(event.target.value);
                  setVisibleJutsuCount(24);
                }}
              >
                <option>All Types</option>
                <option>Ninjutsu</option>
                <option>Genjutsu</option>
                <option>Taijutsu</option>
                <option>Senjutsu</option>
                <option>Medical Ninjutsu</option>
                <option>Space-Time Ninjutsu</option>
                <option>Kekkei Genkai</option>
                <option>Fūinjutsu</option>
                <option>Dōjutsu</option>
              </select>
              <select
                value={jutsuRank}
                onChange={(event) => {
                  setJutsuRank(event.target.value);
                  setVisibleJutsuCount(24);
                }}
              >
                <option>All Ranks</option>
                <option value="S">Rank S</option>
                <option value="A">Rank A</option>
                <option value="B">Rank B</option>
                <option value="C">Rank C</option>
                <option value="D">Rank D</option>
                <option value="E">Rank E</option>
              </select>
            </div>
            <p className="archive-count">
              Showing {displayedJutsu.length} of {filteredJutsu.length} techniques
              {filteredJutsu.length > 0 && ` (${jutsu.length} total in archives)`}
            </p>
            <div className="jutsu-grid">
              {displayedJutsu.map((item) => (
                <button
                  key={item.id}
                  className="jutsu-card"
                  onClick={() => setSelectedJutsu(item)}
                >
                  <div className="jutsu-card-top">
                    <span className="jutsu-symbol">術</span>
                    <span className="jutsu-rank">RANK {item.rank}</span>
                  </div>
                  <p className="eyebrow">{item.type}</p>
                  <h3>{item.name}</h3>
                  {item.japaneseName && (
                    <small className="jutsu-jp-sub">{item.japaneseName}</small>
                  )}
                  <p>{item.description}</p>
                  <div className="jutsu-card-meta">
                    <span>{item.nature}</span>
                    <span>↗ Details</span>
                  </div>
                  <small>Known user: {item.user}</small>
                </button>
              ))}
            </div>
            {filteredJutsu.length > displayedJutsu.length && (
              <div className="load-more-container">
                <button
                  className="load-more-btn"
                  onClick={() => setVisibleJutsuCount((prev) => prev + 24)}
                >
                  Load More Techniques (+24)
                </button>
              </div>
            )}
            {filteredJutsu.length === 0 && (
              <p className="empty-state">No techniques found. Try another search or filter.</p>
            )}
          </>
        )}
      </section>
    );
  }

  function QuizPage() {
    const currentQuestion = activeQuestions[questionIndex];

    const matchingPoolCount = quizQuestions.filter((q) => {
      const matchCat = quizCategory === "All Categories" || q.category === quizCategory;
      const matchDiff = quizDifficulty === "All Difficulties" || q.difficulty === quizDifficulty;
      return matchCat && matchDiff;
    }).length;

    const handleCategoryChange = (newCat) => {
      setQuizCategory(newCat);
      resetQuiz(newCat, quizDifficulty, quizLength);
    };

    const handleDifficultyChange = (newDiff) => {
      setQuizDifficulty(newDiff);
      resetQuiz(quizCategory, newDiff, quizLength);
    };

    const handleLengthChange = (newLen) => {
      setQuizLength(newLen);
      resetQuiz(quizCategory, quizDifficulty, newLen);
    };

    const totalQuestions = activeQuestions.length || 1;
    const scorePercentage = Math.round((score / totalQuestions) * 100);

    let rankTitle = "🍃 Academy Genin";
    let rankDescription =
      "You have shown courage and potential, but further study at the Ninja Academy is advised before attempting higher-rank missions. Review your scrolls and retake the exam!";

    if (scorePercentage >= 90) {
      rankTitle = "👑 Hokage / Shinobi Grandmaster";
      rankDescription =
        "Legendary mastery! Your encyclopedic knowledge of the shinobi world, secret arts, and historical wars rivals the Great Library of Konoha.";
    } else if (scorePercentage >= 75) {
      rankTitle = "⚔️ Jonin Elite";
      rankDescription =
        "Outstanding tactical and historical insight! You possess the wisdom, discipline, and jutsu acumen expected of Konoha's elite Jonin squad leaders.";
    } else if (scorePercentage >= 50) {
      rankTitle = "📜 Chunin Official";
      rankDescription =
        "Chunin qualification granted! You demonstrate a solid grasp of core ninja concepts, nature transformations, and village alliances.";
    }

    return (
      <section className="section quiz-section">
        <p className="eyebrow">CHUNIN SELECTION EXAMS · KNOWLEDGE TRIAL</p>
        <h2>Chunin Exams Question Bank</h2>
        <p>
          Test your shinobi knowledge with over {quizQuestions.length} verified canon questions across 8 comprehensive lore categories.
        </p>

        {/* Configuration Bar */}
        <div className="quiz-controls-bar">
          <div className="quiz-control-group">
            <label>CATEGORY</label>
            <select
              value={quizCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="All Categories">All Categories ({quizQuestions.length})</option>
              {QUIZ_CATEGORIES.slice(1).map((cat) => {
                const count = quizQuestions.filter((q) => q.category === cat).length;
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          <div className="quiz-control-group">
            <label>DIFFICULTY</label>
            <select
              value={quizDifficulty}
              onChange={(e) => handleDifficultyChange(e.target.value)}
            >
              <option value="All Difficulties">All Difficulties (Any)</option>
              <option value="Easy">Easy (Genin Level)</option>
              <option value="Medium">Medium (Chunin Level)</option>
              <option value="Hard">Hard (Jonin / Anbu Level)</option>
            </select>
          </div>

          <div className="quiz-control-group">
            <label>EXAM LENGTH</label>
            <select
              value={quizLength}
              onChange={(e) => handleLengthChange(e.target.value)}
            >
              <option value="10">10 Questions (Quick)</option>
              <option value="25">25 Questions (Standard)</option>
              <option value="50">50 Questions (Extended)</option>
              <option value="All">All Matching ({matchingPoolCount})</option>
            </select>
          </div>

          <div className="quiz-control-group">
            <label>&nbsp;</label>
            <button
              className="primary-button quiz-restart-btn"
              onClick={() => resetQuiz(quizCategory, quizDifficulty, quizLength)}
              title="Reshuffle question and option orders"
              type="button"
            >
              ↻ New Exam
            </button>
          </div>
        </div>

        <div className="quiz-panel">
          {quizFinished ? (
            <div className="quiz-results-container">
              <div className="quiz-emblem">🏆</div>
              <p className="eyebrow">CHUNIN SELECTION EXAM · OFFICIAL EVALUATION</p>
              <h2>Examination Completed!</h2>

              <div className="quiz-result-score">
                {score} <span>/ {activeQuestions.length}</span>
              </div>

              <div className="quiz-percentage">
                {scorePercentage}% Accuracy Rating
              </div>

              <div className="quiz-summary-stats">
                <div className="quiz-stat-pill">
                  <span>CATEGORY</span>
                  <strong>{quizCategory === "All Categories" ? "Comprehensive" : quizCategory}</strong>
                </div>
                <div className="quiz-stat-pill">
                  <span>DIFFICULTY</span>
                  <strong>{quizDifficulty}</strong>
                </div>
                <div className="quiz-stat-pill">
                  <span>CORRECT</span>
                  <strong style={{ color: "#74d99f" }}>{score}</strong>
                </div>
                <div className="quiz-stat-pill">
                  <span>INCORRECT</span>
                  <strong style={{ color: "#f16a5d" }}>{activeQuestions.length - score}</strong>
                </div>
              </div>

              <div className="quiz-rank">
                <span>OFFICIAL SHINOBI RANK DESIGNATION</span>
                <h3>{rankTitle}</h3>
                <p className="quiz-description">{rankDescription}</p>
              </div>

              <div className="quiz-results-actions">
                <button
                  className="primary-button"
                  onClick={() => resetQuiz(quizCategory, quizDifficulty, quizLength)}
                  type="button"
                >
                  ↻ Retake Exam (Same Settings)
                </button>
                <button
                  className="quiz-secondary-button"
                  onClick={() => {
                    setQuizCategory("All Categories");
                    setQuizDifficulty("All Difficulties");
                    setQuizLength(10);
                    resetQuiz("All Categories", "All Difficulties", 10);
                  }}
                  type="button"
                >
                  ⚡ Start New 10-Question Random Exam
                </button>
              </div>
            </div>
          ) : !currentQuestion ? (
            <div className="quiz-empty">
              <p>No questions found matching your filter selection.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setQuizCategory("All Categories");
                  setQuizDifficulty("All Difficulties");
                  setQuizLength(10);
                  resetQuiz("All Categories", "All Difficulties", 10);
                }}
                type="button"
              >
                Reset to All Questions
              </button>
            </div>
          ) : (
            <>
              <div className="quiz-header">
                <div>
                  <div className="quiz-badges-row">
                    <span className="quiz-badge quiz-badge-category">
                      {currentQuestion.category || "General"}
                    </span>
                    <span
                      className={`quiz-badge quiz-badge-${(
                        currentQuestion.difficulty || "medium"
                      ).toLowerCase()}`}
                    >
                      {currentQuestion.difficulty || "Medium"}
                    </span>
                  </div>
                  <p className="eyebrow">CHUNIN WRITTEN EXAMINATION</p>
                </div>
                <span className="quiz-counter">
                  Question {questionIndex + 1} of {activeQuestions.length}
                </span>
              </div>

              <div className="quiz-progress">
                <div
                  className="quiz-progress-fill"
                  style={{
                    width: `${
                      ((questionIndex + 1) / activeQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="quiz-instructions">
                Select the correct answer to prove your knowledge. Each confirmed answer reveals verified canon lore and insights.
              </div>

              <h2 className="quiz-question">{currentQuestion.question}</h2>

              <div className="quiz-options">
                {currentQuestion.options.map((option, index) => {
                  let optionClass = "quiz-option";

                  if (selectedAnswer === index) {
                    optionClass += " selected";
                  }

                  if (answerChecked) {
                    if (index === currentQuestion.answer) {
                      optionClass += " correct";
                    } else if (selectedAnswer === index) {
                      optionClass += " incorrect";
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={optionClass}
                      disabled={answerChecked}
                      onClick={() => setSelectedAnswer(index)}
                      type="button"
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {answerChecked && index === currentQuestion.answer && (
                        <span className="option-mark">✓</span>
                      )}
                      {answerChecked &&
                        selectedAnswer === index &&
                        index !== currentQuestion.answer && (
                          <span className="option-mark">✗</span>
                        )}
                    </button>
                  );
                })}
              </div>

              {answerChecked && (
                <div
                  className={`quiz-feedback ${
                    selectedAnswer === currentQuestion.answer
                      ? "feedback-correct"
                      : "feedback-incorrect"
                  }`}
                >
                  <strong>
                    {selectedAnswer === currentQuestion.answer
                      ? "✓ Correct! Excellent shinobi knowledge."
                      : `✗ Incorrect. The correct answer was: ${
                          currentQuestion.options[currentQuestion.answer]
                        }`}
                  </strong>
                  {currentQuestion.explanation && (
                    <p>{currentQuestion.explanation}</p>
                  )}
                </div>
              )}

              <div className="quiz-footer">
                <span>
                  Current Score: <strong>{score}</strong> / {questionIndex + (answerChecked ? 1 : 0)}
                </span>

                {!answerChecked ? (
                  <button
                    className="primary-button"
                    disabled={selectedAnswer === null}
                    onClick={checkAnswer}
                    type="button"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    className="primary-button"
                    onClick={nextQuestion}
                    type="button"
                  >
                    {questionIndex + 1 === activeQuestions.length
                      ? "Finish Exam →"
                      : "Next Question →"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    );
  }

  const rankDetails = getShinobiRankDetails(missionXP);

  const NAV_ITEMS = [
    { id: "Dashboard", label: "Command Center", icon: "◈", badge: "Live" },
    { id: "Characters", label: "Character Archive", icon: "♟", badge: `${characters.length}` },
    { id: "Jutsu Library", label: "Jutsu Library", icon: "✦", badge: `${jutsu.length}` },
    { id: "Missions", label: "Shinobi Missions", icon: "▤", badge: `${completedMissions.length}/${missions.length}` },
    { id: "Chunin Exams", label: "Chunin Exams", icon: "🏆", badge: `${quizQuestions.length}` },
    { id: "World Atlas", label: "World Atlas", icon: "⌖", badge: "5 Nations" },
    { id: "World Lore", label: "World Lore", icon: "📜", badge: "Archives" },
  ];

  const commandCards = [
    {
      id: "characters",
      page: "Characters",
      title: "Character Archive",
      subtitle: `${characters.length} SHINOBI DOSSIERS`,
      desc: "Explore ninja profiles, clan bloodlines, elemental affinities, and canon bios across all 5 Great Nations.",
      badge: "ROSTER",
      symbol: "♟",
      action: "Access Archive →",
      accent: "crimson",
    },
    {
      id: "jutsu",
      page: "Jutsu Library",
      title: "Jutsu Library",
      subtitle: `${jutsu.length} DOCUMENTED ARTS`,
      desc: "Study Ninjutsu, Genjutsu, Taijutsu, and forbidden Kekkei Genkai categorized by chakra nature and rank.",
      badge: "TECHNIQUES",
      symbol: "✦",
      action: "Study Techniques →",
      accent: "chakra",
    },
    {
      id: "missions",
      page: "Missions",
      title: "Shinobi Missions",
      subtitle: `${completedMissions.length}/${missions.length} COMPLETED`,
      desc: "Interactive tactical assignments from D-rank academy trials to high-stakes S-rank clandestine operations.",
      badge: "OPERATIONS",
      symbol: "▤",
      action: "Command Board →",
      accent: "crimson",
    },
    {
      id: "quiz",
      page: "Chunin Exams",
      title: "Chunin Exams",
      subtitle: `${quizQuestions.length} VERIFIED QUESTIONS`,
      desc: "Challenge your lore acumen in the Forest of Death and prove your worth for Chunin promotion.",
      badge: "TRIAL",
      symbol: "🏆",
      action: "Enter Exam Hall →",
      accent: "gold",
    },
    {
      id: "atlas",
      page: "World Atlas",
      title: "World Atlas",
      subtitle: `${villages.length} REGIONS & REALMS`,
      desc: "Strategic maps, geopolitical borders, village strongholds, and notable landmarks of the Shinobi continent.",
      badge: "GEOGRAPHY",
      symbol: "⌖",
      action: "Inspect Atlas →",
      accent: "blue",
    },
    {
      id: "lore",
      page: "World Lore",
      title: "World Lore",
      subtitle: "CHRONICLES & CLANS",
      desc: "Deep intelligence dossiers covering legendary clans, hidden organizations, sacred relics, and world wars.",
      badge: "ARCHIVES",
      symbol: "📜",
      action: "Read Chronicles →",
      accent: "purple",
    },
  ];

  const nextMission =
    (inProgressMissions.length > 0
      ? missions.find((m) => inProgressMissions.includes(m.id))
      : null) ||
    missions.find((m) => !completedMissions.includes(m.id)) ||
    missions[0];
  const isNextInProgress = inProgressMissions.includes(nextMission.id);
  const nextMissionPass = getMissionPassCriteria(nextMission.rank, 3);

  const achievements = [
    {
      id: "first_blood",
      title: "Genin Awakening",
      desc: "Complete your first official shinobi mission assignment.",
      icon: "⚡",
      unlocked: completedMissions.length >= 1,
      progress: `${Math.min(completedMissions.length, 1)} / 1`,
    },
    {
      id: "chunin_cadet",
      title: "Chunin Candidate",
      desc: "Complete at least 5 classified shinobi missions.",
      icon: "📜",
      unlocked: completedMissions.length >= 5,
      progress: `${Math.min(completedMissions.length, 5)} / 5`,
    },
    {
      id: "jonin_veteran",
      title: "Jonin Veteran",
      desc: "Complete 15 classified shinobi missions across the nations.",
      icon: "⚔️",
      unlocked: completedMissions.length >= 15,
      progress: `${Math.min(completedMissions.length, 15)} / 15`,
    },
    {
      id: "s_rank_legend",
      title: "S-Rank Operative",
      desc: "Successfully execute a perilous S-Rank mission challenge.",
      icon: "👑",
      unlocked: completedMissions.some((id) => {
        const m = missions.find((item) => (item.id ?? item.title) === id);
        return m && m.rank === "S";
      }),
      progress: completedMissions.some((id) => {
        const m = missions.find((item) => (item.id ?? item.title) === id);
        return m && m.rank === "S";
      })
        ? "Unlocked"
        : "Locked",
    },
    {
      id: "ninja_collector",
      title: "Leaf Vanguard",
      desc: "Favorite 5 or more legendary shinobi in your archive.",
      icon: "★",
      unlocked: favoriteCharacters.length >= 5,
      progress: `${Math.min(favoriteCharacters.length, 5)} / 5`,
    },
    {
      id: "chakra_master",
      title: "Chakra Adept",
      desc: "Accumulate 1,000 or more Chakra XP through duty and training.",
      icon: "✦",
      unlocked: missionXP >= 1000,
      progress: `${Math.min(missionXP, 1000)} / 1000 XP`,
    },
  ];

  return (
    <div className={`app ${ambientFX ? "ambient-fx-enabled" : ""}`}>
      <aside className={`sidebar ${mobileNavOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-crest">
            <span className="brand-crest-kanji">忍</span>
          </div>
          <div className="brand-text">
            <h2 className="logo">SHINOBI OS</h2>
            <span className="brand-tag">TACTICAL INTEL // V2.5</span>
          </div>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close navigation menu"
            type="button"
          >
            ✕
          </button>
        </div>

        <p className="menu-title">TACTICAL NAVIGATION</p>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? "active" : ""}`}
              onClick={() => navigate(item.id)}
              type="button"
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span className="nav-link-label">{item.label}</span>
              {item.badge && <span className="nav-link-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="village-card">
          <div className="village-header">
            <span className="village-eyebrow">YOUR ALLEGIANCE</span>
            <span className="village-crest">🍃</span>
          </div>
          <h3>Hidden Leaf Village</h3>
          <p className="village-motto">Will of Fire</p>
          <div className="sidebar-xp-bar-wrap">
            <div className="sidebar-xp-labels">
              <span>{rankDetails.rankName}</span>
              <span>{rankDetails.nextXP ? `${missionXP} / ${rankDetails.nextXP} XP` : `${missionXP} XP`}</span>
            </div>
            <div className="sidebar-xp-track">
              <div
                className="sidebar-xp-fill"
                style={{ width: `${rankDetails.progressPercent}%`, backgroundColor: rankDetails.badgeColor }}
              ></div>
            </div>
          </div>
        </div>
      </aside>

      {mobileNavOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileNavOpen}
              type="button"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            <div className="topbar-title-group">
              <div className="eyebrow-tactical">
                <span className="tactical-pulse-dot"></span>
                <span>LEAF INTEL NETWORK // LIVE FEED</span>
              </div>
              <h1 className="topbar-heading">
                {activePage === "Dashboard"
                  ? "Shinobi Command Center"
                  : activePage === "World Lore"
                  ? "Shinobi World Lore"
                  : activePage}
              </h1>
            </div>
          </div>

          <div className="topbar-right">
            <div className="topbar-search-box">
              <span className="topbar-search-icon">🔍</span>
              <input
                type="search"
                placeholder="Search shinobi archive..."
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && globalSearch.trim()) {
                    setSearch(globalSearch.trim());
                    navigate("Characters");
                  }
                }}
                aria-label="Search shinobi archives"
              />
              {globalSearch && (
                <button
                  className="search-clear-btn"
                  onClick={() => setGlobalSearch("")}
                  aria-label="Clear search"
                  type="button"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              className="player-profile-pill"
              onClick={() => {
                setTempPlayerName(playerName);
                setSettingsOpen(true);
              }}
              title="Open Shinobi Dossier & Settings"
              type="button"
            >
              <div className="player-avatar-circle">
                <span>忍</span>
              </div>
              <div className="player-info-text">
                <span className="player-codename">{playerName}</span>
                <span className="player-rank-sub">{rankDetails.rankName} · {missionXP} XP</span>
              </div>
              <span className="settings-trigger-icon" aria-hidden="true">⚙</span>
            </button>
          </div>
        </header>

        {activePage === "Dashboard" && (
          <>
            {/* Cinematic Hero Command Banner */}
            <section className="hero">
              <div className="hero-content">
                <div className="hero-status-pill">
                  <span className="hero-status-dot"></span>
                  <span>KONOHAGAKURE COMMAND DISPATCH // WILL OF FIRE</span>
                </div>
                <h2>
                  THE WILL OF FIRE
                  <br />
                  <span className="hero-subheading">TACTICAL COMMAND</span>
                </h2>
                <p>
                  Welcome back, <strong>{playerName}</strong>. Leaf Intelligence streams, forbidden jutsu scrolls, and classified operations are primed. Advance through the ninja ranks and defend the realm.
                </p>
                <div className="hero-actions">
                  <button
                    className="primary-button hero-cta"
                    onClick={() => {
                      setActivePage("Missions");
                      launchMission(nextMission);
                    }}
                    type="button"
                  >
                    {isNextInProgress ? "Resume Mission Assignment →" : "Deploy on Assignment →"}
                  </button>
                  <button
                    className="secondary-button"
                    onClick={() => navigate("Chunin Exams")}
                    type="button"
                  >
                    🏆 Chunin Exam Trial
                  </button>
                  <button
                    className="ghost-button"
                    onClick={() => navigate("Characters")}
                    type="button"
                  >
                    ♟ Browse Ninja Archive
                  </button>
                </div>
              </div>
              <div className="hero-symbol" aria-hidden="true">木ノ葉</div>
            </section>

            {/* Tactical Progression Matrix (Real State) */}
            <section className="stats-grid">
              <div className="stat-card">
                <div className="stat-card-header">
                  <span>CHAKRA EXPERIENCE</span>
                  <span className="stat-badge" style={{ color: rankDetails.badgeColor }}>{rankDetails.rankName}</span>
                </div>
                <h2>{missionXP} <span className="stat-unit">XP</span></h2>
                <div className="stat-progress-bar">
                  <div
                    className="stat-progress-fill"
                    style={{ width: `${rankDetails.progressPercent}%`, backgroundColor: rankDetails.badgeColor }}
                  ></div>
                </div>
                <p>
                  {rankDetails.nextXP
                    ? `${missionXP} / ${rankDetails.nextXP} XP to promotion`
                    : "👑 Maximum Hokage rank achieved"}
                </p>
              </div>

              <div className="stat-card">
                <div className="stat-card-header">
                  <span>MISSION CLEARANCE</span>
                  <span className="stat-badge">{completedMissions.length} OF {missions.length}</span>
                </div>
                <h2>{completedMissions.length} <span className="stat-unit">/ {missions.length}</span></h2>
                <div className="stat-progress-bar">
                  <div
                    className="stat-progress-fill stat-fill-crimson"
                    style={{ width: `${Math.round((completedMissions.length / missions.length) * 100)}%` }}
                  ></div>
                </div>
                <p>
                  {Math.round((completedMissions.length / missions.length) * 100)}% total completion
                  {inProgressMissions.length > 0 ? ` · ${inProgressMissions.length} active assignment` : ""}
                </p>
              </div>

              <div className="stat-card">
                <div className="stat-card-header">
                  <span>SHINOBI ARCHIVE</span>
                  <span className="stat-badge">5 NATIONS</span>
                </div>
                <h2>{characters.length} <span className="stat-unit">NINJA</span></h2>
                <div className="stat-progress-bar">
                  <div
                    className="stat-progress-fill stat-fill-blue"
                    style={{ width: `${Math.min(100, Math.round((favoriteCharacters.length / 10) * 100))}%` }}
                  ></div>
                </div>
                <p>
                  {favoriteCharacters.length} marked as favorites in archive
                </p>
              </div>

              <div className="stat-card">
                <div className="stat-card-header">
                  <span>JUTSU ENCYCLOPEDIA</span>
                  <span className="stat-badge">5 NATURES</span>
                </div>
                <h2>{jutsu.length} <span className="stat-unit">ARTS</span></h2>
                <div className="stat-progress-bar">
                  <div className="stat-progress-fill stat-fill-gold" style={{ width: "100%" }}></div>
                </div>
                <p>
                  Ninjutsu, Genjutsu, Taijutsu & Kekkei Genkai
                </p>
              </div>
            </section>

            {/* Tactical Command Portals (6 Feature Cards) */}
            <section className="section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">COMMAND CENTER PORTALS</p>
                  <h2>Intelligence Networks & Operations</h2>
                </div>
              </div>
              <div className="command-grid">
                {commandCards.map((card) => (
                  <div
                    key={card.id}
                    className={`command-card accent-${card.accent}`}
                    onClick={() => navigate(card.page)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(card.page);
                      }
                    }}
                  >
                    <div className="command-card-top">
                      <span className="command-card-symbol">{card.symbol}</span>
                      <span className="command-card-badge">{card.badge}</span>
                    </div>
                    <span className="command-card-sub">{card.subtitle}</span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <span className="command-card-link">{card.action}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Mission Control: Active or Next Assignment */}
            <section className="section mission-control-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">MISSION CONTROL DISPATCH</p>
                  <h2>Active Assignment Briefing</h2>
                </div>
                <button
                  className="text-link"
                  onClick={() => navigate("Missions")}
                  type="button"
                >
                  VIEW ALL 75 MISSIONS →
                </button>
              </div>
              <div
                className="mission-control-dossier"
                onClick={() => {
                  setActivePage("Missions");
                  launchMission(nextMission);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActivePage("Missions");
                    launchMission(nextMission);
                  }
                }}
                title={`Click to launch ${nextMission.title}`}
              >
                <div className="mission-control-left">
                  <div className={`mission-rank-seal rank-${String(nextMission.rank).toLowerCase()}`}>
                    <span>RANK</span>
                    <strong>{nextMission.rank}</strong>
                  </div>
                </div>
                <div className="mission-control-body">
                  <div className="mission-control-tags">
                    <span className="mission-control-status-tag">
                      {isNextInProgress ? "● IN PROGRESS // RESUME" : "○ ASSIGNED // READY FOR DEPLOYMENT"}
                    </span>
                    <span className="mission-control-cat-tag">
                      {nextMission.category.toUpperCase()}
                    </span>
                    {nextMission.location && (
                      <span className="mission-control-loc-tag">
                        📍 {nextMission.location}
                      </span>
                    )}
                  </div>
                  <h3>{nextMission.title}</h3>
                  <p className="mission-control-desc">{nextMission.description}</p>
                  <div className="mission-control-meta">
                    <span>Target: <strong>{nextMission.client || "Leaf Village Command"}</strong></span>
                    <span>Requirement: <strong>Pass {nextMissionPass.needed} of {nextMissionPass.total} Objectives</strong></span>
                  </div>
                </div>
                <div className="mission-control-right">
                  <div className="mission-control-reward">
                    <span>REWARD</span>
                    <strong>+{nextMission.reward} XP</strong>
                  </div>
                  <button
                    className="primary-button mission-deploy-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePage("Missions");
                      launchMission(nextMission);
                    }}
                    type="button"
                  >
                    {isNextInProgress ? "Resume Op →" : "Deploy Now →"}
                  </button>
                </div>
              </div>
            </section>

            {/* Real Shinobi Achievements Grid */}
            <section className="section achievements-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">OPERATIVE ACCOLADES</p>
                  <h2>Shinobi Honor & Achievements</h2>
                </div>
              </div>
              <div className="achievements-grid">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className={`achievement-card ${ach.unlocked ? "unlocked" : "locked"}`}
                  >
                    <div className="achievement-icon-wrap">
                      <span className="achievement-icon">{ach.icon}</span>
                    </div>
                    <div className="achievement-info">
                      <div className="achievement-title-row">
                        <h4>{ach.title}</h4>
                        <span className={`achievement-status-badge ${ach.unlocked ? "badge-unlocked" : "badge-locked"}`}>
                          {ach.unlocked ? "✓ EARNED" : "LOCKED"}
                        </span>
                      </div>
                      <p>{ach.desc}</p>
                      <div className="achievement-progress-text">Progress: {ach.progress}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Legends Spotlight */}
            <section className="section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">LEGENDARY OPERATIVES</p>
                  <h2>Featured Shinobi Spotlight</h2>
                </div>
                <button
                  className="text-link"
                  onClick={() => navigate("Characters")}
                  type="button"
                >
                  EXPLORE ALL {characters.length} SHINOBI →
                </button>
              </div>
              <div className="character-grid">
                {characters.slice(0, 3).map((character) => (
                  <CharacterCard
                    key={character.id}
                    character={character}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === "Characters" && (
          <section className="section archive-section">
            <p className="eyebrow">THE SHINOBI ARCHIVE</p>
            <h2>Discover the Shinobi World</h2>
            <p>
              Search the archive and select a character to learn more.
            </p>

            <div className="archive-controls">
              <input
                type="search"
                placeholder="Search name, alias, clan, ability, or village..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setSelectedCharacter(null);
                  setVisibleCount(24);
                }}
              />
              <select
                value={village}
                onChange={(event) => {
                  setVillage(event.target.value);
                  setSelectedCharacter(null);
                  setVisibleCount(24);
                }}
              >
                <option>All Villages</option>
                <option>Hidden Leaf</option>
                <option>Hidden Sand</option>
                <option>Hidden Mist</option>
                <option>Hidden Cloud</option>
                <option>Hidden Stone</option>
                <option>Hidden Rain</option>
                <option>Hidden Waterfall</option>
                <option>Hidden Sound</option>
                <option>Hidden Hot Water</option>
                <option>Hidden Grass</option>
                <option>Land of Iron</option>
                <option>Land of Waves</option>
                <option>Mount Myoboku</option>
                <option>The Moon</option>
              </select>
              <select
                value={characterRank}
                onChange={(event) => {
                  setCharacterRank(event.target.value);
                  setSelectedCharacter(null);
                  setVisibleCount(24);
                }}
              >
                <option>All Ranks</option>
                <option value="Hokage">Hokage</option>
                <option value="Kazekage">Kazekage</option>
                <option value="Mizukage">Mizukage</option>
                <option value="Raikage">Raikage</option>
                <option value="Tsuchikage">Tsuchikage</option>
                <option value="Jonin">Jonin</option>
                <option value="Chunin">Chunin</option>
                <option value="Genin">Genin</option>
                <option value="Anbu">Anbu</option>
                <option value="Tailed Beast">Tailed Beast</option>
                <option value="Sage">Sage / Deity</option>
              </select>
              <button
                type="button"
                className={`favorite-filter ${showFavoritesOnly ? "active" : ""}`}
                onClick={() => {
                  setShowFavoritesOnly((previous) => !previous);
                  setSelectedCharacter(null);
                  setVisibleCount(24);
                }}
                aria-pressed={showFavoritesOnly}
              >
                {showFavoritesOnly ? "★ Showing Favorites" : "☆ Show Favorites"}
              </button>
            </div>

            {selectedCharacter ? (
              <div className="profile-panel">
                <button
                  className="text-link"
                  onClick={() => setSelectedCharacter(null)}
                >
                  ← Back to archive
                </button>
                <div className="profile-layout">
                  <ProfileAvatar key={selectedCharacter.id} character={selectedCharacter} />

                  <div className="profile-details">
                    <p className="eyebrow">SHINOBI PROFILE</p>
                    <h2>
                      {selectedCharacter.name}
                      {selectedCharacter.japaneseName && (
                        <span className="profile-japanese"> ({selectedCharacter.japaneseName})</span>
                      )}
                    </h2>
                    <button
                      type="button"
                      className={`favorite-button ${favoriteCharacters.includes(selectedCharacter.id) ? "is-favorite" : ""}`}
                      onClick={() => toggleFavorite(selectedCharacter.id)}
                      aria-pressed={favoriteCharacters.includes(selectedCharacter.id)}
                    >
                      {favoriteCharacters.includes(selectedCharacter.id) ? "★ Remove Favorite" : "☆ Add to Favorites"}
                    </button>
                    <span className="profile-rank">
                      {selectedCharacter.rank}
                    </span>
                    {selectedCharacter.status && (
                      <span className={`profile-status-badge status-${String(selectedCharacter.status).toLowerCase().replace(/[^a-z]/g, "")}`}>
                        ● {selectedCharacter.status}
                      </span>
                    )}

                    {selectedCharacter.aliases && selectedCharacter.aliases.length > 0 && (
                      <p className="profile-aliases">
                        <strong>Aliases:</strong> {selectedCharacter.aliases.join(" · ")}
                      </p>
                    )}

                    <p className="profile-bio-text">
                      {selectedCharacter.detailedBio || selectedCharacter.description}
                    </p>

                    <div className="profile-facts">
                      <p>
                        <strong>Village:</strong> {selectedCharacter.village}
                      </p>
                      <p>
                        <strong>Clan:</strong> {selectedCharacter.clan}
                      </p>
                      <p>
                        <strong>Role:</strong> {selectedCharacter.role}
                      </p>
                      <p>
                        <strong>Nature:</strong> {selectedCharacter.nature}
                      </p>
                      {selectedCharacter.firstAppearance && (
                        <p>
                          <strong>First Appearance:</strong> {selectedCharacter.firstAppearance}
                        </p>
                      )}
                    </div>

                    {selectedCharacter.personality && (
                      <div className="profile-extra-section">
                        <h3>Personality</h3>
                        <p>{selectedCharacter.personality}</p>
                      </div>
                    )}

                    {selectedCharacter.relationships && (
                      <div className="profile-extra-section">
                        <h3>Notable Bonds</h3>
                        <div className="relationship-grid">
                          {Object.entries(selectedCharacter.relationships).map(([roleKey, nameVal]) => (
                            <div key={roleKey} className="relationship-chip">
                              <span className="rel-key">{roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}</span>
                              <span className="rel-val">{nameVal}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedCharacter.affiliation && Array.isArray(selectedCharacter.affiliation) && (
                      <div className="profile-extra-section">
                        <h3>Affiliations</h3>
                        <div className="ability-list">
                          {selectedCharacter.affiliation.map((aff) => (
                            <span key={aff} className="affiliation-chip">{aff}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    <h3>Signature Abilities</h3>
                    <div className="ability-list">
                      {selectedCharacter.abilities.map((ability) => (
                        <span key={ability}>{ability}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="archive-count">
                  Showing {Math.min(visibleCount, filteredCharacters.length)} of {filteredCharacters.length} shinobi found
                </div>
                <div className="character-grid archive-grid">
                  {filteredCharacters.slice(0, visibleCount).map((character) => (
                    <CharacterCard
                      key={character.id}
                      character={character}
                    />
                  ))}
                </div>
                {filteredCharacters.length === 0 && (
                  <p className="empty-state">
                    No shinobi found. Try a different name, village, or rank.
                  </p>
                )}
                {visibleCount < filteredCharacters.length && (
                  <div className="load-more-container">
                    <button
                      className="primary-button load-more-btn"
                      onClick={() => setVisibleCount((previous) => previous + 24)}
                    >
                      Load More Shinobi (+24) ▾
                    </button>
                    <p className="load-more-subtext">
                      Showing {Math.min(visibleCount, filteredCharacters.length)} of {filteredCharacters.length} shinobi entries
                    </p>
                  </div>
                )}
              </>
            )}
          </section>
        )}

        {activePage === "World Atlas" && <WorldAtlasPage />}
        {activePage === "World Lore" && <WorldAtlasPage />}

        {activePage === "Chunin Exams" && <QuizPage />}

        {activePage === "Jutsu Library" && <JutsuLibraryPage />}

        {activePage === "Missions" && <MissionsPage />}

        {activePage !== "Dashboard" &&
          activePage !== "Characters" &&
          activePage !== "World Atlas" &&
          activePage !== "World Lore" &&
          activePage !== "Chunin Exams" &&
          activePage !== "Jutsu Library" &&
          activePage !== "Missions" && (
            <section className="section coming-soon">
              <div className="profile-symbol">忍</div>
              <h2>{activePage}</h2>
              <p>This section is still being developed.</p>
              <button
                className="primary-button"
                onClick={() => navigate("Dashboard")}
              >
                ← Back to Dashboard
              </button>
            </section>
          )}

        <footer>
          <div className="footer-content">
            <span className="footer-crest">🍃</span>
            <span>SHINOBI OS // WILL OF FIRE TACTICAL NETWORK · FAN PROJECT</span>
            <span className="footer-sub">AUTHENTIC LORE & NINJA INTELLIGENCE DATABASE</span>
          </div>
        </footer>
      </main>

      {/* Settings / Shinobi Dossier Modal */}
      {settingsOpen && (
        <div className="modal-backdrop" onClick={() => setSettingsOpen(false)}>
          <div
            className="settings-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="settings-title"
          >
            <div className="settings-modal-header">
              <div className="settings-modal-title-group">
                <span className="eyebrow">SHINOBI REGISTRATION</span>
                <h2 id="settings-title">Operative Dossier & Settings</h2>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSettingsOpen(false)}
                aria-label="Close settings"
                type="button"
              >
                ✕
              </button>
            </div>

            <div className="settings-modal-body">
              <div className="settings-profile-preview">
                <div className="settings-avatar-big">忍</div>
                <div>
                  <h3>{playerName}</h3>
                  <p className="settings-rank-pill">{rankDetails.title}</p>
                  <p className="settings-xp-sub">
                    Total Mission XP: <strong>{missionXP} XP</strong> · Clearance: <strong>{completedMissions.length} Missions</strong>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSavePlayerName} className="settings-form">
                <label htmlFor="operative-name-input">OPERATIVE CODENAME</label>
                <div className="settings-input-row">
                  <input
                    id="operative-name-input"
                    type="text"
                    maxLength={24}
                    value={tempPlayerName}
                    onChange={(e) => setTempPlayerName(e.target.value)}
                    placeholder="Enter your shinobi callsign..."
                  />
                  <button type="submit" className="primary-button">
                    Save Callsign
                  </button>
                </div>
              </form>

              <div className="settings-toggle-row">
                <div>
                  <strong>Ambient Chakra Pulse & Motion</strong>
                  <p>Subtle glowing effects and reactive animations throughout the command center.</p>
                </div>
                <button
                  type="button"
                  className={`toggle-switch-btn ${ambientFX ? "active" : ""}`}
                  onClick={() => {
                    const updated = !ambientFX;
                    setAmbientFX(updated);
                    try {
                      localStorage.setItem("shinobiAmbientFX", updated ? "enabled" : "disabled");
                    } catch (e) {
                      console.error(e);
                    }
                  }}
                  aria-pressed={ambientFX}
                >
                  {ambientFX ? "Enabled" : "Disabled"}
                </button>
              </div>

              <div className="settings-danger-zone">
                <div className="danger-zone-header">
                  <h4>Data Management</h4>
                  <p>Reset local mission completions, XP rewards, and favorited ninja.</p>
                </div>
                {resetConfirmOpen ? (
                  <div className="reset-confirm-box">
                    <p>⚠️ <strong>Confirm Reset:</strong> This will erase all mission completions, XP, and favorites. This cannot be undone.</p>
                    <div className="reset-confirm-actions">
                      <button
                        type="button"
                        className="danger-button"
                        onClick={handleResetAllProgress}
                      >
                        Yes, Reset All Progress
                      </button>
                      <button
                        type="button"
                        className="secondary-button"
                        onClick={() => setResetConfirmOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="danger-outline-button"
                    onClick={() => setResetConfirmOpen(true)}
                  >
                    Reset Mission Progress & XP
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;