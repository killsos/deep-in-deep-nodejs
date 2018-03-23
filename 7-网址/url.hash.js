/**
 * url.hash
 * 获取及设置URL的分段(hash)部分
 * 
 * 包含在赋给hash属性的值中的无效URL字符是[百分比编码][]。
 * 请注意选择哪些字符进行百分比编码可能
 * 与[url.parse()][]和[url.format()][]方法产生的不同
 */

const { URL } = require('url');
const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
  // 输出 #bar

myURL.hash = 'baz';
console.log(myURL.href);
// 输出 https://example.org/foo#baz