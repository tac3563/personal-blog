import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import imageAvatar from "../../assets/images/image-avatar.jpg";

interface navBarProps {
  activeMode: string;
  handleClick: () => void;
}

export default function NavBar({ activeMode, handleClick }: navBarProps) {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/newsletter">Newsletter</NavLink>
            </li>
          </ul>

          <div className="nav-hamburger">
            {!isOpen && (
              <svg
                onClick={handleNavToggleClick}
                className="nav-hamburger-closed"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#34302D"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.5 10h15m-15-5h15m-15 10h15"
                />
              </svg>
            )}

            {isOpen && (
              <svg
                onClick={handleNavToggleClick}
                className="nav-hamburger-open"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#FEFEFE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 5 5 15M5 5l10 10"
                />
              </svg>
            )}
          </div>

          {activeMode === "dark" ? (
            <div className="light-dark-toggle" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#FEFEFE"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 2.055v1.39m0 11.11v1.39M3.444 9H2.056M5.052 5.05l-.983-.982m8.88.982.982-.982m-8.88 8.882-.982.982m8.88-.982.982.982M15.945 9h-1.39m-2.083 0a3.472 3.472 0 1 1-6.944 0 3.472 3.472 0 0 1 6.944 0Z"
                />
              </svg>
            </div>
          ) : (
            <div className="light-dark-toggle" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#1C1A19"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15.913 9.664a5.556 5.556 0 1 1-7.577-7.577 6.945 6.945 0 1 0 7.577 7.577Z"
                />
              </svg>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
