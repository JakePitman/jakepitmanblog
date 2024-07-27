"use client";
import { use, useState, useRef, useEffect, useMemo } from "react";
import { useIntl } from "react-intl";
import { MobileArticleLink, ArticleProps } from "./MobileArticleLink";
import mobileArticleLinkStyles from "./mobileArticleLink.module.css";
import { ArticleData } from "@components/Article";

type Props = {
  articlesPromise: Promise<ArticleData[]>;
};
export const MobileArticleLinks = ({ articlesPromise }: Props) => {
  const articles = use(articlesPromise);

  const containerRef = useRef<HTMLDivElement>(null);
  const intl = useIntl();
  const { locale } = intl;

  const localisedArticleSets = useMemo(() => {
    const enArticles: ArticleProps[] = [];
    const jpArticles: ArticleProps[] = [];

    articles.forEach((article) => {
      enArticles.push({
        title: article.title,
        description: article.description,
        tags: article.tags,
        createdAt: article._createdAt,
        slug: article.slug.current,
      });
      jpArticles.push({
        title: article.jpTitle,
        description: article.jpDescription,
        tags: article.jpTags,
        createdAt: article._createdAt,
        slug: article.slug.current,
      });
    });

    return {
      enArticles,
      jpArticles,
    };
  }, [articles]);

  const [localisedArticles, setLocalisedArticles] = useState(
    localisedArticleSets.enArticles
  );

  useEffect(() => {
    switch (locale) {
      case "en-uk":
        setLocalisedArticles(localisedArticleSets.enArticles);
        break;
      case "ja-jp":
        setLocalisedArticles(localisedArticleSets.jpArticles);
        break;
      default:
        setLocalisedArticles(localisedArticleSets.enArticles);
    }
  }, [locale, localisedArticleSets]);

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
      root: containerRef.current,
      rootMargin: "-50px",
    }
  );

  if (!localisedArticles) {
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center mt-12" ref={containerRef}>
      {localisedArticles.map((article, i) => (
        <MobileArticleLink
          key={article.title + i}
          title={article.title}
          slug={article.slug}
          description={article.description}
          createdAt={article.createdAt}
          tags={article.tags}
          interSectionObserver={intersectionObserver}
        />
      ))}
    </div>
  );
};
