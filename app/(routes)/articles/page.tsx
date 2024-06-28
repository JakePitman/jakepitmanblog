import { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { ArticleListItem } from "@components/ArticleListItem";

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
    <div>
      <h1 className="text-5xl">Articles</h1>
      {articles.map((article) => (
        <>
          <br />
          <ArticleListItem
            title={article.title}
            description={article.description}
            slug={article.slug.current}
          />
        </>
      ))}
    </div>
  );
}
