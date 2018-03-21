/**
 * 清除setInterval定时器
 */

let id = setInterval(() => {
    console.log(setImmediate);
});
clearInterval(id);