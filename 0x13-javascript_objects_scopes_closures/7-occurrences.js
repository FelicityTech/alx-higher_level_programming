#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  const sortList = list.filter(value => value === searchElement);
  return (sortList.length);
};
