import {
  PortableTextItem,
  PortableTextWithListItemsGrouped,
} from "@customTypes/PortableTextTypes";

// Block content list items come from Sanity as separate items with a listItem property of "bullet" | "number". However, to make this distinction in html, <li> items need to be wrapped in either <ul> | <ol>

// This function groups consecutive list items of the same type into an object with _type: "groupedListItems" and listItem: "bullet" | "number", and all the list items grouped into an array called "blockContent"
export const groupListItems = (
  blockData: PortableTextItem[]
): PortableTextWithListItemsGrouped => {
  const blockContentWithListItemsGrouped: PortableTextWithListItemsGrouped = [];

  blockData.forEach((blockContentItem, i) => {
    if (
      blockContentItem._type === "block" &&
      (blockContentItem.listItem === "bullet" ||
        blockContentItem.listItem === "number")
    ) {
      const groupedListItemsLength = blockContentWithListItemsGrouped.length;
      const lastItem =
        groupedListItemsLength < 1
          ? null
          : blockContentWithListItemsGrouped[groupedListItemsLength - 1];

      const lastItemIsBulletGroup =
        lastItem?._type === "groupedListItems" &&
        lastItem.listItem === "bullet";
      const lastItemIsNumberedGroup =
        lastItem?._type === "groupedListItems" &&
        lastItem.listItem === "number";

      const currentBelongsToPreviousGroup =
        ((lastItemIsBulletGroup && blockContentItem.listItem === "bullet") ||
          (lastItemIsNumberedGroup &&
            blockContentItem.listItem === "number")) &&
        lastItem.level === blockContentItem.level;
      if (currentBelongsToPreviousGroup) {
        lastItem.blockContent.push(blockContentItem);
      } else {
        blockContentWithListItemsGrouped.push({
          _type: "groupedListItems",
          listItem: blockContentItem.listItem,
          blockContent: [blockContentItem],
          level: blockContentItem.level,
        });
      }
    } else {
      blockContentWithListItemsGrouped.push(blockContentItem);
    }
  });

  return blockContentWithListItemsGrouped;
};
