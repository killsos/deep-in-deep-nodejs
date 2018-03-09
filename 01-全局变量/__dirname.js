let path = require('path');

console.log(__dirname);
// /Users/killsos/deep-in-deep-nodejs/01-全局变量

console.log(__filename);
// /Users/killsos/deep-in-deep-nodejs/01-全局变量/__dirname.js

console.log(path.dirname(__filename));

