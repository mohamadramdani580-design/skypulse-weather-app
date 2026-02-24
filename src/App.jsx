import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Meteo from "./pages/Meteo";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meteo" element={<Meteo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
