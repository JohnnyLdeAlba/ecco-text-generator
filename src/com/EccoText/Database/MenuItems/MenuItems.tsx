import { t_node_container } from "../../../../lib/node-lib";

import { Root } from "./Root";
import { Themes } from "./Themes";
import { Fonts } from "./Fonts";
import { Backgrounds } from "./Backgrounds";
import { Effects } from "./Effects";
import { Resolutions } from "./Resolutions";
import { Keyboards } from "./Keyboards";

const MenuItems = new t_node_container()

Root(MenuItems);
Themes(MenuItems);
Fonts(MenuItems);
Backgrounds(MenuItems);
Effects(MenuItems);
Resolutions(MenuItems);
Keyboards(MenuItems);

export default MenuItems;
