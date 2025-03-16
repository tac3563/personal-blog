import "./HamburgerMenu.scss";

interface HamburgerMenu {
  isOpen: boolean;
  handleClick: () => void;
}

export default function HamburgerMenu({ isOpen, handleClick }: HamburgerMenu) {
  return (
    <div className="hamburger-menu-wrapper">
      {!isOpen && (
        <svg
          onClick={handleClick}
          className="hamburger-menu-closed"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="#34302D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.5 10h15m-15-5h15m-15 10h15"
          />
        </svg>
      )}

      {isOpen && (
        <svg
          onClick={handleClick}
          className="hamburger-menu-open"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="#FEFEFE"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 5 5 15M5 5l10 10"
          />
        </svg>
      )}
    </div>
  );
}
