/**
 * string_decoder 字符串解码器
 * string_decoder 模块提供了一个 API，用于把 Buffer 对象解码成字符串
 * 但会保留编码过的多字节 UTF-8 与 UTF-16 字符。使用以下方法引入
 */

const { StringDecoder } = require('string_decoder');

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));