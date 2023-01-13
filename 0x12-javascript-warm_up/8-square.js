#!/usr/bin/node
const argv = process.argv;
const length = argv[2];

if (!parseInt(argv[2])) {
  console.log('Missing size');
} else {
  for (let i = 0; i < length; i++) {
    let str = '';
    for (let j = 0; j < length; j++) {
      str = str + 'X';
    }
    console.log(str);
  }
}
