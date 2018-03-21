/**
 * path.parse() 方法返回一个对象
 * 对象的属性表示 path 的元素
 * 尾部文件分隔符会被忽略
 * 
 * 返回的对象有以下属性:
 * dir <string>
 * root <string>
 * base <string>
 * name <string>
 * ext <string>
 */

path.parse('/home/user/dir/file.txt');

// 返回:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
