document.write("<h2>Welcome to the pop() related Programs</h2>");

//1. Write a JavaScript program to create a new string without the first and last character of a given string
console.clear();
const sentences = str=>{
    if(!str){
        return 'No any sentences';
    }
    const convert = str.split('');
    const shift = convert.shift();
    const pop = convert.pop();
    return convert.join('').toUpperCase();
};
console.log(sentences('bangladesh'));
console.log(sentences('khayrul'));

//Alternative way to the solution
const senten = str=>{
    if(!str){
        return 'No any senten';
    }
    return str.substring(1, str.length-1);
};
console.log(senten('bangladesh'));
console.log(senten('khayrul'));


