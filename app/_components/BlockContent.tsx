import { BlockContentItem } from "@components/BlockContentItem";
import {
  BlockContentItemData,
  GroupedBlockContent,
} from "@customTypes/BlockContentTypes";

type BlockContentProps = {
  blockContent: BlockContentItemData[];
};
export const BlockContent = ({ blockContent }: BlockContentProps) => {
  const blockContentWithListItemsGrouped: GroupedBlockContent = [];
  // TOOD: loop over blockContent and group list items

  return (
    <>
      {blockContent.map((blockContentItem, i) => (
        <BlockContentItem key={i} blockContent={blockContentItem} />
      ))}
    </>
  );
};
