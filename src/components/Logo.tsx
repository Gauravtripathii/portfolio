function Logo() {
  return (
    <div className="text-white text-6xl font-mono font-bold p-5 flex">
      <span className="text-red-500">{"<"}</span>
      G<span className="hidden lg:block">aurav</span>
      <span className="text-red-500">{"/>"}</span>
    </div>
  );
}

export default Logo;
