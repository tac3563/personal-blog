import "./PageHeader.scss";
import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

interface PageHeaderProps {
  hasSocialLinks?: boolean;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
  style?: string;
}

export default function PageHeader({
  hasSocialLinks = false,
  title,
  children,
  style,
}: PageHeaderProps) {
  return (
    <section className={`page-header`}>
      <div className="page-header-title-wrapper">
        <h2 className="page-header-title">{title}</h2>

        {style === "underline" || "side-rule" ? (
          <span className={`has-style-${style}`}></span>
        ) : null}
      </div>

      {children}

      {hasSocialLinks && <SocialLinks />}
    </section>
  );
}
