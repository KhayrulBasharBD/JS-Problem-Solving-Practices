document.write("<h2>Welcome to the number's related Programs</h2>");

//1. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
const n1 = 50;
const n2 = 13;
const n = n1 - n2;
if (n1 > n) {
  console.log(n * 2);
} else {
  console.log(n);
}

//2. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
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

//3. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
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

//4. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
const check0 = (a, b) => {
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
check0(50, 50);
check0(20, 50);
check0(20, 20);
check0(20, 30);

console.clear();

//5. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400
const check01 = (x) => {
  if ((x > 20 && x < 100) || (x > 20 && x < 400)) {
    console.log(true);
  }
  console.log(false);
};
check01(10);
check01(90);
check01(99);
check01(199);
check01(200);

console.clear();

//6 Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range
const check11 = (a, b) => {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    return true;
  }
  return false;
};
console.log(check11(40, 1001));
console.log(check11(40, 99));

//7 Write a JavaScript program to find the largest of three given integers.
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

//8 Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
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

//9 Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
const num = (n) => {
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  } else return "This is not match the condition";
};
console.log(num(9));

//10 Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80
const check2 = (a, b) => {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
};
console.log(check2(70, 60));
console.log(check2(40, 20));

//11 Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode
const check3 = (a, b, c) => {
  if ((a > b && b > c) || (c > b && b > a)) {
    return "This is the strict mode";
  }
  return "Soft mode";
};
console.log(check3(4, 6, 9));
console.log(check3(4, 3, 9));
console.log(check3(44, 11, 9));

//12 Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
const check4 = (a, b, c) => {
  if (a % 10 === b % 10 && b % 10 === c % 10 && a % 10 === c % 10) {
    return true;
  }
  return false;
};
console.log(check4(40, 60, 90));
console.log(check4(20, 65, 90));
console.log(check4(50, 70, 80));
