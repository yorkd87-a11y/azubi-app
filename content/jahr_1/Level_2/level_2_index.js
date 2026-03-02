// content/jahr_1/Level_2/level_2_index.js

import ABSCHNITT_1 from "./Abschnitt_1/a1_index.js";
import ABSCHNITT_2 from "./Abschnitt_2/a2_index.js";
import ABSCHNITT_3 from "./Abschnitt_3/a3_index.js";
import ABSCHNITT_4 from "./Abschnitt_4/a4_index.js";
import ABSCHNITT_5 from "./Abschnitt_5/a5_index.js";

const LEVEL_2 = {
  id: "jahr1_level2",
  jahr: 1,
  levelNumber: 2,
  levelName: "Platzhalter",
  title: "Platzhalter",
  sections: [
    ABSCHNITT_1,
    ABSCHNITT_2,
    ABSCHNITT_3,
    ABSCHNITT_4,
    ABSCHNITT_5
  ]
};

export default LEVEL_2;
export { ABSCHNITT_1, ABSCHNITT_2, ABSCHNITT_3, ABSCHNITT_4, ABSCHNITT_5 };
