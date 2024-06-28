import { SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const SLUGS_QUERY = `
*[
  _type == "blogEntry"
]{
  slug,
}
`;
export async function generateStaticParams() {
  const res = await client.fetch<SanityDocument[]>(SLUGS_QUERY);

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
export default async function Article({ params }: ArticleProps) {
  const article = await client.fetch(`
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

  const { _createdAt: createdAt, title, description } = article;
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <p>{createdAt}</p>
      <h3>{description}</h3>
    </div>
  );
}
