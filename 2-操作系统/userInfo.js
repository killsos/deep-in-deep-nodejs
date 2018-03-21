/**
 * os.userInfo([options])
 * options <Object>
 *    encoding <string> 用于解释结果字符串的字符编码. 
 *    如果encoding 被设置为'buffer', username, shell, 和 homedir 的值将成为 Buffer的实例. 
 *    (默认是: 'utf8')
 * 
 * Returns: 对象
 * os.userInfo()方法当前有效用户的信息 
 * 
 * -- 在 POSIX平台上, 这通常是password文件的子集. 
 * 返回的对象包括 username, uid, gid, shell, 和 homedir.
 *  
 * -- 在Windows系统上, uid 和 gid 域是 -1, and shell是 null.
 * homedir的值由os.userInfo()返回, 由操作系统提供. 
 * 这区别了os.homedir()的结果, 
 * 它在求助操作系统响应之前, 为home目录请求几个环境变量.
 */
 
 const os = require('os');
 console.log(os.userInfo());

 /**
  * { 
  * uid: 501,
  * gid: 20,
  * username: 'killsos',
  * homedir: '/Users/killsos',
  * shell: '/bin/bash' 
  * }
  */
 