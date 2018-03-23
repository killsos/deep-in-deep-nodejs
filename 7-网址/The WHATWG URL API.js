/**
 * 新增于: v7.0.0
 * 浏览器兼容的 URL 类，根据 WHATWG URL 标准实现。[解析URL的示例][]可以在标准本身里边找到
 * 注意: 根据浏览器的约定，URL 对象的所有属性都是在类的原型上实现为getter和setter
 * 而不是作为对象本身的数据属性
 * 因此与[遗留的urlObjects][]不同
 * 在 URL 对象的任何属性
 * (例如 delete myURL.protocol，delete myURL.pathname等)上使用 delete 关键字没有任何效果
 * 但仍返回 true。
 */

 /**
  * Constructor: new URL(input[, base])
  * input <string> 要解析的输入URL
  * base <string> | <URL> 如果“input”是相对URL，则为要解析的基本URL
  * 
  * 通过将input解析到base上创建一个新的URL对象
  * 
  * 如果base是一个字符串，则解析方法与new URL(base)相同
  */

 const { URL } = require('url');
 const myURL = new URL('/foo', 'https://example.org/');
   // https://example.org/foo

// 如果input或base是无效URLs，将会抛出TypeError 
// 请注意给定值将被强制转换为字符串

const { URL } = require('url');
const myURL = new URL({ toString: () => 'https://example.org/' });
  // https://example.org/

// 存在于input主机名中的Unicode字符将被使用Punycode算法自动转换为ASCII

const { URL } = require('url');
const myURL = new URL('https://你好你好');
  // https://xn--6qqa088eba/