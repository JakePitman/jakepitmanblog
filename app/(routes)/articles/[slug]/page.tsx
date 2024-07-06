import { Bebas_Neue } from "next/font/google";
import cx from "classnames";

import { client } from "@/sanity/client";
import { FormattedDate } from "@components/FormattedDate";
import { Tag } from "@components/Tag";
import { BlockContent } from "@customTypes/BlockContentTypes";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

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
  mainContent: BlockContent[];
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
export default async function Article({ params }: ArticleProps) {
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
    <div className="w-full flex justify-center mt-12">
      <div className="w-11/12 max-w-768 shadow-lg border-1 border-slate-600 p-8">
        <h1 className={cx("text-24 mb-8", bebasNeue.className)}>{title}</h1>

        <h3 className="border-l-8 border-slate-800 pl-8 mb-12">
          {description}
        </h3>

        <div className="flex flex-wrap mb-8">
          {tags.map(({ value }, i) => (
            <Tag label={value} key={value + i} />
          ))}
        </div>

        <em className="w-full flex items-center text-12">
          <hr className="flex-grow text-slate-500 mr-4" />
          <FormattedDate value={createdAt} />
        </em>
      </div>
    </div>
  );
}
