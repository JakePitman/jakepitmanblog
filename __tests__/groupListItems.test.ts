import { groupListItems } from "@utils/groupListItems";
import {
  DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST,
  DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST_AFTER_GROUPING,
  DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST,
  DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST_AFTER_GROUPING,
  DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS,
  DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS_AFTER_GROUPING,
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

describe("With ordered and unordered lists", () => {
  const result = groupListItems(DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS);
  it("Groups the unordered and ordered lists into _type: 'bullet' and _type: 'number' respectively", () => {
    expect(result).toEqual(
      DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST_AFTER_GROUPING
    );
  });
});
