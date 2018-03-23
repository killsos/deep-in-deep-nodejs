/**
 * url.href
 * 获取及设置序列化的URL
 * 
 * 获取href属性的值等同于调用url.toString()
 * 将此属性的值设置为新值等同于new URL(value)使用创建新的URL对象
 * URL对象的每个属性都将被修改
 * 如果给href属性设置的值是无效URL，将会抛出TypeError
 */

const { URL } = require('url');
const myURL = new URL('https://example.org/foo');
console.log(myURL.href);
  // 输出 https://example.org/foo

myURL.href = 'https://example.com/bar';
console.log(myURL.href);
  // 输出 https://example.com/bar