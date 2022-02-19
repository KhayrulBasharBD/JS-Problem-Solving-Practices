document.write("<h2>Welcome to the longest string related Programs</h2>");
// Find the longest string from a given array of strings
const longest = (str) => {
  let max = str[0].length;
  str.map((v) => {
    max = Math.max(max, v.length);
    console.log(v.length);
  });
  result = str.filter((v) => max == v.length);
  return result;
};
console.log(longest(["aa", "aaaa", "a", "aaaaa", "aaaaaa"]));

// Replace each character of a given string by the next one in the English alphabet
// const replace = (str) => {
//   let convertArr = str.split("");
//   for (let x of convertArr) {
//     let n = x.charCodeAt() - "a".charCodeAt();
//     let m = (n + 1) % 26;
//     // console.log(m);
//     x = String.fromCharCode(m+'a'.charCodeAt());
//     console.log(x.join(''));
//     x.join('')
//   }
//   return convertArr.join('')
// };
// console.log(replace("bashar"));

console.clear();

// Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.

// const arrCompare= (arr1, arr2)=>
// {
//   for(var i= 0; i<arr1.length; i++)
//   {
//     for(let j = i; j<arr1.length; j++){
//       console.log(j);
//     }
//   }
// };
// arrCompare([4,5,6,0],[5,2,3]);

//Multiplication Table
const multipli=num=>
{
  for(var i =1; i<=10; i++)
  {
    console.log(`${num} x ${i} = ${num*i}`);
  }
};
console.log(multipli(5));