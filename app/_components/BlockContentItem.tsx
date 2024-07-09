import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { BlockContentItemData, Mark } from "@customTypes/BlockContentTypes";

type BlockContentItemProps = {
  blockContent: BlockContentItemData;
};

type WithListItemProps = {
  listItem: "bullet" | "number" | undefined;
  children: React.ReactNode;
};
const WithListItem = ({ listItem, children }: WithListItemProps) => {
  if (listItem === "bullet" || listItem === "number") {
    return <li data-testid="blockContent-li">{children}</li>;
  }
  return <div className="my-8">{children}</div>;
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
  if (marks.includes("strike-through")) {
    element = <s data-testid="blockContent-s">{element}</s>;
  }
  if (marks.includes("code")) {
    element = (
      <code
        className="bg-slate-900 text-slate-300 "
        data-testid="blockContent-code"
      >
        {element}
      </code>
    );
  }
  return element;
};

export const BlockContentItem = ({ blockContent }: BlockContentItemProps) => {
  if (blockContent._type === "code") {
    return (
      <SyntaxHighlighter
        language={blockContent.language}
        showLineNumbers
        style={tomorrowNightBright}
        customStyle={{ padding: "1rem" }}
      >
        {blockContent.code}
      </SyntaxHighlighter>
    );
  }

  if (blockContent._type === "block") {
    const { _type, style, children, listItem } = blockContent;
    return (
      <WithListItem listItem={listItem}>
        {children.map((child, i) => {
          if (child.text === "")
            return <br key={i} data-testid="blockContent-br" />;
          if (style === "normal")
            return (
              <p
                key={i}
                className="text-slate-900 inline"
                data-testid="blockContent-p"
              >
                <WithMarks blockChild={child} />
              </p>
            );
          if (style === "h1")
            return (
              <h1
                className="text-30 text-slate-900 inline"
                key={i}
                data-testid="blockContent-h1"
              >
                <WithMarks blockChild={child} />
              </h1>
            );
          if (style === "h2")
            return (
              <h2
                className="text-24 text-slate-900 inline"
                key={i}
                data-testid="blockContent-h2"
              >
                <WithMarks blockChild={child} />
              </h2>
            );
          if (style === "h3")
            return (
              <h3
                className="text-20 text-slate-900 inline"
                key={i}
                data-testid="blockContent-h3"
              >
                <WithMarks blockChild={child} />
              </h3>
            );
          if (style === "h4")
            return (
              <h4
                className="text-18 text-slate-900 inline"
                key={i}
                data-testid="blockContent-h4"
              >
                <WithMarks blockChild={child} />
              </h4>
            );
          if (style === "h5")
            return (
              <h5
                className="text-16 text-slate-900 inline"
                key={i}
                data-testid="blockContent-h5"
              >
                <WithMarks blockChild={child} />
              </h5>
            );
          if (style === "h6")
            return (
              <h6
                className="text-14 text-slate-900 inline"
                key={i}
                data-testid="blockContent-h6"
              >
                <WithMarks blockChild={child} />
              </h6>
            );
          if (style === "blockquote")
            return (
              <p
                className="border-l-4 bg-slate-400  inline"
                key={i}
                data-testid="blockContent-blockquote"
              >
                <WithMarks blockChild={child} />
              </p>
            );
        })}
      </WithListItem>
    );
  }
};
