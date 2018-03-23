/**
 * 在 ECMAScript 2015 (ES6) 引入 TypedArray 之前
 * JavaScript 语言没有读取或操作二进制数据流的机制
 * Buffer 类被引入作为 Node.js API 的一部分
 * 使其可以在 TCP 流或文件系统操作等场景中处理二进制数据流
 * 
 * TypedArray现已被添加进 ES6 中
 * Buffer 类以一种更优化、更适合 Node.js 用例的方式实现了 Uint8Array API
 * Buffer 类的实例类似于整数数组
 * 但Buffer的大小是固定的、且在 V8 堆外分配物理内存
 * Buffer 的大小在被创建时确定，且无法调整
 * 
 * Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer
 */
