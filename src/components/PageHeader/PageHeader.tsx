import "./PageHeader.scss";
import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

interface PageHeaderProps {
  hasSocialLinks?: boolean;
  title: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  style?: string;
}

export default function PageHeader({
  hasSocialLinks = false,
  title,
  className,
  children,
  style,
}: PageHeaderProps) {
  return (
    <section className={`page-header page-${className}`}>
      <div className="page-header-title-wrapper">
        <h1 className="page-header-title">{title}</h1>

        {style === "underline" || "side-rule" ? (
          <span className={`has-style-${style}`}></span>
        ) : null}
      </div>

      {children}

      {hasSocialLinks && <SocialLinks />}
    </section>
  );
}
