import { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { MobileArticleLinks } from "@components/MobileArticleLinks";
import { ArticleData } from "@/app/(routes)/articles/[slug]/page";

const EVENTS_QUERY = `
*[
  _type == "blogEntry"
]{
  _createdAt,
  title,
  jpTitle,
  slug,
  description,
  jpDescription,
  tags,
  jpTags,
  mainContent,
  jpMainContent,
} | order(_createdAt desc)
`;

const getArticles = async () => {
  const res = await client.fetch<ArticleData[]>(EVENTS_QUERY);
  return res;
};

export default async function Articles() {
  const articles = await getArticles();

  return <MobileArticleLinks articles={articles} />;
}
