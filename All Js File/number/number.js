document.write("<h2>Welcome to the number related Programs</h2>");

// Add two digits of a given positive integer of length two
const calculate = (num) => {
  return Math.floor(num / 10) + (num % 10);
};
console.log(calculate(253));

//   Write a JavaScript to add two positive integers without carry.
const twoInt = (n1, n2) => {
  let result = 0;
  let x = 1;
  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10;
  }
  return result;
};
console.log(twoInt(222, 911));
