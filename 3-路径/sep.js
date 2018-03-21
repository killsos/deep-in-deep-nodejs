/**
 * path.sep
 * 提供了平台特定的路径片段分隔符：
 * Windows 上是 \
 * POSIX 上是 /
 */

'foo/bar/baz'.split(path.sep);
// 返回: ['foo', 'bar', 'baz']