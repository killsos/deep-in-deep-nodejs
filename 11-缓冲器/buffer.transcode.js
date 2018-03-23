/**
 * buffer.transcode(source, fromEnc, toEnc)
 * 
 * source <Buffer> | <Uint8Array> 一个 Buffer 或 Uint8Array 实例
 * 
 * fromEnc <string> 当前编码
 * 
 * toEnc <string> 目标编码
 * 将给定的 Buffer 或 Uint8Array 实例从一个字符编码重新编码到另一个字符
 * 返回一个新的Buffer实例
 * 
 * 如果 fromEnc 或 toEnc 指定的字符串编码无效
 * 或者不允许从 fromEnc 转换为 toEnc，将抛出异常
 */

const buffer = require('buffer');

const newBuf = buffer.transcode(Buffer.from('€'), 'utf8', 'ascii');
console.log(newBuf.toString('ascii'));
// 输出: '?'