#!/usr/bin/node
const argv = process.argv;
const request = require('request');

request(argv[2], function (err, res, body) {
  if (err) throw err;
  console.log('code:', res.statusCode);
});
