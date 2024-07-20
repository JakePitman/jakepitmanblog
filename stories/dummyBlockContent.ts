import {
  PortableTextItem,
  Mark,
  MarkDef,
  Style,
  PortableTextWithListItemsGrouped,
} from "@customTypes/PortableTextTypes";

const STYLES = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "normal",
  "blockquote",
] as const;

const generateWithUniqueStyle = (
  style: Style,
  marks: Mark[] = [],
  markDefs: MarkDef[] = []
): PortableTextItem => ({
  _key: "123",
  markDefs,
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
export const DUMMY_BLOCK_CONTENT_NO_MARKS: PortableTextItem[] = STYLES.map(
  (style) => generateWithUniqueStyle(style)
);
export const DUMMY_BLOCK_CONTENT_STRONG: PortableTextItem[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["strong"])
);
export const DUMMY_BLOCK_CONTENT_EM: PortableTextItem[] = STYLES.map((style) =>
  generateWithUniqueStyle(style, ["em"])
);
export const DUMMY_BLOCK_CONTENT_UNDERLINE: PortableTextItem[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["underline"])
);
export const DUMMY_BLOCK_CONTENT_STRIKETHROUGH: PortableTextItem[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["strike-through"])
);
export const DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH: PortableTextItem[] =
  STYLES.map((style) =>
    generateWithUniqueStyle(style, [
      "strong",
      "em",
      "underline",
      "strike-through",
    ])
  );
export const DUMMY_BLOCK_CONTENT_INLINE_CODE: PortableTextItem[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["code"])
);
export const DUMMY_BLOCK_CONTENT_LINKS: PortableTextItem[] = STYLES.map(
  (style, i) =>
    generateWithUniqueStyle(
      style,
      [`123${i}`],
      [{ _type: "link", href: "https://www.google.com", _key: `123${i}` }]
    )
);

export const DUMMY_BLOCK_CONTENT_WITH_CODE_BLOCK: PortableTextItem[] = [
  generateWithUniqueStyle("h2"),
  {
    _type: "code",
    _key: "123",
    code: `// This is a TS code block\n\nconst foo = "bar"\nconst myObj {\n  foo: "bar"\n}\n"Will this be delineated?"`,
    language: "typescript",
  },
  generateWithUniqueStyle("normal"),
];

export const DUMMY_BLOCK_CONTENT_WITH_LONG_BLOCKQUOTE_AND_CODE: PortableTextItem[] =
  [
    {
      _key: "123",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: `This is a really long block quote. When this wraps around, the dark border should remain consistent of the left side. Tutant meenage neetle teetles have been running amuck. `,
          _key: "123",
        },
        {
          _type: "span",
          marks: ["code"],
          text: `some code`,
          _key: "123",
        },
        {
          _type: "span",
          marks: [],
          text: ` Here's some more text. This whole thing should be inline`,
          _key: "123",
        },
      ],
      _type: "block",
      style: "blockquote",
    },
  ];

const ul1_1: PortableTextItem = {
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
      text: "This is ul 1, level 1",
      _key: "123",
    },
  ],
};
const ul2_1: PortableTextItem = {
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
      text: "This is ul 2, level 1",
      _key: "123",
    },
  ],
};
const ul1_2: PortableTextItem = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "bullet",
  level: 2,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ul 1, level 2",
      _key: "123",
    },
  ],
};
const ul2_2: PortableTextItem = {
  _type: "block",
  style: "normal",
  _key: "123",
  listItem: "bullet",
  level: 2,
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ul 2, level 2",
      _key: "123",
    },
  ],
};
export const DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST: PortableTextItem[] = [
  generateWithUniqueStyle("h2"),
  ul1_1,
  ul2_1,
  generateWithUniqueStyle("h3"),
  ul1_2,
  ul2_2,
];
export const DUMMY_BLOCK_CONTENT_WITH_UNORDERED_LIST_AFTER_GROUPING: PortableTextWithListItemsGrouped =
  [
    generateWithUniqueStyle("h2"),
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_1, ul2_1],
      level: 1,
    },
    generateWithUniqueStyle("h3"),
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_2, ul2_2],
      level: 2,
    },
  ];

const ol1_1: PortableTextItem = {
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
      text: "This is ol 1, level 1",
      _key: "123",
    },
  ],
};
const ol2_1: PortableTextItem = {
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
      text: "This is ol 2, level 1",
      _key: "123",
    },
  ],
};
const ol1_2: PortableTextItem = {
  _type: "block",
  style: "normal",
  _key: "123",
  level: 2,
  listItem: "number",
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ol 1, level 2",
      _key: "123",
    },
  ],
};
const ol2_2: PortableTextItem = {
  _type: "block",
  style: "normal",
  _key: "123",
  level: 2,
  listItem: "number",
  markDefs: [],
  children: [
    {
      _type: "span",
      marks: [],
      text: "This is ol 2, level 2",
      _key: "123",
    },
  ],
};
export const DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST: PortableTextItem[] = [
  generateWithUniqueStyle("h2"),
  ol1_1,
  ol2_1,
  generateWithUniqueStyle("h3"),
  ol1_2,
  ol2_2,
];

export const DUMMY_BLOCK_CONTENT_WITH_ORDERED_LIST_AFTER_GROUPING: PortableTextWithListItemsGrouped =
  [
    generateWithUniqueStyle("h2"),
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_1, ol2_1],
      level: 1,
    },
    generateWithUniqueStyle("h3"),
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_2, ol2_2],
      level: 2,
    },
  ];

