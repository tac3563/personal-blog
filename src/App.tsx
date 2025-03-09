import NavBar from "./components/NavBar/NavBar.tsx";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes.tsx";

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
            <AnimatedRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
