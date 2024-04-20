import Header from "../components/Header";
import Home from "../components/Home";
import Work from "../components/Work";

import { Routes, Route } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default Hero;
