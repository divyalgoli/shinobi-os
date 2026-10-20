// src/data/missions.js - Comprehensive Shinobi Mission Database (75 Canon Missions)

const missions = [
  // ==========================================
  // D-RANK MISSIONS (IDs 1–15)
  // Low-stakes assignments suitable for newly graduated Genin: chores, recovery, safe reconnaissance, and village service.
  // ==========================================
  {
    id: 1,
    title: "Capture Tora the Daimyō's Runaway Cat",
    rank: "D",
    category: "Search & Retrieval",
    village: "Hidden Leaf",
    location: "Konoha Outskirts",
    client: "Madame Shijimi (Wife of Fire Daimyō)",
    reward: 150,
    ryoReward: "5,000 Ryo",
    recommendedRank: "Genin",
    arc: "Prologue / Land of Waves",
    description: "Locate and safely capture Tora, the notorious brown cat with a red ribbon who escaped the Fire Daimyō's estate and is hiding in the rugged brush near Point C-14.",
    objectives: [
      "Coordinate squad positioning via two-way radio headsets",
      "Corner the target without sustaining scratch injuries",
      "Safely deliver Tora directly to Madame Shijimi at the Hokage Residence"
    ]
  },
  {
    id: 2,
    title: "Weed the Herb Gardens of the Senior Herbalist",
    rank: "D",
    category: "Village Service",
    village: "Hidden Leaf",
    location: "Medicinal Greenhouse District",
    client: "Master Yakushi (Senior Leaf Herbalist)",
    reward: 120,
    ryoReward: "3,500 Ryo",
    recommendedRank: "Genin",
    arc: "Academy Graduation",
    description: "Carefully weed invasive clover and noxious vines from the village's rare medicinal herb patches without damaging the delicate chakra-infused clover sprouts.",
    objectives: [
      "Identify toxic creeping vines versus valuable medicinal leaves",
      "Uproot 50 kilograms of weeds along Greenhouse Rows 1 through 8",
      "Turn over compost soil and water the fragile antidote roots"
    ]
  },
  {
    id: 3,
    title: "Riverbed Trash Clearance along the Naka River",
    rank: "D",
    category: "Environmental",
    village: "Hidden Leaf",
    location: "Naka River Shallows",
    client: "Konoha Department of Sanitation",
    reward: 130,
    ryoReward: "4,000 Ryo",
    recommendedRank: "Genin",
    arc: "Early Genin Assignments",
    description: "Clear debris, fallen branches, and discarded metallic refuse snagged along the Naka River weir to maintain clean drinking water for the downstream districts.",
    objectives: [
      "Wade into the river shallows and haul stranded flotsam ashore",
      "Inspect the water filtration grates for blockages",
      "Bag and transport refuse to the municipal incinerator"
    ]
  },
  {
    id: 4,
    title: "Walk the Guard Hounds of the Inuzuka Kennels",
    rank: "D",
    category: "Village Service",
    village: "Hidden Leaf",
    location: "Inuzuka Clan Compound Outskirts",
    client: "Tsume Inuzuka (Inuzuka Matriarch)",
    reward: 140,
    ryoReward: "4,500 Ryo",
    recommendedRank: "Genin",
    arc: "Genin Training Days",
    description: "Exercise a pack of energetic, highly aggressive adolescent Inuzuka ninken without letting them break formation, chase street vendors, or dig up residential gardens.",
    objectives: [
      "Leash and manage five unruly ninken pups",
      "Complete a 10-kilometer run along the Training Ground perimeter",
      "Feed, groom, and inspect paw pads for bramble thorns upon return"
    ]
  },
  {
    id: 5,
    title: "Storehouse Inventory and Shuriken Sharpening",
    rank: "D",
    category: "Logistics",
    village: "Hidden Leaf",
    location: "Eastern Armory Reserve",
    client: "Higurashi Weaponsmith Shop",
    reward: 160,
    ryoReward: "5,500 Ryo",
    recommendedRank: "Genin",
    arc: "Chunin Exam Preparation",
    description: "Inspect, count, and sharpen bundles of iron kunai, shuriken, and wire coils returned from standard border patrols, restocking the armory racks accurately.",
    objectives: [
      "Count and catalog 1,200 thrown weapons by weight and condition",
      "Whet blunt edges on rotating grindstones to regulation sharpness",
      "Apply protective anti-rust camellia oil to stored blades"
    ]
  },
  {
    id: 6,
    title: "Retrieve Lost Fishing Tackle from Lake Naka",
    rank: "D",
    category: "Search & Retrieval",
    village: "Hidden Leaf",
    location: "Lake Naka Western Pier",
    client: "Old Fisherman Genzo",
    reward: 110,
    ryoReward: "3,000 Ryo",
    recommendedRank: "Genin",
    arc: "Early Genin Days",
    description: "Dive into the chilly depths of Lake Naka to recover a sunken tackle box containing heirloom lures and a merchant permit dropped from the wooden pier.",
    objectives: [
      "Practice basic chakra-enhanced breath holding underwater",
      "Navigate submerged reeds near the bottom pylons",
      "Retrieve the steel tackle box intact and return it to Genzo"
    ]
  },
  {
    id: 7,
    title: "Post Courier Run between Guard Posts",
    rank: "D",
    category: "Courier",
    village: "Hidden Leaf",
    location: "Outer Wall Sentries",
    client: "Konoha Gate Security Division",
    reward: 170,
    ryoReward: "6,000 Ryo",
    recommendedRank: "Genin",
    arc: "Border Defense Basics",
    description: "Deliver daily password rosters and updated entry clearance logs to four outer watchtowers along Konoha's secondary defensive barrier before sundown.",
    objectives: [
      "Receive sealed cipher documents from Gate Captain Izumo",
      "Sprint across designated rooftop courier routes without delay",
      "Collect signed acknowledgments from sentry commanders at all four towers"
    ]
  },
  {
    id: 8,
    title: "Harvest Firewood for the Leaf Orphanage",
    rank: "D",
    category: "Village Service",
    village: "Hidden Leaf",
    location: "South Forest Logging Tract",
    client: "Nonō Yakushi (Orphanage Director)",
    reward: 130,
    ryoReward: "3,800 Ryo",
    recommendedRank: "Genin",
    arc: "Village Welfare",
    description: "Fell and split dry deadwood from designated forestry parcels to provide heating and cooking timber for the Konoha Orphanage before the arrival of winter rains.",
    objectives: [
      "Identify standing dead timber marked with white forestry tags",
      "Chop and split two cords of uniform cooking logs",
      "Stack timber securely under covered drying sheds at the orphanage"
    ]
  },
  {
    id: 9,
    title: "Sand Clearing from Windmill Gearboxes",
    rank: "D",
    category: "Maintenance",
    village: "Hidden Sand",
    location: "Sunagakure Wind Turbine Ridge",
    client: "Sunagakure Utilities Division",
    reward: 140,
    ryoReward: "4,200 Ryo",
    recommendedRank: "Genin",
    arc: "Sand Village Duties",
    description: "Dismantle, brush out, and relubricate heavy stone gearboxes driving the village's deep-well pump windmills after a severe nighttime dust storm.",
    objectives: [
      "Scale the 15-meter scaffolding with steady balance",
      "Scrape abrasive desert silt out of copper tooth gears",
      "Pack bearing seals with fresh heat-resistant tallow"
    ]
  },
  {
    id: 10,
    title: "Babysit Daimyō’s Pampered Heir",
    rank: "D",
    category: "Bodyguard",
    village: "Hidden Leaf",
    location: "Konoha Central Market",
    client: "Counselor Homura’s Bureau",
    reward: 180,
    ryoReward: "6,500 Ryo",
    recommendedRank: "Genin",
    arc: "Academy Graduation",
    description: "Keep a watchful eye on a young noble heir prone to playing hazardous pranks, climbing steep roofs, and buying out sweet shops during his afternoon shopping excursion.",
    objectives: [
      "Prevent the child from endangering himself near cliff ledges",
      "Shield the client from marketplace crowds and runaway carts",
      "Return the young master safely to his private manor before dusk"
    ]
  },
  {
    id: 11,
    title: "Escort Farmer’s Giant Daikon Radish Cart",
    rank: "D",
    category: "Escort",
    village: "Hidden Leaf",
    location: "East Gate Farming Roads",
    client: "Farmer Denka",
    reward: 150,
    ryoReward: "5,000 Ryo",
    recommendedRank: "Genin",
    arc: "Local Village Agriculture",
    description: "Help an elderly agrarian pull an overloaded two-ton wooden cart of prized giant daikon radishes uphill through muddy ruts into Konoha’s wholesale market.",
    objectives: [
      "Provide physical traction assistance on slippery mud inclines",
      "Deter roaming wild boars attracted by the vegetable scent",
      "Arrive at the wholesale stall before the trading bell rings"
    ]
  },
  {
    id: 12,
    title: "Painting the Great South Wall Perimeter",
    rank: "D",
    category: "Maintenance",
    village: "Hidden Leaf",
    location: "South Boundary Wall",
    client: "Konoha Department of Infrastructure",
    reward: 120,
    ryoReward: "3,600 Ryo",
    recommendedRank: "Genin",
    arc: "Village Maintenance",
    description: "Apply weatherproofing pitch and sealants along 200 meters of outer masonry to prevent moisture erosion and moss decay on Konoha's defensive fortifications.",
    objectives: [
      "Scrape old calcified mortar from the lower foundations",
      "Apply protective bitumen sealant evenly across all stone joints",
      "Inspect foundation drainage grates for structural cracks"
    ]
  },
  {
    id: 13,
    title: "Library Scroll Cataloging and Dusting",
    rank: "D",
    category: "Intelligence",
    village: "Hidden Leaf",
    location: "Konoha Archives Secondary Wing",
    client: "Chief Archivist",
    reward: 160,
    ryoReward: "5,000 Ryo",
    recommendedRank: "Genin",
    arc: "Scholastic Studies",
    description: "Dust and reorganize thousands of non-classified civil census scrolls, geological surveys, and tax receipts according to chronological clan eras.",
    objectives: [
      "Sort 300 archival boxes by era and village district",
      "Treat moth-eaten parchment with cedar preservative powder",
      "Verify that no restricted jutsu scrolls are misplaced in open racks"
    ]
  },
  {
    id: 14,
    title: "Recover Stray Sparring Puppets in Suna",
    rank: "D",
    category: "Search & Retrieval",
    village: "Hidden Sand",
    location: "Puppet Brigade Training Caves",
    client: "Sunagakure Puppet Corps",
    reward: 170,
    ryoReward: "5,800 Ryo",
    recommendedRank: "Genin",
    arc: "Sand Puppet Training",
    description: "Enter the disused sand-carved cavern tunnels behind Sunagakure to locate and retrieve three defective mechanical sparring puppets that wandered into the shafts.",
    objectives: [
      "Navigate dimly lit labyrinthine cave corridors",
      "Disable hair-trigger mechanical poison darts without triggering them",
      "Haul the 40-kilogram wood-and-iron puppets back to the workshop"
    ]
  },
  {
    id: 15,
    title: "Academy Sparring Training Assistant",
    rank: "D",
    category: "Training",
    village: "Hidden Leaf",
    location: "Ninja Academy Courtyard",
    client: "Instructor Iruka Umino",
    reward: 190,
    ryoReward: "7,000 Ryo",
    recommendedRank: "Genin",
    arc: "Academy Instructor Support",
    description: "Serve as a sparring partner and technique demonstrator for the Academy's graduating class, providing constructive feedback on basic taijutsu and clone jutsu.",
    objectives: [
      "Demonstrate proper shuriken throwing posture and trajectory control",
      "Spar defensively against Academy students without causing injury",
      "Help Instructor Iruka grade throwing accuracy scores"
    ]
  },

  // ==========================================
  // C-RANK MISSIONS (IDs 16–30)
  // Moderate-difficulty assignments: escorting civilians, fighting armed bandits or wild beasts, low-risk reconnaissance.
  // ==========================================
  {
    id: 16,
    title: "Escort Master Carpenter Tazuna to the Land of Waves",
    rank: "C",
    category: "Escort",
    village: "Hidden Leaf",
    location: "Land of Fire to Land of Waves",
    client: "Tazuna (Master Bridge Builder)",
    reward: 450,
    ryoReward: "30,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Prologue / Land of Waves",
    description: "Provide close protection for Master Bridge Builder Tazuna as he journeys from Konohagakure back to his homeland to finish construction on the vital sea bridge.",
    objectives: [
      "Escort Tazuna along the main coastal highway against roadside ambush",
      "Detect concealed enemies disguised as puddles or foliage",
      "Safeguard the client's home in the Land of Waves upon safe arrival"
    ]
  },
  {
    id: 17,
    title: "Suppress Bandits Threatening the Tea Country Trade Route",
    rank: "C",
    category: "Combat",
    village: "Hidden Leaf",
    location: "Tea Country Border Pass",
    client: "Merchant Guildmaster Jirocho",
    reward: 400,
    ryoReward: "25,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Land of Tea Arc",
    description: "A band of twenty armed highwaymen has established a fortified toll checkpoint in the narrow mountain pass, extorting civilian grain merchants.",
    objectives: [
      "Scout the bandit camp perimeter under cover of night",
      "Disable the bandit watchtower guards using silent takedowns",
      "Subdue the bandit ringleader and recover stolen merchant goods"
    ]
  },
  {
    id: 18,
    title: "Escort Fire Country Herbalist Caravan to Otafuku Town",
    rank: "C",
    category: "Escort",
    village: "Hidden Leaf",
    location: "Southern Highway through Otafuku Town",
    client: "Guild of Apothecaries",
    reward: 350,
    ryoReward: "20,000 Ryo",
    recommendedRank: "Genin",
    arc: "Early Part 1 Expeditions",
    description: "Protect three covered wagons transporting delicate medical ingredients and refined chakra salves through dense forest paths known for robber ambushes.",
    objectives: [
      "Maintain a 360-degree sensory vanguard around the three wagons",
      "Repel wild forest wolf packs attracted by medicinal scents",
      "Deliver the wagon cargo undamaged to the Otafuku Town apothecary"
    ]
  },
  {
    id: 19,
    title: "Investigate Ghost Ship Rumors in the Demon Ocean",
    rank: "C",
    category: "Investigation",
    village: "Hidden Mist",
    location: "Demon Ocean Archipelagos",
    client: "Water Country Maritime Bureau",
    reward: 420,
    ryoReward: "28,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Land of Water Investigations",
    description: "Venture into the fog-shrouded shipping lanes off the coast of Kirigakure to determine if sightings of an abandoned pirate galleon are genuine or pirate trickery.",
    objectives: [
      "Board the derelict vessel amidst heavy oceanic sea-mist",
      "Search the cargo hold for illicit smuggled contraband or traps",
      "Engage and apprehend rogue smugglers using genjutsu camouflage"
    ]
  },
  {
    id: 20,
    title: "Border Reconnaissance along the Kusagakure Frontier",
    rank: "C",
    category: "Reconnaissance",
    village: "Hidden Leaf",
    location: "Land of Grass Boundary",
    client: "Leaf Border Patrol Headquarters",
    reward: 380,
    ryoReward: "22,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Chunin Exam Prelude",
    description: "Patrol a twenty-kilometer stretch of riverbank along the border with the Land of Grass to document unauthorized troop movements or makeshift observation blinds.",
    objectives: [
      "Observe three designated crossing fords from tree canopy perches",
      "Sketch newly erected foreign outpost structures",
      "Avoid engaging unknown foreign shinobi patrols unless directly provoked"
    ]
  },
  {
    id: 21,
    title: "Subdue Giant Wild Boar of the Kurama Foothills",
    rank: "C",
    category: "Extermination",
    village: "Hidden Leaf",
    location: "Kurama Foothills Farming Valley",
    client: "Village Elder Minatoya",
    reward: 360,
    ryoReward: "21,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Leaf Countryside Protection",
    description: "A colossal, aggressive wild boar measuring six meters in length is devastating terraced rice paddies and charging civilian farmsteads at dusk.",
    objectives: [
      "Track giant hoofprints and broken cedar saplings to the beast's gully",
      "Lure the boar into an open clearing prepared with pitfall wire traps",
      "Subdue the creature with explosive tags or earth release pitfalls"
    ]
  },
  {
    id: 22,
    title: "Courier Confidential Treaty Scrolls to the Capital",
    rank: "C",
    category: "Courier",
    village: "Hidden Leaf",
    location: "Konoha to Fire Daimyō Capital",
    client: "Third Hokage Hiruzen Sarutobi",
    reward: 400,
    ryoReward: "26,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Pre-Chunin Exam Politics",
    description: "Transport sealed agricultural trade accords to the Prime Minister’s residence in the Fire Capital, maintaining top travel speed while vigilant against spy ambushes.",
    objectives: [
      "Maintain strict travel secrecy, bypassing crowded highway inns",
      "Neutralize any trailing reconnaissance scouts without losing the scroll",
      "Deliver the intact scroll with unbroken wax seal to the Minister"
    ]
  },
  {
    id: 23,
    title: "Rescue Trapped Surveyors from the Wind Canyon Sinkhole",
    rank: "C",
    category: "Rescue",
    village: "Hidden Sand",
    location: "Demon's Throat Gorge",
    client: "Sunagakure Geological Team",
    reward: 390,
    ryoReward: "24,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Desert Exploration",
    description: "A sudden sand subsidence has trapped three geological cartographers inside a precarious 60-meter canyon fissure that threatens to collapse under shifting dunes.",
    objectives: [
      "Anchor heavy chakra-infused ropes into solid cliff bedrock",
      "Descend into the shifting sand cavern with medical supplies",
      "Extract all three injured surveyors before the canyon walls crumble"
    ]
  },
  {
    id: 24,
    title: "Clear River Pirates from the Tanigakure Basin",
    rank: "C",
    category: "Combat",
    village: "Hidden Leaf",
    location: "Land of Valleys Waterways",
    client: "Tanigakure Trade Authority",
    reward: 410,
    ryoReward: "27,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Border Policing",
    description: "River buccaneers utilizing armored barges have mounted ballistas on their hulls, seizing cargo transports navigating the Tanigakure gorge rivers.",
    objectives: [
      "Infiltrate the river pirate flotilla under the cover of dense river fog",
      "Disable the ballistas and cut mooring cables",
      "Apprehend the pirate captain and turn him over to the local magistracy"
    ]
  },
  {
    id: 25,
    title: "Safeguard the Maiden of the Fire Temple on Pilgrimage",
    rank: "C",
    category: "Escort",
    village: "Hidden Leaf",
    location: "Fire Temple Mountain Trail",
    client: "Head Monk Chiriku",
    reward: 430,
    ryoReward: "29,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Twelve Guardian Ninja Legacy",
    description: "Protect a young ceremonial maiden carrying sacred prayer relics along the three-day mountain path between the Capital Shrines and the Fire Temple.",
    objectives: [
      "Establish defensive campsites at designated sacred waystations",
      "Repel rogue ronin seeking to ransom high-born temple priestesses",
      "Escort the procession to the inner gates of the Fire Temple"
    ]
  },
  {
    id: 26,
    title: "Investigate Chakra Resonance in the Abandoned Gold Mine",
    rank: "C",
    category: "Investigation",
    village: "Hidden Stone",
    location: "Iwagakure Southern Foothills",
    client: "Third Tsuchikage Ōnoki",
    reward: 440,
    ryoReward: "30,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Stone Village Lore",
    description: "Miners reported strange luminescence and abnormal magnetic interference emitting from the deepest subterranean shafts of a disused gold mine.",
    objectives: [
      "Delve into the unlit tunnels equipped with sensory tags",
      "Identify the source as an unstable earth-chakra crystal vein",
      "Erect containment barrier tags around the fault line to halt tremors"
    ]
  },
  {
    id: 27,
    title: "Protect Iron Country Samurai Armor Foundry",
    rank: "C",
    category: "Defense",
    village: "Land of Iron",
    location: "Mount Three Wolves Foundry",
    client: "General Mifune",
    reward: 420,
    ryoReward: "28,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Land of Iron Neutrality",
    description: "Stand guard over a ceremonial smithy forging chakra-conducting katanas against rogue mercenary saboteurs hired by rival feudal lords.",
    objectives: [
      "Mount perimeter watch over the mountain approach bridges",
      "Engage and repel night saboteurs armed with smoke grenades",
      "Ensure no blast damage affects the active blast furnaces"
    ]
  },
  {
    id: 28,
    title: "Retrieve Stolen Clan Ledger from Missing Rogue Thief",
    rank: "C",
    category: "Search & Retrieval",
    village: "Hidden Leaf",
    location: "Tanzaku Town Outskirts",
    client: "Yamanaka Clan Elder",
    reward: 370,
    ryoReward: "23,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Search for Tsunade Era",
    description: "Track an ex-accountant who stole confidential clan economic ledgers and fled toward the bustling gambling dens of Tanzaku Town.",
    objectives: [
      "Question contacts in Tanzaku Town taverns without blowing cover",
      "Corner the thief in an alleyway before he sells the ledgers to spies",
      "Recover the documents intact and return the suspect in chakra cuffs"
    ]
  },
  {
    id: 29,
    title: "Escort Traveling Kabuki Troupe through Forest of Illusion",
    rank: "C",
    category: "Escort",
    village: "Hidden Leaf",
    location: "Land of Fire Mist Woods",
    client: "Actor Ichimatsu",
    reward: 390,
    ryoReward: "25,000 Ryo",
    recommendedRank: "Genin / Chunin",
    arc: "Filler / World Exploration",
    description: "Guide a famous traveling theater troupe and their baggage train through a forest known for natural hallucinogenic fungal spores and maze-like trails.",
    objectives: [
      "Brew herbal spore-neutralizing teas for the civilian actors",
      "Mark true northern navigational trails on tree trunks",
      "Guide the caravan safely through the foggy valley to the capital theater"
    ]
  },
  {
    id: 30,
    title: "Neutralize Giant Swamp Leech Swarm in Mist Marshes",
    rank: "C",
    category: "Extermination",
    village: "Hidden Mist",
    location: "Kirigakure Freshwater Bogs",
    client: "Village Agriculture Commissioner",
    reward: 410,
    ryoReward: "27,000 Ryo",
    recommendedRank: "Chunin",
    arc: "Mist Village Restoration",
    description: "An unnatural explosion of chakra-draining swamp leeches is threatening to poison the primary freshwater lotus pools used for medicinal cultivation.",
    objectives: [
      "Wear waterproof oiled protective suits into the mud flats",
      "Deploy salt and lightning-release discharge bursts to clear the swarm",
      "Collect fluid samples for medical research at the hospital"
    ]
  },

  // ==========================================
  // B-RANK MISSIONS (IDs 31–45)
  // Higher-stakes missions: combat against experienced Chunin/Jonin rogue ninja, dangerous espionage, high-profile bodyguard work.
  // ==========================================
  {
    id: 31,
    title: "Eliminate the Demon Brothers Ambush on the Waves Road",
    rank: "B",
    category: "Combat",
    village: "Hidden Leaf",
    location: "Land of Fire Coastal Woods",
    client: "Leaf Shinobi Command (Upgraded)",
    reward: 700,
    ryoReward: "80,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Prologue / Land of Waves",
    description: "Subdue the Demon Brothers (Gōzu and Meizu), Chunin-level missing-nin from Kirigakure armed with poison gauntlets and water release techniques.",
    objectives: [
      "Survive their coordinated chain-scythe ambush",
      "Counter their Water Release: Water Puddle Camouflage technique",
      "Interrogate the captured brothers to reveal who hired them against Tazuna"
    ]
  },
  {
    id: 32,
    title: "Infiltrate Kusagakure Rogue Compound to Recover Leaf Scrolls",
    rank: "B",
    category: "Infiltration",
    village: "Hidden Leaf",
    location: "Land of Grass Secret Base",
    client: "Konoha ANBU Intelligence",
    reward: 750,
    ryoReward: "90,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Chunin Exams Lore",
    description: "Infiltrate a fortified subterranean cavern occupied by rogue mercenaries who bought stolen Leaf training scrolls from black market fences.",
    objectives: [
      "Bypass perimeter chakra barrier tripwires without triggering alarms",
      "Silently incapacitate sentries guarding the scroll chamber",
      "Recover the three stolen jutsu scrolls and exfiltrate undetected"
    ]
  },
  {
    id: 33,
    title: "Bodyguard the Fire Daimyō’s Chief Diplomat in the Capital",
    rank: "B",
    category: "Bodyguard",
    village: "Hidden Leaf",
    location: "Fire Country Capital Palatial District",
    client: "Minister of External Relations",
    reward: 800,
    ryoReward: "100,000 Ryo",
    recommendedRank: "Jonin",
    arc: "Five Kage Summit Prelude",
    description: "Provide 24-hour executive protection for the chief negotiator during contentious trade summits facing assassination threats from rival noble factions.",
    objectives: [
      "Perform thorough poison checks on all meals and state banquet halls",
      "Intercept undercover assassins attempting to scale the guest pavilion",
      "Safeguard the diplomat during his open carriage transit to the treaty signing"
    ]
  },
  {
    id: 34,
    title: "Track and Capture Rogue Sound Shinobi Outpost",
    rank: "B",
    category: "Raid",
    village: "Hidden Leaf",
    location: "Northern Border with Land of Sound",
    client: "Special Jonin Anko Mitarashi",
    reward: 850,
    ryoReward: "110,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Search for Orochimaru",
    description: "Locate and neutralize an Otogakure staging station conducting reconnaissance and sound-wave frequency testing near Konoha's northern frontier.",
    objectives: [
      "Locate the concealed entrance masked by genjutsu tree illusions",
      "Destroy resonance cannon equipment before it transmits signals",
      "Capture the outpost commander alive for ANBU Torture & Interrogation"
    ]
  },
  {
    id: 35,
    title: "Intercept Stolen Puppet Weapons Shipment in Suna",
    rank: "B",
    category: "Interception",
    village: "Hidden Sand",
    location: "Dull Wind Desert Dunes",
    client: "Fifth Kazekage Gaara",
    reward: 720,
    ryoReward: "85,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Kazekage Rescue Prelude",
    description: "A desert merchant syndicate stole secret poison mechanisms and Kuroari puppet designs to sell to underground rogue factions.",
    objectives: [
      "Track giant lizard caravan trails across the rolling dunes",
      "Ambush the smugglers during their nighttime desert encampment",
      "Secure the stolen weapon crates without breaking the glass poison vials"
    ]
  },
  {
    id: 36,
    title: "Escort Princess Fuku to Her Wedding in the Land of Frost",
    rank: "B",
    category: "Escort",
    village: "Hidden Leaf",
    location: "Northern Mountain Pass to Land of Frost",
    client: "Daimyō Courtiers",
    reward: 780,
    ryoReward: "95,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Filler / Anime Expeditions",
    description: "Escort an anxious noble princess and her imperial dowry through snowy mountain passes haunted by rogue ninja seeking ransom.",
    objectives: [
      "Maintain the princess’s morale and physical comfort in sub-zero blizzards",
      "Defend the palanquin against high-altitude gliders dropping flash bombs",
      "Deliver the princess safely to the castle gates of the Frost Daimyō"
    ]
  },
  {
    id: 37,
    title: "Neutralize Black Market Chakra Pill Smuggling Ring",
    rank: "B",
    category: "Investigation",
    village: "Hidden Leaf",
    location: "Tanzaku Town Underground Bazaars",
    client: "Konoha Medical Bureau",
    reward: 820,
    ryoReward: "105,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Medical Logistics",
    description: "Dangerous counterfeit soldier pills causing cardiovascular rupture are being manufactured in secret subterranean laboratories and sold to mercenaries.",
    objectives: [
      "Pose as buyers in the Tanzaku gambling underground to find the lab",
      "Raid the manufacturing facility and arrest the rogue alchemists",
      "Confiscate all raw chemicals and destroy the pill-pressing machinery"
    ]
  },
  {
    id: 38,
    title: "Investigate Missing Mist Hunter-Nin Squad in Demon Wave",
    rank: "B",
    category: "Search & Rescue",
    village: "Hidden Mist",
    location: "Southern Sea of Land of Water",
    client: "Fifth Mizukage Mei Terumi",
    reward: 860,
    ryoReward: "115,000 Ryo",
    recommendedRank: "Jonin",
    arc: "Blood Mist Cleanup",
    description: "A squad of three elite Hunter-nin vanished while pursuing a B-rank rogue water user into an uncharted reef archipelago.",
    objectives: [
      "Locate the wrecked Hunter-nin schooner on razor coral reefs",
      "Follow chakra residue through underwater sea-caves",
      "Engage the rogue water user and extract any surviving Hunter-nin"
    ]
  },
  {
    id: 39,
    title: "Defend Kumogakure Lightning Ridge Transmission Tower",
    rank: "B",
    category: "Defense",
    village: "Hidden Cloud",
    location: "Mount Thunder Plateau",
    client: "Fourth Raikage A",
    reward: 800,
    ryoReward: "100,000 Ryo",
    recommendedRank: "Jonin",
    arc: "Cloud Village Defense",
    description: "Protect Kumogakure’s primary radio communication beacon against lightning-release saboteurs attempting to blackout military networks.",
    objectives: [
      "Fortify perimeter defensive positions around the high-voltage array",
      "Neutralize enemy infiltration teams equipped with grounding rods",
      "Maintain continuous transmission signal to the Raikage Tower"
    ]
  },
  {
    id: 40,
    title: "Subdue Rampaging Giant Snake in the Training Grounds",
    rank: "B",
    category: "Combat",
    village: "Hidden Leaf",
    location: "Training Ground 44 (Forest of Death)",
    client: "Examiner Anko Mitarashi",
    reward: 750,
    ryoReward: "90,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Chunin Exams Aftermath",
    description: "A twenty-meter giant summon snake left behind by Orochimaru’s followers has breached the inner fence of the Forest of Death, threatening Genin trainees.",
    objectives: [
      "Evacuate junior ninja from Sector 12 of the forest",
      "Blind the serpent using flash tags and sensory disruptions",
      "Lethally subdue the creature using high-yield ninjutsu strikes"
    ]
  },
  {
    id: 41,
    title: "Infiltrate Land of Rivers Secret Weapon Foundry",
    rank: "B",
    category: "Espionage",
    village: "Hidden Leaf",
    location: "Land of Rivers Gorge",
    client: "Jiraiya the Gallant",
    reward: 880,
    ryoReward: "120,000 Ryo",
    recommendedRank: "Jonin",
    arc: "Akatsuki Investigation Arc",
    description: "Scout an underground factory suspected of secretly smelting steel armor plates and spear-points for criminal syndicates connected to the Akatsuki.",
    objectives: [
      "Infiltrate the river forge using water surface stealth",
      "Document the forging marks and delivery route ledgers",
      "Plant explosive paper tags along the main furnace flue for demolition"
    ]
  },
  {
    id: 42,
    title: "Retrieve Stolen Medical Scrolls from Rogue Missing-Nin",
    rank: "B",
    category: "Recovery",
    village: "Hidden Leaf",
    location: "Border Mountains of the Land of Fire",
    client: "Lady Tsunade (Fifth Hokage)",
    reward: 830,
    ryoReward: "108,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Tsunade’s Administration",
    description: "An ex-medic ninja stole rare research scrolls documenting cellular regeneration formulas and is attempting to cross the northern border to sell them.",
    objectives: [
      "Pursue the fleeing rogue through rocky gorges using tracking dogs",
      "Overcome the rogue's scalpel jutsu and medical paralysis traps",
      "Retrieve the medical scroll without tearing its delicate pages"
    ]
  },
  {
    id: 43,
    title: "Escort Merchant Prince through Land of Hot Water",
    rank: "B",
    category: "Escort",
    village: "Hidden Leaf",
    location: "Land of Hot Water Valleys",
    client: "Bento Merchant Dynasty",
    reward: 760,
    ryoReward: "92,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Pre-Shippuden Travels",
    description: "Protect a prominent merchant heir traveling through the hot spring resorts of Yugakure, where cultists of Jashin have been sighted kidnapping travelers.",
    objectives: [
      "Survey hot spring inns for ritualistic symbols or blood markings",
      "Shield the client from fanatical sickle-wielding cult assailants",
      "Escort the merchant safely past the frontier into the Land of Fire"
    ]
  },
  {
    id: 44,
    title: "Disarm Hidden Explosive Tag Traps in Tanzaku Castle",
    rank: "B",
    category: "Demolitions",
    village: "Hidden Leaf",
    location: "Tanzaku Castle Ruins",
    client: "Town Reconstruction Bureau",
    reward: 790,
    ryoReward: "98,000 Ryo",
    recommendedRank: "Chunin / Jonin",
    arc: "Search for Tsunade Aftermath",
    description: "Following the battle in Tanzaku Town, retreating rogue shinobi left clusters of hair-trigger explosive tags wired into the timber foundations of the central keep.",
    objectives: [
      "Detect hidden chakra wires using specialized sensory glasses",
      "Defuse forty unstable explosive tags without triggering chain reactions",
      "Clear the castle courtyard for civilian reconstruction workers"
    ]
  },
  {
    id: 45,
    title: "Neutralize Rogue Genjutsu Syndicate in the Fog Forest",
    rank: "B",
    category: "Combat",
    village: "Hidden Leaf",
    location: "Konoha Northwest Forest Boundary",
    client: "Leaf Genjutsu Division",
    reward: 840,
    ryoReward: "110,000 Ryo",
    recommendedRank: "Jonin",
    arc: "Kurama Clan Legacy",
    description: "A cabal of rogue genjutsu practitioners is casting continuous illusions over travelers, trapping them in endless circular walking loops and robbing them.",
    objectives: [
      "Maintain Kai (Release) focus to see through illusory tree mirages",
      "Locate the five bell-ringing casters hidden in the forest canopy",
      "Disrupt their collective illusion and capture the ringleaders"
    ]
  },

  // ==========================================
  // A-RANK MISSIONS (IDs 46–60)
  // Village-level or national threats: Jonin-level missing-nin, defense against military invasion forces, high-risk hostage rescues, tracking Akatsuki scouts.
  // ==========================================
  {
    id: 46,
    title: "Defend the Great Naruto Bridge against Zabuza and Haku",
    rank: "A",
    category: "Combat",
    village: "Hidden Leaf",
    location: "Great Naruto Bridge, Land of Waves",
    client: "Tazuna / Kakashi Hatake (Team 7)",
    reward: 1400,
    ryoReward: "200,000 Ryo",
    recommendedRank: "Jonin / Elite Squad",
    arc: "Prologue / Land of Waves",
    description: "Face Zabuza Momochi, the Demon of the Hidden Mist, and his deadly ice-release subordinate Haku in a fight for the future and freedom of the Land of Waves.",
    objectives: [
      "Break through Haku’s Demonic Flocking Ice Mirrors",
      "Match Zabuza Momochi’s Silent Killing technique in thick mist",
      "Protect Bridge Builder Tazuna and repel Gato’s private mercenary army"
    ]
  },
  {
    id: 47,
    title: "Repel Sand and Sound Invasion Forces during Chunin Finals",
    rank: "A",
    category: "Defense",
    village: "Hidden Leaf",
    location: "Chunin Exam Stadium & Konoha Streets",
    client: "Konoha High Command",
    reward: 1600,
    ryoReward: "250,000 Ryo",
    recommendedRank: "Jonin / Chunin",
    arc: "Konoha Crush Arc",
    description: "Awaken from Kabuto’s Temple of Nirvana feather genjutsu, rally surviving shinobi, and purge Sound and Sand strike teams assaulting the village walls.",
    objectives: [
      "Dispel the mass genjutsu over the stadium audience",
      "Neutralize Sound and Sand squads assaulting the central streets",
      "Assist in defending civilian evacuation bunkers behind Hokage Rock"
    ]
  },
  {
    id: 48,
    title: "Pursue the Sound Four and Retrieve Sasuke Uchiha",
    rank: "A",
    category: "Pursuit & Retrieval",
    village: "Hidden Leaf",
    location: "Fire Country Forest to Valley of the End",
    client: "Fifth Hokage Tsunade",
    reward: 1800,
    ryoReward: "300,000 Ryo",
    recommendedRank: "Chunin Squad / Jonin",
    arc: "Sasuke Recovery Mission",
    description: "Track the Sound Four (Jirōbō, Kidōmaru, Sakon/Ukon, Tayuya) across the Land of Fire and retrieve Sasuke Uchiha before he reaches Orochimaru's fortress.",
    objectives: [
      "Track the black sealing coffin containing Sasuke Uchiha",
      "Engage the curse-mark augmented Sound Four in successive deathmatches",
      "Confront Sasuke at the Valley of the End to halt his defection"
    ]
  },
  {
    id: 49,
    title: "Rescue Fifth Kazekage Gaara from the Akatsuki",
    rank: "A",
    category: "Rescue",
    village: "Hidden Leaf / Sand",
    location: "Land of Rivers Akatsuki Hideout",
    client: "Sunagakure Council & Leaf Command",
    reward: 1750,
    ryoReward: "280,000 Ryo",
    recommendedRank: "Jonin / S-Rank Squad",
    arc: "Kazekage Rescue Arc",
    description: "Form an alliance strike team with Sunagakure, track the Akatsuki members Deidara and Sasori into the Land of Rivers, and retrieve Kazekage Gaara.",
    objectives: [
      "Dispel the Five-Seal Barrier sealing the cavern entrance",
      "Engage and eliminate Sasori of the Red Sand and his hundred puppets",
      "Pursue Deidara and recover Gaara's body for Lady Chiyo's resurrection jutsu"
    ]
  },
  {
    id: 50,
    title: "Raid Orochimaru’s Subterranean Lair at Tenchi Bridge",
    rank: "A",
    category: "Infiltration & Combat",
    village: "Hidden Leaf",
    location: "Grass Country Subterranean Lair",
    client: "Captain Yamato (Team Kakashi)",
    reward: 1700,
    ryoReward: "270,000 Ryo",
    recommendedRank: "Jonin / ANBU",
    arc: "Tenchi Bridge Reconnaissance",
    description: "Infiltrate Orochimaru’s sprawling underground research lair following the clash at Tenchi Bridge, gather intelligence, and attempt to extract Sasuke Uchiha.",
    objectives: [
      "Infiltrate the secret door tunnels using Yamato’s wood clones",
      "Locate and confiscate Orochimaru’s genetic experiments database",
      "Survive an encounter with Orochimaru, Kabuto, and Sasuke Uchiha"
    ]
  },
  {
    id: 51,
    title: "Hunt Down Akatsuki Members Hidan and Kakuzu",
    rank: "A",
    category: "Elimination",
    village: "Hidden Leaf",
    location: "Fire Country Forest Clearing",
    client: "Tsunade / Shikamaru Nara (Team 10)",
    reward: 1900,
    ryoReward: "350,000 Ryo",
    recommendedRank: "Jonin Squad",
    arc: "Immortal Akatsuki Arc",
    description: "Avenge Asuma Sarutobi by executing a coordinated tactical ambush to separate and permanently destroy the immortal duo Hidan and Kakuzu.",
    objectives: [
      "Shikamaru lures Hidan into the Nara Clan shadow forest to bury him alive",
      "Team Kakashi destroys Kakuzu’s five elemental heart masks",
      "Test Naruto’s newly developed Wind Release: Rasenshuriken in combat"
    ]
  },
  {
    id: 52,
    title: "Deep Reconnaissance of the Rain Village under Pain's Watch",
    rank: "A",
    category: "Espionage",
    village: "Hidden Leaf",
    location: "Hidden Rain Village (Amegakure)",
    client: "Jiraiya the Gallant / Leaf Command",
    reward: 2000,
    ryoReward: "400,000 Ryo",
    recommendedRank: "Legendary Sannin / S-Rank",
    arc: "Tale of Jiraiya the Gallant",
    description: "Infiltrate Amegakure’s industrialized towers through industrial drainage pipes, evade the Rain Tiger at Will sensory rain, and identify the true leader of the Akatsuki.",
    objectives: [
      "Infiltrate Amegakure concealed inside a toad summon",
      "Interrogate captured Amegakure couriers regarding God Pain and Angel Konan",
      "Relay encrypted intelligence regarding the Rinnegan to Konoha via messenger toad"
    ]
  },
  {
    id: 53,
    title: "Defense of Mount Myōboku Secret Coordinates",
    rank: "A",
    category: "Defense",
    village: "Mount Myōboku",
    location: "Sacred Sages' Sanctuary",
    client: "Great Toad Sage Gamamaru",
    reward: 1650,
    ryoReward: "260,000 Ryo",
    recommendedRank: "Sage / Jonin",
    arc: "Sage Training Arc",
    description: "Prevent Akatsuki scouting birds and sensory puppets from detecting the mystical dimensional pathway leading to Mount Myōboku.",
    objectives: [
      "Erect natural energy cloaking seals over the secret passage waymarks",
      "Intercept and destroy mechanical espionage flies sent by enemy factions",
      "Guard the Oil Basin while Naruto Uzumaki trains in Senjutsu"
    ]
  },
  {
    id: 54,
    title: "Secure the Jinchūriki Killer Bee from Taka's Assault",
    rank: "A",
    category: "Defense",
    village: "Hidden Cloud",
    location: "Unraikyō (Thundercloud Ravine)",
    client: "Kumogakure High Command",
    reward: 1850,
    ryoReward: "320,000 Ryo",
    recommendedRank: "Jonin / Elite Guard",
    arc: "Fated Battle Between Brothers Arc",
    description: "Defend the Eight-Tails Jinchūriki Killer Bee as Sasuke Uchiha’s rogue squad Taka attacks the sacred training grounds of Unraikyō.",
    objectives: [
      "Counter Sasuke Uchiha’s Mangekyō Sharingan and Chidori variants",
      "Assist Killer Bee as he unleashes the full Eight-Oxtopus transformation",
      "Safeguard the ravine perimeter to prevent civilian casualties"
    ]
  },
  {
    id: 55,
    title: "Assassination of Missing-Nin Rogue Leader in the Land of Iron",
    rank: "A",
    category: "Assassination",
    village: "Hidden Leaf",
    location: "Snowy Ranges of Land of Iron",
    client: "ANBU Black Ops Commander",
    reward: 1550,
    ryoReward: "240,000 Ryo",
    recommendedRank: "ANBU / Jonin",
    arc: "Five Kage Summit Prelude",
    description: "Eliminate a renegade former Konoha Jonin who formed an assassin cartel selling chakra-infused weapons to destabilize the Land of Iron’s neutral summit.",
    objectives: [
      "Track the cartel's ski patrol through severe blizzards",
      "Infiltrate their ice fortress through ventilation shafts",
      "Eliminate the target with clean execution and incinerate the body"
    ]
  },
  {
    id: 56,
    title: "Protect the Five Kage Summit Delegation at the Land of Iron",
    rank: "A",
    category: "Bodyguard",
    village: "All Hidden Villages",
    location: "Land of Iron Summit Hall",
    client: "General Mifune & Allied Nations",
    reward: 1950,
    ryoReward: "380,000 Ryo",
    recommendedRank: "Elite Jonin / Kage Guard",
    arc: "Five Kage Summit Arc",
    description: "Serve as the official bodyguard detail for the Hokage and allied leaders during the tense summit in the Land of Iron amidst looming Akatsuki threats.",
    objectives: [
      "Maintain strict security protocols in the Kage Summit Chamber",
      "Repel White Zetsu infiltration through the hall floorboards",
      "Engage Sasuke Uchiha as he attacks the summit hall to kill Danzō"
    ]
  },
  {
    id: 57,
    title: "Intercept Kisame Hoshigaki on Turtle Island",
    rank: "A",
    category: "Capture",
    village: "Allied Shinobi Forces",
    location: "Island Turtle (Lightning Coastal Waters)",
    client: "Commander Might Guy",
    reward: 1800,
    ryoReward: "310,000 Ryo",
    recommendedRank: "Jonin / Elite",
    arc: "Fourth Shinobi World War Prelude",
    description: "Intercept the Monster of the Hidden Mist, Kisame Hoshigaki, who infiltrated Turtle Island inside Samehada to steal vital war troop disposition scrolls.",
    objectives: [
      "Might Guy opens the Seventh Gate of Wonder to match Kisame’s speed",
      "Overpower Kisame’s Super Shark Bomb with the Daytime Tiger",
      "Capture the Akatsuki intel scroll before Kisame commits suicide via shark summon"
    ]
  },
  {
    id: 58,
    title: "Secure the Uzumaki Mask Storage Temple in Konoha",
    rank: "A",
    category: "Defense",
    village: "Hidden Leaf",
    location: "Uzumaki Clan Mask Temple, Konoha Outskirts",
    client: "Hokage Archives Division",
    reward: 1500,
    ryoReward: "230,000 Ryo",
    recommendedRank: "Jonin / ANBU",
    arc: "Fourth Ninja War Lore",
    description: "Guard the sacred, moss-covered Uzumaki temple housing twenty-seven Shinigami Reaper masks against Orochimaru's shadow agents seeking the Reaper Death Seal release.",
    objectives: [
      "Repair protective fūinjutsu barrier wards around the inner sanctum",
      "Repel snake-summon assassins attempting to breach the display wall",
      "Verify that the Shinigami release mask remains undisturbed"
    ]
  },
  {
    id: 59,
    title: "Evacuate the Fire Capital during the Akatsuki Offensive",
    rank: "A",
    category: "Evacuation",
    village: "Hidden Leaf",
    location: "Fire Daimyō Capital",
    client: "Fire Daimyō Cabinet",
    reward: 1600,
    ryoReward: "250,000 Ryo",
    recommendedRank: "Jonin",
    arc: "Fourth Ninja War Prelude",
    description: "Organize the rapid evacuation of the Fire Daimyō and noble courtiers to secure mountain bunkers as Black Zetsu targets them as political hostages.",
    objectives: [
      "Establish defensive decoy convoys to mislead enemy scouts",
      "Repel Black Zetsu and white clone ambush squads along the mountain pass",
      "Deliver the Daimyō safely into the hidden mountain vault protected by Mizukage Mei"
    ]
  },
  {
    id: 60,
    title: "Subdue the Reanimated Seven Ninja Swordsmen of the Mist",
    rank: "A",
    category: "Combat",
    village: "Allied Shinobi Forces",
    location: "Land of Lightning Coastal Forest",
    client: "Third Division Commander Kakashi Hatake",
    reward: 1900,
    ryoReward: "360,000 Ryo",
    recommendedRank: "Elite Jonin",
    arc: "Fourth Shinobi World War",
    description: "Engage the legendary Seven Ninja Swordsmen of the Mist revived by Kabuto's Impure World Reincarnation, sealing their indestructible blades permanently.",
    objectives: [
      "Counter Zabuza's Silent Killing alongside Kakashi Hatake",
      "Disarm and neutralize the Kubikiribōchō, Samehada, Nuibari, and Shibuki",
      "Coordinate with the Sealing Corps with cloth binding tags"
    ]
  },

  // ==========================================
  // S-RANK MISSIONS (IDs 61–75)
  // Existential, world-altering assignments: fighting Akatsuki leaders, subduing rampaging Tailed Beasts, Fourth Shinobi World War climactic battles.
  // ==========================================
  {
    id: 61,
    title: "Confront the Six Paths of Pain during the Destruction of Konoha",
    rank: "S",
    category: "Existential Defense",
    village: "Hidden Leaf",
    location: "Crater of Destroyed Konohagakure",
    client: "Naruto Uzumaki / Lady Tsunade",
    reward: 4500,
    ryoReward: "1,500,000 Ryo",
    recommendedRank: "Sage / Kage-level",
    arc: "Pain’s Assault Arc",
    description: "Stand in the massive crater left by the Almighty Push, defeat all Six Paths of Pain using Sage Mode and Rasenshuriken, and track Nagato to his paper tree.",
    objectives: [
      "Systematically destroy the Asura, Human, Animal, Preta, and Naraka Paths",
      "Overcome the Deva Path's gravity manipulation and Planetary Devastation",
      "Confront Nagato in his paper tree to inspire the Rinne Rebirth resurrection"
    ]
  },
  {
    id: 62,
    title: "Subdue the Rampaging Nine-Tails during the Attack on Konoha",
    rank: "S",
    category: "Beast Containment",
    village: "Hidden Leaf",
    location: "Konohagakure Outskirts",
    client: "Fourth Hokage Minato Namikaze",
    reward: 5000,
    ryoReward: "2,000,000 Ryo",
    recommendedRank: "Hokage / S-Rank",
    arc: "Nine-Tails Attack on Konoha",
    description: "Intercept the Nine-Tailed Demon Fox summoned into the heart of Konoha by the Masked Man, teleport its Tailed Beast Bomb away, and seal it into infant Naruto.",
    objectives: [
      "Engage the Masked Man in a high-speed Flying Thunder God duel",
      "Break the Sharingan contract controlling the Nine-Tails using a contract seal",
      "Perform the Reaper Death Seal and Eight Trigrams Sealing Style with Kushina"
    ]
  },
  {
    id: 63,
    title: "Battle Madara Uchiha at the Valley of the End (Historic)",
    rank: "S",
    category: "Historic Legend",
    village: "Hidden Leaf",
    location: "Valley of the End",
    client: "First Hokage Hashirama Senju",
    reward: 5000,
    ryoReward: "2,500,000 Ryo",
    recommendedRank: "God of Shinobi",
    arc: "Founding of Konoha Lore",
    description: "Face Madara Uchiha equipped with the Eternal Mangekyō Sharingan and the armor-clad Nine-Tails in the titanic duel that carved the Valley of the End.",
    objectives: [
      "Counter the Majestic Attire: Susanoo with Wood Release: Wood Golem",
      "Manifest Sage Art Wood Release: True Several Thousand Hands",
      "Defeat Madara to protect the future of the Hidden Leaf Village"
    ]
  },
  {
    id: 64,
    title: "Command the Third Division in the Fourth Shinobi World War",
    rank: "S",
    category: "War Leadership",
    village: "Allied Shinobi Forces",
    location: "Coastal Battlefield, Land of Lightning",
    client: "Supreme Commander Fourth Raikage A",
    reward: 4000,
    ryoReward: "1,200,000 Ryo",
    recommendedRank: "Division Commander",
    arc: "Fourth Shinobi World War",
    description: "Lead 20,000 allied shinobi into the coastal meatgrinder against Kabuto’s army of reanimated legendary shinobi and 100,000 White Zetsu clones.",
    objectives: [
      "Maintain allied frontline formations and counter friendly-fire confusion",
      "Direct sealing teams to capture reanimated Kekkei Genkai shinobi",
      "Hold the coastal supply corridor until Naruto's shadow clones arrive"
    ]
  },
  {
    id: 65,
    title: "Stop Kabuto Yakushi’s Impure World Reincarnation",
    rank: "S",
    category: "Special Infiltration",
    village: "Allied Shinobi Forces",
    location: "Graveyard of the Mountains Cave Lair",
    client: "Itachi Uchiha & Sasuke Uchiha",
    reward: 4800,
    ryoReward: "1,800,000 Ryo",
    recommendedRank: "Mangekyō Sharingan Elite",
    arc: "Fourth Shinobi World War",
    description: "Infiltrate Kabuto Yakushi's hidden dragon cave, engage Sage Mode Kabuto, and cast Izanami to force the release of the Edo Tensei across all fronts.",
    objectives: [
      "Endure Kabuto’s Sage Art: Inorganic Reincarnation and White Rage Jutsu",
      "Cast the ultimate visual genjutsu Izanami to trap Kabuto in an infinite loop",
      "Force Kabuto to perform the rat-ox-monkey-tiger-dragon-boar Edo Tensei release hand seals"
    ]
  },
  {
    id: 66,
    title: "Battle the Five Kage against the Reanimated Madara Uchiha",
    rank: "S",
    category: "Existential Defense",
    village: "All Five Great Hidden Villages",
    location: "Desert Battlefield, Land of Lightning",
    client: "The Five Kage",
    reward: 4700,
    ryoReward: "1,600,000 Ryo",
    recommendedRank: "Kage",
    arc: "Fourth Shinobi World War",
    description: "The Five Kage unite in combat to hold off the legendary Madara Uchiha, facing his dual Rinnegan, Wood Release, and the cataclysmic Tengu Susanoo.",
    objectives: [
      "Combine Mei's Water Release with A's Lightning and Ōnoki's Particle Style",
      "Survive Madara's dual Shattered Heaven meteors crashing onto the battlefield",
      "Hold Madara in place to buy time for the Allied Shinobi Forces"
    ]
  },
  {
    id: 67,
    title: "Confront Obito Uchiha and the Ten-Tails on the Main Battlefield",
    rank: "S",
    category: "Climactic War",
    village: "Allied Shinobi Forces",
    location: "Wasteland of the Land of Lightning",
    client: "Alliance Supreme Command",
    reward: 4900,
    ryoReward: "1,900,000 Ryo",
    recommendedRank: "Kage / Allied Vanguard",
    arc: "Fourth Shinobi World War",
    description: "Unite all 80,000 shinobi of the Alliance to hold back the grotesque, world-shaking Ten-Tails and break the mask of Obito Uchiha.",
    objectives: [
      "Construct multi-layered Earth Style walls to deflect the Ten-Tails Cataclysm",
      "Coordinate Kakashi’s Kamui with Naruto’s Nine-Tails Rasengan to crack Obito’s mask",
      "Channel Naruto's Nine-Tails chakra shroud to empower the entire Allied Army"
    ]
  },
  {
    id: 68,
    title: "Defeat Ten-Tails Jinchūriki Obito and Extract the Bijuu",
    rank: "S",
    category: "Climactic War",
    village: "Allied Shinobi Forces",
    location: "World Tree Battlefield",
    client: "Reanimated Hokage & Team 7",
    reward: 4800,
    ryoReward: "1,750,000 Ryo",
    recommendedRank: "Six Paths Tier",
    arc: "Fourth Shinobi World War",
    description: "Face Obito Uchiha in his godlike Ten-Tails Jinchūriki form wielding the Sword of Nunoboko, and win the epic psychic tug-of-war to pull out all seven Bijuu.",
    objectives: [
      "Combine Naruto's Kurama avatar with Sasuke's Majestic Susanoo armor",
      "Shatter the divine Sword of Nunoboko with the united will of the shinobi",
      "Participate in the global chakra tug-of-war to liberate the Tailed Beasts"
    ]
  },
  {
    id: 69,
    title: "Might Guy’s Eighth Gate of Death Assault on Madara",
    rank: "S",
    category: "Ultimate Sacrifice",
    village: "Hidden Leaf",
    location: "Divine Tree Clearing",
    client: "Might Guy / Leaf Pride",
    reward: 5000,
    ryoReward: "2,000,000 Ryo",
    recommendedRank: "Eight Gates Master",
    arc: "Fourth Shinobi World War",
    description: "Release the Gate of Death to bypass all physical limits and strike Ten-Tails Madara with Evening Elephant and the space-bending Night Guy.",
    objectives: [
      "Open the Eighth Gate of Death, burning chakra blood as a crimson dragon",
      "Pound Madara with five consecutive air-cannon Evening Elephant steps",
      "Execute Night Guy with such ferocity that it bends space itself"
    ]
  },
  {
    id: 70,
    title: "Seal Princess Kaguya Ōtsutsuki with the Six Paths Chibaku Tensei",
    rank: "S",
    category: "Cosmic Salvation",
    village: "The Entire Ninja World",
    location: "Kaguya's Alternate Dimensions",
    client: "Hagoromo Ōtsutsuki (Sage of Six Paths)",
    reward: 5000,
    ryoReward: "3,000,000 Ryo",
    recommendedRank: "Six Paths Descendants",
    arc: "Kaguya Ōtsutsuki Strikes",
    description: "Team 7 (Naruto, Sasuke, Sakura, Kakashi, and Obito) journey through lava, ice, acid, and supergravity dimensions to make physical contact with Kaguya and seal her.",
    objectives: [
      "Survive Kaguya's All-Killing Ash Bones with Obito's ultimate sacrifice",
      "Kakashi manifests Double Mangekyō Kamui Raikiri and Susanoo",
      "Simultaneously press Sun and Moon palm seals onto Kaguya to trigger Six Paths Chibaku Tensei"
    ]
  },
  {
    id: 71,
    title: "The Final Battle at the Valley of the End: Naruto vs. Sasuke",
    rank: "S",
    category: "Fated Destiny",
    village: "Hidden Leaf",
    location: "Valley of the End",
    client: "The Future of the Shinobi World",
    reward: 5000,
    ryoReward: "2,500,000 Ryo",
    recommendedRank: "Six Paths God",
    arc: "Final Battle Arc",
    description: "Engage in the fateful duel to settle the centuries-old feud of Indra and Asura, ending Sasuke’s revolution and establishing a new era of shinobi peace.",
    objectives: [
      "Counter Sasuke's Bijuu-powered Indra's Arrow with Six Paths Massive Rasenshuriken",
      "Engage in brutal, chakra-depleted bare-knuckle hand-to-hand combat",
      "Clash final Rasengan against Chidori, shattering the Hashirama and Madara statues"
    ]
  },
  {
    id: 72,
    title: "Release the Infinite Tsukuyomi over All Mankind",
    rank: "S",
    category: "World Salvation",
    village: "All Nations",
    location: "Valley of the End Ruins",
    client: "Naruto Uzumaki & Sasuke Uchiha",
    reward: 4600,
    ryoReward: "1,500,000 Ryo",
    recommendedRank: "Hokage / Shadow Kage",
    arc: "War Aftermath",
    description: "Weave the Rat sign together with severed arms to unravel the god-tree cocoon wrappings and liberate all humanity from the Infinite Tsukuyomi illusion.",
    objectives: [
      "Weave the universal release seal using the Rat hand seal",
      "Unravel the Divine Tree roots across all five great continents",
      "Release the nine Tailed Beasts from their planetary stone spheres"
    ]
  },
  {
    id: 73,
    title: "Stop Toneri Ōtsutsuki from Crashing the Moon into Earth",
    rank: "S",
    category: "Cosmic Defense",
    village: "Hidden Leaf",
    location: "The Moon & Lunar Surface",
    client: "Sixth Hokage Kakashi Hatake",
    reward: 4800,
    ryoReward: "2,000,000 Ryo",
    recommendedRank: "Kage / Hero of the Leaf",
    arc: "The Last: Naruto the Movie",
    description: "Travel through the celestial passage to the Moon, rescue Hinata Hyūga from Toneri Ōtsutsuki, and shatter the Golden Wheel Reincarnation Explosion.",
    objectives: [
      "Infiltrate the lunar palace under intense puppet barrage",
      "Overcome Toneri’s Tenseigan Chakra Mode and split-moon attacks",
      "Channel full Kurama chakra into a single punch to shatter Toneri's ocular powers"
    ]
  },
  {
    id: 74,
    title: "Defeat Momoshiki and Kinshiki Ōtsutsuki in the Alternate Dimension",
    rank: "S",
    category: "Extraterrestrial Threat",
    village: "The Five Kage & Sasuke Uchiha",
    location: "Momoshiki's God Tree Dimension",
    client: "Seventh Hokage Naruto Uzumaki",
    reward: 5000,
    ryoReward: "2,800,000 Ryo",
    recommendedRank: "Kage / Demigod",
    arc: "Boruto Era / Chunin Exam Crisis",
    description: "The Five Kage and Sasuke Uchiha travel through space-time to rescue Naruto and battle the fused celestial conqueror Momoshiki Ōtsutsuki.",
    objectives: [
      "The Five Kage and Sasuke wage overwhelming taijutsu to bypass chakra absorption",
      "Naruto and Sasuke combine Kurama and Susanoo to slice the lava golem",
      "Boruto Uzumaki delivers the Super Uzumaki Rasengan powered by Naruto's chakra"
    ]
  },
  {
    id: 75,
    title: "Eliminate Isshiki Ōtsutsuki with Baryon Mode",
    rank: "S",
    category: "Ultimate Existence",
    village: "Hidden Leaf",
    location: "Isolated Pocket Dimension",
    client: "Seventh Hokage Naruto Uzumaki & Kurama",
    reward: 5000,
    ryoReward: "3,500,000 Ryo",
    recommendedRank: "Ultimate Shinobi",
    arc: "Boruto Era / Isshiki Arc",
    description: "Unleash Baryon Mode, a nuclear-fusion chakra state that burns through Naruto and Kurama's lifeforces, to deplete Isshiki Ōtsutsuki's remaining lifespan.",
    objectives: [
      "Activate Baryon Mode, matching Isshiki's micro-shrink and dimensional cube attacks",
      "Deplete Isshiki's remaining hours of lifespan with every direct physical strike",
      "Enable Kawaki's shadow clone gambit to extinguish Isshiki forever"
    ]
  }
];

export default missions;
