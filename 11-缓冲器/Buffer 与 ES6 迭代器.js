// Buffer 实例可以使用 ECMAScript 2015 (ES6) 的 for..of 语法进行遍历

const buf = Buffer.from([1, 2, 3]);

// 输出:
//   1
//   2
//   3
for (const b of buf) {
  console.log(b);
}