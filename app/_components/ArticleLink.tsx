type ArticleLinkProps = {
  title: string;
  description: string;
  slug: string;
};
export const ArticleLink = ({ title, description, slug }: ArticleLinkProps) => (
  <div>
    <h2 className="text-3xl">{title}</h2>
    <p>{description}</p>
  </div>
);
