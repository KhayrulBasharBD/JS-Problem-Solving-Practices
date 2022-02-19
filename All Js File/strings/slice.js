document.write("<h2>Welcome to the slice() related Programs</h2>");
// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
const transfer = (str) => {
  const output = str.slice(-3) + str.slice(0, -3);
  return output;
};
console.log(transfer("bangladesh"));

// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
const middle = (str) => {
  if (str.length % 2 != 0) {
    mid = (str.length + 1) / 2;
    // return str.slice(mid-2)
    console.log(str.slice(mid - 2, mid + 1));
  }
  return str;
};
console.log(middle("banglal"));
console.log(middle("banglalis"));

console.clear();

// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string
const concate = (str1, str2) => {
  min = Math.min(str1.length, str2.length);
  console.log(min);
  return str1.substring(str1.length - min) +' '+ str2.substring(str2.length - min);
};
console.log(concate("alama", "sala")); //lama sala
console.log(concate("alama", "Elsala"));
