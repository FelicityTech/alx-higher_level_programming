#!/usr/bin/node
const fs = require('fs');

const argv = process.argv;

fs.readFile(argv[2], 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
