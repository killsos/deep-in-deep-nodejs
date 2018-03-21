/**
 * path.resolve([...paths])
 * ...paths <string> 一个路径或路径片段的序列
 * 返回: <string>
 * 
 * path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
 */

path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'