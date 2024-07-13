import "@testing-library/jest-dom";
import { screen, within, fireEvent } from "@testing-library/react";
import { render } from "../testUtils";

import ContactPage from "@/app/(routes)/contact/page";

describe("ContactPage", () => {
  it("Renders email and message inputs", () => {
    render(<ContactPage />);

    const emailInput = screen.getByLabelText("Your email:");
    const messageInput = screen.getByLabelText("Your message:");

    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  it("Disables the send button when the email input is empty", () => {
    render(<ContactPage />);

    const sendButton = screen.getByRole("button", { name: "Send" });
    // Valid message
    const messageInput = screen.getByLabelText("Your message:");
    fireEvent.change(messageInput, { target: { value: "My dummy message" } });

    expect(sendButton).toHaveAttribute("disabled");
  });

  it("Disables the send button when the email input contains an invalid email", () => {
    render(<ContactPage />);

    const sendButton = screen.getByRole("button", { name: "Send" });
    const emailInput = screen.getByLabelText("Your email:");
    const messageInput = screen.getByLabelText("Your message:");
    // Valid message
    fireEvent.change(messageInput, { target: { value: "My dummy message" } });
    // Invalid email
    fireEvent.change(emailInput, {
      target: { value: "thisIsNotARealEmail" },
    });

    expect(sendButton).toHaveAttribute("disabled");
  });

  it("Disables the send button when the message input is empty", () => {
    render(<ContactPage />);

    const sendButton = screen.getByRole("button", { name: "Send" });
    const emailInput = screen.getByLabelText("Your email:");
    // Valid email
    fireEvent.change(emailInput, {
      target: { value: "blah@blah.com" },
    });

    expect(sendButton).toHaveAttribute("disabled");
  });

  it("Does not disable the send button when the email and message fields are filled and valid", () => {
    render(<ContactPage />);

    const sendButton = screen.getByRole("button", { name: "Send" });
    const emailInput = screen.getByLabelText("Your email:");
    const messageInput = screen.getByLabelText("Your message:");
    // Valid message
    fireEvent.change(messageInput, { target: { value: "My dummy message" } });
    // Valid email
    fireEvent.change(emailInput, {
      target: { value: "blah@blah.com" },
    });

    expect(sendButton).not.toHaveAttribute("disabled");
  });
});
