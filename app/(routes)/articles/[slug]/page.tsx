import { client } from "@/sanity/client";
import { BlockContentItemData } from "@customTypes/BlockContentTypes";
import { Metadata, ResolvingMetadata } from "next";

import { Article } from "@components/Article";
import { BackButton } from "@components/BackButton";

const SLUGS_QUERY = `
*[
  _type == "blogEntry"
]{
  slug,
}
`;
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
  mainContent: BlockContentItemData[];
  jpMainContent: BlockContentItemData[];
};
export async function generateStaticParams() {
  const res = await client.fetch<ArticleData[]>(SLUGS_QUERY);

  const slugs: { params: { slug: string } }[] = res.map((articleData) => ({
    params: { slug: articleData.slug.current },
  }));

  return slugs;
}

type ArticleProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  // read route params
  const { slug } = params;
  // fetch data
  const article = await client.fetch<ArticleData>(`
    *[
      _type == "blogEntry" &&
      slug.current == "${params.slug}"
    ]{
      title,
      description,
    }[0]
  `);

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function Page({ params }: ArticleProps) {
  const article = await client.fetch<ArticleData>(`
    *[
      _type == "blogEntry" &&
      slug.current == "${params.slug}"
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
  `);

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
        </div>
      </div>
    </div>
  );
}
