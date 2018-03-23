// url 模块提供了一些实用函数，用于 URL 处理与解析。 可以通过以下方式使用：

// const url = require('url');

/**
 * URL 字符串与 URL 对象
 * 
 * url模块提供了两套API来处理URLs：
 * 
 * 一个是Node.js遗留的特有的API
 * 
 * 一个则是通常使用在web浏览器中 实现了WHATWG URL Standard的API.
 * https://url.spec.whatwg.org/
 * 
 * 
 * 
 * WHATWG与Node.js遗留的特有的API的比较如下。
 * 网址'http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'上方
 * 是由遗留的url.parse()返回的对象属性。网址下方的则是由WHATWG URL对象的属性。
 * WHATWG URL的origin属性包括protocol和host,但不包含username、password.
 */

 
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                                            href                                             │
├──────────┬──┬─────────────────────┬─────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │        host         │           path            │ hash  │
│          │  │                     ├──────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │   hostname   │ port │ pathname │     search     │       │
│          │  │                     │              │      │          ├─┬──────────────┤       │
│          │  │                     │              │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │   hostname   │ port │          │                │       │
│          │  │          │          ├──────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │        host         │          │                │       │
├──────────┴──┼──────────┴──────────┼─────────────────────┤          │                │       │
│   origin    │                     │       origin        │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴─────────────────────┴──────────┴────────────────┴───────┤
│                                            href                                             │
└─────────────────────────────────────────────────────────────────────────────────────────────┘


// 利用WHATWG API解析一个URL字符串:

const { URL } = require('url');
const myURL = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

/**
 * 在浏览器中，WHATWG URL在全局总是可用的
 * 而在Node.js中 任何情况下打开或使用一个链接都必须事先引用'url'模块：require('url').URL
 * 
 * 通过Node.js提供的API解析一个URL:
 * 
 */

const url = require('url');
const myURL =
  url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
