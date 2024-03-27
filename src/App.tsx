import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Hero from "./pages/Hero";

function App() {
  const mouseFollower = useRef<HTMLDivElement>(null);
  // mouseFollower.current!.style.left = "100px";
  // useEffect(() => {
  // }, []);
  const changeFollower = (event: any) => {
    mouseFollower.current!.style.left = `${event.screenX}px`;
    mouseFollower.current!.style.top = `${event.screenY}px`;
  };
  return (
    <Router>
      <main
        className="bg-[#050A18] h-screen w-full"
        onMouseMove={(e) => changeFollower(e)}
      >
        <div
          className="absolute w-20 h-20 border-2 border-red-50 rounded-full -translate-x-1/2 -translate-y-[180%] hidden xl:block"
          ref={mouseFollower}
        ></div>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
