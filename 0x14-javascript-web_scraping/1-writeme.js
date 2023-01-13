#!/usr/bin/node
const fs = require('fs');

const argv = process.argv;

fs.writeFile(argv[2], argv[3], 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  }
});
