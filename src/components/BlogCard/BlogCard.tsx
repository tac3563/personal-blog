import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  showDescription?: boolean;
}

export default function BlogCard({
  title,
  slug,
  publishedAt,
  description,
  showDescription,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="single-blog-links" key={slug}>
      <Link className="single-blog-links__link" to={`/blog/${slug}`}>
        <h2 className="single-blog-links__title">{title}</h2>
      </Link>
      <p className="single-blog-links__date">{formattedDate}</p>
      {showDescription && (
        <p className="single-blog-links__desc">{description}</p>
      )}
    </div>
  );
}
