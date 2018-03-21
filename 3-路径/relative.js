/**
 * path.relative(from, to)
 * path.relative() 方法返回从 from 到 to 的相对路径（基于当前工作目录）
 * 如果 from 和 to 各自解析到同一路径（调用 path.resolve()
 * 则返回一个长度为零的字符串
 * 
 * 如果 from 或 to 传入了一个长度为零的字符串
 * 则当前工作目录会被用于代替长度为零的字符串。
 */

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// 返回: '../../impl/bbb'