export const DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS: PortableTextItem[] = [
  generateWithUniqueStyle("h2"),
  ol1_1,
  ol2_1,
  ol1_2,
  ol2_2,
  generateWithUniqueStyle("h3"),
  ul1_1,
  ul2_1,
  ul1_2,
  ul2_2,
];

export const DUMMY_BLOCK_CONTENT_WITH_BOTH_LISTS_AFTER_GROUPING: PortableTextWithListItemsGrouped =
  [
    generateWithUniqueStyle("h2"),
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_1, ol2_1],
      level: 1,
    },
    {
      _type: "groupedListItems",
      listItem: "number",
      blockContent: [ol1_2, ol2_2],
      level: 2,
    },
    generateWithUniqueStyle("h3"),
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_1, ul2_1],
      level: 1,
    },
    {
      _type: "groupedListItems",
      listItem: "bullet",
      blockContent: [ul1_2, ul2_2],
      level: 2,
    },
  ];

export const DUMMY_BLOCK_CONTENT_COMPREHENSIVE: PortableTextItem[] = [
  {
    markDefs: [],
    children: [
      {
        marks: [],
        text: "My cool title",
        _key: "637a46bee410",
        _type: "span",
      },
    ],
    _type: "block",
    style: "h1",
    _key: "e5c70833c225",
  },
  {
    markDefs: [],
    children: [
      {
        _key: "53339e6c9a8f",
        _type: "span",
        marks: [],
        text: "Lorem ipsum oogum boogum. Tutant Meenage Neetle Teetles have been running amuck in the city of New York. How can we stop these mean green fighting machines?",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "ae1909e3a3a9",
  },
  {
    _key: "c25f3ccd7470",
    markDefs: [],
    children: [
      {
        _key: "da1735693e18",
        _type: "span",
        marks: [],
        text: "",
      },
    ],
    _type: "block",
    style: "normal",
  },
  {
    markDefs: [
      {
        _key: "a4f4c719091e",
        _type: "link",
        href: "https://www.google.com",
      },
    ],
    children: [
      {
        _type: "span",
        marks: [],
        text: "Here's a sentence with a ",
        _key: "35cec051ad36",
      },
      {
        _type: "span",
        marks: ["a4f4c719091e"],
        text: "link",
        _key: "1679ff986468",
      },
      {
        _type: "span",
        marks: [],
        text: " in it.",
        _key: "4af22df23c1e",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "11f7ebf82080",
  },
  {
    children: [
      {
        _type: "span",
        marks: [],
        text: "",
        _key: "2951d4e60fce",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "444b1365d7b7",
    markDefs: [],
  },
  {
    style: "h2",
    _key: "94477f485991",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "Option 1.",
        _key: "45364ca5dabb",
      },
    ],
    _type: "block",
  },
  {
    _type: "block",
    style: "normal",
    _key: "454b339845c9",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "We do nothing. Leave the turtles be. This is ",
        _key: "5e95efde0bb8",
      },
      {
        _type: "span",
        marks: ["strong"],
        text: "bold as shit, and not to be fucked with. ",
        _key: "d3daf799a4e2",
      },
      {
        _key: "b94943abd8df",
        _type: "span",
        marks: ["em"],
        text: "This however, is italic, and must be fucked with.",
      },
    ],
  },
  {
    markDefs: [],
    children: [
      {
        marks: [],
        text: "",
        _key: "2190dd2f36c9",
        _type: "span",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "39b1676eb56f",
  },
  {
    _type: "block",
    style: "h2",
    _key: "ff37e482545c",
    markDefs: [],
    children: [
      {
        marks: [],
        text: "Option deuce;",
        _key: "f0ede33c3355",
        _type: "span",
      },
    ],
  },
  {
    style: "normal",
    _key: "5d71976483d3",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "Bribe with pizza in this three step plan:",
        _key: "aabd41d6b1a3",
      },
    ],
    _type: "block",
  },
  {
    level: 1,
    _type: "block",
    style: "normal",
    _key: "73cabd734817",
    listItem: "number",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "Buy some pizza",
        _key: "80c56ac72085",
      },
    ],
  },
  {
    markDefs: [],
    children: [
      {
        text: "Throw it in the sewers",
        _key: "e27c5062bc57",
        _type: "span",
        marks: [],
      },
    ],
    level: 1,
    _type: "block",
    style: "normal",
    _key: "94e882640770",
    listItem: "number",
  },
  {
    _type: "block",
    style: "normal",
    _key: "86c491227b80",
    listItem: "number",
    markDefs: [],
    children: [
      {
        text: "Actually it's just a two step plan",
        _key: "8e998ab9dd05",
        _type: "span",
        marks: ["strike-through"],
      },
    ],
    level: 1,
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "",
        _key: "199854d20c6d",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "b0a05125be9b",
  },
  {
    _type: "block",
    style: "h2",
    _key: "e9151bbd80a2",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "Third option:",
        _key: "7afefc3f580d",
      },
    ],
  },
  {
    _key: "b761fd874fe5",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "We write some ",
        _key: "40c345d9b514",
      },
      {
        _type: "span",
        marks: ["code"],
        text: "code",
        _key: "c0397323dcd6",
      },
      {
        _type: "span",
        marks: [],
        text: " to blow up their database:",
        _key: "78d361eda04c",
      },
    ],
    _type: "block",
    style: "normal",
  },
  {
    language: "css",
    _key: "2d8920b95f83",
    code: "// Tutant meenage neetle teeeeetles tutant meenage neetle teeeetles Heroes in a half shell - Turtle Power!\n\n.shredder {\n  display: flex;\n}",
    _type: "code",
  },
];
