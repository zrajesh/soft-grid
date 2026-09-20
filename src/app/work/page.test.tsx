import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Work from "./page";

describe("Work", () => {
  it("renders the headline", () => {
    render(<Work />);
    expect(
      screen.getByRole("heading", { level: 1, name: /our work/i }),
    ).toBeInTheDocument();
  });

  it("renders both case studies", () => {
    render(<Work />);
    expect(
      screen.getByRole("heading", { name: /bookstohome/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /lingotree/i }),
    ).toBeInTheDocument();
  });
});
