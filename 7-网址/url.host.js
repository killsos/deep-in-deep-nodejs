/**
 * url.host
 * 
 * 获取及设置URL的主机(host)部分
 * 
 */

const { URL } = require('url');
const myURL = new URL('https://example.org:81/foo');
console.log(myURL.host);
  // 输出 example.org:81

myURL.host = 'example.com:82';
console.log(myURL.href);
  // 输出 https://example.com:82/foo