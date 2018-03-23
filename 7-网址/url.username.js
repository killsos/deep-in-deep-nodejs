/**
 * url.username
 * 获取及设置URL的用户名(username)部分
 */

const { URL } = require('url');
const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username);
  // 输出 abc

myURL.username = '123';
console.log(myURL.href);
  // 输出 https://123:xyz@example.com/