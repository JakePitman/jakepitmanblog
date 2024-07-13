import "@testing-library/jest-dom";
import { screen, render, within } from "@testing-library/react";
import NextImage from "next/image";

import { BlockContentItem } from "@components/BlockContentItem";
import {
  BlockContentItemData,
  Mark,
  Style,
} from "@customTypes/BlockContentTypes";

jest.mock("react-syntax-highlighter", () => ({}));
jest.mock("react-syntax-highlighter/dist/esm/styles/hljs", () => ({}));

jest.mock("next/image", () => jest.fn());

jest.mock("../sanity/client", () => ({
  urlFor: (url: string) => ({ url: () => url }),
}));

const TestWithListItem = (
  style: Style,
  testId: string,
  listItem: "bullet" | "number"
) => {
  const props: BlockContentItemData = {
    _type: "block",
    _key: "123",
    style: style,
    markDefs: [],
    children: [
      {
        _key: "123",
        _type: "span",
        text: "Hello",
        marks: [],
      },
    ],
    listItem,
    level: 1,
  };

  describe("listItem = 'bullet' | 'number'", () => {
    it("Renders text content in a <li> tag within element", () => {
      render(<BlockContentItem blockContent={props} />);

      const li = screen.getByTestId("blockContent-li");
      const element = within(li).getByTestId(testId);

      expect(li.nodeName).toBe("LI");
      expect(element).toBeInTheDocument();
    });

    TestWithMarks(style, "blockContent-li", "bullet");
  });
};

