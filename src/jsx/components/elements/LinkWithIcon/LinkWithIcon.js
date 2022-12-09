import React from "react";
import { Link } from "react-router-dom";

const LinkWithIcon = ({
  path,
  onClick,
  iconName
}) => {
  return (
    <Link
      className="link-with-icon" 
      to={path}
      onClick={onClick}
    >
      <i className={`fas ${iconName}`}></i>
    </Link>
  );
}

export default LinkWithIcon