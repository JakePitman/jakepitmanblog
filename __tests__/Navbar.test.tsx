import "@testing-library/jest-dom";
import { screen, within, fireEvent } from "@testing-library/react";
import "../__mocks__/observationObserverMock";
import { render } from "../testUtils";

import { Navbar } from "@components/Navbar";

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

jest.mock("../app/_contexts/animationContext", () => ({
  useAnimationContext() {
    return {
      openingAnimationIsCompleted: true,
    };
  },
}));

const homeLinkLabel = "⏀ Home";
const articlesLinkLabel = "⎅ Articles";
const contactLinkLabel = "⏃ Contact";

describe("DesktopNav", () => {
  it("Renders home, articles, and contact links", () => {
    render(<Navbar />);

    const desktopNav = screen.getByTestId("desktop-nav-bar");
    const homeLink = within(desktopNav).getByRole("button", {
      name: homeLinkLabel,
    });
    const articlesLink = within(desktopNav).getByRole("button", {
      name: articlesLinkLabel,
    });
    const contactLink = within(desktopNav).getByRole("button", {
      name: contactLinkLabel,
    });

    expect(homeLink).toBeInTheDocument();
    expect(articlesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  describe("Active and non-active styles", () => {
    const darkBg = "bg-slate-900";
    const darkText = "text-slate-900";
    const lightBg = "bg-slate-500";
    const lightText = "text-slate-300";

    it("Renders a dark bg and light text on the link if it matches the current path", () => {
      render(<Navbar />);

      const desktopNav = screen.getByTestId("desktop-nav-bar");
      const homeLink = within(desktopNav).getByRole("button", {
        name: homeLinkLabel,
      });
      const homeLinkText = within(homeLink).getByText("Home");

      expect(homeLink.className.includes(lightBg)).toBe(false);
      expect(homeLink.className.includes(darkBg)).toBe(true);
      expect(homeLinkText.className.includes(darkText)).toBe(false);
      expect(homeLinkText.className.includes(lightText)).toBe(true);
    });
    it("Renders a light bg and dark text on the link if it doesn't match the current path", () => {
      render(<Navbar />);

      const desktopNav = screen.getByTestId("desktop-nav-bar");
      const articlesLink = within(desktopNav).getByRole("button", {
        name: articlesLinkLabel,
      });

      expect(articlesLink.className.includes(darkBg)).toBe(false);
      expect(articlesLink.className.includes(lightBg)).toBe(true);
    });
  });
});

describe("On mobile", () => {
  it("Renders 'Home' on the '/' route", () => {
    usePathname.mockImplementationOnce(() => "/");
    render(<Navbar />);

    const mobileNavBar = screen.getByTestId("mobile-nav-bar");
    const navTitle = within(mobileNavBar).getByText("Home");

    expect(navTitle).toBeInTheDocument();
  });
  it("Renders 'Articles' on the '/articles' route", () => {
    usePathname.mockImplementationOnce(() => "/articles");
    render(<Navbar />);

    const mobileNavBar = screen.getByTestId("mobile-nav-bar");
    const navTitle = within(mobileNavBar).getByText("Articles");

    expect(navTitle).toBeInTheDocument();
  });
  it("Renders 'Contact' on the '/contact' route", () => {
    usePathname.mockImplementationOnce(() => "/contact");
    render(<Navbar />);

    const mobileNavBar = screen.getByTestId("mobile-nav-bar");
    const navTitle = within(mobileNavBar).getByText("Contact");

    expect(navTitle).toBeInTheDocument();
  });

  it("Renders 'Article' on any '/articles/[slug]' routes", () => {
    usePathname.mockImplementationOnce(() => "/articles/my-cool-slug");
    render(<Navbar />);

    const mobileNavBar = screen.getByTestId("mobile-nav-bar");
    const navTitle = within(mobileNavBar).getByText("Article");

    expect(navTitle).toBeInTheDocument();
  });
});

describe("Dropdown", () => {
  // Fade out animation takes 0.5s
  const fadeoutBufferTime = 600;

  it("Is closed by default", () => {
    render(<Navbar />);

    const dropdown = screen.queryByTestId("navbar-dropdown");

    expect(dropdown).not.toBeInTheDocument();
  });

  it("Closes when clicking the dismiss button", () => {
    render(<Navbar />);

    const settingsButton = screen.getByTestId("desktop-nav-settings-button");
    fireEvent.click(settingsButton);
    const dismissButton = screen.getByTestId("dropdown-dismiss-button");
    fireEvent.click(dismissButton);
    const dropdown = screen.queryByTestId("navbar-dropdown");

    setTimeout(() => {
      expect(dropdown).not.toBeInTheDocument();
    }, fadeoutBufferTime);
  });

  it("Closes when clicking the backdrop", () => {
    render(<Navbar />);

    const settingsButton = screen.getByTestId("desktop-nav-settings-button");
    fireEvent.click(settingsButton);
    const backdrop = screen.getByTestId("dropdown-backdrop");
    fireEvent.click(backdrop);
    const dropdown = screen.queryByTestId("navbar-dropdown");

    setTimeout(() => {
      expect(dropdown).not.toBeInTheDocument();
    }, fadeoutBufferTime);
  });

  describe("On desktop", () => {
    it("Opens the dropdown menu when settings icon is clicked", async () => {
      render(<Navbar />);

      const settingsButton = screen.getByTestId("desktop-nav-settings-button");
      fireEvent.click(settingsButton);
      const dropdown = screen.getByTestId("navbar-dropdown");

      expect(dropdown).toBeInTheDocument();
    });
  });

  describe("On mobile", () => {
    it("Opens the dropdown menu when hamburger icon is clicked", async () => {
      render(<Navbar />);

      const hamburgerButton = screen.getByTestId("mobile-nav-hamburger-button");
      fireEvent.click(hamburgerButton);
      const dropdown = screen.getByTestId("navbar-dropdown");

      expect(dropdown).toBeInTheDocument();
    });

    it("Renders links to pages", () => {
      render(<Navbar />);

      const hamburgerButton = screen.getByTestId("mobile-nav-hamburger-button");
      fireEvent.click(hamburgerButton);
      const dropdown = screen.getByTestId("navbar-dropdown");
      const homeLink = within(dropdown).getByRole("button", {
        name: "⏀ Home",
      });
      const articlesLink = within(dropdown).getByRole("button", {
        name: "⎅ Articles",
      });
      const contactLink = within(dropdown).getByRole("button", {
        name: "⏃ Contact",
      });

      expect(homeLink).toBeInTheDocument();
      expect(articlesLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });

    it("Closes the dropdown when a nav link is clicked", () => {
      render(<Navbar />);

      const hamburgerButton = screen.getByTestId("mobile-nav-hamburger-button");
      fireEvent.click(hamburgerButton);
      const dropdown = screen.getByTestId("navbar-dropdown");
      const articlesLink = within(dropdown).getByRole("button", {
        name: "⎅ Articles",
      });
      fireEvent.click(articlesLink);

      setTimeout(() => {
        expect(dropdown).not.toBeInTheDocument();
      }, fadeoutBufferTime);
    });
  });
});
