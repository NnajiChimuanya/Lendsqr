import React from "react";
import { ISub } from "../../interfaces/sideBarDataInterface";

const SubMenu = ({ name, path, Icon }: ISub) => {
  return (
    <div className="subMenuItem">
      <Icon />
      <p>{name}</p>
    </div>
  );
};

export default SubMenu;
