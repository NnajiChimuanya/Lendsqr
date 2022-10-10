import React, { SVGProps } from "react";

export interface ISub {
  name: string;
  path: string;
  menuId: string;
  Icon: React.FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

interface ISidebarData {
  name: string;
  sub: ISub[];
}

export default ISidebarData;
