document.write("<h2>Welcome to the time's related Programs</h2>");

//1. Write a JavaScript program to convert a given number to hours and minutes.
const times = (num) => {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  console.log(hours);
  console.log(minutes);
  return `${hours}hrs:${minutes}min`;
};
console.log(times(450));
console.log(times(60));
console.log(times(140));
