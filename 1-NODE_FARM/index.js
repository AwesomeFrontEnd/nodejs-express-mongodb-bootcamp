const fs = require('fs'); // file system

const hello = 'Hello World';
// console.log(hello);

// cd 1-NODE_FARM
// node index.js

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
const textOut = `This is what we know about rhe avocado: ${textIn}. \n Created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');
