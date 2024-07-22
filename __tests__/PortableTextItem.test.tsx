import "@testing-library/jest-dom";
import { screen, render, within } from "@testing-library/react";
import NextImage from "next/image";

import { generatePortableTextItem, STYLES } from "@/stories/dummyBlockContent";
import { PortableTextItem } from "@components/PortableTextItem";
import {
  PortableTextItem as PortableTextItemType,
  Mark,
  MarkDef,
  Style,
} from "@customTypes/PortableTextTypes";

jest.mock("react-syntax-highlighter", () => ({}));
jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => ({}));

jest.mock("next/image", () => jest.fn());

jest.mock("../sanity/client", () => ({
  urlFor: (url: string) => ({ url: () => url }),
}));

const getTagFromStyle = (style: Style): string => {
  let tag: string = style;
  if (style === "normal") {
    tag = "p";
  }
  if (style === "blockquote") {
    tag = "div";
  }
  return tag;
};

const marksToTest = [
  { name: "strong", tag: "strong" },
  { name: "em", tag: "em" },
  { name: "underline", tag: "u" },
  { name: "strike-through", tag: "s" },
  { name: "code", tag: "code" },
];
const testWithMarks = (
  listItem: "bullet" | "number" | undefined,
  style: Style
) => {
  marksToTest.forEach(({ name, tag }) => {
    describe(`and marks includes '${name}'`, () => {
      it(`wraps contents in a <${tag}> tag`, () => {
        const portableTextItem: PortableTextItemType = generatePortableTextItem(
          style,
          [name],
          [],
          listItem
        );
        const { container } = render(
          <PortableTextItem item={portableTextItem} />
        );

        const parentTag = getTagFromStyle(style);
        const parentElement = container.querySelector(parentTag);
        const markElement = parentElement?.querySelector(tag);

        expect(markElement).toBeTruthy();
      });
    });
  });

  describe("and marks includes 'em', 'strong', 'underline' and 'strike-through'", () => {
    it("wraps contents in <em>, <strong>, <u> and <s> tags", () => {
      const portableTextItem: PortableTextItemType = generatePortableTextItem(
        style,
        ["em", "strong", "underline", "strike-through"],
        [],
        listItem
      );
      const { container } = render(
        <PortableTextItem item={portableTextItem} />
      );

      const parentTag = getTagFromStyle(style);
      const parentElement = container.querySelector(parentTag);
      const emTag = parentElement?.querySelector("em");
      const strongTag = parentElement?.querySelector("strong");
      const underlineTag = parentElement?.querySelector("u");
      const strikethroughTag = parentElement?.querySelector("s");

      expect(emTag).toBeTruthy();
      expect(strongTag).toBeTruthy();
      expect(underlineTag).toBeTruthy();
      expect(strikethroughTag).toBeTruthy();
    });
  });

  describe("and marks includes a non-standard string", () => {
    describe("and the mark references a markDef of _type='link'", () => {
      it("Wraps contents of element in an <a> tag", () => {
        const href = "https://example.com/";
        const portableTextItem: PortableTextItemType = generatePortableTextItem(
          style,
          ["123"],
          [{ _type: "link", href, _key: "123" }],
          listItem
        );

        const { container } = render(
          <PortableTextItem item={portableTextItem} />
        );
        const parentTag = getTagFromStyle(style);
        const parentElement = container.querySelector(parentTag);
        const anchorTag = parentElement?.querySelector("a");

        expect(anchorTag).toBeTruthy();
        expect(anchorTag?.href).toBe(href);
      });
    });
  });
};

const testWithStyles = (listItem: "bullet" | "number" | undefined) => {
  STYLES.forEach((style) => {
    const tag = getTagFromStyle(style);

    describe(`and style = ${style}`, () => {
      it(`Renders in a <${tag}> tag`, () => {
        const portableTextItem = generatePortableTextItem(
          style,
          [],
          [],
          listItem
        );

        const { container } = render(
          <PortableTextItem item={portableTextItem} />
        );
        const parentElement = listItem
          ? container.querySelector("li")
          : container.querySelector("[data-testId='blockContentDivWrapper']");

        const styleElement = parentElement?.querySelector(tag);
        if (!styleElement) {
          console.log(tag);
        }

        expect(styleElement).toBeTruthy();
      });

      testWithMarks(listItem, style);
    });
  });
};

describe("_type = image", () => {
  const withImage: PortableTextItemType = {
    _key: "3657e4482fec",
    _type: "image",
    alt: "my-cool-alt-text",
    asset: {
      _ref: "image-e5270bee947b5a03a882f377730e52bcf4357ac0-1280x720-png",
      _type: "reference",
    },
  };

  it("Renders the image", () => {
    render(<PortableTextItem item={withImage} />);

    expect(NextImage).toHaveBeenCalledWith(
      expect.objectContaining({
        src: withImage.asset._ref,
        alt: withImage.alt,
      }),
      {}
    );
  });
});

describe("_type = block", () => {
  describe("text is empty", () => {
    const withEmptyText: PortableTextItemType = {
      _type: "block",
      _key: "123",
      markDefs: [],
      style: "normal",
      children: [
        {
          _key: "123",
          _type: "span",
          text: "",
          marks: [],
        },
      ],
    };

    it("Renders a <br> tag", () => {
      render(<PortableTextItem item={withEmptyText} />);

      const element = screen.getByTestId("blockContent-br");

      expect(element.nodeName).toBe("BR");
    });
  });

  describe("With no list styles", () => {
    testWithStyles(undefined);
  });
  describe("With bullet list styles", () => {
    testWithStyles("bullet");
  });
  describe("With numbered list styles", () => {
    testWithStyles("number");
  });
});
