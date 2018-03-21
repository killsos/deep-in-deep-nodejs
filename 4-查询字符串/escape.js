/**
 * querystring.escape(str)
 * 
 * 对给定的 str 进行 URL 编码
 * 该方法是提供给 querystring.stringify() 使用的
 * 通常不直接使用。 它之所以对外开放
 * 是为了在需要时可以通过给 querystring.escape 赋值一个函数来重写编码的实现。
 */

const querystring = require('querystring');

console.log(querystring.escape('http://nodejs.cn/api/querystring.html'));
// http%3A%2F%2Fnodejs.cn%2Fapi%2Fquerystring.html