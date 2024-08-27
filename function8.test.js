import {
  sum,
  Average,
  isEven,
  houseForSale,
  findMax,
  isValidEmail,
  person,
} from "./function8";

// test sum
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


// test Average

test("Average <= 10 ", () => {
  expect(Average([5, 5, 5, 5])).toBeGreaterThan(4);
});

// test isEven

test("isEven", () => {
  expect(isEven(4)).toBeTruthy();
});

const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

test("the house has my desired features", () => {
  expect(houseForSale).toMatchObject(desiredHouse);
});
// test findMax

test("findMax num", () => {
  expect(findMax(8, 7, 5)).toBe(8);
});

// test isValidEmail
test("isValidEmail", () => {
  expect(isValidEmail("as@gmail.com")).toBeTruthy();
});

// test object
test("object person", () => {
  expect(person).not.toHaveProperty(["isloding", "fales"]);
});
