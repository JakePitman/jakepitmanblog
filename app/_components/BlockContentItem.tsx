import { BlockContent, Mark } from "@customTypes/BlockContentTypes";
import React from "react";
type BlockContentItemProps = {
  blockContent: BlockContent;
};

type WithListItemProps = {
  listItem: "bullet" | "number" | undefined;
  children: React.ReactNode;
};
const WithListItem = ({ listItem, children }: WithListItemProps) => {
  if (listItem === "bullet") {
    return <li data-testid="blockContent-li">{children}</li>;
  }
  return children;
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
    const { _type, style, children, listItem } = blockContent;
    return children.map((child, i) => {
      if (style === "normal")
        return (
          <p key={i} data-testid="blockContent-p">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </p>
        );
      if (style === "h1")
        return (
          <h1 key={i} data-testid="blockContent-h1">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </h1>
        );
      if (style === "h2")
        return (
          <h2 key={i} data-testid="blockContent-h2">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </h2>
        );
      if (style === "h3")
        return (
          <h3 key={i} data-testid="blockContent-h3">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </h3>
        );
      if (style === "h4")
        return (
          <h4 key={i} data-testid="blockContent-h4">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </h4>
        );
      if (style === "h5")
        return (
          <h5 key={i} data-testid="blockContent-h5">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </h5>
        );
      if (style === "h6")
        return (
          <h6 key={i} data-testid="blockContent-h6">
            <WithListItem listItem={listItem}>
              <WithMarks blockChild={child} />
            </WithListItem>
          </h6>
        );
    });
  }
};
