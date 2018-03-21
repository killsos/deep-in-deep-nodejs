/**
 * setImmediate(callback[, ...args])
 * 
 * callback <Function> 在 Node.js 事件循环的当前回合结束时要调用的函数。
 * ...args <any> 当调用 callback 时要传入的可选参数。
 * 
 * 预定立即执行的 callback
 * 它是在 I/O 事件的回调之后被触发
 * 
 * 返回一个用于 clearImmediate() 的 Immediate。
 */

 /**
  * 当多次调用 setImmediate() 时，callback 函数会按照它们被创建的顺序依次执行
  *  每次事件循环迭代都会处理整个回调队列
  * 如果一个立即定时器是被一个正在执行的回调排入队列的
  * 则该定时器直到下一次事件循环迭代才会被触发
  * 如果 callback 不是一个函数，则抛出 TypeError
  */