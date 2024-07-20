import { cache } from "react";
import { client } from "@/sanity/client";
import { PortableTextItem } from "@customTypes/PortableTextTypes";
import { Metadata } from "next";

import { Article } from "@components/Article";
import { BackButton } from "@components/BackButton";
import { EndOfPageBackButton } from "@components/EndOfPageBackButton";

type Slug = {
  current: string;
};
type Tag = {
  value: string;
};
export type ArticleData = {
  _createdAt: string;
  title: string;
  jpTitle: string;
  slug: Slug;
  description: string;
  jpDescription: string;
  tags: Tag[];
  jpTags: Tag[];
  mainContent: PortableTextItem[];
  jpMainContent: PortableTextItem[];
};

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

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const { slug } = params;
  const article = await getArticle(slug);

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function Page({ params }: ArticleProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    return <div>Article of slug {params.slug} not found</div>;
  }

  const {
    _createdAt: createdAt,
    title,
    jpTitle,
    description,
    jpDescription,
    tags,
    jpTags,
    mainContent,
    jpMainContent,
  } = article;

  return (
    <div className="relative">
      <div className="w-full flex justify-center">
        <div className="w-11/12 max-w-1040">
          <BackButton />
          <Article
            createdAt={createdAt}
            title={title}
            jpTitle={jpTitle}
            description={description}
            jpDescription={jpDescription}
            tags={tags}
            jpTags={jpTags}
            mainContent={mainContent}
            jpMainContent={jpMainContent}
          />
          <EndOfPageBackButton />
        </div>
      </div>
    </div>
  );
}
