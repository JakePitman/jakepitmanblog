import "@testing-library/jest-dom";
import { screen, render, within } from "@testing-library/react";

import { BlockContentItem } from "@components/BlockContentItem";
import { BlockContent, Mark, Style } from "@customTypes/BlockContentTypes";

const TestWithMarks = (style: Style, testId: string) => {
  const generatePropsWithMarks = (marks: Mark[]): BlockContent => ({
    _type: "block",
    style: style,
    children: [
      {
        marks: marks,
        text: "Hello",
      },
    ],
  });
  describe("marks includes 'em'", () => {
    it("Wraps contents of element in <em>", () => {
      const blockContent: BlockContent = generatePropsWithMarks(["em"]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const em = within(element).getByTestId("blockContent-em");

      expect(em).toBeInTheDocument();
    });
  });
  describe("marks includes 'strong'", () => {
    it("Wraps contents of element in <strong>", () => {
      const blockContent: BlockContent = generatePropsWithMarks(["strong"]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const strong = within(element).getByTestId("blockContent-strong");

      expect(strong).toBeInTheDocument();
    });
  });
  describe("marks includes 'underline'", () => {
    it("Wraps contents of element in <u>", () => {
      const text = "Hello";
      const blockContent: BlockContent = generatePropsWithMarks(["underline"]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const underline = within(element).getByTestId("blockContent-u");

      expect(underline).toBeInTheDocument();
    });
  });
  describe("marks includes 'strikethrough'", () => {
    it("Wraps contents of element in <s>", () => {
      const blockContent: BlockContent = generatePropsWithMarks([
        "strikethrough",
      ]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const strikethrough = within(element).getByTestId("blockContent-s");

      expect(strikethrough).toBeInTheDocument();
    });
  });
  describe("marks includes 'code'", () => {
    it("Wraps contents of element in <code>", () => {
      const blockContent: BlockContent = generatePropsWithMarks(["code"]);
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId(testId);
      const code = within(element).getByTestId("blockContent-code");

      expect(code).toBeInTheDocument();
    });
  });
  describe("marks include 'strong', 'em', 'underline', 'strikethrough' and 'code'", () => {
    it("Wraps contents of element in <strong>, <em>, <underline>, <s> and <code>", () => {
      const blockContent: BlockContent = generatePropsWithMarks([
        "strong",
        "em",
        "underline",
        "strikethrough",
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

describe("_type = block", () => {
  describe("style = normal", () => {
    const style = "normal"; // <p>
    it("Renders in a <p> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });

  describe("style = h1", () => {
    const style = "h1"; // <p>
    it("Renders in a <h1> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });

  describe("style = h2", () => {
    const style = "h2"; // <p>
    it("Renders in a <h2> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });

  describe("style = h3", () => {
    const style = "h3";
    it("Renders in a <h3> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });

  describe("style = h4", () => {
    const style = "h4";
    it("Renders in a <h4> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });

  describe("style = h5", () => {
    const style = "h5";
    it("Renders in a <h5> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });

  describe("style = h6", () => {
    const style = "h6";
    it("Renders in a <h6> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: style,
        children: [
          {
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
  });
});
