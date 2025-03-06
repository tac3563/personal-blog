import "./NavBar.scss";
import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
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
