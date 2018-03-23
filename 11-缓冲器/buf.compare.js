/**
 * buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
 * 
 * target <Buffer> | <Uint8Array> 要比较的 Buffer 或 Uint8Array
 * targetStart <integer> target 中开始对比的偏移量。 默认: 0
 * targetEnd <integer> target 中结束对比的偏移量（不包含）
 * 当 targetStart 为 undefined 时忽略。 默认: target.length
 * sourceStart <integer> buf 中开始对比的偏移量
 * 当 targetStart 为 undefined 时忽略 默认: 0
 * sourceEnd <integer> buf 中结束对比的偏移量（不包含）
 * 当 targetStart 为 undefined 时忽略。 默认: buf.length
 * 
 * 返回: <integer>
 * 
 * 比较 buf 与 target
 * 返回表明 buf 在排序上是否排在 target 之前、或之后、或相同
 * 对比是基于各自 Buffer 实际的字节序列
 * 
 * 如果 target 与 buf 相同，则返回 0 
 * 如果 target 排在 buf 前面，则返回 1 
 * 如果 target 排在 buf 后面，则返回 -1 
 */

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

// 输出: 0
console.log(buf1.compare(buf1));

// 输出: -1
console.log(buf1.compare(buf2));

// 输出: -1
console.log(buf1.compare(buf3));

// 输出: 1
console.log(buf2.compare(buf1));

// 输出: 1
console.log(buf2.compare(buf3));

// 输出: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (结果相当于: [buf1, buf3, buf2])
console.log([buf1, buf2, buf3].sort(Buffer.compare));