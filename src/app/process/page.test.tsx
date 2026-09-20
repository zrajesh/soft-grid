import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Process from "./page";

describe("Process", () => {
  it("renders the headline", () => {
    render(<Process />);
    expect(
      screen.getByRole("heading", { level: 1, name: /how we work/i }),
    ).toBeInTheDocument();
  });

  it("renders all five steps", () => {
    render(<Process />);
    for (const step of ["Discover", "Design", "Build", "Launch", "Scale"]) {
      expect(
        screen.getAllByRole("heading", { name: new RegExp(step, "i") }),
      ).not.toHaveLength(0);
    }
  });
});
