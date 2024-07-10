export type Style =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "blockquote"
  | "normal";
export type Mark = "strong" | "em" | "underline" | "strike-through" | "code";
type BlockBase = {
  _type: "block";
  _key?: string;
  markDefs?: unknown[];
  style: Style;
  children: {
    _type?: "span";
    _key?: string;
    text: string;
    marks: Mark[];
  }[];
  language?: undefined;
};

type WithoutSpecialFields = {
  listItem?: undefined;
  level?: undefined;
};
type WithListItem = {
  listItem: "bullet" | "number";
  level: number;
};

// Ensure that listItem always comes with level and vice versa
export type Block = BlockBase & (WithoutSpecialFields | WithListItem);

export type Code = {
  _key: string;
  _type: "code";
  language: string;
  code: string;
  listItem?: undefined;
  level?: undefined;
};

export type Image = {
  _key: string;
  _type: "image";
  alt: "string";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type BlockContentItemData = Block | Code | Image;

export type GroupedListItems = {
  _type: "groupedListItems";
  listItem: "bullet" | "number";
  blockContent: BlockContentItemData[];
  level: number;
};

export type GroupedBlockContent = (BlockContentItemData | GroupedListItems)[];
