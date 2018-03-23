/**
 * url.toJSON()
 * 在URL对象上调用toJSON()方法将返回序列化的URL
 * 返回值与url.href和url.toString()的相同
 * 
 * 当URL对象使用JSON.stringify()序列化时将自动调用该方法
 */

const { URL } = require('url');
const myURLs = [
  new URL('https://www.example.com'),
  new URL('https://test.example.org')
];
console.log(JSON.stringify(myURLs));
  // 输出 ["https://www.example.com/","https://test.example.org/"]