document.write("<h2>Welcome to the substring() related Programs</h2>");

//1. Remove a character at the specified position of a given string and return the new string

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

//2. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

const check7 = (str) => {
  if (str.length <= 1) {
    return str;
  }
  midStr = str.substring(1, str.length - 1);
  console.log(midStr);
  return str.charAt(str.length - 1) + midStr + str.charAt(0);
};
console.log(check7("abid"));
console.log(check7("eovl"));

//3. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

const check12 = (str) => {
  const result = str.substring(4, str.length);
  if (result === "script") {
    return str.substring(0, 4);
  } else return str;
};
console.log(check12("javascript"));
console.log(check12("scriptjava"));

//4. Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case
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
console.clear();

//5. Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.
const check2 = (str) => {
  if (str.substring(str.length - 6, str.length) == "script") {
    return true;
  }
  return false;
};
console.log(check2("javascript"));

//6 Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
const check3 =str=>
{
  if(str.length <3){
    return str;
  }else if((str.substring(0, 3) == 'Los') || (str.substring(0, 3) == 'New')){
    return true;
  }else
  return false;
};
console.log(check3('Newale'));
console.log(check3('new'));