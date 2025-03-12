import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

export default function SingleBlog() {
  const { slug } = useParams();

  const singlePost = data.find((post) => post.slug === slug);

  if (!singlePost) {
    return <h2>No posts found.</h2>;
  }

  return (
    <>
      <PageHeader title={singlePost.title}>
        <p className="post-meta">{singlePost.publishedAt}</p>
        <p>{singlePost.description}</p>
      </PageHeader>
      <p>{singlePost.content}</p>
      <Footer />
    </>
  );
}
