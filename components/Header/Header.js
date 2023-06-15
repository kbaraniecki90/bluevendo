import React from "react";

const Header = ({ level, children }) => {
  const HeaderTag = `h${level}`;

  return <HeaderTag>{children}</HeaderTag>;
};

export default Header;
