import React, { JSX, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar.tsx";
import "./Layout.scss";

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export default function Layout({ children }: LayoutProps): JSX.Element {
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
        <main id="main-content">{children}</main>
      </div>
    </div>
  );
}
