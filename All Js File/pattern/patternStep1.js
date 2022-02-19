document.write("<h2>Welcome to the Pattern Step-1 related Programs</h2>");
//1.
// *
// **
// ***
// ****
// *****
const pattern1 = (num) => {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      document.write("*");
    }
    document.write("<br>");
  }
};
pattern1(5);
//2.
// 1
// 10
// 101
// 1010
// 10101
const pattern2 = (num) => {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      document.write(col % 2);
    }
    document.write("<br>");
  }
};
pattern2(5);

// 3.
// 1
// 22
// 333
// 4444
// 55555
const pattern3 = (num) => {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      document.write(row);
    }
    document.write("<br>");
  }
};
pattern3(5);

// 4
// A
// BB
// CCC
// DDDD
// EEEEE
const pattern4 = (num) => {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      document.write(String.fromCharCode(64 + row));
    }
    document.write("<br>");
  }
};
pattern4(5);
