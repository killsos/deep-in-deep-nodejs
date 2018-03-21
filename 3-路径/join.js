/**
 * path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起
 * 并规范化生成的路径
 * 长度为零的 path 片段会被忽略。 
 * 如果连接后的路径字符串是一个长度为零的字符串，
 * 则返回 '.'，表示当前工作目录
 * 
 * path.join([...paths])
 * ...paths <string> 一个路径片段的序列
 */

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// 抛出 'TypeError: Path must be a string. Received {}'

// 最常用和__dirname一起

path.join(__dirname, 1);
