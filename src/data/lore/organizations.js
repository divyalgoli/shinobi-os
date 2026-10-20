// src/data/lore/organizations.js - Comprehensive Shinobi Organizations & Factions Archive

const organizations = [
  {
    id: "akatsuki",
    name: "Akatsuki",
    kanji: "暁 (Dawn)",
    type: "Mercenary Syndicate / Rogue Shinobi Organization",
    founder: "Yahiko (Original Pacifist Era), Obito Uchiha / Nagato (Shippuden Era)",
    leader: "Nagato (Pain) / Obito Uchiha (Tobi)",
    base: "Hidden Rain Village (Amegakure) / Secret Bases across Rivers & Mountains",
    uniform: "High-collared black trench coat emblazoned with red clouds, slashed rogue village forehead protectors, conical straw hats with white hanging strips, and unique silver signet rings worn on designated fingers.",
    objective: "Phase 1: Accumulate money through black-market mercenary contracts. Phase 2: Capture all nine Tailed Beasts. Phase 3: Enact the Eye of the Moon Plan (Tsuki no Me) to cast the Infinite Tsukuyomi over all mankind.",
    description: "The most notorious criminal syndicate in modern history. Founded during the Third Great Ninja War by Yahiko, Nagato, and Konan as a peaceful resistance group in war-torn Amegakure. After Danzō and Hanzō orchestrated Yahiko's suicide, Nagato and Obito reconstructed the Akatsuki into an elite two-man-cell organization of S-rank missing-nin who captured eight of the nine Tailed Beasts.",
    members: ["Nagato (Pain)", "Konan", "Itachi Uchiha", "Kisame Hoshigaki", "Sasori", "Deidara", "Hidan", "Kakuzu", "Orochimaru (former)", "Obito Uchiha (Tobi)", "Zetsu (Black & White)", "Jūzō Biwa (former)"],
    notableOperations: [
      "Infiltration and capture of Kazekage Gaara (One-Tail)",
      "Assassination of Two-Tails Jinchūriki Yugito Nii",
      "Destruction of the Fire Temple and slaughter of the Twelve Guardian Monks",
      "Assault on Konohagakure and planetary flattening Almighty Push",
      "Declaration of the Fourth Great Shinobi World War at the Five Kage Summit"
    ]
  },
  {
    id: "anbu",
    name: "ANBU Black Ops",
    kanji: "暗部 (Ansatsu Senjutsu Tokushu Butai)",
    type: "Special Assassination and Tactical Squad",
    founder: "Tobirama Senju (Second Hokage)",
    leader: "Directly under the reigning Hokage (commander varies)",
    base: "Konohagakure Subterranean Headquarters",
    uniform: "Porcelain animal masks (fox, cat, bird, wolf), black and grey sleeveless flak vests, arm guards, ninjato strapped across the back, and the spiral flame tattoo inked on the left shoulder.",
    objective: "Execute high-risk black operations directly ordered by the Kage: state assassinations, covert espionage, VIP body-guarding, hostage extraction, and high-level tracking.",
    description: "The secret intelligence branch and elite strike force of the hidden villages, invented by Tobirama Senju and adopted worldwide. Operating completely under masks and code names to erase individual identities, ANBU operatives answer only to the Kage, carrying out missions so hazardous and classified that regular Jonin are barred from knowledge of them.",
    members: ["Kakashi Hatake (former Captain)", "Itachi Uchiha (youngest Captain)", "Yamato (Tenzo)", "Shisui Uchiha", "Yūgao Uzuki", "Sai", "Torune Aburame", "Fū Yamanaka"],
    notableOperations: [
      "Night surveillance of the Uchiha Clan Compound",
      "Execution of high-value rogue missing-nin abroad",
      "Perimeter defense of the Hokage Residence during emergency invasions",
      "Tracking and forensic analysis of forbidden jutsu crimes"
    ]
  },
  {
    id: "root",
    name: "Root (The Foundation)",
    kanji: "根 (Ne)",
    type: "Covert Black-Ops & Shadow Sub-Division",
    founder: "Danzō Shimura",
    leader: "Danzō Shimura",
    base: "Subterranean Bunkers Beneath Konohagakure",
    uniform: "Standard ANBU gear with modified masks and the cursed seal of silence inked on the tongue, preventing operatives from speaking of Danzō or Root.",
    objective: "Preserve Konohagakure from the shadows by any means necessary, adhering to the creed: 'In Root, you have no name. You have no feelings. You have no past. You have no future. You have only your mission.'",
    description: "An ultra-extremist, clandestine sub-faction of the Leaf ANBU created by Danzō Shimura. Root operatives underwent brutal emotion-stripping conditioning, forcing brothers and best friends to slaughter each other to purge emotional attachments. Root conducted unsanctioned experiments with Hashirama's cells and orchestrated assassinations to manipulate village politics.",
    members: ["Danzō Shimura", "Sai", "Shin", "Fū Yamanaka", "Torune Aburame", "Nonō Yakushi", "Kabuto Yakushi (former recruit)", "Tsuchigumo Clan Scions"],
    notableOperations: [
      "Assassination of Yahiko via collusion with Hanzō in the Rain Village",
      "Orchestration of the Uchiha Clan Downfall with Itachi Uchiha",
      "Infiltration of Orochimaru’s lair to execute Sasuke Uchiha",
      "Clandestine bid to seize the Hokage mantle at the Five Kage Summit"
    ]
  },
  {
    id: "seven-swordsmen",
    name: "Seven Ninja Swordsmen of the Mist",
    kanji: "霧の忍刀七人衆 (Kirigakure no Shinobigatana Nananin-shū)",
    type: "Elite Swordsmanship Battalion",
    founder: "Early First Mizukage Administration",
    leader: "Varies by era; traditionally autonomous elite squad",
    base: "Hidden Mist Village (Kirigakure)",
    uniform: "Traditional pinstriped Mist arm and leg warmers, bandages concealing the lower face, and sharp, filed carnivorous teeth.",
    objective: "Dominate battlefield fronts through unrivaled kenjutsu using the Seven Legendary Blades of the Mist, passing the weapons down from master to apprentice across generations.",
    description: "The most feared combat unit of the Land of Water. Comprising seven masters who each wielded a supernatural sword with unique magical properties: Kubikiribōchō (regenerates with iron from blood), Samehada (living shark skin that eats chakra), Nuibari (pierces and stitches enemies together), Kabutowari (crushes all defense), Shibuki (combines explosive tags with slashes), Kiba (twin lightning swords), and Hiramekarei (stores and discharges chakra).",
    members: ["Zabuza Momochi", "Kisame Hoshigaki", "Mangetsu Hōzuki", "Chōjūrō", "Kushimaru Kuriarare", "Jinin Akebino", "Jinjinpachi Munashi", "Raiga Kurosuki", "Fuguki Suikazan", "Jūzō Biwa"],
    notableOperations: [
      "Decimation of allied platoons in the Third Great Ninja War until confronted by Might Duy",
      "Failed coup d’état against the Fourth Mizukage Yagura",
      "Reanimation by Kabuto in the Fourth Ninja War to terrorize the Third Division"
    ]
  },
  {
    id: "twelve-guardian",
    name: "Twelve Guardian Ninja",
    kanji: "守護忍十二士 (Shugonin Jūnishi)",
    type: "Elite Palatial Bodyguard Unit",
    founder: "Fire Daimyō Palace",
    leader: "Elected Chief Guardian (Asuma Sarutobi / Chiriku)",
    base: "Fire Daimyō Palace & Fire Temple",
    uniform: "Embroidered sash featuring the kanji for 'Fire' (火) worn around the waist as a supreme mark of national pride.",
    objective: "Provide round-the-clock physical protection for the Fire Daimyō and secure the spiritual grounds of the Fire Temple.",
    description: "An elite assembly of twelve peerless ninja handpicked from the Land of Fire to serve as the personal praetorian guard of the Fire Daimyō. The group tragically fractured into a bloody civil war between those who believed the Hokage should lead the nation versus those who believed the Daimyō alone was the true ruler.",
    members: ["Asuma Sarutobi", "Chiriku (Fire Temple Head Monk)", "Kitane", "Nauma", "Tōu", "Seito", "Kazuma (Radical Leader)"],
    notableOperations: [
      "Defense of the Fire Daimyō during palace coup attempts",
      "Internal factional war between loyalists and radicals",
      "Fire Temple's heroic last stand against Akatsuki members Hidan and Kakuzu"
    ]
  },
  {
    id: "taka",
    name: "Taka (formerly Hebi)",
    kanji: "鷹 (Hawk) / 蛇 (Snake)",
    type: "Autonomous Mercenary Squad",
    founder: "Sasuke Uchiha",
    leader: "Sasuke Uchiha",
    base: "Roaming across Southern Fire & Sound bases",
    uniform: "Initially white and black robes with purple rope cords; later donned standard Akatsuki cloaks during their alliance.",
    objective: "Hebi Era: Locate and kill Itachi Uchiha. Taka Era: Avenge Itachi by destroying Konohagakure and executing the village elders.",
    description: "Formed by Sasuke Uchiha after he turned against Orochimaru. Sasuke personally recruited three unique test subjects from Orochimaru's secret prisons: Suigetsu Hōzuki for raw swordsmanship, Karin Uzumaki for sensory tracking and healing, and Jūgo for natural energy power. After learning the truth of Itachi's sacrifice from Obito, the group was renamed Taka.",
    members: ["Sasuke Uchiha (Leader)", "Suigetsu Hōzuki", "Karin Uzumaki", "Jūgo"],
    notableOperations: [
      "Tracking of Itachi Uchiha through Akatsuki outposts",
      "Infiltration of Unraikyō and duel against Eight-Tails Jinchūriki Killer Bee",
      "Infiltration of the Five Kage Summit and clash with the Kage",
      "Battle against Danzō Shimura at the Samurai Bridge"
    ]
  },
  {
    id: "allied-forces",
    name: "Allied Shinobi Forces",
    kanji: "忍連合軍 (Shinobi Rengōgun)",
    type: "Global Multi-National Military Coalition",
    founder: "The Five Kage and General Mifune at the Land of Iron Summit",
    leader: "Fourth Raikage A (Supreme Commander) & Gaara (Regimental Commander)",
    base: "Joint Command HQ in Kumogakure",
    uniform: "Unified forehead protectors stamped with the single kanji for 'Shinobi' (忍), erasing village-specific allegiances.",
    objective: "Unite the military might of all Five Great Shinobi Nations and the Land of Iron to defeat Obito Uchiha, Kabuto Yakushi, Madara Uchiha, and protect the remaining Jinchūriki.",
    description: "The largest and most powerful military coalition in world history, uniting 80,000 shinobi and samurai from Leaf, Sand, Mist, Cloud, Stone, and Iron Country. Formed in response to Tobi's declaration of the Fourth Shinobi World War, the Alliance dismantled centuries of tribal blood-feuds and established the foundation of international world peace.",
    members: ["Supreme Commander A", "Regimental Commander Gaara", "Darui (First Division)", "Kitsuchi (Second Division)", "Kakashi Hatake (Third Division)", "Mifune (Fifth Division)", "Ino-Shika-Chō", "Naruto Uzumaki", "Killer Bee"],
    notableOperations: [
      "Mobilization of 80,000 troops along coastal and desert theaters",
      "Purge of 100,000 White Zetsu clones infiltrating night lines",
      "Containment and sealing of hundreds of reanimated legendaries",
      "Climactic stand against the Ten-Tails and Infinite Tsukuyomi"
    ]
  },
  {
    id: "kara",
    name: "Kara",
    kanji: "殻 (Husk)",
    type: "Clandestine Multi-Generational Cult / Secret Society",
    founder: "Isshiki Ōtsutsuki (in the body of Jigen)",
    leader: "Jigen (Isshiki Ōtsutsuki) / Code",
    base: "Alternate Dimensions & Outposts in Outer Lands",
    uniform: "Hooded black robes with geometric red-and-white accents and roman numerals tattooed onto the faces of the Inners.",
    objective: "Cultivate a new God Tree on Earth using an Ōtsutsuki sacrifice (Code/Boruto/Kawaki) to harvest the divine chakra fruit and achieve godhood.",
    description: "A shadowy organization that arose in the post-Fourth Shinobi World War era, divided into 'Inners' (heavily modified cyborgs equipped with catastrophic Scientific Ninja Tools and Ōtsutsuki abilities) and 'Outers' (sleeper agents and political figures placed in world governments).",
    members: ["Jigen (Isshiki)", "Amado (Chief Scientist)", "Kashin Koji (Jiraiya Clone)", "Delta", "Boro", "Victor", "Code", "Eida", "Daemon", "Kawaki (former Vessel)"],
    notableOperations: [
      "Purchase and smuggling of the Vessel Kawaki via transport blimps",
      "Infiltration and destruction of Hidden Leaf defensive sectors",
      "Isshiki's direct invasion of Konohagakure resulting in Baryon Mode"
    ]
  },
  {
    id: "sound-four",
    name: "The Sound Four & Kimimaro",
    kanji: "音の四人衆 (Oto no Yoninshū)",
    type: "Elite Bodyguard & Barrier Unit",
    founder: "Orochimaru",
    leader: "Kimimaro (formerly) / Sakon and Ukon",
    base: "Otogakure Northern Laboratories",
    uniform: "Lilac tunics, thick purple rope belts, and black leg warmers; monstrous demonic mutations when activating the Curse Mark Level 2.",
    objective: "Guard Orochimaru’s person, erect impenetrable fūinjutsu barriers, and safely retrieve high-value specimens like Sasuke Uchiha.",
    description: "The elite cadre among Orochimaru's prisoners who earned their rank by slaughtering thousands of fellow inmates in battle royales. They erected the Four Violet Flames Formation to seal Hiruzen Sarutobi with Orochimaru and led the mission to escort Sasuke to the Land of Sound.",
    members: ["Kimimaro (Bone Pulse)", "Sakon and Ukon (Fused Flesh)", "Kidōmaru (Six Arms / Spider Webbing)", "Tayuya (Demonic Flute Sound Genjutsu)", "Jirōbō (Earth Style / Brute Strength)"],
    notableOperations: [
      "Erection of the Four Violet Flames Barrier during the Konoha Crush",
      "Infiltration of Konohagakure to deliver the invitation to Sasuke Uchiha",
      "Escort of the black sealing coffin during the Sasuke Recovery Mission"
    ]
  },
  {
    id: "police-force",
    name: "Konoha Military Police Force",
    kanji: "木ノ葉警務部隊 (Konoha Keimu Butai)",
    type: "Internal Law Enforcement Agency",
    founder: "Tobirama Senju (Second Hokage)",
    leader: "Traditionally the Uchiha Clan Head (Fugaku Uchiha)",
    base: "Police Headquarters, Uchiha Clan Compound",
    uniform: "Standard Leaf flak jacket bearing the Uchiha red-and-white fan crest on the back and black armbands.",
    objective: "Maintain civil order within Konohagakure, investigate municipal crimes, arrest lawbreaking shinobi, and run the village detention facility.",
    description: "Created by Second Hokage Tobirama Senju to honor the Uchiha clan's martial genius while simultaneously segregating their authority to internal village policing, keeping them away from the village's true political power apparatus. Following the Uchiha downfall, the police force was reformed to include all clans.",
    members: ["Fugaku Uchiha (Chief)", "Tekka Uchiha", "Yashiro Uchiha", "Inabi Uchiha", "Mikoto Uchiha", "Kiba Inuzuka (Boruto Era)"],
    notableOperations: [
      "Civil riot suppression during wartime shortages",
      "Detention of foreign spies and black market smugglers",
      "Investigation into Nine-Tails claw residue and illegal jutsu research"
    ]
  },
  {
    id: "puppet-brigade",
    name: "Sunagakure Puppet Brigade",
    kanji: "砂隠れ傀儡部隊 (Sunagakure Kugutsu Butai)",
    type: "Specialized Mechanical Artillery Division",
    founder: "Monzaemon Chikamatsu (Inventor of Puppetry)",
    leader: "Lady Chiyo (Historical) / Kankurō (Modern)",
    base: "Sunagakure Puppet Testing Caves",
    uniform: "Sand turbans, protective tinted sand goggles, and specialized multi-finger chakra thread gloves.",
    objective: "Wipe out enemy battle formations from long distances using poison-coated mechanical puppets, needle volleys, and hidden blade mechanisms.",
    description: "The signature martial corps of the Land of Wind, developed by Monzaemon Chikamatsu to compensate for the village's smaller soldier count. Master puppeteers manipulate multiple puppets with thread-thin chakra strands emitted from their fingertips, fighting with complete mechanical unpredictability and lethal, fast-acting neurotoxins.",
    members: ["Monzaemon Chikamatsu", "Lady Chiyo", "Sasori", "Kankurō"],
    notableOperations: [
      "Mass puppet artillery bombardment during the Second Great Ninja War",
      "Lady Chiyo's White Secret Technique: Ten Puppet Collection vs Sasori's Hundred",
      "Modern Commando Division support during the Fourth Ninja War"
    ]
  },
  {
    id: "hunter-nin",
    name: "Kirigakure Hunter-Nin Corps",
    kanji: "追い忍部隊 (Oinin-butai)",
    type: "Special Missing-Nin Disposal Corp",
    founder: "First Mizukage Administration",
    leader: "Kirigakure Hunter Captains",
    base: "Kirigakure High Detention Citadel",
    uniform: "Plain white porcelain masks with thin eye slits, blue water ripple carvings, and dark high-collared tracking kimonos.",
    objective: "Track down, assassinate, and completely incinerate the bodies of rogue Kirigakure missing-nin to prevent foreign villages from uncovering secret jutsu or bloodline genetic secrets.",
    description: "Known throughout the five nations as the 'Undertaker Corp'. Hunter-nin possess encyclopedic anatomical knowledge, mastering senbon needle strikes against vital pressure points to induce temporary death-states. When an execution is complete, they decapitate the target and vaporize the corpse on the spot to leave zero genetic traces for enemy autopsies.",
    members: ["Ao (Historical connection)", "Haku (Impersonated Hunter-nin)", "Mist Hunter Captains"],
    notableOperations: [
      "Elimination of renegade Yuki and Kaguya bloodline missing-nin",
      "Recovery and assassination attempt on Zabuza Momochi in the Land of Waves",
      "Guarding of Kirigakure's classified jutsu scroll vaults"
    ]
  }
];

export default organizations;
