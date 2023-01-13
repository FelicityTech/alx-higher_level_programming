#!/usr/bin/node
const argv = process.argv;
const request = require('request');

request(`https://swapi-api.hbtn.io/api/films/${argv[2]}`, function (err, res, body) {
  if (err) throw err;
  console.log(JSON.parse(body).title);
});
