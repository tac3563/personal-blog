import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import SingleBlogLinks from "../components/SingleBlogLinks/SingleBlogLinks.tsx";

export default function Blog() {
  return (
    <>
      <main>
        <PageHeader title="My Articles">
          <p>
            Below are all my recent blog posts. Click on any title to read the
            full article.
          </p>
        </PageHeader>

        <SingleBlogLinks />

        <Footer />
      </main>
    </>
  );
}
