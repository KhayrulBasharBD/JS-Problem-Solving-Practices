// 1. Get the extension of a filename

const fileName = "sys.temj.sx";
const extension = fileName.split(".").pop();
console.log(extension);

const onlyFileName = fileName.split(".");
onlyFileName.push("adm");
console.log(onlyFileName.shift());

// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
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

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
var n1 = 50;
var n2 = 13;
var n = n1 - n2;
if (n1 > n) {
  console.log(n * 2);
} else {
  console.log(n);
}

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
const check = (a, b) => {
  const sum = a + b;
  if (a === b) {
    console.log(sum * 3);
  } else {
    console.log(sum);
  }
};

check(10, 20);
check(10, 10);
check(8, 4);

// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
const check1 = (a, x) => {
  const diff = Math.abs(a - x);
  if (a > x) {
    console.log(diff * 3);
  } else {
    console.log(diff);
  }
};
check1(12, 19);
check1(19, 19);
check1(22, 19);

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const check2 = (a, b) => {
  if (a + b === 50) {
    console.log(`Yes, the two numbers sum are equal of 50`);
  } else if (a === 50) {
    console.log(`First ${a} is equal of 50`);
  } else if (b === 50) {
    console.log(`Second ${b} is equal of 50`);
  } else {
    console.log("The requirement is failed!");
  }
};
check2(50, 50);
check2(20, 50);
check2(20, 20);
check2(20, 30);

console.clear();

const check3 = (x) => {
  if ((x > 20 && x < 100) || (x > 20 && x < 400)) {
    console.log(true);
  }
  console.log(false);
};
check3(10);
check3(90);
check3(99);
check3(199);
check3(200);

console.clear();

// Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
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

// Remove a character at the specified position of a given string and return the new string

const check6 = (str, pos) => {
  let p1 = str.substring(0, pos);
  let p2 = str.substring(pos + 1, str.length);
  let final = p1 + p2;
  console.log(p1);
  console.log(p2);
  console.log(final);
};
check6("Paython", 5);

console.clear();

// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

const check7 = (str) => {
  if (str.length <= 1) {
    return str;
  }
  midStr = str.substring(1, str.length - 1);
  return str.charAt(str.length - 1) + midStr + str.charAt(0);
  console.log(midStr);
};
console.log(check7("abid"));
console.log(check7("eovl"));

// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
const check8 = (str) => {
  const firstChar = str.charAt(str.length - (str.length - 1));
  console.log(firstChar);
  const final = firstChar + str + firstChar;
  return final;
};

console.log(check8("Bangladesh"));

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
const num = (n) => {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else return "This is not match the condition";
};
console.log(num(9));

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
const check9 = (str) => {
  if (str.length <= 3) {
    return str;
  }
  const lastThree = str.substr(str.length - 3);
  return lastThree;
};
console.log(check9("Khayrul"));

// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
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

// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range
const check11 = (a, b) => {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    return true;
  }
  return false;
};
console.log(check11(40, 1001));
console.log(check11(40, 99));
// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

const check12 = (str) => {
  const result = str.substring(4, str.length);
  if (result === "script") {
    return str.substring(0, 4);
  } else return str;
};
console.log(check12("javascript"));
console.log(check12("scriptjava"));

// Write a JavaScript program to find the largest of three given integers.
const numbers = (a, b, c) => {
  if (a > b && a > c) {
    console.log(`a ${a} is leargest among other's.`);
  } else if (b > a && b > c) {
    console.log(`b ${b} is leargest among other's.`);
  } else if (c > a && c > b) {
    console.log(`c ${c} is leargest among other's.`);
  } else {
    console.log(`a= ${a} b=${b} c=${c}  are equal.`);
  }
};
numbers(7, 8, 6);
numbers(7, 8, 9);
numbers(17, 8, 9);
numbers(1, 1, 1);

// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
const num2 = (a, b) => {
  const compare1 = Math.abs(a - 100);
  const compare2 = Math.abs(b - 100);
  if (compare1 > compare2) {
    console.log(`${b} is the nearest of 100`);
  } else if (compare1 < compare2) {
    console.log(`${a} is the nearest of 100`);
  } else {
    console.log(`${a} and ${b} are the same nearest of 100`);
  }
};
num2(70, 120);
num2(99, 99);
num2(102, 101);

// Write a JavaScript program to check whether the last digit of the three given positive integers is same.
const checkNums = (a,b,c)=>
{
    
};