const highAndLow = require("../katas/high-low");

test("find the highest and the lowest, make sure NaN is filtered out", () => {
  expect(
    highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6 someString")
  ).toStrictEqual("542 -214");
});
