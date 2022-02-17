document.write("<h2>Welcome to the Regular Expression related Programs</h2>");
//exec() return's array
const sents = (str) => {
  let result = /hello/.exec(str);
  console.log(result); //null
  let result2 = /world/.exec(str);
  console.log(result2); //['world', index: 6, input: 'Hello world', groups: undefined]
};
sents("Hello world");

// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string
const words =str=>
{
    return (/a...b/ig).test(str) || (/b...a/).test(str);
};
console.log(words('adminaknjb'));