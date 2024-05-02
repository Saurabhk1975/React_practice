import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { json } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Mock_Data from "../../components/Mocks/WholeResturant.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

test("should be filter resturant which contain pizza", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchBtn);
  const card = screen.getAllByTestId("res-card");
  expect(card.length).toBe(1);
});
