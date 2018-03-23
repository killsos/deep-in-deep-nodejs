/**
 * Class: URLSearchParams
 * URLSearchParamsAPI接口提供对URLquery部分的读写权限
 * URLSearchParams类也能够与以下四个构造函数中的任意一个单独使用
 * 
 * WHATWG URLSearchParams接口和querystring模块有相似的目的
 * 但是querystring模块的目的更加通用
 * 因为它可以定制分隔符（＆和=）
 * 但另一方面这个API是专门为URL查询字符串而设计的
 */

const { URL, URLSearchParams } = require('url');

const myURL = new URL('https://example.org/?abc=123');
console.log(myURL.searchParams.get('abc'));
// 输出 123

myURL.searchParams.append('abc', 'xyz');
console.log(myURL.href);
// 输出 https://example.org/?abc=123&abc=xyz

myURL.searchParams.delete('abc');
myURL.searchParams.set('a', 'b');
console.log(myURL.href);
// 输出 https://example.org/?a=b

const newSearchParams = new URLSearchParams(myURL.searchParams);
// 上面的代码等同于
// const newSearchParams = new URLSearchParams(myURL.search);

newSearchParams.append('a', 'c');
console.log(myURL.href);
// 输出 https://example.org/?a=b
console.log(newSearchParams.toString());
// 输出 a=b&a=c

// newSearchParams.toString() 被隐式调用
myURL.search = newSearchParams;
console.log(myURL.href);
// 输出 https://example.org/?a=b&a=c
newSearchParams.delete('a');
console.log(myURL.href);
// 输出 https://example.org/?a=b&a=c