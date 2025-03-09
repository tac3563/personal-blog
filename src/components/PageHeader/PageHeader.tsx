import "./PageHeader.scss";
import React from "react";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

interface PageHeaderProps {
  hasSocialLinks?: boolean;
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export default function PageHeader({
  hasSocialLinks = false,
  title,
  children,
}: PageHeaderProps) {
  return (
    <section className="page-header">
      <h2>{title}</h2>

      {children}

      {hasSocialLinks && <SocialLinks />}
    </section>
  );
}
