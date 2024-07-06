import "@testing-library/jest-dom";
import { screen, within, fireEvent } from "@testing-library/react";
import "../__mocks__/observationObserverMock";
import { render } from "../testUtils";

import { MobileArticleLink } from "@components/MobileArticleLink";

import {
  useRouter as useRouterOriginal,
  usePathname as usePathnameOriginal,
} from "next/navigation";
const useRouter = useRouterOriginal as jest.Mock;
const usePathname = usePathnameOriginal as jest.Mock;

jest.mock("next/navigation");

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  prefetch: jest.fn(),
}));
usePathname.mockImplementation(() => "/");

const props = {
  createdAt: "2022-01-01T00:00:00Z",
  title: "The Strongest of the Strange",
  slug: "my-cool-slug",
  description:
    "You won't see them often. For wherever the crowd is, they are not. Those odd ones, not many - but from them come the few good paintings, the few good symphonies, the few good books.",
  tags: [{ value: "Tag 1" }, { value: "Tag 2" }, { value: "Tag 3" }],
};

describe("closed state", () => {
  it("Displays the title and tags of the article", () => {
    render(<MobileArticleLink {...props} />);

    const title = screen.getByText(props.title);
    const tag1 = screen.getByText(props.tags[0].value);
    const tag2 = screen.getByText(props.tags[1].value);
    const tag3 = screen.getByText(props.tags[2].value);

    expect(title).toBeInTheDocument();
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(tag3).toBeInTheDocument();
  });

  it("doesn't display the description of the article", () => {
    render(<MobileArticleLink {...props} />);

    const description = screen.queryByText(props.description);

    expect(description).not.toBeInTheDocument();
  });
});

describe("expanded state", () => {
  it("displays the description of the article", () => {
    render(<MobileArticleLink {...props} />);

    const dropdownChevron = screen.getByTestId(
      "mobile-article-link-chevron-down"
    );
    fireEvent.click(dropdownChevron);
    const description = screen.getByText(props.description);

    expect(description).toBeInTheDocument();
  });
});
