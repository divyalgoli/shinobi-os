// characters.js - Master Central Index for All SHINOBI OS Character Archives

import leafHokageAndLegends from "./characters/leafHokageAndLegends.js";
import leafJoninAndClans from "./characters/leafJoninAndClans.js";
import sunaShinobi from "./characters/sunaShinobi.js";
import kiriShinobi from "./characters/kiriShinobi.js";
import kumoShinobi from "./characters/kumoShinobi.js";
import iwaShinobi from "./characters/iwaShinobi.js";
import akatsukiAndAntagonists from "./characters/akatsukiAndAntagonists.js";
import ancestorsAndOtsutsuki from "./characters/ancestorsAndOtsutsuki.js";
import minorVillagesAndSamurai from "./characters/minorVillagesAndSamurai.js";
import tailedBeastsAndSpirits from "./characters/tailedBeastsAndSpirits.js";
import characterImages from "./characterImages.js";
import { resolveAssetUrl } from "../utils/assetUrl.js";

// Combine and sort characters by unique ID
const allCharacters = [
  ...leafHokageAndLegends,
  ...leafJoninAndClans,
  ...sunaShinobi,
  ...kiriShinobi,
  ...kumoShinobi,
  ...iwaShinobi,
  ...akatsukiAndAntagonists,
  ...ancestorsAndOtsutsuki,
  ...minorVillagesAndSamurai,
  ...tailedBeastsAndSpirits,
];

// Ensure unique entries by ID and associate consistent character images
const characterMap = new Map();
for (const char of allCharacters) {
  if (!characterMap.has(char.id)) {
    const rawImage = characterImages[char.id] !== undefined ? characterImages[char.id] : (char.image ?? null);
    characterMap.set(char.id, {
      ...char,
      image: resolveAssetUrl(rawImage)
    });
  }
}

const characters = Array.from(characterMap.values()).sort((a, b) => a.id - b.id);

export default characters;