import data from "../../data/data.json";
import "./SingleBlogLinks.scss";
import BlogCard from "../BlogCard/BlogCard.tsx";

export default function SingleBlogLinks() {
  return (
    <div className="single-blog-links-wrapper">
      {data.map((article) => (
        <BlogCard showDescription={true} key={article.id} {...article} />
      ))}
    </div>
  );
}
