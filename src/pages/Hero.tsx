import Header from "../components/Header";
import Home from "../components/Home";

import { Routes, Route } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full h-full relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Hero;
