import NavBar from "./components/NavBar/NavBar.tsx";
import HomeIntro from "./components/HomeIntro/HomeIntro.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { useEffect, useState } from "react";

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
    <div className="page-container">
      <div className="page-wrapper">
        <NavBar activeMode={activeMode} handleClick={handleClick} />
        <main id="main-content">
          <HomeIntro />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
