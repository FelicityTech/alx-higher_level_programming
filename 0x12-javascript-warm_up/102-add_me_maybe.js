#!/usr/bin/node
exports.addMeMaybe = function (x, y) {
  x++;
  y(x);
};
