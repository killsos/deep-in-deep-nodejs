/**
 * 提供平台特定的路径分隔符：
 * Windows 上是 ;
 * POSIX 上是 :
 */

const path = require('path');

console.log(process.env.PATH);
// 输出: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

console.log(process.env.PATH.split(path.delimiter));
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']