type BlockBase = {
  _type: "block";
  style: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "normal";
  children: {
    text: string | null; // TODO: Check if empty lines are null or ""
    marks: ("strong" | "em" | "underline" | "strikethrough" | "code")[];
  }[];
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
  _type: "code";
  code: string;
  language: "typescript";
};

export type BlockContent = Block | Code;
