import { client } from "@/sanity/client";
import { MobileArticleLinks } from "@components/MobileArticleLinks";
import { ArticleData } from "@/app/(routes)/articles/[slug]/page";

const ARTICLES_QUERY = `
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
  const res = client.fetch<ArticleData[]>(
    ARTICLES_QUERY,
    {},
    { next: { revalidate: 3600 } }
  );
  return res;
};

export default function Articles() {
  const articlesPromise = getArticles();

  return <MobileArticleLinks articlesPromise={articlesPromise} />;
}
