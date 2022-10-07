import React from "react";
import { ISub } from "../../interfaces/sideBarDataInterface";
import { Link } from "react-router-dom";

const SubMenu = ({ name, path, Icon }: ISub) => {
  return (
    <div className="subMenuItem active">
      <Icon />
      <Link className="link" to={path}>
        {name}
      </Link>
    </div>
  );
};

export default SubMenu;
