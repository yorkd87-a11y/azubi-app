// content/jahr_1/Level_1/Abschnitt_2/a2_index.js

import LEKTION_1 from "./lv1_A2_Lektion_1.js";
import LEKTION_2 from "./lv1_A2_Lektion_2.js";
import LEKTION_3 from "./lv1_A2_Lektion_3.js";
import LEKTION_4 from "./lv1_A2_Lektion_4.js";
import LEKTION_5 from "./lv1_A2_Lektion_5.js";
import LEKTION_6 from "./lv1_A2_Lektion_6.js";
import LEKTION_7 from "./lv1_A2_Lektion_7.js";
import LEKTION_8 from "./lv1_A2_Lektion_8.js";

/**
 * Abschnitt 2 – Jahr 1 / Level 1
 * Thema: Arbeits- & Wegeunfälle, Unfallverhütung im Salon
 */
const ABSCHNITT_2 = {
  id: "j1_l1_a2",
  jahr: 1,
  level: 1,
  index: 2,
  title: "Arbeits- & Wegeunfälle, Unfallverhütung",
  description:
    "Was ist ein Arbeits- oder Wegeunfall und wie verhinderst du Unfälle im Salonalltag: Ordnung, Ruhe, Körperhaltung, Kabel & Werkzeuge.",
  videoUrl: "./media/videos/Abschnitte/abschnitt_arbeitsunfälle.mp4",
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

export default ABSCHNITT_2;

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
