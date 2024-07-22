import { Mark, MarkDef, Block, Style } from "@customTypes/PortableTextTypes";

type WithListItemProps = {
  listItem: "bullet" | "number" | undefined;
  children: React.ReactNode;
};
const WithListItem = ({ listItem, children }: WithListItemProps) => {
  if (listItem === "bullet" || listItem === "number") {
    return <li>{children}</li>;
  }
  return (
    <div className="my-8" data-testid="blockContentDivWrapper">
      {children}
    </div>
  );
};

type WithStyleProps = {
  style: Style;
  children: React.ReactNode;
};
const WithStyle = ({ style, children }: WithStyleProps) => {
  if (style === "normal")
    return (
      <p className="text-slate-900" data-testid="blockContent-p">
        {children}
      </p>
    );
  if (style === "h1")
    return (
      <h1 className="text-30 text-slate-900" data-testid="blockContent-h1">
        {children}
      </h1>
    );
  if (style === "h2")
    return (
      <h2 className="text-24 text-slate-900" data-testid="blockContent-h2">
        {children}
      </h2>
    );
  if (style === "h3")
    return (
      <h3 className="text-20 text-slate-900" data-testid="blockContent-h3">
        {children}
      </h3>
    );
  if (style === "h4")
    return (
      <h4 className="text-18 text-slate-900" data-testid="blockContent-h4">
        {children}
      </h4>
    );
  if (style === "h5")
    return (
      <h5 className="text-16 text-slate-900" data-testid="blockContent-h5">
        {children}
      </h5>
    );
  if (style === "h6")
    return (
      <h6 className="text-14 text-slate-900" data-testid="blockContent-h6">
        {children}
      </h6>
    );
  if (style === "blockquote")
    return (
      <div
        className="border-l-4 border-slate-900 bg-slate-400 p-8"
        data-testid="blockContentBlockQuote"
      >
        {children}
      </div>
    );
};

type WithMarksProps = {
  blockChild: {
    text: string | null;
    marks: Mark[];
  };
  markDefs: MarkDef[] | undefined;
};
const WithMarks = ({ blockChild, markDefs }: WithMarksProps) => {
  const { text, marks } = blockChild;
  let element: React.ReactNode = text;
  marks.forEach((mark) => {
    if (mark === "strong") {
      element = <strong data-testid="blockContent-strong">{element}</strong>;
    } else if (mark === "em") {
      element = <em data-testid="blockContent-em">{element}</em>;
    } else if (mark === "underline") {
      element = <u data-testid="blockContent-u">{element}</u>;
    } else if (mark === "strike-through") {
      element = <s data-testid="blockContent-s">{element}</s>;
    } else if (mark === "code") {
      element = (
        <code
          className="bg-slate-900 text-slate-300 px-4"
          data-testid="blockContent-code"
        >
          {element}
        </code>
      );
    } else {
      // In this case, mark may be a reference to a markdef _key field
      // Checks to see if corresponding markDef exists, and wraps according to type. So far just handling "link" type.
      markDefs?.forEach((markDef) => {
        if (markDef._key === mark && markDef._type === "link") {
          element = (
            <a
              className="underline"
              target="_blank"
              href={markDef.href}
              data-testid="blockContent-a"
            >
              {element}
            </a>
          );
        }
      });
    }
  });
  return element;
};

type BlockItemProps = {
  item: Block;
};
export const BlockItem = ({ item }: BlockItemProps) => {
  const { style, children, listItem, markDefs } = item;

  return (
    <WithListItem listItem={listItem}>
      <WithStyle style={style}>
        {children.map((child, i) => {
          if (child.text === "")
            return <br key={i} data-testid="blockContent-br" />;

          return <WithMarks key={i} blockChild={child} markDefs={markDefs} />;
        })}
      </WithStyle>
    </WithListItem>
  );
};
