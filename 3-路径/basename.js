/**
 * path.basename(path[, ext])
 * path <string>
 * ext <string> 可选的文件扩展名
 * 返回: <string>
 * 
 * path.basename() 方法
 * 返回一个 path 的最后一部分，
 * 类似于 Unix 中的 basename 命令。
 * 没有尾部文件分隔符
 */
const path = require('path');

path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'