const TestWithMarks = (
  style: Style,
  testId: string,
  listItem?: "bullet" | "number"
) => {
  const generatePropsWithMarks = (marks: Mark[]): BlockContentItemData => {
    const listItemProps = listItem ? { listItem: listItem, level: 1 } : {};
    return {
      _type: "block",
      _key: "123",
      markDefs: [],
      style: style,
      children: [
        {
          _key: "123",
          _type: "span",
          marks: marks,
          text: "Hello",
        },
      ],
      ...listItemProps,
    };
  };
  describe("marks includes 'em'", () => {
    it("Wraps contents of element in <em>", () => {
      const blockContent: BlockContentItemData = generatePropsWithMarks(["em"]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const em = within(element).getByTestId("blockContent-em");

      expect(em).toBeInTheDocument();
    });
  });
  describe("marks includes 'strong'", () => {
    it("Wraps contents of element in <strong>", () => {
      const blockContent: BlockContentItemData = generatePropsWithMarks([
        "strong",
      ]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const strong = within(element).getByTestId("blockContent-strong");

      expect(strong).toBeInTheDocument();
    });
  });
  describe("marks includes 'underline'", () => {
    it("Wraps contents of element in <u>", () => {
      const text = "Hello";
      const blockContent: BlockContentItemData = generatePropsWithMarks([
        "underline",
      ]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const underline = within(element).getByTestId("blockContent-u");

      expect(underline).toBeInTheDocument();
    });
  });
  describe("marks includes 'strikethrough'", () => {
    it("Wraps contents of element in <s>", () => {
      const blockContent: BlockContentItemData = generatePropsWithMarks([
        "strike-through",
      ]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const strikethrough = within(element).getByTestId("blockContent-s");

      expect(strikethrough).toBeInTheDocument();
    });
  });
  describe("marks includes 'code'", () => {
    it("Wraps contents of element in <code>", () => {
      const blockContent: BlockContentItemData = generatePropsWithMarks([
        "code",
      ]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const code = within(element).getByTestId("blockContent-code");

      expect(code).toBeInTheDocument();
    });
  });
  describe("marks include 'strong', 'em', 'underline', 'strikethrough' and 'code'", () => {
    it("Wraps contents of element in <strong>, <em>, <underline>, <s> and <code>", () => {
      const blockContent: BlockContentItemData = generatePropsWithMarks([
        "strong",
        "em",
        "underline",
        "strike-through",
        "code",
      ]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const strong = within(element).getByTestId("blockContent-strong");
      const em = within(element).getByTestId("blockContent-em");
      const u = within(element).getByTestId("blockContent-u");
      const s = within(element).getByTestId("blockContent-s");
      const code = within(element).getByTestId("blockContent-code");

      expect(strong).toBeInTheDocument();
      expect(em).toBeInTheDocument();
      expect(u).toBeInTheDocument();
      expect(s).toBeInTheDocument();
      expect(code).toBeInTheDocument();
    });
  });
};

describe("_type = image", () => {
  const withImage: BlockContentItemData = {
    _key: "3657e4482fec",
    _type: "image",
    alt: "my-cool-alt-text",
    asset: {
      _ref: "image-e5270bee947b5a03a882f377730e52bcf4357ac0-1280x720-png",
      _type: "reference",
    },
  };

  it("Renders the image", () => {
    render(<BlockContentItem blockContent={withImage} />);

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
    const withEmptyText: BlockContentItemData = {
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
      render(<BlockContentItem blockContent={withEmptyText} />);

      const element = screen.getByTestId("blockContent-br");

      expect(element.nodeName).toBe("BR");
    });
  });
  describe("style = normal", () => {
    const style = "normal"; // <p>
    it("Renders in a <p> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        markDefs: [],
        style: style,
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-p");

      expect(element.nodeName).toBe("P");
    });

    TestWithMarks(style, "blockContent-p");
    TestWithListItem(style, "blockContent-p", "bullet");
    TestWithListItem(style, "blockContent-p", "number");
  });

  describe("style = blockquote", () => {
    const style = "blockquote"; // <p>
    it("Renders in a <p> tag with blockquote styling", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        markDefs: [],
        style: style,
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-blockquote");

      expect(element.nodeName).toBe("DIV");
      expect(element.classList.contains("border-l-4")).toBe(true);
      expect(element.classList.contains("bg-slate-400")).toBe(true);
    });

    TestWithMarks(style, "blockContent-blockquote");
    TestWithListItem(style, "blockContent-blockquote", "bullet");
    TestWithListItem(style, "blockContent-blockquote", "number");
  });

  describe("style = h1", () => {
    const style = "h1";
    it("Renders in a <h1> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        markDefs: [],
        style: style,
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-h1");

      expect(element.nodeName).toBe("H1");
    });

    TestWithMarks(style, "blockContent-h1");
    TestWithListItem(style, "blockContent-h1", "bullet");
    TestWithListItem(style, "blockContent-h1", "number");
  });

  describe("style = h2", () => {
    const style = "h2";
    it("Renders in a <h2> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        markDefs: [],
        style: style,
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-h2");

      expect(element.nodeName).toBe("H2");
    });

    TestWithMarks(style, "blockContent-h2");
    TestWithListItem(style, "blockContent-h2", "bullet");
    TestWithListItem(style, "blockContent-h2", "number");
  });

  describe("style = h3", () => {
    const style = "h3";
    it("Renders in a <h3> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        markDefs: [],
        style: style,
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-h3");

      expect(element.nodeName).toBe("H3");
    });

    TestWithMarks(style, "blockContent-h3");
    TestWithListItem(style, "blockContent-h3", "bullet");
    TestWithListItem(style, "blockContent-h3", "number");
  });

  describe("style = h4", () => {
    const style = "h4";
    it("Renders in a <h4> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        style: style,
        markDefs: [],
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-h4");

      expect(element.nodeName).toBe("H4");
    });

    TestWithMarks(style, "blockContent-h4");
    TestWithListItem(style, "blockContent-h4", "bullet");
    TestWithListItem(style, "blockContent-h4", "number");
  });

  describe("style = h5", () => {
    const style = "h5";
    it("Renders in a <h5> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        style: style,
        markDefs: [],
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-h5");

      expect(element.nodeName).toBe("H5");
    });

    TestWithMarks(style, "blockContent-h5");
    TestWithListItem(style, "blockContent-h5", "bullet");
    TestWithListItem(style, "blockContent-h5", "number");
  });

  describe("style = h6", () => {
    const style = "h6";
    it("Renders in a <h6> tag", () => {
      const blockContent: BlockContentItemData = {
        _type: "block",
        _key: "123",
        style: style,
        markDefs: [],
        children: [
          {
            _key: "123",
            _type: "span",
            text: "Hello",
            marks: [],
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-h6");

      expect(element.nodeName).toBe("H6");
    });

    TestWithMarks(style, "blockContent-h6");
    TestWithListItem(style, "blockContent-h6", "bullet");
    TestWithListItem(style, "blockContent-h6", "number");
  });
});
