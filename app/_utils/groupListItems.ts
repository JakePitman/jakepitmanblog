import {
  BlockContentItemData,
  GroupedListItems,
} from "@customTypes/BlockContentTypes";
type ReturnValue = (BlockContentItemData | GroupedListItems)[];

export const groupListItems = (
  blockData: BlockContentItemData[]
): ReturnValue => {
  const blockContentWithListItemsGrouped: ReturnValue = [];

  blockData.forEach((blockContentItem, i) => {
    if (
      blockContentItem._type === "block" &&
      blockContentItem.listItem === "bullet"
    ) {
      const groupedListItemsLength = blockContentWithListItemsGrouped.length;
      const lastItem =
        groupedListItemsLength < 1
          ? null
          : blockContentWithListItemsGrouped[groupedListItemsLength - 1];

      const lastItemIsBullet =
        lastItem?._type === "groupedListItems" &&
        lastItem.listItem === "bullet";

      if (lastItemIsBullet) {
        // If last item is bullet, push to the last object's listItems
        console.log("LAST ITEM: ", lastItem);
        lastItem.blockContent.push(blockContentItem);
      } else {
        // If last item is not bullet, push new object
        blockContentWithListItemsGrouped.push({
          _type: "groupedListItems",
          listItem: blockContentItem.listItem,
          blockContent: [blockContentItem],
        });
      }
    } else {
      blockContentWithListItemsGrouped.push(blockContentItem);
    }
  });

  return blockContentWithListItemsGrouped;
};
