/**
 * url.search
 * 获取及设置URL的序列化查询(query)部分
 */

const { URL } = require('url');
const myURL = new URL('https://example.org/abc?123');
console.log(myURL.search);
  // 输出 ?123

myURL.search = 'abc=xyz';
console.log(myURL.href);
  // 输出 https://example.org/abc?abc=xyz