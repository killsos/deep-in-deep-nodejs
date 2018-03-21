/**
 * 清除setTimeout定时器
 */

let id = setTimeout(() => {
    console.log(setImmediate);
});
clearTimeout(id);