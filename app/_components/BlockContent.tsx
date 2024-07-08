import { BlockContentItem } from "@components/BlockContentItem";
import { groupListItems } from "@utils/groupListItems";
import {
  BlockContentItemData,
  GroupedBlockContent,
} from "@customTypes/BlockContentTypes";

type WrappedInListProps = {
  listItemType: "bullet" | "number";
  children: React.ReactNode;
};
const WrappedInList = ({ listItemType, children }: WrappedInListProps) => {
  if (listItemType === "bullet") {
    return (
      <ul className="list-disc" style={{ marginLeft: "1.5em" }}>
        {children}
      </ul>
    );
  }
  if (listItemType === "number") {
    return (
      <ol className="list-decimal" style={{ marginLeft: "1.5em" }}>
        {children}
      </ol>
    );
  }
};

type BlockContentProps = {
  blockContent: BlockContentItemData[];
};
export const BlockContent = ({ blockContent }: BlockContentProps) => {
  const blockContentWithListItemsGrouped: GroupedBlockContent =
    groupListItems(blockContent);

  return (
    <>
      {blockContentWithListItemsGrouped.map((blockContentItem, i) => {
        if (blockContentItem._type === "groupedListItems") {
          return (
            <WrappedInList listItemType={blockContentItem.listItem} key={i}>
              <>
                {blockContentItem.blockContent.map((blockContentItem, i) => (
                  <BlockContentItem key={i} blockContent={blockContentItem} />
                ))}
              </>
            </WrappedInList>
          );
        }

        return <BlockContentItem key={i} blockContent={blockContentItem} />;
      })}
    </>
  );
};
