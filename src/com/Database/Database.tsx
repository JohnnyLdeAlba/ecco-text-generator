import { t_node_container } from "../../lib/node-lib";
import { Root } from "./Root";
import { MyCollection } from "./MyCollection";

const Database = new t_node_container();

Root(Database);
MyCollection(Database);

export default Database;
