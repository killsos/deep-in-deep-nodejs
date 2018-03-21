/**
 * 清除setImmediate定时器
 */

let id = setImmediate(() => {
    console.log(setImmediate);
});
clearImmediate(id)