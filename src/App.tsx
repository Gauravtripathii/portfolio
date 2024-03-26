import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <main className="bg-[#050A18] h-screen w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
