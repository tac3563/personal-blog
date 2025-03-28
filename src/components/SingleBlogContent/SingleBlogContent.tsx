import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import React, { ReactElement } from "react";
import "./SingleBlogContent.scss";

type ChildWithChildren = ReactElement<{ children?: React.ReactNode }>;

interface SingleBlogContentProps {
  singlePostContent: string;
}

export default function SingleBlogContent({
  singlePostContent,
}: SingleBlogContentProps) {
  return (
    <section id="single-blog-content">
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
          table({ children }) {
            return (
              <div className="table-wrapper">
                <table>{children}</table>
              </div>
            );
          },
        }}
      >
        {singlePostContent}
      </Markdown>
    </section>
  );
}
