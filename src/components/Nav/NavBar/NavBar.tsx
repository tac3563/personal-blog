import "./NavBar.scss";
import { useEffect, useState } from "react";
import imageAvatar from "../../../assets/images/image-avatar.jpg";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import DesktopMenu from "../DesktopMenu/DesktopMenu.tsx";
import MobileMenu from "../MobileMenu/MobileMenu.tsx";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.tsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.tsx";

interface NavBarProps {
  activeMode: string;
  handleClick: () => void;
}

export default function NavBar({ activeMode, handleClick }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    function getWindowSize() {
      setIsMobileViewport(window.innerWidth < 768);
    }

    getWindowSize();

    window.addEventListener("resize", getWindowSize);

    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  }, []);

  function handleNavToggleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header id="main-header">
      <nav>
        <div className={`nav-wrapper ${isOpen ? "open" : ""}`}>
          <img
            className="profile-photo"
            src={imageAvatar}
            alt="portrait image of Paulina"
          />

          {!isMobileViewport ? (
            <DesktopMenu handleNavToggleClick={handleNavToggleClick} />
          ) : (
            <HamburgerMenu isOpen={isOpen} handleClick={handleNavToggleClick} />
          )}

          <ThemeSwitcher activeMode={activeMode} handleClick={handleClick} />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && isMobileViewport && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              damping: 15,
            }}
          >
            <MobileMenu handleNavToggleClick={handleNavToggleClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
