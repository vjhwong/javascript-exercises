const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  )
    return "ERROR";

  const maxNumber = Math.max(num1, num2);
  const minNumber = Math.min(num1, num2);

  let sum = 0;
  for (let index = minNumber; index < maxNumber + 1; index++) {
    sum += index;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
