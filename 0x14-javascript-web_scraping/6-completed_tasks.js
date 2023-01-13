#!/usr/bin/node
const argv = process.argv;
const request = require('request');

request(argv[2], function (err, res, body) {
  if (err) throw err;
  const data = JSON.parse(body);
  const result = {};
  for (let i = 0; i < data.length; i++) {
    result[data[i].userId] = 0;
  }
  for (let j = 0; j < data.length; j++) {
    if (data[j].completed) {
      result[data[j].userId]++;
    }
  }
  for (const key in result) {
    if (result[key] === 0) {
      delete result[key];
    }
  }
  console.log(result);
});
