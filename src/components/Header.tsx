import { useState } from "react";

import Logo from "./Logo";
import hamburger_icon from "../../public/menu.png";

import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="h-1/6 w-full border-b flex items-center justify-between px-10">
      {/* logo */}
      <div className="">
        <Logo />
      </div>

      {/* hamburger icon */}
      <div
        className="w-10 lg:w-14 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={hamburger_icon}
          alt="open/close menu"
          className="w-full h-auto"
        />
      </div>

      {/* menu */}
      <div
        className={`w-full h-1/4 bg-black absolute top-0 left-0 opacity-75 ${
          menuOpen ? "block" : "hidden"
        }`} onClick={() => setMenuOpen(!menuOpen)}
      ></div>
      <div
        className={`w-full h-3/4 bg-white absolute bottom-0 right-0 ${
          menuOpen ? "block" : "hidden"
        }`}
      ></div>
    </header>
  );
}

export default Header;
