// src/data/missionChallenges.js - Operational Challenges and Objective Bindings for Shinobi Missions
// Provides canon-accurate, interactive challenges mapped directly to mission objectives.

import quizQuestions from "./quizQuestions.js";

export const HANDCRAFTED_CHALLENGES = {
  // Mission 1: Capture Tora the Daimyō's Runaway Cat (Rank D)
  1: [
    {
      stage: 1,
      objectiveText: "Coordinate squad positioning via two-way radio headsets",
      question: "Team 7 is surrounding the target in the Konoha brush. What standard shinobi device did Naruto, Sasuke, and Sakura use to maintain silent contact before cornering Tora?",
      options: [
        "Short-range two-way radio headsets",
        "Chakra signaling flares",
        "Trained messenger ninken dogs",
        "Reflective mirror signal flashers"
      ],
      answer: 0,
      explanation: "Team 7 used wireless earpiece radios with throat microphones to report distances from Point C-14 without alarming the runaway target."
    },
    {
      stage: 2,
      objectiveText: "Corner the target without sustaining scratch injuries",
      question: "What prominent physical feature distinguishes Tora, the Fire Daimyō’s prized runaway cat, from common alley cats in Konohagakure?",
      options: [
        "A red ribbon tied to her right ear",
        "A golden bell stamped with the Fire Crest",
        "A braided silk leash around her torso",
        "A distinctive heart-shaped patch on her forehead"
      ],
      answer: 0,
      explanation: "Tora has a bright red ribbon tied to her right ear and is infamous for violently resisting capture to escape Madame Shijimi's suffocating hugs."
    },
    {
      stage: 3,
      objectiveText: "Safely deliver Tora directly to Madame Shijimi at the Hokage Residence",
      question: "Upon completing the mission and delivering Tora to her owner Madame Shijimi, what prompted Naruto to angrily complain to the Third Hokage?",
      options: [
        "He wanted a real ninja mission instead of tedious household chores",
        "The pay of 500 Ryo was split unfairly between squad members",
        "Kakashi took all the credit for the capture in the mission log",
        "Madame Shijimi refused to pay the reward because Tora was ruffled"
      ],
      answer: 0,
      explanation: "Seeing Madame Shijimi violently squeeze Tora made Naruto demand a higher-stakes mission from Third Hokage Hiruzen, which led directly to the C-rank Land of Waves assignment."
    }
  ],

  // Mission 2: Weed the Herb Gardens of the Senior Herbalist (Rank D)
  2: [
    {
      stage: 1,
      objectiveText: "Identify toxic creeping vines versus valuable medicinal leaves",
      question: "When weeding herbal patches in the Ninja Academy district, how can a Genin distinguish chakra-infused medicinal clover from poisonous creeper weeds?",
      options: [
        "Medicinal herbs emit faint vitality chakra detectable through basic sensing",
        "Poisonous weeds always turn bright crimson under sunlight",
        "Medicinal leaves smell like scorched sulfur when rubbed",
        "All toxic vines have sharp metallic serrations along their stems"
      ],
      answer: 0,
      explanation: "Chakra-infused medicinal herbs retain ambient botanical vitality that Genin are trained to perceive before uprooting."
    },
    {
      stage: 2,
      objectiveText: "Uproot 50 kilograms of weeds along Greenhouse Rows 1 through 8",
      question: "Which Konoha team infamously struggled with gardening chores because Naruto tore out both weeds and precious medicinal plants together?",
      options: [
        "Team 7 (Kakashi, Naruto, Sasuke, Sakura)",
        "Team 10 (Asuma, Shikamaru, Choji, Ino)",
        "Team 8 (Kurenai, Kiba, Shino, Hinata)",
        "Team Guy (Guy, Lee, Neji, Tenten)"
      ],
      answer: 0,
      explanation: "In Chapter 9, Naruto enthusiastically pulled out entire rows of plants by the roots without realizing he was destroying Master Yakushi's expensive medicinal crops."
    },
    {
      stage: 3,
      objectiveText: "Turn over compost soil and water the fragile antidote roots",
      question: "What basic chakra control exercise is frequently taught to Genin to prevent them from trampling damp agricultural soil during heavy garden labor?",
      options: [
        "Chakra Foot Surface Distribution (Tree & Water Walking foundation)",
        "Chakra Scalpel activation in palms",
        "Body Flicker ground dashing",
        "Gentle Fist needle precision"
      ],
      answer: 0,
      explanation: "Distributing constant chakra to the soles of the sandals allows shinobi to step gently on fragile soil and mud without crushing seedling beds."
    }
  ],

  // Mission 16: Escort Master Carpenter Tazuna to the Land of Waves (Rank C)
  16: [
    {
      stage: 1,
      objectiveText: "Escort Tazuna along the main coastal highway against roadside ambush",
      question: "Why was the mission to escort Bridge Builder Tazuna initially misclassified as a simple C-rank assignment instead of B or A-rank?",
      options: [
        "Tazuna lied on the request form because he could not afford high-rank escort fees",
        "The Third Hokage wanted to test Kakashi's ability to protect civilians",
        "Gato's presence in the Land of Waves was kept secret by the Fire Daimyō",
        "The Leaf Mission Bureau misfiled the documentation with the Sanitation Department"
      ],
      answer: 0,
      explanation: "Tazuna hid that corrupt shipping magnate Gato had hired missing-nin to assassinate him because the impoverished Land of Waves could not afford the fee for a B-rank mission."
    },
    {
      stage: 2,
      objectiveText: "Detect concealed enemies disguised as puddles or foliage",
      question: "How did Kakashi Hatake immediately deduce that the puddle along the highway was an enemy ambush by the Demon Brothers?",
      options: [
        "It had not rained for days, making a standing puddle on dry road impossible",
        "The puddle gave off a distinct scent of Kirigakure sea salt",
        "Kakashi used his Sharingan through his headband to spot their chakra signatures",
        "Sasuke threw a shuriken into the water to test its depth"
      ],
      answer: 0,
      explanation: "Kakashi noticed clear weather had persisted for over a week with no rain, making a clean puddle in the middle of a dry dirt road an obvious shinobi technique."
    },
    {
      stage: 3,
      objectiveText: "Safeguard the client's home in the Land of Waves upon safe arrival",
      question: "What was the name of Tazuna's grandson who believed heroes did not exist until Naruto inspired him to fight against Gato's thugs?",
      options: [
        "Inari",
        "Kaiza",
        "Konohamaru",
        "Nawaki"
      ],
      answer: 0,
      explanation: "Inari lost his courageous adoptive father Kaiza to Gato's tyranny, but was inspired by Naruto's defiance to rally the townspeople."
    }
  ],

  // Mission 31: Eliminate the Demon Brothers Ambush on the Waves Road (Rank B)
  31: [
    {
      stage: 1,
      objectiveText: "Survive their coordinated chain-scythe ambush",
      question: "What are the names of the Kirigakure Chunin missing-nin known as the 'Demon Brothers' who ambushed Team 7?",
      options: [
        "Gōzu and Meizu",
        "Kotetsu and Izumo",
        "Raido and Aoba",
        "Kagari and Oboro"
      ],
      answer: 0,
      explanation: "Gōzu and Meizu were rogue Chunin from the Hidden Mist serving under Zabuza Momochi, armed with venom-coated bladed gauntlets joined by a chain."
    },
    {
      stage: 2,
      objectiveText: "Counter their Water Release: Water Puddle Camouflage technique",
      question: "During the ambush, what weapon did Sasuke Uchiha use to neutralize the Demon Brothers' deadly spiked chain and pin them to a tree?",
      options: [
        "A shuriken and kunai wedged into the chain links",
        "A Fire Release: Dragon Fire Jutsu cable wire",
        "A paper bomb tagged to their gauntlet",
        "A lightning-infused katana thrust"
      ],
      answer: 0,
      explanation: "Sasuke threw a shuriken into the chain's center followed by a kunai, pinning the chain into a tree trunk and locking both brothers in place."
    },
    {
      stage: 3,
      objectiveText: "Interrogate the captured brothers to reveal who hired them against Tazuna",
      question: "Which ruthless shipping tycoon was revealed to have hired the rogue Mist shinobi to eliminate Tazuna and prevent the bridge from being built?",
      options: [
        "Gatō of the Gatō Company",
        "Daimyō of the Land of Water",
        "Kato Dan of the Leaf",
        "Merchant Guildmaster Jirocho"
      ],
      answer: 0,
      explanation: "Billionaire shipping magnate Gatō held an iron monopoly over the Land of Waves' water transit and hired assassins to stop the bridge connecting it to the mainland."
    }
  ],

  // Mission 46: Defend the Great Naruto Bridge against Zabuza and Haku (Rank A)
  46: [
    {
      stage: 1,
      objectiveText: "Break through Haku’s Demonic Flocking Ice Mirrors",
      question: "What unique Kekkei Genkai allowed Haku to create the Demonic Ice Mirrors and move between them at the speed of light?",
      options: [
        "Ice Release (Hyōton), combining Water and Wind chakra",
        "Crystal Release (Shōton), crystallizing ambient moisture",
        "Swift Release (Jinton), accelerating physical body speed",
        "Boil Release (Futsūton), superheating mirror surfaces"
      ],
      answer: 0,
      explanation: "Haku inherited the Yuki Clan's Ice Release (Hyōton) Kekkei Genkai, allowing him to combine Water and Wind natures simultaneously."
    },
    {
      stage: 2,
      objectiveText: "Match Zabuza Momochi’s Silent Killing technique in thick mist",
      question: "How did Kakashi Hatake locate Zabuza through the Kirigakure Hidden Mist Jutsu when normal vision and sound were blocked?",
      options: [
        "Summoning his Ninken pack (Ninja Hounds) to track Zabuza's blood scent",
        "Using the Byakugan borrowed from the Hyuga clan",
        "Emanating a continuous Fireball explosion to vaporize the fog",
        "Using sensory earth ripples detected through his feet"
      ],
      answer: 0,
      explanation: "Kakashi allowed Zabuza to cut his arm, letting his eight Ninja Hounds track the blood scent through the mist and pin Zabuza with the Summoning: Earth Release: Tracking Fang Technique."
    },
    {
      stage: 3,
      objectiveText: "Protect Bridge Builder Tazuna and repel Gato’s private mercenary army",
      question: "What was the legendary name of Zabuza Momochi's massive cleaver blade, which regenerates by absorbing the iron from blood?",
      options: [
        "Kubikiribōchō (Executioner's Blade)",
        "Samehada (Shark Skin)",
        "Hiramekarei (Twin Broadsword)",
        "Kiba (Lightning Fang Blades)"
      ],
      answer: 0,
      explanation: "Kubikiribōchō, the Executioner's Blade, is one of the Seven Legendary Swords of the Mist and repairs any chips or cracks using the iron in opponents' blood."
    }
  ],

  // Mission 48: Pursue the Sound Four and Retrieve Sasuke Uchiha (Rank A)
  48: [
    {
      stage: 1,
      objectiveText: "Break through Jirobo's Earth Prison Dome of Magnificent Ruin",
      question: "How did Shikamaru and Choji discover the weak point in Jirobo's chakra-draining Earth Prison Dome?",
      options: [
        "The wall farthest from Jirobo had the thinnest chakra flow, allowing Choji to smash it",
        "Kiba used Tunneling Fang to dig downward into the soft bedrock",
        "Neji severed all thirty-two exterior chakra nodes with Gentle Fist",
        "Naruto used one thousand shadow clones to expand the interior cavity"
      ],
      answer: 0,
      explanation: "Shikamaru observed that Jirobo's chakra took longer to repair the wall opposite where he stood, giving Choji the exact target for his Human Boulder attack."
    },
    {
      stage: 2,
      objectiveText: "Neutralize Kidomaru's long-range sniper threads in the canopy",
      question: "What hidden blind spot in Neji Hyuga's Byakugan did Kidomaru exploit using his spider-thread chakra arrows?",
      options: [
        "A tiny one-degree blind spot located behind his first thoracic vertebra",
        "A five-degree blind zone directly underneath his chin",
        "The Byakugan cannot see projectiles moving faster than Mach 1",
        "The Byakugan's vision is blinded when exposed to bright golden armor"
      ],
      answer: 0,
      explanation: "Kidomaru calculated that the Byakugan has a minute blind spot originating near the spine behind the neck, forcing Neji to take an arrow through the shoulder to trace the chakra thread back."
    },
    {
      stage: 3,
      objectiveText: "Intercept Kimimaro and recover Sasuke's sealing barrel",
      question: "Which Sand Village reinforcements arrived in the nick of time to save Rock Lee, Shikamaru, and Kiba from the Sound Four and Kimimaro?",
      options: [
        "Gaara, Temari, and Kankuro",
        "Baki, Chiyo, and Ebizo",
        "Sasori, Deidara, and Pakkun",
        "Shino, Hinata, and Kurenai"
      ],
      answer: 0,
      explanation: "Under the renewed alliance between Sunagakure and Konoha, Gaara, Temari, and Kankuro intervened to save Lee, Shikamaru, and Kiba."
    }
  ],

  // Mission 61: Confront the Six Paths of Pain during the Destruction of Konoha (Rank S)
  61: [
    {
      stage: 1,
      objectiveText: "Systematically destroy the Asura, Human, Animal, Preta, and Naraka Paths",
      question: "Which Path of Pain had to be eliminated first because it possessed the ability to resurrect destroyed bodies using the King of Hell?",
      options: [
        "Naraka Path (Hell Realm)",
        "Preta Path (Hungry Ghost Realm)",
        "Asura Path (Demon Weapon Realm)",
        "Animal Path (Summoning Realm)"
      ],
      answer: 0,
      explanation: "Naruto deduced from Katsuyu's intelligence that the Naraka Path could restore all other fallen bodies to full health, prioritizing it for destruction with Twin Rasengan."
    },
    {
      stage: 2,
      objectiveText: "Overcome the Deva Path's gravity manipulation and Planetary Devastation",
      question: "What critical weakness of the Deva Path's Shinra Tensei (Almighty Push) did Kakashi and Naruto exploit in combat?",
      options: [
        "A mandatory 5-second recharge interval between consecutive repulsions",
        "It cannot deflect attacks delivered from beneath the earth",
        "It consumes so much life force that Nagato's hair turns white",
        "It is completely disabled when exposed to Sage chakra"
      ],
      answer: 0,
      explanation: "The Deva Path requires approximately five seconds between uses of the Almighty Push, creating the narrow attack window Naruto used to land the finishing Rasengan."
    },
    {
      stage: 3,
      objectiveText: "Confront Nagato in his paper tree to inspire the Rinne Rebirth resurrection",
      question: "What philosophical connection did Naruto and Nagato share that convinced Nagato to sacrifice his life casting the Gedō: Rinne Tensei no Jutsu?",
      options: [
        "Both were disciples of Jiraiya and inspired by the heroic protagonist in 'The Tale of the Utterly Gutsy Shinobi'",
        "Both were descendants of the Senju clan sharing Hashirama's cells",
        "Nagato was Naruto's long-lost uncle on his father's side",
        "Both held contracts with the Toad Elders of Mount Myōboku"
      ],
      answer: 0,
      explanation: "Both studied under Master Jiraiya, who named his novel's determined protagonist 'Naruto' after Nagato and Naruto inspired his dream for peace."
    }
  ],

  // Mission 62: Subdue the Rampaging Nine-Tails during the Attack on Konoha (Rank S)
  62: [
    {
      stage: 1,
      objectiveText: "Engage the Masked Man in a high-speed Flying Thunder God duel",
      question: "How did Minato Namikaze bypass the Masked Man's (Obito's) Kamui intangibility during their fateful midnight battle?",
      options: [
        "Throwing a Flying Thunder God kunai through him and teleporting above his back with Rasengan at the instant of physical impact",
        "Using the Reaper Death Seal to lock Obito's soul before he could dematerialize",
        "Using Kurama's Tailed Beast Bomb to engulf the entire forest",
        "Summoning Gamabunta directly onto Obito's head"
      ],
      answer: 0,
      explanation: "Minato threw his special tri-pronged kunai straight through Obito's intangible head, then teleported to it the split-second Obito materialized to strike, hitting him with a devastating Rasengan."
    },
    {
      stage: 2,
      objectiveText: "Break the Sharingan contract controlling the Nine-Tails using a contract seal",
      question: "What technique did Minato slam onto Obito's abdomen immediately following the Rasengan to sever his control over the Nine-Tails?",
      options: [
        "Contract Seal (Keiyaku Fūin)",
        "Four Symbols Seal (Shishō Fūin)",
        "Eight Trigrams Sealing Style (Hakke no Fūin Shiki)",
        "Five Elements Unseal (Gogyō Kaiin)"
      ],
      answer: 0,
      explanation: "Minato applied the Contract Seal (Keiyaku Fūin) directly onto Obito's body, severing his summon contract and freeing Kurama from the Sharingan's hypnotic control."
    },
    {
      stage: 3,
      objectiveText: "Perform the Reaper Death Seal and Eight Trigrams Sealing Style with Kushina",
      question: "Why did Minato split Kurama's chakra into Yin and Yang halves rather than sealing the entire beast into baby Naruto?",
      options: [
        "Kurama's total chakra was physically too immense and lethal for an infant's newborn chakra network to hold",
        "Minato wanted to keep half the chakra for the Land of Waves bridge project",
        "The Reaper Death Seal can only swallow half of any spiritual entity",
        "Kushina's Adamantine Chains were not strong enough to hold the full fox"
      ],
      answer: 0,
      explanation: "Minato recognized that Kurama's full chakra was too massive and malignant for an infant's chakra pathway to survive, sealing the Yin half in himself and the Yang half into Naruto."
    }
  ],

  // Mission 63: Battle Madara Uchiha at the Valley of the End (Historic) (Rank S)
  63: [
    {
      stage: 1,
      objectiveText: "Counter Madara's Majestic Attire: Susanoo draped over the Nine-Tails",
      question: "What monumental Wood Release technique did Hashirama Senju summon to combat Madara's Susanoo-armored Kurama at the Valley of the End?",
      options: [
        "Sage Art: Wood Release: True Several Thousand Hands (Shin Sūsenju)",
        "Wood Release: Deep Forest Emergence (Jukai Kōtan)",
        "Wood Release: Wood Dragon Technique (Mokuryū no Jutsu)",
        "Sage Art: Gate of the Great God (Myōjinmon)"
      ],
      answer: 0,
      explanation: "Hashirama entered Sage Mode and summoned the True Several Thousand Hands, a colossus so gargantuan that Kurama appeared tiny in its central palm."
    },
    {
      stage: 2,
      objectiveText: "Suppress Kurama's destructive Tailed Beast Bomb barrage",
      question: "Which technique did Hashirama use on Kurama's forehead to put the Tailed Beast into deep slumber and strip it from the battle?",
      options: [
        "Hokage-Style Sixty-Year-Old Technique: Kakuan Entering Society with Bliss-Bringing Hands",
        "Four Symbols Seal of the Uzumaki Clan",
        "Demonic Statue of the Outer Path Chains",
        "Curse Mandala Sealing Method"
      ],
      answer: 0,
      explanation: "Hashirama placed his hand engraved with the kanji for 'Sit' upon Kurama's snout, forcing the Nine-Tails into a peaceful slumber."
    },
    {
      stage: 3,
      objectiveText: "Deliver the decisive blow to protect the future of the Hidden Leaf",
      question: "How did Hashirama Senju land the fatal sword strike against Madara when both legendary founders were on the verge of exhaustion?",
      options: [
        "He substituted himself with a Wood Clone and stabbed Madara from behind",
        "He teleported behind Madara using the Flying Thunder God Jutsu",
        "He threw his sword using Wind Release chakra acceleration",
        "Tobirama Senju ambushed Madara with a water blade from the river"
      ],
      answer: 0,
      explanation: "Hashirama deceived Madara by allowing him to strike down a Wood Clone, appearing from behind to run Madara through with a standard ninja sword."
    }
  ]
};

