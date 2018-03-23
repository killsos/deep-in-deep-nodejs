/**
 * Buffer.concat(list[, totalLength])
 * 
 * list <Array> 要合并的 Buffer 或 Uint8Array 实例的数组
 * totalLength <integer> 合并时 list 中 Buffer 实例的总长度
 * 返回: <Buffer>
 * 返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer
 * 
 */

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

// 输出: 42
console.log(totalLength);

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

// 输出: <Buffer 00 00 00 00 ...>
console.log(bufA);

// 输出: 42
console.log(bufA.length);