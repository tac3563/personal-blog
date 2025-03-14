import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Markdown from "react-markdown";

export default function SingleBlog() {
  const { slug } = useParams();

  const singlePost = data.find((post) => post.slug === slug);

  if (!singlePost) {
    return <h2>No posts found.</h2>;
  }

  const formattedPublishedDate = new Date(
    singlePost.publishedAt,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHeader title={singlePost.title}>
        <p className="post-meta">{`Published: ${formattedPublishedDate}`}</p>
        <p> {singlePost.description}</p>
      </PageHeader>
      <Markdown>{singlePost.content}</Markdown>
      <Footer />
    </>
  );
}
