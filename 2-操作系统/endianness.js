/**
 * os.endianness()
 * os.endianness()方法返回一个字符串,
 * 表明Node.js二进制编译环境的字节顺序.
 * 
 * 可能的值:
 * 'BE' 大端模式
 * 'LE' 小端模式
 */

 const os = require('os');

 console.log(os.endianness())