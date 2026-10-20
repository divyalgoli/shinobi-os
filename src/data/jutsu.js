// src/data/jutsu.js - Master Jutsu Archive Index
import ninjutsuElemental from "./jutsu/ninjutsuElemental.js";
import ninjutsuGeneral from "./jutsu/ninjutsuGeneral.js";
import genjutsuTechniques from "./jutsu/genjutsuTechniques.js";
import taijutsuTechniques from "./jutsu/taijutsuTechniques.js";
import senjutsuTechniques from "./jutsu/senjutsuTechniques.js";
import medicalTechniques from "./jutsu/medicalTechniques.js";
import spaceTimeTechniques from "./jutsu/spaceTimeTechniques.js";
import kekkeiGenkaiTechniques from "./jutsu/kekkeiGenkaiTechniques.js";
import fuinjutsuAndDojutsu from "./jutsu/fuinjutsuAndDojutsu.js";

const allJutsuRaw = [
  ...ninjutsuElemental,
  ...ninjutsuGeneral,
  ...genjutsuTechniques,
  ...taijutsuTechniques,
  ...senjutsuTechniques,
  ...medicalTechniques,
  ...spaceTimeTechniques,
  ...kekkeiGenkaiTechniques,
  ...fuinjutsuAndDojutsu
];

// Deduplicate by ID and sort ascending
const jutsuMap = new Map();
allJutsuRaw.forEach((item) => {
  if (!jutsuMap.has(item.id)) {
    jutsuMap.set(item.id, item);
  }
});

const jutsu = Array.from(jutsuMap.values()).sort((a, b) => a.id - b.id);

export default jutsu;