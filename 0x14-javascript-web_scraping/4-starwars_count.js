#!/usr/bin/node
const argv = process.argv;
const request = require('request');

request(argv[2], function (err, res, body) {
  if (err) throw err;
  const data = JSON.parse(body).results;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    const characterList = data[i].characters;
    for (let j = 0; j < characterList.length; j++) {
      if (characterList[j].includes(18)) {
        count++;
      }
    }
  }
  console.log(count);
});
