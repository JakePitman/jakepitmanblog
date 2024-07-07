import { BlockContentItem } from "@components/BlockContentItem";
import { BlockContentItemData } from "@customTypes/BlockContentTypes";

type BlockContentProps = {
  blockContent: BlockContentItemData[];
};
export const BlockContent = ({ blockContent }: BlockContentProps) => {
  return (
    <>
      {blockContent.map((blockContentItem, i) => (
        <BlockContentItem key={i} blockContent={blockContentItem} />
      ))}
    </>
  );
};
