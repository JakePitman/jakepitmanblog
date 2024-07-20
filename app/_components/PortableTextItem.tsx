import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  PortableTextItem as PortableTextItemType,
  Mark,
  MarkDef,
} from "@customTypes/PortableTextTypes";
import { ArticleImage } from "@components/ArticleImage";

type PortableTextItemProps = {
  item: PortableTextItemType;
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

type WithBlockQuoteProps = {
  isBlockQuote: boolean;
  children: React.ReactNode;
};
const WithBlockQuote = ({ isBlockQuote, children }: WithBlockQuoteProps) => {
  if (isBlockQuote) {
    return (
      <div
        className="border-l-4 border-slate-900 bg-slate-400 p-8"
        data-testid="blockContent-blockquote"
      >
        {children}
      </div>
    );
  }
  return children;
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

export const PortableTextItem = ({ item }: PortableTextItemProps) => {
  if (item._type === "code") {
    return (
      <SyntaxHighlighter
        language={item.language}
        showLineNumbers
        style={tomorrowNightBright}
        customStyle={{ padding: "1rem" }}
      >
        {item.code}
      </SyntaxHighlighter>
    );
  }

  if (item._type === "image") {
    return <ArticleImage src={item.asset._ref} alt={item.alt} />;
  }

  if (item._type === "block") {
    const { _type, style, children, listItem, markDefs } = item;
    return (
      <WithListItem listItem={listItem}>
        <WithBlockQuote isBlockQuote={style === "blockquote"}>
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
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </p>
              );
            if (style === "h1")
              return (
                <h1
                  className="text-30 text-slate-900 inline"
                  key={i}
                  data-testid="blockContent-h1"
                >
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </h1>
              );
            if (style === "h2")
              return (
                <h2
                  className="text-24 text-slate-900 inline"
                  key={i}
                  data-testid="blockContent-h2"
                >
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </h2>
              );
            if (style === "h3")
              return (
                <h3
                  className="text-20 text-slate-900 inline"
                  key={i}
                  data-testid="blockContent-h3"
                >
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </h3>
              );
            if (style === "h4")
              return (
                <h4
                  className="text-18 text-slate-900 inline"
                  key={i}
                  data-testid="blockContent-h4"
                >
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </h4>
              );
            if (style === "h5")
              return (
                <h5
                  className="text-16 text-slate-900 inline"
                  key={i}
                  data-testid="blockContent-h5"
                >
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </h5>
              );
            if (style === "h6")
              return (
                <h6
                  className="text-14 text-slate-900 inline"
                  key={i}
                  data-testid="blockContent-h6"
                >
                  <WithMarks blockChild={child} markDefs={markDefs} />
                </h6>
              );
            if (style === "blockquote")
              return (
                <WithMarks blockChild={child} key={i} markDefs={markDefs} />
              );
          })}
        </WithBlockQuote>
      </WithListItem>
    );
  }
};
