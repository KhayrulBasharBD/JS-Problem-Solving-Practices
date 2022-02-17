document.write("<h2>Welcome to the split() related Programs</h2>");

// 1. Get the extension of a filename

const fileName = "sys.temj.sx";
const extension = fileName.split(".").pop();
console.log(extension);

const onlyFileName = fileName.split(".");
onlyFileName.push("adm");
console.log(onlyFileName.shift());

//2. Write a JavaScript program to count the number of vowels in a given string

let count = 0;
const words = (str) => {
  const eachLower = str.toLowerCase();
  const letter = eachLower.split("");
  for (let x of letter) {
    if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
      count++;
    }
    // return x;
    // console.log(x);
  }
  return letter.join("");
};
console.log(words("bangladesh"));
console.log(words("aeiou"));
console.log(count);

// Another example
const vowelCount =str=>{

    return str.replace(/[^aeiou]/g, "").length;
};
console.log(vowelCount('Natural')); //3
console.log(vowelCount('AEiou')); //3

// Divide two positive numbers and return a string with properly formatted commas
const division = (n1,n2)=>
{
    const div = Math.round(n1/n2).toString();
    const divArr = div.split('');
    console.log(div);
    console.log(divArr);
    if(div>=1000)
    {
        for(let i=div.length -3; i>0; i-=3)
        {
            divArr.splice(i,0, ",");
        }
    }
    return divArr;
};

console.log(division(80,6));