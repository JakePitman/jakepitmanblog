import { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { ArticleListItem } from "@components/ArticleListItem";
import { ArticleLink } from "@components/ArticleLink";
import { MobileArticleLink } from "@components/MobileArticleLink";

const EVENTS_QUERY = `
*[
  _type == "blogEntry"
]{
  _createdAt,
  title,
  slug,
  description,
  tags,
  titleImage,
  mainContent,
}
`;

const getArticles = async () => {
  const res = await client.fetch<SanityDocument[]>(EVENTS_QUERY);
  return res;
};

export default async function Articles() {
  const articles = await getArticles();

  return (
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
}
