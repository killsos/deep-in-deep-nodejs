/**
 * url.domainToUnicode(domain)
 * 返回Unicode序列化的domain
 * 如果domain是无效域名，将返回空字符串
 * 它执行的是url.domainToASCII()的逆运算。
 */

const url = require('url');
console.log(url.domainToUnicode('xn--espaol-zwa.com'));
  // 输出 español.com
console.log(url.domainToUnicode('xn--fiq228c.com'));
  // 输出 中文.com
console.log(url.domainToUnicode('xn--iñvalid.com'));
  // 输出空字符串