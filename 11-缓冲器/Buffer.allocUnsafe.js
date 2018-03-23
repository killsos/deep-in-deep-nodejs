/**
 * Buffer.allocUnsafe(size)
 * 
 * 以这种方式创建的 Buffer 实例的底层内存是未初始化的
 * 新创建的 Buffer 的内容是未知的，且可能包含敏感数据
 * 可以使用 buf.fill(0) 初始化 Buffer 实例为0
 */

const buf = Buffer.allocUnsafe(10);

// 输出: (内容可能不同): <Buffer a0 8b 28 3f 01 00 00 00 50 32>
console.log(buf);

buf.fill(0);

// 输出: <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf);

/**
 * 注意，Buffer 模块会预分配一个大小为 Buffer.poolSize 的内部 Buffer 实例作为快速分配池
 *  用于使用 Buffer.allocUnsafe() 新创建的 Buffer 实例
 * 以及废弃的 new Buffer(size) 构造器
 *  仅限于当 size 小于或等于 Buffer.poolSize >> 1 （
 * Buffer.poolSize 除以2后的最大整数值）
 * 
 * 对这个预分配的内部内存池的使用
 * 是调用 Buffer.alloc(size, fill) 和 Buffer.allocUnsafe(size).fill(fill) 的关键区别
 * 具体地说，Buffer.alloc(size, fill) 永远不会使用这个内部的 Buffer 池
 * 但如果 size 小于或等于 Buffer.poolSize 的一半
 * Buffer.allocUnsafe(size).fill(fill) 会使用这个内部的 Buffer 池
 * 当应用程序需要 Buffer.allocUnsafe() 提供额外的性能时
 * 这个细微的区别是非常重要的。
 */