import { groupListItems } from "@utils/groupListItems";
import {
  DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST,
  DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST_AFTER_GROUPING,
  DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST,
  DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST_AFTER_GROUPING,
} from "@/stories/dummyBlockContent";

describe("With unordered list", () => {
  it("Groups the list items in an object with _type: 'bullet'", () => {
    const result = groupListItems(DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST);

    expect(result).toEqual(
      DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST_AFTER_GROUPING
    );
  });
});

describe("With ordered list", () => {
  it("Groups the list items in an object with _type: 'number'", () => {
    const result = groupListItems(DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST);

    expect(result).toEqual(
      DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST_AFTER_GROUPING
    );
  });
});
