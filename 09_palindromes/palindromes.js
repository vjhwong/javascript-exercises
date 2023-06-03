function palindromes(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Do not edit below this line
module.exports = palindromes;
