import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl">
      <Nav />
    </header>
  );
};

export default Header;
