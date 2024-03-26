import Logo from "./Logo";

function Header() {
  return (
    <header>
      {/* logo */}
      <div className="h-1/6 w-full border-b items-center">
        <Logo />
      </div>
    </header>
  );
}

export default Header;
