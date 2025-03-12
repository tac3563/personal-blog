import data from "../../data/data.json";
import { Link } from "react-router-dom";

export default function SingleBlogLinks() {
  return (
    <div className="single-blog-links">
      {data.map(({ title, slug, publishedAt, description }) => (
        <div key={slug}>
          <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{publishedAt}</p>
            <p>{description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
