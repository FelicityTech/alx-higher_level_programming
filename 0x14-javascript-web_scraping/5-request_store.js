#!/usr/bin/node
const argv = process.argv;
const fs = require('fs');
const request = require('request');

request(argv[2], function (err, res, body) {
  if (err) throw err;
  fs.writeFile(argv[3], body, 'utf-8', function (err, data) {
    if (err) throw err;
  });
});
