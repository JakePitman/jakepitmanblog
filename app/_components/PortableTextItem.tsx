import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";

import {
  PortableTextItem as PortableTextItemType,
  Mark,
  MarkDef,
} from "@customTypes/PortableTextTypes";
import { ArticleImage } from "@components/ArticleImage";
import { BlockItem } from "@components/BlockItem";

type PortableTextItemProps = {
  item: PortableTextItemType;
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
    return <BlockItem item={item} />;
  }
};
