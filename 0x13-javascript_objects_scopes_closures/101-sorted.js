#!/usr/bin/node
const dict = require('./101-data').dict;

const newDict = {};
const values = Object.values(dict);

const uniqueKeys = [];
for (let i = 0; i < values.length; i++) {
  if (!uniqueKeys.includes(values[i])) {
    uniqueKeys.push(values[i]);
  }
}
for (let j = 0; j < uniqueKeys.length; j++) {
  let keyList = Object.entries(dict).filter(([key, value]) => value === uniqueKeys[j]);
  keyList = keyList.map((value) => value[0]);
  newDict[uniqueKeys[j]] = keyList;
}
console.log(newDict);
