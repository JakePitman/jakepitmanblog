import { client } from "@/sanity/client";
import { BlockContentItemData } from "@customTypes/BlockContentTypes";

import { Article } from "@components/Article";

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
type ArticleData = {
  _createdAt: string;
  title: string;
  slug: Slug;
  description: string;
  tags: Tag[];
  titleImage: typeof Image;
  mainContent: BlockContentItemData[];
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
export default async function Page({ params }: ArticleProps) {
  const article = await client.fetch<ArticleData>(`
    *[
      _type == "blogEntry" &&
      slug.current == "${params.slug}"
    ]{
      _createdAt,
      title,
      slug,
      description,
      tags,
      titleImage,
      mainContent,
    }[0]
  `);

  if (!article) {
    return <div>Article of slug {params.slug} not found</div>;
  }

  const {
    _createdAt: createdAt,
    title,
    description,
    tags,
    mainContent,
  } = article;

  return (
    <Article
      createdAt={createdAt}
      title={title}
      description={description}
      tags={tags}
      mainContent={mainContent}
    />
  );
}
