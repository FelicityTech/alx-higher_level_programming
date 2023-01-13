#!/usr/bin/node
const argv = process.argv;
const request = require('request');

request(`https://swapi-api.hbtn.io/api/films/${argv[2]}`, function (err, res, body) {
  if (err) throw err;
  const data = JSON.parse(body).characters;

  for (let i = 0; i < data.length; i++) {
    request(data[i], function (err, res, body) {
      if (err) throw err;
      console.log(JSON.parse(body).name);
    });
  }
});
