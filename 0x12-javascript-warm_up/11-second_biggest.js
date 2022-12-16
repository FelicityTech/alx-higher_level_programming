#!/usr/bin/node
const argv = process.argv;

function convertInt (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(parseInt(arr[i]));
  }
  return (newArr);
}

function findSecondBiggest (arr) {
  const array = arr.slice(2);
  if (array.length === 0 || array.length === 1) {
    return (0);
  }
  const intArray = convertInt(array);
  intArray.sort(function (a, b) { return b - a; });
  return (intArray[1]);
}

console.log(findSecondBiggest(argv));
