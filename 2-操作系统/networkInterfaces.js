/**
 * os.networkInterfaces()方法
 * 返回一个对象,包含只有被赋予网络地址的网络接口.
 * 
 * 在返回对象的每个关键词都指明了一个网络接口.
 * 返回的值是一个对象数组, 每个都描述了赋予的网络地址.
 * 被赋予网络地址的对象包含的属性:
 * address <string> 被赋予的 IPv4 或 IPv6 地址
 * netmask <string> IPv4 或 IPv6 子网掩码
 * family <string> IPv4 或 IPv6
 * mac <string> 网络接口的MAC地址
 * internal <boolean> 如果 网络接口是loopback或相似的远程不能用的接口时, 值为true,否则为false
 * scopeid <number> IPv6 数字领域识别码 (只有当 family 是IPv6时可用)
 * cidr <string> 以 CIDR 表示法分配的带有路由前缀的 IPv4 或 IPv6 地址。
 * 如果 netmask 参数不可用，则该属性是 null。
 */

 const os = require('os');
 console.log(os.networkInterfaces());
 