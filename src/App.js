import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenshinImpact from "./components/GenshinImpact";
import MobileLegends from "./components/MobileLegends";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genshin-impact" element={<GenshinImpact />} />
        <Route path="/mobile-legends" element={<MobileLegends />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
