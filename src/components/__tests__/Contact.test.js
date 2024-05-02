import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// in describe we Put all test case for single page this is container
describe("contact Us Page all test case", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("before Each");
  });
  afterAll(() => {
    console.log("after all");
  });

  afterEach(() => {
    console.log("after Each");
  });

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
});
