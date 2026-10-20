// src/data/lore/history.js - Comprehensive Historical Eras & Wars Archive

const history = [
  {
    id: "mythological-era",
    title: "Era of the Sage of Six Paths & The Origin of Chakra",
    japaneseName: "Rikudō Sennin no Jidai",
    timeframe: "Over 1,000 Years Ago",
    participants: "Princess Kaguya Ōtsutsuki, Hagoromo & Hamura Ōtsutsuki, Indra & Asura Ōtsutsuki",
    summary: "The mythological dawn of the shinobi world. Princess Kaguya arrived on Earth, harvested the fruit of the Divine Tree (Shinju), and subdued mankind with the Infinite Tsukuyomi. Her twin sons, Hagoromo and Hamura, discovered her tyranny and waged a multi-month battle to seal their mother into what became the Moon. Hagoromo traveled the world preaching Ninshū (the peaceful spiritual connection through chakra) and created the nine Tailed Beasts before his death, only for his sons Indra and Asura to ignite an eternal cycle of reincarnated conflict.",
    keyOutcomes: [
      "Origin of all human chakra through Kaguya and Hagoromo",
      "Division of the Ten-Tails into the nine Tailed Beasts (One-Tail through Nine-Tails)",
      "Establishment of the Moon to seal the husk of the Ten-Tails (Gedō Mazō)",
      "The eternal transmigratory feud between Indra (Uchiha) and Asura (Senju/Uzumaki)"
    ]
  },
  {
    id: "warring-states-period",
    title: "Warring States Period (Sengoku Jidai)",
    japaneseName: "Sengoku Jidai",
    timeframe: "Centuries Prior to the Formation of Hidden Villages",
    participants: "Independent Mercenary Shinobi Clans (Senju, Uchiha, Sarutobi, Shimura, Hyūga, etc.) and Feudal Daimyō",
    summary: "A brutal epoch of continuous, anarchic mercenary warfare where feudal warlords hired independent ninja clans to conquer neighboring territories. With no legal codes or centralized villages, child mortality was catastrophic—the average shinobi lifespan was under thirty years, and children as young as six were thrust onto frontlines. The bitter, bloody rivalry between the Senju and Uchiha clans dominated this era until Hashirama and Madara formed a childhood pact to build a sanctuary where children would never have to die.",
    keyOutcomes: [
      "Centuries of deep-seated blood feuds between prominent clans",
      "Perfection of clan-specific hiden techniques and battlefield dōjutsu",
      "The historic truce between Hashirama Senju and Madara Uchiha",
      "Inspiration for the revolutionary concept of the 'Hidden Ninja Village'"
    ]
  },
  {
    id: "founding-of-hidden-villages",
    title: "Founding of the Hidden Villages & First Kage Summit",
    japaneseName: "Gakure Seido no Seiritsu",
    timeframe: "Approximately 70–80 Years Ago",
    participants: "Hashirama Senju, Madara Uchiha, Fire Daimyō, and Leaders of the Five Great Nations",
    summary: "Hashirama Senju and Madara Uchiha united their clans and entered into a historic treaty with the Land of Fire's Daimyō, founding Konohagakure (Hidden Leaf Village). Seeing its stability and military efficiency, other nations rapidly adopted the model, establishing Sand, Mist, Cloud, and Stone. To balance international power and prevent war, Hashirama captured eight wild Tailed Beasts and distributed them among the nations at the First Five Kage Summit.",
    keyOutcomes: [
      "Establishment of the Five Great Shinobi Nations and their Hidden Villages",
      "Creation of the title and administrative office of Kage (Hokage, Kazekage, Mizukage, Raikage, Tsuchikage)",
      "Distribution of Tailed Beasts as nuclear deterrents across the Great Villages",
      "Madara Uchiha’s eventual defection and the fateful duel at the Valley of the End"
    ]
  },
  {
    id: "first-ninja-war",
    title: "First Great Shinobi World War",
    japaneseName: "Dai-ichi-ji Ninkai Taisen",
    timeframe: "Approximately 60 Years Ago",
    participants: "All Five Great Shinobi Nations (Fire, Wind, Water, Lightning, Earth)",
    summary: "Triggered shortly after the death of First Hokage Hashirama Senju. With the world's most formidable peacekeeper gone, resource competition and national rivalries boiled over into the first global war. The conflict saw the deployment of newly distributed Tailed Beasts as weapons of mass destruction, leading to immense casualties on all fronts. Second Hokage Tobirama Senju sacrificed his life as a decoy against Kumogakure's Kinkaku Force to allow his young subordinates, including Hiruzen Sarutobi, to escape.",
    keyOutcomes: [
      "Heroic sacrifice of Second Hokage Tobirama Senju; appointment of young Hiruzen Sarutobi as Third Hokage",
      "First Tsuchikage Ishikawa and Second Tsuchikage Mū's strategic earth campaigns",
      "Signing of fragile armistice accords leaving deep economic and territorial scars"
    ]
  },
  {
    id: "second-ninja-war",
    title: "Second Great Shinobi World War",
    japaneseName: "Dai-ni-ji Ninkai Taisen",
    timeframe: "Approximately 35–40 Years Ago",
    participants: "Konohagakure, Sunagakure, Iwagakure, and Amegakure (Battlefield Nation)",
    summary: "Driven by widening economic disparities and aggressive territorial expansions among the Great Nations. The war was fought primarily on the soil of small buffer countries like the Land of Rain, bringing horrific devastation to civilian populations. It was during this war that Hanzō of the Salamander sparred against Jiraiya, Tsunade, and Orochimaru, christening them the 'Legendary Sannin' for surviving his poison onslaught. Meanwhile, Jiraiya stayed behind in Rain to train war orphans Yahiko, Nagato, and Konan.",
    keyOutcomes: [
      "Bestowal of the 'Legendary Sannin' title upon Jiraiya, Tsunade, and Orochimaru",
      "Death of Tsunade's brother Nawaki and lover Dan Katō, inspiring her medical ninja reforms",
      "Awakening of Nagato's Rinnegan and the founding of the original pacifist Akatsuki by Yahiko",
      "Lady Chiyo’s poison warfare matched against Tsunade’s master antidotes"
    ]
  },
  {
    id: "third-ninja-war",
    title: "Third Great Shinobi World War",
    japaneseName: "Dai-san-ji Ninkai Taisen",
    timeframe: "Approximately 20–25 Years Ago",
    participants: "Konohagakure, Iwagakure, Kumogakure, Kirigakure, and Sunagakure",
    summary: "A sprawling war of attrition precipitated by the mysterious disappearance of the Third Kazekage, which threw the balance of power into disarray. Nations suffered massive troop shortages, forcing them to deploy newly graduated children onto frontlines. Minato Namikaze earned international fame as the 'Yellow Flash' with his Flying Thunder God, defeating 1,000 Iwagakure ninja. At Kannabi Bridge, Kakashi Hatake received the Sharingan from dying teammate Obito Uchiha, while Madara secretly rescued Obito to orchestrate the Eye of the Moon Plan.",
    keyOutcomes: [
      "Destruction of Kannabi Bridge, severing Iwagakure's supply corridor and ending the war",
      "Tragic 'death' and corruption of Obito Uchiha under the tutelage of ancient Madara",
      "Ascension of Minato Namikaze to Fourth Hokage",
      "Might Duy sacrifices his life opening the Eight Gates to annihilate four of the Seven Mist Swordsmen"
    ]
  },
  {
    id: "nine-tails-attack",
    title: "Nine-Tails Demon Fox Attack on Konohagakure",
    japaneseName: "Kyūbi Shūgeki Jiken",
    timeframe: "16 Years Ago (Beginning of the Series)",
    participants: "The Masked Man (Obito Uchiha), Kurama (Nine-Tails), Minato Namikaze, Kushina Uzumaki, Third Hokage",
    summary: "Taking advantage of the weakened seal during Kushina Uzumaki's childbirth, the masked Obito Uchiha extracted the Nine-Tailed Demon Fox and summoned it directly into the center of Konoha using Sharingan mind control. While Hiruzen and the village ninja struggled to hold back the beast, Minato defeated the Masked Man in a lightning-fast duel and sacrificed his life alongside Kushina, sealing the Nine-Tails into newborn Naruto Uzumaki using the Reaper Death Seal.",
    keyOutcomes: [
      "Heroic deaths of Fourth Hokage Minato Namikaze and Kushina Uzumaki",
      "Naruto Uzumaki becomes the Jinchūriki of the Nine-Tails",
      "Suspicion falls upon the Uchiha Clan due to the Sharingan's control over the Nine-Tails, sparking the feud that led to their downfall"
    ]
  },
  {
    id: "uchiha-clan-downfall",
    title: "The Uchiha Clan Downfall (Uchiha Massacre)",
    japaneseName: "Uchiha Ichizoku no Hokai",
    timeframe: "Approximately 7 Years Prior to Part 1",
    participants: "Itachi Uchiha, Obito Uchiha (Tobi), Danzō Shimura, Hiruzen Sarutobi, Sasuke Uchiha",
    summary: "Following years of discrimination and surveillance following the Nine-Tails attack, the Uchiha clan plotted a coup d’état to seize control of Konohagakure. Shisui Uchiha attempted to stop the coup using Kotoamatsukami, but Danzō stole his right eye. Faced with an ultimatum from Danzō to either side with the coup and die with his clan or execute the clan to spare his younger brother Sasuke, Itachi Uchiha shouldered the burden of infamy, slaughtering his entire family with Obito's assistance while keeping Sasuke in the dark.",
    keyOutcomes: [
      "Near-total annihilation of the proud Uchiha Clan, leaving Sasuke Uchiha as the sole survivor",
      "Itachi Uchiha defects from Konoha and infiltrates the Akatsuki as a double agent",
      "Sasuke Uchiha embarks on his path of vengeance and darkness"
    ]
  },
  {
    id: "konoha-crush",
    title: "The Konoha Crush (Chunin Exam Invasion)",
    japaneseName: "Konoha Kuzushi",
    timeframe: "Part 1 of the Series",
    participants: "Konohagakure vs Otogakure and Sunagakure (manipulated by Orochimaru)",
    summary: "During the final matches of the Chunin Selection Exams, Orochimaru assassinated the Fourth Kazekage Rasa, assumed his identity, and launched a surprise invasion of Konoha using combined Sound and Sand forces. While Leaf Jonin fought in the streets and Naruto subdued the rampaging Shukaku One-Tail possessed by Gaara, Third Hokage Hiruzen Sarutobi battled Orochimaru inside the Four Violet Flames barrier, sacrificing his soul via the Reaper Death Seal to sever Orochimaru's arms.",
    keyOutcomes: [
      "Sacrifice and death of Third Hokage Hiruzen Sarutobi; search for Tsunade as Fifth Hokage",
      "Orochimaru's arms are sealed, preventing him from using ninjutsu for years",
      "Sunagakure discovers Orochimaru’s deceit, surrenders, and forges a permanent alliance with Konoha",
      "Naruto Uzumaki redeems Gaara through the shared bond of being a Jinchūriki"
    ]
  },
  {
    id: "fourth-ninja-war",
    title: "Fourth Great Shinobi World War",
    japaneseName: "Dai-yon-ji Ninkai Taisen",
    timeframe: "Shippuden Climax",
    participants: "Allied Shinobi Forces vs Akatsuki, Kabuto's Reanimated Army, Madara Uchiha, and Princess Kaguya",
    summary: "The definitive war that decided the fate of the cosmos. Obito Uchiha declared war against all five nations to capture Naruto and Killer Bee. The Allied Shinobi Forces mobilized 80,000 troops against 100,000 White Zetsu and Kabuto's Edo Tensei army. The war escalated from beach battles to the resurrection of Madara Uchiha, the revival of the Ten-Tails, the manifestation of the Divine Tree, the activation of the Infinite Tsukuyomi, and the return of Princess Kaguya Ōtsutsuki, whom Team 7 ultimately sealed.",
    keyOutcomes: [
      "Permanent unification and enduring international peace among the Five Great Shinobi Nations",
      "Liberation of the nine Tailed Beasts from centuries of enslavement and weaponization",
      "Reconciliation of Naruto Uzumaki and Sasuke Uchiha, ending the Indra/Asura cycle of hatred",
      "Ascension of Kakashi Hatake as Sixth Hokage and later Naruto Uzumaki as Seventh Hokage"
    ]
  }
];

export default history;
