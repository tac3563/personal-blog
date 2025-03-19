import data from "../../data/data.json";
import { Link } from "react-router-dom";
import "./LatestArticles.scss";
import BlogCard from "../BlogCard/BlogCard.tsx";

export default function LatestArticles() {
  return (
    <>
      <h2 className="latest-articles-title">
        Latest Articles<span className="has-style-side-rule"></span>
      </h2>

      <div className="latest-articles-links">
        {data.slice(0, 5).map((article) => (
          <BlogCard key={article.slug} {...article} />
        ))}
      </div>

      <Link className="view-all-btn" to="/blog">
        View all articles
      </Link>
    </>
  );
}
