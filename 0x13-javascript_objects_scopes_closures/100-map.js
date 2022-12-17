#!/usr/bin/node
const list = require('./100-data').list;

const newList = list.map((item, key) => item * key);

console.log(list);
console.log(newList);
