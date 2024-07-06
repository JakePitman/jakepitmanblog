"use client";
import { useRef, useEffect } from "react";
import { MobileArticleLink } from "./MobileArticleLink";
import { SanityDocument } from "next-sanity";
import { Inter } from "next/font/google";
import mobileArticleLinkStyles from "./mobileArticleLink.module.css";

type Props = {
  articles: SanityDocument[];
};
export const MobileArticleLinks = ({ articles }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          mobileArticleLinkStyles.show,
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          intersectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  return (
    <div className="w-full flex flex-col items-center mt-12" ref={containerRef}>
      {articles.map((article, i) => (
        <MobileArticleLink
          key={article.title + i}
          title={article.title}
          slug={article.slug.current}
          description={article.description}
          createdAt={article._createdAt}
          tags={article.tags}
          interSectionObserver={intersectionObserver}
        />
      ))}
    </div>
  );
};
