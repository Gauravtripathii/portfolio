import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";

function App() {
  return (
    <Router>
      <main className="bg-[#050A18] h-screen w-full">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
