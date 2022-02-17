// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case
const check1 = (str) => {
  if (str.length < 3) {
    const convert = str.toUpperCase();
    return convert;
  } else {
    const first3 = str.substring(0, 3).toLowerCase();
    console.log(first3);
    const lastAll = str.substring(3, str.length);
    return first3 + lastAll;
  }
};

console.log(check1("MY"));

// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80
const check2 = (a, b) => {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
};
console.log(check2(70, 60));
console.log(check2(40, 20));

// Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode
const check3 = (a, b, c) => {
  if ((a > b && b > c) || (c > b && b > a)) {
    return "This is the strict mode";
  }
  return "Soft mode";
};
console.log(check3(4, 6, 9));
console.log(check3(4, 3, 9));
console.log(check3(44, 11, 9));

// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
const check4 = (a, b, c) => {
  if ((a %10 === b%10)  &&( b%10===c%10) && (a%10===c%10)) {
    return true;
  }
  return false;
};
console.log(check4(40, 60, 90));
console.log(check4(20, 65, 90));
console.log(check4(50, 70, 80));
