import { useState } from "react";

import Logo from "./Logo";
import hamburger_icon from "../assets/menu.png";

import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

interface variantsType {
  [key: string]: { opacity: number; x?: string; y?: string };
  open: { opacity: number; x?: string; y?: string; };
  closed: { opacity: number; x?: string; y?: string; };
  openT: { opacity: number; x?: string; y?: string; };
  closedT: { opacity: number; x?: string; y?: string; };
}

const smallScreenVariants: variantsType = {
  open: { opacity: 1, x: "0" },
  closed: { opacity: 0, x: "100%" },
  openT: { opacity: 0.75, x: "0" },
  closedT: { opacity: 0, x: "100%" },
};

const largeScreenVariants: variantsType = {
  open: { opacity: 1, y: "0" },
  closed: { opacity: 0, y: "100%" },
  openT: { opacity: 0.75, y: "0" },
  closedT: { opacity: 0, y: "100%" },
};

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [variants, setVariants] = useState<variantsType>(smallScreenVariants);

  window.onresize = () =>
    window.innerWidth < 1024
      ? setVariants(smallScreenVariants)
      : setVariants(largeScreenVariants);
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
      <motion.div
        animate={menuOpen ? "openT" : "closedT"}
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.1 }}
        className={`w-full h-1/4 lg:w-1/2 lg:h-full bg-black absolute top-0 left-0 flex justify-center items-center cursor-pointer`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></motion.div>

      <motion.div
        animate={menuOpen ? "open" : "closed"}
        variants={variants}
        className={`w-full h-3/4 lg:w-1/2 lg:h-full bg-red-50 absolute bottom-0 right-0 flex flex-col items-center justify-center gap-10 text-2xl font-semibold text-[#050A18] lg:gap-14 `}
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
      </motion.div>
    </header>
  );
}

export default Header;
