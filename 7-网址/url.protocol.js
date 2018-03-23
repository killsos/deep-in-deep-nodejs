/**
 * url.protocol
 * 获取及设置URL的协议(protocol)部分
 * 
 */

const { URL } = require('url');
const myURL = new URL('https://example.org');
console.log(myURL.protocol);
  // 输出 https:

myURL.protocol = 'ftp';
console.log(myURL.href);
  // 输出 ftp://example.org/