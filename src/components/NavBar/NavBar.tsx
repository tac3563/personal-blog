import "./NavBar.scss";

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
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/newsletter">Newsletter</a>
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
