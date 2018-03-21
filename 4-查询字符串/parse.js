/**
 * querystring.parse(str[, sep[, eq[, options]]])
 * 
 * str <string> 要解析的 URL 查询字符串。
 * sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
 * eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
 * options <Object>
 * decodeURIComponent <Function> 解码查询字符串的字符时使用的函数 
 * 默认为 querystring.unescape()。
 * maxKeys <number> 指定要解析的键的最大数量。默认为 1000。指定为 0 则不限制。
 * 该方法会把一个 URL 查询字符串 str 解析成一个键值对的集合
 */

 const querystring = require('querystring');

 console.log(querystring.parse('foo=bar&abc=xyz&bcd=123'));
 // { foo: 'bar', abc: 'xyz', bcd: '123' }

 /**
  * 默认情况下，查询字符串中的字符会被视为使用 UTF-8 编码。 
  * 如果使用的是其他字符编码，则需要指定 decodeURIComponent 选项，
  */

// 假设存在 gbkDecodeURIComponent 函数。
querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,{
    decodeURIComponent: gbkDecodeURIComponent });