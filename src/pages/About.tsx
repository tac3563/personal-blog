import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import AboutContent from "../components/AboutContent/AboutContent.tsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.tsx";

export default function About() {
  return (
    <>
      <PageHeader className="about" style="underline" title={"About"}>
        <AboutContent />
        <SocialLinks />
      </PageHeader>
      <Footer />
    </>
  );
}
