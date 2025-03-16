import { NavLink } from "react-router-dom";
import "./DesktopMenu.scss";

interface DesktopMenuProps {
  handleNavToggleClick: () => void;
}

export default function DesktopMenu({
  handleNavToggleClick,
}: DesktopMenuProps) {
  return (
    <>
      <ul className="desktop-menu">
        <li>
          <NavLink onClick={handleNavToggleClick} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavToggleClick} to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavToggleClick} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNavToggleClick} to="/newsletter">
            Newsletter
          </NavLink>
        </li>
      </ul>
    </>
  );
}
