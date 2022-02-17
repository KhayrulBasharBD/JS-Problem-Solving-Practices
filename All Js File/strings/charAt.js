//1. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
const checkChar = (str, char) => {
  count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      count = 1;
      break;
    }
  }
  if (count == 1) {
    return true;
  }
  return false;
};
console.log(checkChar("Lover", "o"));

//2. Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
const check8 = (str) => {
  const firstChar = str.charAt(str.length - (str.length - 1));
  console.log(firstChar);
  const final = firstChar + str + firstChar;
  return final;
};

console.log(check8("Bangladesh"));
