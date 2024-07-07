import { BlockContent, Mark, Style } from "@customTypes/BlockContentTypes";

export const DUMMY_BLOCK_CONTENT: BlockContent[] = [
  {
    _key: "972d19a9b108",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a h1",
        _key: "06c49faab34b",
      },
    ],
    _type: "block",
    style: "h1",
  },
  {
    style: "h2",
    _key: "fa60dcf6f7f9",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a h2",
        _key: "6dea645dd63a",
      },
    ],
    _type: "block",
  },
  {
    style: "h3",
    _key: "9f7cee615e4c",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a h3",
        _key: "ce70e4c11d5b",
      },
    ],
    _type: "block",
  },
  {
    _key: "3c7b5c3e2972",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a h4",
        _key: "33be4d988571",
      },
    ],
    _type: "block",
    style: "h4",
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a h5",
        _key: "a51510ec8157",
      },
    ],
    _type: "block",
    style: "h5",
    _key: "e9c5a5733034",
  },
  {
    markDefs: [],
    children: [
      {
        marks: [],
        text: "This is a h6",
        _key: "a813f7a85b8d",
        _type: "span",
      },
    ],
    _type: "block",
    style: "h6",
    _key: "274b9fbcd8dc",
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is a quote",
        _key: "cd4613b60cf6",
      },
    ],
    _type: "block",
    style: "blockquote",
    _key: "208a3ad2b105",
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: ["strong"],
        text: "This is bold",
        _key: "d3f789bfb8f4",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "51f0bc4e9c56",
  },
  {
    _type: "block",
    style: "normal",
    _key: "8b6add525f87",
    markDefs: [],
    children: [
      {
        _key: "ce8a44d6d88d",
        _type: "span",
        marks: ["em"],
        text: "This is italic",
      },
    ],
  },
  {
    _type: "block",
    style: "normal",
    _key: "b7be3acf1e18",
    markDefs: [],
    children: [
      {
        marks: ["underline"],
        text: "This is underlined",
        _key: "f4c4d8b60745",
        _type: "span",
      },
    ],
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: ["strong", "em", "underline"],
        text: "This is bold, italic, and underlined",
        _key: "19c31917ba8f",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "c8850222c9eb",
  },
  {
    markDefs: [],
    children: [
      {
        _key: "ede41486e623",
        _type: "span",
        marks: ["strike-through"],
        text: "This is strikethrough",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "c3e56b9ad29f",
  },
  {
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: ["code"],
        text: "This is an inline code snippet",
        _key: "303fa730572c",
      },
    ],
    _type: "block",
    style: "normal",
    _key: "388187bcf2c5",
  },
  {
    level: 1,
    _type: "block",
    style: "normal",
    _key: "daff966e3ae4",
    listItem: "bullet",
    markDefs: [],
    children: [
      {
        text: "This is ul 1",
        _key: "dce351f6a5cb",
        _type: "span",
        marks: [],
      },
    ],
  },
  {
    markDefs: [],
    children: [
      {
        marks: [],
        text: "This is ul 2",
        _key: "f8b66e736aac",
        _type: "span",
      },
    ],
    level: 1,
    _type: "block",
    style: "normal",
    _key: "0cc9a3204822",
    listItem: "bullet",
  },
  {
    _key: "878bacbf6e58",
    listItem: "number",
    markDefs: [],
    children: [
      {
        _key: "f1e75fa2d57b",
        _type: "span",
        marks: [],
        text: "This is li 1",
      },
    ],
    level: 1,
    _type: "block",
    style: "normal",
  },
  {
    level: 1,
    _type: "block",
    style: "normal",
    _key: "26249d9bb0ff",
    listItem: "number",
    markDefs: [],
    children: [
      {
        _type: "span",
        marks: [],
        text: "This is li 2",
        _key: "f257c6f805f1",
      },
    ],
  },
  {
    language: "typescript",
    _key: "5a599caeb724",
    code: '// This is a TS code block\n\nconst foo = "bar"\nconst myObj {\n  foo: "bar"\n}\n"Will this be delineated?"',
    _type: "code",
  },
];

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
): BlockContent => ({
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
export const DUMMY_BLOCK_CONTENT_NO_MARKS: BlockContent[] = STYLES.map(
  (style) => generateWithUniqueStyle(style)
);
export const DUMMY_BLOCK_CONTENT_STRONG: BlockContent[] = STYLES.map((style) =>
  generateWithUniqueStyle(style, ["strong"])
);
export const DUMMY_BLOCK_CONTENT_EM: BlockContent[] = STYLES.map((style) =>
  generateWithUniqueStyle(style, ["em"])
);
export const DUMMY_BLOCK_CONTENT_UNDERLINE: BlockContent[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["underline"])
);
export const DUMMY_BLOCK_CONTENT_STRIKETHROUGH: BlockContent[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["strike-through"])
);
export const DUMMY_BLOCK_CONTENT_STRONG_EM_UNDERLINE_STRIKETHROUGH: BlockContent[] =
  STYLES.map((style) =>
    generateWithUniqueStyle(style, [
      "strong",
      "em",
      "underline",
      "strike-through",
    ])
  );
export const DUMMY_BLOCK_CONTENT_INLINE_CODE: BlockContent[] = STYLES.map(
  (style) => generateWithUniqueStyle(style, ["code"])
);
