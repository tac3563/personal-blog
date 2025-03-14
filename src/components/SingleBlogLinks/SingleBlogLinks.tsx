import data from "../../data/data.json";
import { Link } from "react-router-dom";

export default function SingleBlogLinks() {
  return (
    <div className="single-blog-links">
      {data.map(({ title, slug, publishedAt, description }) => {
        const formattedDate = new Date(publishedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        );

        return (
          <div key={slug}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{formattedDate}</p>
              <p>{description}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
