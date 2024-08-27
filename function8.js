// sum
export function sum(a, b) {
  return a + b;
}

// Average
export function Average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// isEven
export function isEven(number) {
  return number % 2 === 0;
}

export const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
  },
};

// findMax
export function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// isValidEmail
export function isValidEmail(email) {
  const res = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return res.test(email);
}
// object 
export const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  salary: 13000,
  calcSalary: function () {
    return (this.salary * 10) / 100;
  },
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
