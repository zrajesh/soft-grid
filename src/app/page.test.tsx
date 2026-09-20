import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the hero headline", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/we build/i);
    expect(heading).toHaveTextContent(/thinks\.?$/i);
  });

  it("renders the primary CTA", () => {
    render(<Home />);
    expect(
      screen.getAllByRole("link", { name: /start a project/i })[0],
    ).toBeInTheDocument();
  });
});
