import { BlockContent, Mark } from "@customTypes/BlockContentTypes";
type BlockContentItemProps = {
  blockContent: BlockContent;
};

type WithMarksProps = {
  children: string;
  marks: Mark[];
};
const WithMarks = ({ children, marks }: WithMarksProps) => {
  let element: React.ReactNode = children;
  if (marks.includes("strong")) {
    element = <strong data-testid="blockContent-strong">{element}</strong>;
  }
  if (marks.includes("em")) {
    element = <em data-testid="blockContent-em">{element}</em>;
  }
  if (marks.includes("underline")) {
    element = <u data-testid="blockContent-u">{element}</u>;
  }
  if (marks.includes("strikethrough")) {
    element = <s data-testid="blockContent-s">{element}</s>;
  }
  if (marks.includes("code")) {
    element = <code data-testid="blockContent-code">{element}</code>;
  }
  return element;
};

export const BlockContentItem = ({ blockContent }: BlockContentItemProps) => {
  if (blockContent._type === "block") {
    const { _type, style, children } = blockContent;
    if (style === "normal") {
      return children.map((child, i) => (
        <p key={i} data-testid="blockContent-p">
          <WithMarks marks={child.marks}>
            {child.text ? child.text : ""}
          </WithMarks>
        </p>
      ));
    }
    if (style === "h1") {
      return children.map((child, i) => (
        <h1 key={i} data-testid="blockContent-h1">
          <WithMarks marks={child.marks}>
            {child.text ? child.text : ""}
          </WithMarks>
        </h1>
      ));
    }
  }
  return <p>Hello</p>;
};
