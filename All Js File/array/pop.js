document.write("<h2>Welcome to the pop() related Programs</h2>");

//1. Write a JavaScript program to create a new string without the first and last character of a given string
console.clear();
const sentences = (str) => {
  if (!str) {
    return "No any sentences";
  }
  const convert = str.split("");
  const shift = convert.shift();
  const pop = convert.pop();
  return convert.join("").toUpperCase();
};
console.log(sentences("bangladesh"));
console.log(sentences("khayrul"));

//Alternative way to the solution
const senten = (str) => {
  if (!str) {
    return "No any senten";
  }
  return str.substring(1, str.length - 1);
};
console.log(senten("bangladesh"));
console.log(senten("khayrul"));

//2. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied
const check1 = (str) => {
  const conv = str.toLowerCase();
  const arr = conv.split("");
  if (arr[0] == "p") {
    arr.shift();
    arr.join("");
  }
  if (arr[arr.length - 1] == "p") {
    arr.pop("");
    arr.join("");
  } else {
  }
  return arr.join("");
};

console.log(check1("PythonP")); //ython
console.log(check1("Python")); //ython
console.log(check1("JavaScript")); //javascript

// Write a JavaScript program to create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n.
