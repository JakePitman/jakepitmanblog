import { BlockContentItemData } from "@customTypes/BlockContentTypes";
type GroupedListItems = {
  listType: "bullet" | "number";
  blockContentItemData: BlockContentItemData;
};
type ReturnValue = (BlockContentItemData | GroupedListItems)[];

export const groupListItems = (
  blockData: BlockContentItemData[]
): ReturnValue => {
  const blockContentWithListItemsGrouped: ReturnValue = [];

  return blockContentWithListItemsGrouped;
};
