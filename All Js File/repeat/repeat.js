document.write("<h2>Welcome to the Repeat related Programs</h2>");
// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.
const repeatCreate = (str, num)=>
{
    // if(num<0 || !num){
    //     return false;
    // }
    return num ? str.repeat(num) : false;
};
console.log(repeatCreate('Nusaiba ', ));

// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
const create = str=>
{
   if(str <3){
       return str;
   } 
   const modify = str.substring(str.length - 3);
   return modify.repeat(4);
};
console.log(create('bashar'));
console.log(create('and'));

// Write a JavaScript program to extract the first half of a string of even length
const create2 = str=>
{
   if(str.length%2!==0){
       return str;
   } 
   const modify = str.substring(0, (str.length/2));
   return modify;
};
console.log(create2('bashar'));
console.log(create2('andy'));

console.clear();
