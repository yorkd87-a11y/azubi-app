// content/jahr_1/Level_1/index.js

import ABSCHNITT_1 from "./Abschnitt_1/a1_index.js";
import ABSCHNITT_2 from "./Abschnitt_2/a2_index.js";
import ABSCHNITT_3 from "./Abschnitt_3/a3_index.js";
import ABSCHNITT_4 from "./Abschnitt_4/a4_index.js";
// import ABSCHNITT_5 from "./Abschnitt_5/a5_index.js";

/**
 * Level 1 - Jahr 1
 * Hier sammeln wir alle Abschnitte dieses Levels.
 */

const LEVEL_1 = {
  id: "jahr1_level1",
  jahr: 1,
  levelNumber: 1,
  levelName: "Dein Start im Salon",
  title: "In Ausbildung und Beruf orientieren",

  sections: [
    ABSCHNITT_1,
    ABSCHNITT_2,
    ABSCHNITT_3,
    ABSCHNITT_4,
    // ABSCHNITT_5,
  ],
};

export default LEVEL_1;

export {
  ABSCHNITT_1,
  ABSCHNITT_2,
  ABSCHNITT_3,
  ABSCHNITT_4,
  // ABSCHNITT_5,
};
