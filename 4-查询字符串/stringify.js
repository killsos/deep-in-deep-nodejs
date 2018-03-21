/**
 * querystring.stringify(obj[, sep[, eq[, options]]])
 * 
 * obj <Object> 要序列化成 URL 查询字符串的对象。
 * sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
 * eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
 * options
 *   encodeURIComponent <Function> 把对象中的字符转换成查询字符串时使用的函数。
 *   默认为 querystring.escape()
 * 该方法通过遍历给定的 obj 对象的自身属性，生成 URL 查询字符串。
 */

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// 返回 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// 返回 'foo:bar;baz:qux'