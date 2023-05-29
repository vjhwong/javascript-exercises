const repeatString = function (string, num) {
  let repeatedString = string;

  for (let index = 0; index < num - 1; index++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
