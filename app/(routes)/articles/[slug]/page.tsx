import { cache, Suspense } from "react";
import { client } from "@/sanity/client";
// import { Metadata } from "next";

import { Article, ArticleData } from "@components/Article";
import { BackButton } from "@components/BackButton";
import { EndOfPageBackButton } from "@components/EndOfPageBackButton";
import { LoadingSpinner } from "@components/LoadingSpinner";

const getArticle = cache(async (slug: string) => {
  const article = await client.fetch<ArticleData>(
    `
    *[
      _type == "blogEntry" &&
      slug.current == "${slug}"
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
      jpMainContent
    }[0]
  `,
    {},
    { next: { revalidate: 3600 } }
  );

  return article;
});

type ArticleProps = {
  params: {
    slug: string;
  };
};

// TODO: Find a way to re-implement this, without causing a delay in the rendering of the page
// Currently, this will stop the page from appearing until getArticle has finished

// export async function generateMetadata({
//   params,
// }: ArticleProps): Promise<Metadata> {
//   const { slug } = params;
//   const article = await getArticle(slug);

//   return {
//     title: article.title,
//     description: article.description,
//   };
// }

export default function Page({ params }: ArticleProps) {
  const articlePromise = getArticle(params.slug);

  return (
    <div className="relative h-full">
      <div className="w-full flex justify-center h-full">
        <div className="w-11/12 max-w-1040 flex flex-col">
          <BackButton />
          <Suspense
            fallback={
              <div className="flex-grow">
                <LoadingSpinner />
              </div>
            }
          >
            <Article articlePromise={articlePromise} />
            <EndOfPageBackButton />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
