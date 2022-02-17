document.write("<h2>Welcome to the concatenate() related Programs</h2>");
// Write a JavaScript program to concatenate two strings except their first character
const sentence = (n1, n2) => {
  const first = n1.substring(1, n1.length).toUpperCase();
  const second = n2.substring(1, n2.length);
  const concate = first + second;
  return concate;
};
console.log(sentence("Alamia", "Salima"));
