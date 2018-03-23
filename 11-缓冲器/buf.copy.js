/**
 * buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
 * 
 * target <Buffer> | <Uint8Array> 要拷贝进的 Buffer 或 Uint8Array。
 * targetStart <integer> target 中开始拷贝进的偏移量。 默认: 0
 * 
 * sourceStart <integer> buf 中开始拷贝的偏移量
 * 当 targetStart 为 undefined 时忽略。 默认: 0
 * 
 * sourceEnd <integer> buf 中结束拷贝的偏移量（不包含）
 * 当 sourceStart 为 undefined 时忽略。 默认: buf.length
 * 
 * 返回: <integer> 被拷贝的字节数
 * 
 * 拷贝 buf 的一个区域的数据到 target 的一个区域
 * 即便 target 的内存区域与 buf 的重叠
 */

const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值
  buf1[i] = i + 97;
}

buf1.copy(buf2, 8, 16, 20);

// 输出: !!!!!!!!qrst!!!!!!!!!!!!!
console.log(buf2.toString('ascii', 0, 25));

const buf = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值
  buf[i] = i + 97;
}

buf.copy(buf, 0, 4, 10);

// 输出: efghijghijklmnopqrstuvwxyz
console.log(buf.toString());
