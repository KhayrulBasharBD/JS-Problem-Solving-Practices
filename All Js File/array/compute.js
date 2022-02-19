document.write("<h2>Welcome to the compute() related Programs</h2>");

//1. Compute the sum of three elements of a given array of integers of length 3
const compute = (arr) => {
  let count = 0;
  for (let x of arr) {
    count += x;
  }
  return count;
};
console.log(compute([10, 20, 10]));
console.log(compute([10, 20, 50]));

//2. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
const compute1 = (arr) => {
  return [arr[1], arr[2], arr[0]];
};
console.log(compute1([10, 20, 10]));
console.log(compute1([10, 20, 50]));

//3. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.
const compute2 = (arr) => {
  if (arr[0] > arr[1] && arr[0] > arr[2]) {
    arr.unshift(arr[0]);
  } else if (arr[1] > arr[0] && arr[1] > arr[2]) {
    arr.unshift(arr[1]);
  } else {
    arr.unshift(arr[2]);
  }
  return arr;
};
console.log(compute2([10, 20, 10]));
console.log(compute2([10, 20, 50]));

//4. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
const compute3 = (arr1, arr2) => {
  const a1 = arr1[1];
  const a2 = arr2[1];
  return [a1, a2];
};
console.log(compute3([1, 2, 3], [1, 5, 6]));
console.log(compute3([3, 3, 3], [2, 8, 0]));
console.log(compute3([4, 2, 7], [2, 4, 5]));

//5. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2
const checkDuplicate = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30 && arr[i + 1] === 30) {
      count++;
    } else if (arr[i] === 40 && arr[i + 1] === 40) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  }
  return false;
};
console.log(checkDuplicate([40, 40]));
console.log(checkDuplicate([40, 30]));
console.log(checkDuplicate([20, 30]));

//6. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
const original = (arr) => {
  // const a1 = arr[0];
  // const a2 = arr[1];
  // return final = [a2,a1];
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  return arr;
};
console.log(original([4, 5]));
console.log(original([4, 5, 6, 7]));
console.clear();

//7. Write a JavaScript program to add two digits of a given positive integer of length two.
const digitSum = (num) => {
  const convert = num.toString().split("");
  for (let i = 0; i < convert.length; i++) {
    console.log(convert[i]);
  }
  const sum = Number(convert[i]) + Number(convert[i]);
  console.log(convert[0]);
  return +sum;
};
console.log(digitSum(25));
console.log(digitSum(255));
