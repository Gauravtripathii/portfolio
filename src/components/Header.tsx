import { useState } from "react";

import Logo from "./Logo";
import hamburger_icon from "../assets/menu.png";

import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className="h-1/6 w-full border-b flex items-center justify-between px-10 z-20">
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
        className={`w-full h-1/4 lg:w-1/2 lg:h-full bg-black absolute top-0 left-0 opacity-75 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>
      <div
        className={`w-full h-3/4 lg:w-1/2 lg:h-full bg-red-50 absolute bottom-0 right-0 flex flex-col items-center justify-center gap-10 text-2xl font-semibold text-[#050A18] lg:gap-14 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <NavLink
          to="/"
          className=" hover:text-red-500 hover:underline hover:underline-offset-4 transition-colors duration-300"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="hover:text-red-500 hover:underline hover:underline-offset-4 transition-colors duration-300"
        >
          About
        </NavLink>

        <NavLink
          to="/work"
          className=" hover:text-red-500 hover:underline hover:underline-offset-4 transition-colors duration-300"
        >
          Work
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
