import "@testing-library/jest-dom";
import { screen, render, within } from "@testing-library/react";

import { BlockContentItem } from "@components/BlockContentItem";
import { BlockContent } from "@customTypes/BlockContentTypes";

describe("_type = block", () => {
  describe("style = normal", () => {
    it("Renders in a <p> tag", () => {
      const blockContent: BlockContent = {
        _type: "block",
        style: "normal",
        children: [
          {
            marks: [],
            text: "Hello",
          },
        ],
      };
      render(<BlockContentItem blockContent={blockContent} />);

      const element = screen.getByTestId("blockContent-p");

      expect(element.nodeName).toBe("P");
    });

    describe("marks includes 'em'", () => {
      it("Wraps contents of element in <em>", () => {
        const text = "Hello";
        const blockContent: BlockContent = {
          _type: "block",
          style: "normal",
          children: [
            {
              marks: ["em"],
              text: text,
            },
          ],
        };
        render(<BlockContentItem blockContent={blockContent} />);

        const element = screen.getByTestId("blockContent-p");
        const em = within(element).getByTestId("blockContent-em");

        expect(em).toBeInTheDocument();
      });
    });
    describe("marks includes 'strong'", () => {
      it("Wraps contents of element in <strong>", () => {
        const text = "Hello";
        const blockContent: BlockContent = {
          _type: "block",
          style: "normal",
          children: [
            {
              marks: ["strong"],
              text: text,
            },
          ],
        };
        render(<BlockContentItem blockContent={blockContent} />);

        const element = screen.getByTestId("blockContent-p");
        const strong = within(element).getByTestId("blockContent-strong");

        expect(strong).toBeInTheDocument();
      });
    });
    describe("marks includes 'underline'", () => {
      it("Wraps contents of element in <u>", () => {
        const text = "Hello";
        const blockContent: BlockContent = {
          _type: "block",
          style: "normal",
          children: [
            {
              marks: ["underline"],
              text: text,
            },
          ],
        };
        render(<BlockContentItem blockContent={blockContent} />);

        const element = screen.getByTestId("blockContent-p");
        const underline = within(element).getByTestId("blockContent-u");

        expect(underline).toBeInTheDocument();
      });
    });
    describe("marks includes 'strikethrough'", () => {
      it("Wraps contents of element in <s>", () => {
        const text = "Hello";
        const blockContent: BlockContent = {
          _type: "block",
          style: "normal",
          children: [
            {
              marks: ["strikethrough"],
              text: text,
            },
          ],
        };
        render(<BlockContentItem blockContent={blockContent} />);

        const element = screen.getByTestId("blockContent-p");
        const strikethrough = within(element).getByTestId("blockContent-s");

        expect(strikethrough).toBeInTheDocument();
      });
    });
    describe("marks includes 'code'", () => {
      it("Wraps contents of element in <code>", () => {
        const text = "Hello";
        const blockContent: BlockContent = {
          _type: "block",
          style: "normal",
          children: [
            {
              marks: ["code"],
              text: text,
            },
          ],
        };
        render(<BlockContentItem blockContent={blockContent} />);

        const element = screen.getByTestId("blockContent-p");
        const code = within(element).getByTestId("blockContent-code");

        expect(code).toBeInTheDocument();
      });
    });
    describe("marks include 'strong', 'em', 'underline', 'strikethrough' and 'code'", () => {
      it("Wraps contents of element in <strong>, <em>, <underline>, <s> and <code>", () => {
        const text = "Hello";
        const blockContent: BlockContent = {
          _type: "block",
          style: "normal",
          children: [
            {
              marks: ["strong", "em", "underline", "strikethrough", "code"],
              text: text,
            },
          ],
        };
        render(<BlockContentItem blockContent={blockContent} />);

        const element = screen.getByTestId("blockContent-p");
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
  });
});
