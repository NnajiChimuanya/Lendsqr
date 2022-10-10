import React, { SVGProps, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  path: string;
  menuId: string;
  Icon: React.FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
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
