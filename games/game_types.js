// games/game_types.js

export const GAME_TYPES = [
  { key: "single_choice_quiz",   name: "Single-Choice Quiz" },
  { key: "multiple_choice_quiz", name: "Multiple-Choice Quiz" },
  { key: "gap_fill",             name: "Lückentext" },
  { key: "match_pairs",          name: "Paare zuordnen" },
  { key: "order_steps",          name: "Schritte sortieren" },
  { key: "timeline_order",       name: "Zeitstrahl ordnen" },
  { key: "quickfire_streak",     name: "Schnellrunde" },
  { key: "flashcards",           name: "Karteikarten" },
  { key: "category_sort",        name: "Nach Kategorien sortieren" },
  { key: "scenario_choice",      name: "Fallfrage: Was würdest du tun?" },
  { key: "true_false_swipe",     name: "Richtig/Falsch Swipe" },
];

// Optional: zukünftige Spieltypen
export const FUTURE_GAME_TYPES = [
 
  { key: "audio_choice",     name: "Audio-Frage" },
  { key: "dialog_quiz",      name: "Dialog mit Carmen & Gisela" },
];
