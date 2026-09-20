import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "./page";

describe("Contact", () => {
  it("renders the headline", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/let.?s build/i);
    expect(heading).toHaveTextContent(/something/i);
  });

  it("renders the form fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /start a project/i }),
    ).toBeInTheDocument();
  });
});
