import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";

import { BlockContentItem } from "@components/BlockContentItem";

describe("Test", () => {
  it("Renders in a <p> tag", () => {
    render(<BlockContentItem />);

    const p = screen.getByText("Hello");

    expect(p.nodeName).toBe("P");
  });
});