/**
 * Returns the passing criteria (minimum correct objectives required) for a mission rank.
 */
export function getMissionPassCriteria(rank, totalObjectives = 3) {
  switch (rank) {
    case "D":
      // D-Rank: 2 of 3 (66%)
      return Math.max(1, Math.ceil(totalObjectives * 0.6));
    case "C":
      // C-Rank: 2 of 3 (66%)
      return Math.max(1, Math.ceil(totalObjectives * 0.66));
    case "B":
      // B-Rank: 3 of 3 (100%) - Higher passing score
      return Math.max(2, Math.ceil(totalObjectives * 0.99));
    case "A":
      // A-Rank: 3 of 3 (100%) - Rigorous tactical execution
      return Math.max(2, Math.ceil(totalObjectives * 0.99));
    case "S":
      // S-Rank: 3 of 3 (100%) - Flawless perfection required
      return totalObjectives;
    default:
      return Math.ceil(totalObjectives * 0.67);
  }
}

/**
 * Deterministically generates or retrieves 3 interactive challenge stages for any of the 75 missions.
 */
export function getMissionChallenges(mission) {
  if (!mission) return [];

  // Check if handcrafted canon scenario exists for this mission ID
  if (HANDCRAFTED_CHALLENGES[mission.id]) {
    return HANDCRAFTED_CHALLENGES[mission.id];
  }

  const objectives = Array.isArray(mission.objectives) && mission.objectives.length > 0
    ? mission.objectives
    : ["Primary Operational Reconnaissance", "Tactical Engagement with Hostiles", "Mission Target Containment & Delivery"];

  const rank = mission.rank || "D";

  // Filter pool matching mission rank standards
  let pool = quizQuestions;
  if (rank === "D") {
    pool = pool.filter((q) => q.difficulty === "Easy");
  } else if (rank === "C") {
    pool = pool.filter((q) => q.difficulty === "Easy" || q.difficulty === "Medium");
  } else if (rank === "B") {
    pool = pool.filter((q) => q.difficulty === "Medium");
  } else if (rank === "A") {
    pool = pool.filter((q) => q.difficulty === "Medium" || q.difficulty === "Hard");
  } else if (rank === "S") {
    pool = pool.filter((q) => q.difficulty === "Hard");
  }

  if (pool.length === 0) pool = quizQuestions;

  // Synthesize rich challenges for every objective in the mission
  return objectives.map((objText, idx) => {
    // Deterministic offset per mission and objective stage
    const seed = (mission.id * 17 + idx * 31) % pool.length;
    const baseQ = pool[seed];

    // Shuffle options deterministically while tracking correct answer
    const originalAnswerText = baseQ.options[baseQ.answer];
    const shuffledOptions = [...baseQ.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const swapIndex = (mission.id + idx + i) % (i + 1);
      [shuffledOptions[i], shuffledOptions[swapIndex]] = [shuffledOptions[swapIndex], shuffledOptions[i]];
    }
    const newAnswerIndex = shuffledOptions.indexOf(originalAnswerText);

    return {
      stage: idx + 1,
      objectiveText: objText,
      stageTitle: `Stage ${idx + 1}: ${objText}`,
      question: `[${mission.rank}-Rank Operation: ${mission.title}]\n${baseQ.question}`,
      options: shuffledOptions,
      answer: newAnswerIndex,
      explanation: baseQ.explanation || `Verified intelligence report for operational objective ${idx + 1}.`
    };
  });
}
