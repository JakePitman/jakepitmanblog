type ArticleListItemProps = {
  title: string;
  description: string;
  slug: string;
};
export const ArticleListItem = ({
  title,
  description,
  slug,
}: ArticleListItemProps) => (
  <div>
    <h2 className="text-3xl">{title}</h2>
    <p>{description}</p>
  </div>
);
