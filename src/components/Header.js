import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="туть должен быть логотип :("
      />
    </header>
  );
}

export default Header;
