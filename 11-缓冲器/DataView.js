/**
 * DataView 视图是一个可以从ArrayBuffer对象中
 * 读写多种数值类型的底层接口
 * 在读写时不用考虑平台字节序问题
 * 
 * new DataView(buffer [, byteOffset [, byteLength]])
 * 
 */


 // create an ArrayBuffer with a size in bytes
var buffer = new ArrayBuffer(16);

// Create a couple of views
var view1 = new DataView(buffer);
var view2 = new DataView(buffer,12,4); //from byte 12 for the next 4 bytes
view1.setInt8(12, 42); // put 42 in slot 8

console.log(view2.getInt8(0));
// expected output: 42

/**
 * buffer
 * 一个 ArrayBuffer 或 SharedArrayBuffer  对象，DataView 对象的数据源
 * 
 * byteOffset 可选
 * 此 DataView 对象的第一个字节在 buffer 中的偏移。如果不指定则默认从第一个字节开始
 * 
 * byteLength 可选
 * 此 DataView 对象的字节长度。如果不指定则默认与 buffer 的长度相同
 * 
 * 返回值:
 * 一个由 buffer 生成的 DataView 对象
 */