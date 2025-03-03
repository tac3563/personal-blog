import "./NavBar.scss";

export default function NavBar() {
  return (
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
          <li>☀️</li>
        </ul>
      </div>
    </nav>
  );
}
