import "./Footer.scss";

export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-wrapper">
        <p>Made ❤️ with and ☕</p>
        <ul>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src/assets/images/logo-github.svg" alt="github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/assets/images/logo-linkedin.svg"
                alt="linkedin logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
