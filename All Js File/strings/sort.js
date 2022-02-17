document.write("<h2>Welcome to the sort() related Programs</h2>");
//1. Write a JavaScript program to convert the letters of a given string in alphabetical order
const alphabetOrder = (str) => {
  return str.split("").sort().join("");
};
console.log(alphabetOrder("bangladesh"));
