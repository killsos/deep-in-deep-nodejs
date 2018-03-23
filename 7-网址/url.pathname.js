/**
 * url.pathname
 * 
 * 获取及设置URL的路径(path)部分
 * 
 */
const { URL } = require('url');
const myURL = new URL('https://example.org/abc/xyz?123');
console.log(myURL.pathname);
  // 输出 /abc/xyz

myURL.pathname = '/abcdef';
console.log(myURL.href);
  // 输出 https://example.org/abcdef?123