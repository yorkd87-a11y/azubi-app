// content/jahr_1/Level_1/Abschnitt_4/a4_index.js

import LEKTION_1 from "./lv1_A4_Lektion_1.js";
import LEKTION_2 from "./lv1_A4_Lektion_2.js";
import LEKTION_3 from "./lv1_A4_Lektion_3.js";
import LEKTION_4 from "./lv1_A4_Lektion_4.js";
import LEKTION_5 from "./lv1_A4_Lektion_5.js";
import LEKTION_6 from "./lv1_A4_Lektion_6.js";
import LEKTION_7 from "./lv1_A4_Lektion_7.js";
import LEKTION_8 from "./lv1_A4_Lektion_8.js";
import { getLevel1SectionVideoConfig } from "../section_video_config.js";

/**
 * Abschnitt 4 - Jahr 1 / Level 1
 * Thema: Platzhalter
 */

const ABSCHNITT_4 = {
  id: "j1_l1_a4",
  jahr: 1,
  level: 1,
  index: 4,
  title: "Gefahrstoffe & Arbeitsschutz im Salon",
  description: "Gefahrstoffe erkennen, sicher handhaben und nachhaltig arbeiten.",
  video: getLevel1SectionVideoConfig("j1_l1_a4"),
  lessons: [
    LEKTION_1,
    LEKTION_2,
    LEKTION_3,
    LEKTION_4,
    LEKTION_5,
    LEKTION_6,
    LEKTION_7,
    LEKTION_8
  ]
};

export default ABSCHNITT_4;
export {
  LEKTION_1,
  LEKTION_2,
  LEKTION_3,
  LEKTION_4,
  LEKTION_5,
  LEKTION_6,
  LEKTION_7,
  LEKTION_8
};
