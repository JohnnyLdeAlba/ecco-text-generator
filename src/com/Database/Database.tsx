import { t_node_container } from "../../lib/node-lib";
import { Root } from "./Root";
import { MyCollection } from "./MyCollection";
import { EccoSprites } from "./EccoSprites";
import { EccoLevelMaps } from "./EccoLevelMaps"
import { EccoPCSprites } from "./EccoPCSprites";
import { EccoPCLevelMaps } from "./EccoPCLevelMaps"
import { Ecco2Sprites } from "./Ecco2Sprites";
import { Ecco2LevelMaps } from "./Ecco2LevelMaps";

const Database = new t_node_container();

Root(Database);
MyCollection(Database);
EccoSprites(Database);
EccoLevelMaps(Database);
EccoPCSprites(Database);
EccoPCLevelMaps(Database);
Ecco2Sprites(Database);
Ecco2LevelMaps(Database);

export default Database;
