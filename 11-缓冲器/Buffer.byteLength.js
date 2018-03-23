/**
 * Buffer.byteLength(string[, encoding])
 * 
 * string <string> | <Buffer> | <TypedArray> | <DataView> | <ArrayBuffer> 
 * 要计算长度的值
 * 
 * encoding <string> 如果 string 是字符串
 * 则这是它的字符编码。 默认: 'utf8'
 * 
 * 返回: <integer> string 包含的字节数
 */

const str = '\u00bd + \u00bc = \u00be';

// 输出: ½ + ¼ = ¾: 9 个字符, 12 个字节
console.log(`${str}: ${str.length} 个字符, ` +
            `${Buffer.byteLength(str, 'utf8')} 个字节`);