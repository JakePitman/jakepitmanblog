import { Suspense } from "react";
import { client } from "@/sanity/client";
import { MobileArticleLinks } from "@components/MobileArticleLinks";
import { ArticleData } from "@components/Article";
import { LoadingSpinner } from "@components/LoadingSpinner";

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

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MobileArticleLinks articlesPromise={articlesPromise} />
    </Suspense>
  );
}
