import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  //assertion
  expect(heading).toBeInTheDocument();
});

test("should load all input boxes", () => {
  render(<Contact />);
  //querying
  const inputBoxes = screen.getAllByRole("textbox");
  //assertion
  expect(inputBoxes.length).toBe(2);
});
