import ResturantCard from "../ResturantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../Mocks/RestaurantMockForTest.json";
import "@testing-library/jest-dom";

test("should be render Restaurant Card", () => {
  render(<ResturantCard resdata={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
