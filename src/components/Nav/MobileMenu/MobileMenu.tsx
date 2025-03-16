import { NavLink } from "react-router-dom";

interface MobileMenuProps {
  handleNavToggleClick: () => void;
}

export default function MobileMenu({ handleNavToggleClick }: MobileMenuProps) {
  return (
    <ul className="mobile-menu">
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
  );
}
