/**
 * url.password
 * 获取及设置URL的密码(password)部分
 */

const { URL } = require('url');
const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.password);
  // 输出 xyz

myURL.password = '123';
console.log(myURL.href);
  // 输出 https://abc:123@example.com
  