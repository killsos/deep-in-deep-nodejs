/**
 * os.platform() 方法
 * 返回一个字符串, 指定Node.js编译时的操作系统平台
 * 等价于 process.platform.
 */

const os = require('os');
console.log(os.platform());