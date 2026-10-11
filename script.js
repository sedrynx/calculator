const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
};

// if (result.width > 232px) then for loop over the font-size and reduce font-size by 1 each iteration until result.width is <= 232px

console.log(`20 + 5:`, operate(add, 20, 5));
console.log(`20 - 5:`, operate(subtract, 20, 5));
console.log(`20 * 5:`, operate(multiply, 20, 5));
console.log(`20 / 5:`, operate(divide, 20, 5));
