/**
 * path.isAbsolute() 方法会判定 path 是否为一个绝对路径
 * 如果给定的 path 是一个长度为零的字符串，则返回 false。
 * 
 */

path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false