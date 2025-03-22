import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import SingleBlogContent from "../components/SingleBlogContent/SingleBlogContent.tsx";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import "highlight.js/styles/github-dark-dimmed.css";

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
      <PageHeader className="single-blog" title={singlePost.title}>
        <p className="post-meta">{`Published: ${formattedPublishedDate}`}</p>
      </PageHeader>
      <SingleBlogContent singlePostContent={singlePost.content} />
      <Footer />
    </>
  );
}
