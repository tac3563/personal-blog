import "./Footer.scss";
import FooterSocialLinks from "../FooterSocialLinks/FooterSocialLinks.tsx";

export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-wrapper">
        <p>Made ❤️ with and ☕</p>
        <FooterSocialLinks />
      </div>
    </footer>
  );
}
