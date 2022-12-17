#!/usr/bin/node
exports.esrever = function (list) {
  const length = list.length;
  const reversedList = list;
  let lastIndex = length - 1;
  let i = 0;
  while (i < (length / 2)) {
    [reversedList[i], reversedList[lastIndex]] = [reversedList[lastIndex], reversedList[i]];
    i++;
    lastIndex--;
  }
  return (reversedList);
};
