import { t_node_container } from "../../lib/node-lib";
import { Root } from "./Root";
import { MyCollection } from "./MyCollection";

import { EccoSprites } from "./Ecco/EccoSprites";
import { EccoLevelMaps } from "./Ecco/EccoLevelMaps"
import { EccoSonarMaps } from "./Ecco/EccoSonarMaps"

import { EccoPCSprites } from "./EccoPCSprites";
import { EccoPCLevelMaps } from "./EccoPCLevelMaps"

import { Ecco2Sprites } from "./Ecco2/Ecco2Sprites";
import { Ecco2LevelMaps } from "./Ecco2/Ecco2LevelMaps";
import { Ecco2ObjectMaps } from "./Ecco2/Ecco2ObjectMaps";
import { Ecco2SonarMaps } from "./Ecco2/Ecco2SonarMaps";

import { EccoJrLevelMaps } from "./EccoJr/EccoJrLevelMaps";

const Database = new t_node_container();

Root(Database);
MyCollection(Database);
EccoSprites(Database);
EccoLevelMaps(Database);
EccoSonarMaps(Database);

EccoPCSprites(Database);
EccoPCLevelMaps(Database);

Ecco2Sprites(Database);
Ecco2LevelMaps(Database);
Ecco2ObjectMaps(Database);
Ecco2SonarMaps(Database);

EccoJrLevelMaps(Database);

export default Database;
