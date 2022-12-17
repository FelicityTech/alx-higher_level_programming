#!/usr/bin/node
const rectangle = require('./4-rectangle');
class Square extends rectangle {
  constructor (size) {
    super(size, size);
  }
}
module.exports = Square;
