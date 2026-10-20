// src/data/worldLore.js - Master World Lore Aggregator & Registry
import villages from "./lore/villages.js";
import clans from "./lore/clans.js";
import organizations from "./lore/organizations.js";
import locations from "./lore/locations.js";
import history from "./lore/history.js";

// Backward-compatible nations array matching original 5 Great Nations
export const nations = villages.slice(0, 5).map((v) => ({
  id: v.id,
  nation: v.nation,
  village: v.name,
  kage: v.kage,
  leader: v.leader,
  symbol: v.symbol,
  color: v.color,
  description: v.description,
  traits: v.specialties,
  notable: v.notableShinobi.slice(0, 4).join(" · "),
  foundedBy: v.foundedBy,
  prominentClans: v.prominentClans,
  keyLandmarks: v.keyLandmarks,
  militaryStrength: v.militaryStrength,
}));

export { villages, clans, organizations, locations, history };

const worldLore = {
  nations,
  villages,
  clans,
  organizations,
  locations,
  history,
};

export default worldLore;
