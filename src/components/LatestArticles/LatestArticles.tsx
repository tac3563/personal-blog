import data from "../../data/data.json";
import { Link } from "react-router-dom";
import "./LatestArticles.scss";

export default function LatestArticles() {
  return (
    <>
      <h2 className="latest-articles-title">
        Latest Articles<span className="has-style-side-rule"></span>
      </h2>
      {data.slice(0, 5).map(({ title, slug, publishedAt, description }) => {
        const formattedDate = new Date(publishedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        );

        return (
          <div className="single-blog-links" key={slug}>
            <Link className="single-blog-links__link" to={`/blog/${slug}`}>
              <h2 className="single-blog-links__title">{title}</h2>
            </Link>
            <p className="single-blog-links__date">{formattedDate}</p>
            <p className="single-blog-links__desc">{description}</p>
          </div>
        );
      })}

      <Link className="view-all-btn" to="/blog">
        View all articles
      </Link>
    </>
  );
}
