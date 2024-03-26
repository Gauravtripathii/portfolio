import Logo from "./Logo";
import hamburger_icon from "../../public/menu.png";

function Header() {
  return (
    <header className="h-1/6 w-full border-b flex items-center justify-between px-10">
      {/* logo */}
      <div className="">
        <Logo />
      </div>

      {/* hamburger icon */}
      <div className="w-10 lg:w-14 cursor-pointer">
        <img src={hamburger_icon} alt="open/close menu" className="w-full h-auto" />
      </div>
    </header>
  );
}

export default Header;
