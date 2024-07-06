import { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { MobileArticleLinks } from "@components/MobileArticleLinks";

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

  return <MobileArticleLinks articles={articles} />;
}
