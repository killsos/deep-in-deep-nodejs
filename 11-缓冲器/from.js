// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0x65, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from('test');
console.log(buf5);


const buf6 = Buffer.from('test', 'ql');