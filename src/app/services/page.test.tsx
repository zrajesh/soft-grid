import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Services from "./page";

describe("Services", () => {
  it("renders the headline", () => {
    render(<Services />);
    expect(
      screen.getByRole("heading", { level: 1, name: /what we build/i }),
    ).toBeInTheDocument();
  });

  it("renders all three service blocks", () => {
    render(<Services />);
    expect(
      screen.getByRole("heading", { name: /web app development/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /mobile app development/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /agentic ai solutions/i }),
    ).toBeInTheDocument();
  });
});
