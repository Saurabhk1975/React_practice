import { Sum } from "../Sum";

test("should be add two number and give value", () => {
  const res = Sum(5, 7);

  //Assertion
  expect(res).toBe(12);
});
