"use client";
import { useRouter } from "next/navigation";

type ArticleLinkProps = {
  slug: string;
};
export const ArticleLink = ({ slug }: ArticleLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/articles/${slug}`);
  };

  return <button onClick={handleClick}>Go to article</button>;
};
