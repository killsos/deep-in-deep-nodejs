/**
 * url.hostname
 * 获取及设置URL的主机名(hostname)部分
 * url.host和url.hostname之间的区别是url.hostname不包含端口
 */

const { URL } = require('url');
const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname);
  // 输出 example.org

myURL.hostname = 'example.com:82';
console.log(myURL.href);
  // 输出 https://example.com:81/foo