import { MobileArticleLink } from "./MobileArticleLink";
import { SanityDocument } from "next-sanity";

type Props = {
  articles: SanityDocument[];
};
export const MobileArticleLinks = ({ articles }: Props) => (
  <div className="w-full flex flex-col items-center mt-12">
    {articles.map((article, i) => (
      <MobileArticleLink
        key={article.title + i}
        title={article.title}
        slug={article.slug.current}
        description={article.description}
        createdAt={article._createdAt}
        tags={article.tags}
      />
    ))}
  </div>
);
