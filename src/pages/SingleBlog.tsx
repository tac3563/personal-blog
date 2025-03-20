import Footer from "../components/Footer/Footer.tsx";
import PageHeader from "../components/PageHeader/PageHeader.tsx";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark-dimmed.css";
import React, { ReactElement } from "react";

type ChildWithChildren = ReactElement<{ children?: React.ReactNode }>;

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
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          blockquote({ children }) {
            const extractText = (children: React.ReactNode): string => {
              return React.Children.toArray(children)
                .map((child) => {
                  if (typeof child === "string") {
                    return child;
                  } else if (React.isValidElement(child)) {
                    return extractText(
                      (child as ChildWithChildren).props.children,
                    );
                  }
                  return "";
                })
                .join("")
                .trim();
            };

            const text = extractText(children);
            let className = "";

            switch (true) {
              case text.startsWith("Warning:"):
                className = "warning";
                break;
              case text.startsWith("Tip:"):
                className = "tip";
                break;
              case text.startsWith("Caution:"):
                className = "caution";
                break;
              case text.startsWith("Information:"):
                className = "information";
                break;
            }

            return <blockquote className={className}>{children}</blockquote>;
          },
        }}
      >
        {singlePost.content}
      </Markdown>
      <Footer />
    </>
  );
}
