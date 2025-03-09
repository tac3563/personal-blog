import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";

export default function SingleBlog() {
  return (
    <>
      <PageHeader title="Overcoming Imposter Syndrome as a New Developer">
        <p className="post-meta">Published February 10, 2025</p>
        <p>
          Today, I want to open up about a topic that hits close to home for
          many of us in tech—imposter syndrome. If you’ve ever felt like you
          don’t belong or you’re not “good enough” as a developer, you’re
          definitely not alone. Let’s dive into what imposter syndrome is, why
          it happens, and how we can manage it.
        </p>
      </PageHeader>
      <Footer />
    </>
  );
}
