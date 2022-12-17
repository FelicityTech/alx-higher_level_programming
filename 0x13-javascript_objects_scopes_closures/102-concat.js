#!/usr/bin/node
const fs = require('fs');
const argv = process.argv;

function func (err, data) {
  if (err) throw err;
  fs.appendFile(argv[4], data, (err) => {
    if (err) throw err;
  });
}

fs.readFile(argv[2], 'utf-8', func);
fs.readFile(argv[3], 'utf-8', func);
