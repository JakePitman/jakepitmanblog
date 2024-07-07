import { BlockContent, Mark } from "@customTypes/BlockContentTypes";
type BlockContentItemProps = {
  blockContent: BlockContent;
};

type WithMarksProps = {
  blockChild: {
    text: string | null;
    marks: Mark[];
  };
};
const WithMarks = ({ blockChild }: WithMarksProps) => {
  const { text, marks } = blockChild;
  let element: React.ReactNode = text;
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
    return children.map((child, i) => {
      if (style === "normal")
        return (
          <p key={i} data-testid="blockContent-p">
            <WithMarks blockChild={child} />
          </p>
        );
      if (style === "h1")
        return (
          <h1 key={i} data-testid="blockContent-h1">
            <WithMarks blockChild={child} />
          </h1>
        );
      if (style === "h2")
        return (
          <h2 key={i} data-testid="blockContent-h2">
            <WithMarks blockChild={child} />
          </h2>
        );
      if (style === "h3")
        return (
          <h3 key={i} data-testid="blockContent-h3">
            <WithMarks blockChild={child} />
          </h3>
        );
      if (style === "h4")
        return (
          <h4 key={i} data-testid="blockContent-h4">
            <WithMarks blockChild={child} />
          </h4>
        );
      if (style === "h5")
        return (
          <h5 key={i} data-testid="blockContent-h5">
            <WithMarks blockChild={child} />
          </h5>
        );
      if (style === "h6")
        return (
          <h6 key={i} data-testid="blockContent-h6">
            <WithMarks blockChild={child} />
          </h6>
        );
    });
  }
};
