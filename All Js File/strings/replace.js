document.write("<h2>Welcome to the replace related Programs</h2>");

//1. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
const replaceOne = (str) => {
  const eachLetter = str.split("");
  for (let i = 0; i < eachLetter.length; i++) {
    switch (eachLetter[i]) {
      case "":
        break;
      case "z":
        eachLetter[i] = "a";
        break;
      case "Z":
        eachLetter[i] = "A";
        break;
      default:
        eachLetter[i] = String.fromCharCode(0 + eachLetter[i].charCodeAt(0));
        break;
    }
    console.log(String.fromCharCode(eachLetter[i].charCodeAt(0)));

    switch (eachLetter[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        eachLetter[i] = eachLetter[i].toUpperCase();
    }
  }
  return eachLetter.join("");
};
console.log(replaceOne("NzObnfJtLIbzsvmCbtIbs"));
console.log(replaceOne("MyNameIsKhayrulBashar"));

console.clear();

//Another Example
const replaceStr = (str) => {
  const letter = str.split("");
  // console.log(letter);
  for (let i = 0; i < letter.length; i++) {
    // console.log(letter[i]);
    switch (letter[i]) {
      case " ":
        break;
      case "a":
        letter[i] = "z";
        break;
      case "z":
        letter[i] = "a";
      default:
        letter[i] = String.fromCharCode(1 + letter[i].charCodeAt(0));
        break;
    }
    switch (letter[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        letter[i] = letter[i].toUpperCase();
    }
  }

  return letter.join("");
};

console.log(replaceStr("bangladesh")); //czohmzefti
console.log(replaceStr("CHECK")); //DIFDL
// console.clear();

// Write a JavaScript program to capitalize the first letter of each word of a given string
const sentence = (str) => {
  const convArr = str.split("");
  for (let i = 0; i < convArr.length; i++) {
    convArr[i] = convArr[i][0].toUpperCase() + convArr[i].substr(1);
    console.log(convArr[i]);
  }
  return convArr.join("");
};

// console.log(sentence('My name is Khayrul Bashar'));

// const words = str=>
// {
//   const convertArr = str.split(' ');
//   convertArr.map((word)=> {
//     // console.log(word);
//     word.toUpperCase()+ word.substr(1)
//     // console.log(word.toUpperCase());
//   }).join(' ');

// };

// console.log(words('my name is khayrul bashar'));

const mySentences = "freeCodeCamp is an awesome resource";
const words = mySentences.split(" ");

words.map((word) => {
  word[0].toUpperCase() + word.substring(0, 1);
}).join(" ");

//Another example
const mySentence = "freeCodeCamp is an awesome resource";
const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
  letter.toUpperCase()
);
console.log(finalSentence);
