import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "./page";

describe("About", () => {
  it("renders the headline", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(/why softgrid/i);
    expect(heading).toHaveTextContent(/exists/i);
  });

  it("renders all four values", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /ship fast, ship right/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /ai-native thinking/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /transparent process/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /built for scale/i }),
    ).toBeInTheDocument();
  });
});
