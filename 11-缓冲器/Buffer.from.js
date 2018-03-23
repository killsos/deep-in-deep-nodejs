/**
 * Buffer.from(array)
 * 
 * 通过一个八位字节的 array 创建一个新的 Buffer
 */

// 创建一个新的包含字符串 'buffer' 的 UTF-8 字节的 Buffer
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

/**
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 * 
 * arrayBuffer <ArrayBuffer> 一个 ArrayBuffer，或一个 TypedArray 的 .buffer 属性
 * byteOffset <integer> 开始拷贝的索引。默认为 0
 * length <integer> 拷贝的字节数
 * 默认为 arrayBuffer.length - byteOffset
 * 
 * 该方法将创建一个 ArrayBuffer 的视图，而不会复制底层内存
 * 例如，当传入一个 TypedArray 实例的 .buffer 属性的引用时
 * 这个新建的 Buffer 会像 TypedArray 那样共享同一分配的内存
 * 
 */

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 与 `arr` 共享内存
const buf = Buffer.from(arr.buffer);

// 输出: <Buffer 88 13 a0 0f>
console.log(buf);

// 改变原始的 Uint16Array 也会改变 Buffer
arr[1] = 6000;

// 输出: <Buffer 88 13 70 17>
console.log(buf);


const ab = new ArrayBuffer(10);
const buf = Buffer.from(ab, 0, 2);

// 输出: 2
console.log(buf.length);

/**
 * Buffer.from(buffer)
 * 
 * buffer <Buffer> 一个要拷贝数据的已存在的 Buffer
 * 将传入的 buffer 数据拷贝到一个新建的 Buffer 实例
 */

const buf1 = Buffer.from('buffer');
const buf2 = Buffer.from(buf1);

buf1[0] = 0x61;

// 输出: auffer
console.log(buf1.toString());

// 输出: buffer
console.log(buf2.toString());

// false
console.log(buf1 === buf2);


/**
 * Buffer.from(string[, encoding])
 * 
 * string <string> 要编码的字符串
 * encoding <string> string 的字符编码 默认: 'utf8'
 * 新建一个包含所给的 JavaScript 字符串 string 的 Buffer 
 * encoding 参数指定 string 的字符编码
 */

const buf1 = Buffer.from('this is a tést');

// 输出: this is a tést
console.log(buf1.toString());

// 输出: this is a tC)st
console.log(buf1.toString('ascii'));


const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

// 输出: this is a tést
console.log(buf2.toString());

/**
 * Buffer.from(object[, offsetOrEncoding[, length]])
 * 
 * object <Object> 一个支持 Symbol.toPrimitive 或 valueOf() 的对象
 * 
 * offsetOrEncoding <number> | <string> 字节偏移量或编码
 * 取决于 object.valueOf() 或 object[Symbol.toPrimitive]() 的返回值
 * 
 * length <number> 长度值
 * 取决于 object.valueOf() 或 object[Symbol.toPrimitive]() 的返回值
 * 
 * 那些其 valueOf() 方法返回值如果不严格等于 object 的对象
 * 返回Buffer.from(object.valueOf(), offsetOrEncoding, length)
 */

const buf = Buffer.from(new String('this is a test'));
// <Buffer 74 68 69 73 20 69 73 20 61 20 74 65 73 74>

// 那些支持 Symbol.toPrimitive 的对象
// 返回 Buffer.from(object[Symbol.toPrimitive](), offsetOrEncoding, length)

class Foo {
    [Symbol.toPrimitive]() {
      return 'this is a test';
    }
  }
  
  const buf = Buffer.from(new Foo(), 'utf8');
  // <Buffer 74 68 69 73 20 69 73 20 61 20 74 65 73 74>