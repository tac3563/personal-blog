import "./NavBar.scss";
import { NavLink } from "react-router-dom";

interface navBarProps {
  activeMode: string;
  handleClick: () => void;
}

export default function NavBar({ activeMode, handleClick }: navBarProps) {
  return (
    <header id="main-header">
      <nav>
        <div className="nav-wrapper">
          <img
            className="profile-photo"
            src="/src/assets/images/image-avatar.jpg"
            alt="#"
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
            {activeMode === "dark" ? (
              <li className="light-dark-toggle" onClick={handleClick}>
                🌛
              </li>
            ) : (
              <li className="light-dark-toggle" onClick={handleClick}>
                ☀️
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
