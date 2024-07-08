import {
  BlockContentItemData,
  Mark,
  Style,
  GroupedBlockContent,
} from "@customTypes/BlockContentTypes";

const STYLES = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "blockquote",
  "normal",
] as const;

const generateWithUniqueStyle = (
  style: Style,
  marks: Mark[] = []
): BlockContentItemData => ({
  _key: "123",
  markDefs: [],
  children: [
    {
      _type: "span",
      marks,
      text: `This is a ${style} tag`,
      _key: "123",
    },
  ],
  _type: "block",
  style,
});
export const DUMMY_BLOCK_CONTENT_NO_MARKS: BlockContentItemData[] = STYLES.map(
  (style) => generateWithUniqueStyle(style)
);
export const DUMMY_BLOCK_CONTENT_STRONG: BlockContentItemData[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["strong"])
);
export const DUMMY_BLOCK_CONTENT_EM: BlockContentItemData[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["em"])
);
export const DUMMY_BLOCK_CONTENT_UNDERLINE: BlockContentItemData[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["underline"])
);
export const DUMMY_BLOCK_CONTENT_STRIKETHROUGH: BlockContentItemData[] =
  STYLES.map((style) => generateWithUniqueStyle(style, ["strike-through"]));
export const DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH: BlockContentItemData[] =
  STYLES.map((style) =>
    generateWithUniqueStyle(style, [
      "strong",
      "em",
      "underline",
      "strike-through",
    ])
  );
export const DUMMY_BLOCK_CONTENT_INLINE_CODE: BlockContentItemData[] =
  STYLES.map((style) => generateWithUniqueStyle(style, ["code"]));

export const DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK: BlockContentItemData[] = [
  generateWithUniqueStyle("h2"),
  {
    _type: "code",
    _key: "123",
    code: `// This is a TS code block\n\nconst foo = "bar"\nconst myObj {\n  foo: "bar"\n}\n"Will this be delineated?"`,
    language: "typescript",
  },
  generateWithUniqueStyle("normal"),
];

const ul1_1: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "bullet",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ul 1, group 1",
      _key: "123",
    },
  ],
};
const ul2_1: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "bullet",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ul 2, group 1",
      _key: "123",
    },
  ],
};
const ul1_2: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "bullet",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ul 1, group 2",
      _key: "123",
    },
  ],
};
const ul2_2: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "bullet",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ul 2, group 2",
      _key: "123",
    },
  ],
};
export const DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST: BlockContentItemData[] = [
  generateWithUniqueStyle("h2"),
  ul1_1,
  ul2_1,
  generateWithUniqueStyle("h3"),
  ul1_2,
  ul2_2,
];
export const DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST_AFTER_GROUPING: GroupedBlockContent =
  [
    generateWithUniqueStyle("h2"),
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_1, ul2_1],
    },
    generateWithUniqueStyle("h3"),
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_2, ul2_2],
    },
  ];

const ol1_1: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "number",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ol 1, group 1",
      _key: "123",
    },
  ],
};
const ol2_1: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "number",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ol 2, group 1",
      _key: "123",
    },
  ],
};
const ol1_2: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "number",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ol 1, group 2",
      _key: "123",
    },
  ],
};
const ol2_2: BlockContentItemData = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "number",
  level: 1,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ol 2, group 2",
      _key: "123",
    },
  ],
};
export const DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST: BlockContentItemData[] = [
  generateWithUniqueStyle("h2"),
  ol1_1,
  ol2_1,
  generateWithUniqueStyle("h3"),
  ol1_2,
  ol2_2,
];

export const DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST_AFTER_GROUPING: GroupedBlockContent =
  [
    generateWithUniqueStyle("h2"),
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_1, ol2_1],
    },
    generateWithUniqueStyle("h3"),
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_2, ol2_2],
    },
  ];

export const DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS: BlockContentItemData[] = [
  generateWithUniqueStyle("h2"),
  ol1_1,
  ol2_1,
  ol1_2,
  ol2_2,
  generateWithUniqueStyle("h3"),
  ul1_1,
  ul1_2,
  ul2_1,
  ul2_2,
];

export const DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS_AFTER_GROUPING: GroupedBlockContent =
  [
    generateWithUniqueStyle("h2"),
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_1, ol2_1, ol1_2, ol2_2],
    },
    generateWithUniqueStyle("h3"),
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_1, ul1_2, ul2_1, ul2_2],
    },
  ];
