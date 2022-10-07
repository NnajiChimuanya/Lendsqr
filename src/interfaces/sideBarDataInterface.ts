import { SvgIconComponent } from "@mui/icons-material";
import path from "path";
import { ReactElement } from "react";

export interface ISub {
  name: string;
  path: string;
  Icon: SvgIconComponent;
}

interface ISidebarData {
  name: string;
  sub: ISub[];
}

export default ISidebarData;
