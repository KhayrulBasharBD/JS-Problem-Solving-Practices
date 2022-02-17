//1. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
const check4 = (word) => {
  const result = word.substr(0, 2);
  // const result = word.substring(0,2);
  if (result === "Py") {
    console.log(word);
  } else if (result != "Py") {
    console.log(`Py${word}`);
  }
  // console.log(result);
};

check4("Python");
check4("yhon");

//2. Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
const check9 = (str) => {
  if (str.length <= 3) {
    return str;
  }
  const lastThree = str.substr(str.length - 3);
  return lastThree;
};
console.log(check9("Khayrul"));

//3. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
const check10 = (str) => {
  const result = str.substr(0, 4);
  if (result === "Java") {
    return true;
  }
  return false;
};
console.log(check10("JavaScript"));
console.log(check10("JavScript"));
console.clear();
