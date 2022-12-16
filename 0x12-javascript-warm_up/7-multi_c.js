#!/usr/bin/node
const argv = process.argv;
const length = argv[2];

if (!parseInt(argv[2])) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < length; i++) {
    console.log('C is fun');
  }
}
