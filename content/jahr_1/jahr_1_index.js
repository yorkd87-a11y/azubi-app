// content/jahr_1/jahr_1_index.js

import LEVEL_1 from "./Level_1/level_1_index.js";
import LEVEL_2 from "./Level_2/level_2_index.js";
import LEVEL_3 from "./Level_3/level_3_index.js";
import LEVEL_4 from "./Level_4/level_4_index.js";

/**
 * Jahr 1 – sammelt alle Levels des 1. Lehrjahrs
 */

const JAHR_1 = {
  id: "jahr_1",
  jahr: 1,
  title: "1. Lehrjahr",
  levels: [LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4]
};

export default JAHR_1;
export { LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4 };
