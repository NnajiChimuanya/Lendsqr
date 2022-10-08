import React, { useState } from "react";
import { ISub } from "../../interfaces/sideBarDataInterface";
import { Link } from "react-router-dom";
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  name: string;
  path: string;
  menuId: string;
  Icon: SvgIconComponent;
  active: React.SetStateAction<string>;
  handleLinkClick: (id: string) => void;
}

const SubMenu = ({
  name,
  path,
  Icon,
  menuId,
  active,
  handleLinkClick,
}: Props) => {
  return (
    <div className={`subMenuItem ${active === menuId ? `active` : null}`}>
      <Icon />
      <Link
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          handleLinkClick(menuId);
        }}
        className="link"
        to={path}
      >
        {name}
      </Link>
    </div>
  );
};

export default SubMenu;
