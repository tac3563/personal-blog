import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import About from "./pages/About.tsx";
import Newsletter from "./pages/Newsletter.tsx";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [activeMode, setActiveMode] = useState("light");

  function handleClick() {
    activeMode === "dark" ? setActiveMode("light") : setActiveMode("dark");
  }

  useEffect(() => {
    if (activeMode === "dark") {
      document.querySelector(".page-container")?.classList.add("dark");
    } else {
      document.querySelector(".page-container")?.classList.remove("dark");
    }
  });

  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="page-wrapper">
          <NavBar activeMode={activeMode} handleClick={handleClick} />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/Newsletter" element={<Newsletter />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
