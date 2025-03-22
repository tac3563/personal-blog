import data from "../../data/data.json";
import "./SingleBlogLinks.scss";
import BlogCard from "../BlogCard/BlogCard.tsx";

export default function SingleBlogLinks() {
  return (
    <div className="single-blog-links">
      {data.map((article) => (
        <>
          <BlogCard key={article.slug} {...article} />
        </>
      ))}
    </div>
  );
}
