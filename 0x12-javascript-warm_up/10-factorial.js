#!/usr/bin/node
const argv = process.argv;

function factorial (a) {
  if ((!parseInt(a)) || (a === 0) || (a === 1)) {
    return (1);
  } else if (a < 0) {
    return (-1);
  } else {
    return (a * factorial(a - 1));
  }
}

// function factorial(a) {
//   result = 1;
//   for (let i = 1; i <= a; i++)
// 	result *= i;
//   console.log(result);
// }

console.log(factorial(parseInt(argv[2])));
