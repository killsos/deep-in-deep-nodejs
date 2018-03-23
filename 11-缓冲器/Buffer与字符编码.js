/**
 * Buffer 实例一般用于表示编码字符的序列
 * 比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 
 * 通过使用显式的字符编码
 * 就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。
 */

const buf = Buffer.from('hello world', 'ascii');

// 输出 68656c6c6f20776f726c64
console.log(buf.toString('hex'));

// 输出 aGVsbG8gd29ybGQ=
console.log(buf.toString('base64'));

// 默认utf8
// ascii  base64  binary hex