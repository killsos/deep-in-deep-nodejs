// buffer 一个单位就是一个字节 8位  每四位用十六进制表示
 // alloc === allocate 分配

 const buf0 = Buffer.alloc(10);
 console.log(buf0);
 // <Buffer 00 00 00 00 00 00 00 00 00 00>
 
 const buf1 = Buffer.alloc(1,0xff);
 console.log(buf1); // <Buffer ff>
 
 const buf2 = Buffer.alloc(1,0x7f);
 console.log(buf2); // <Buffer 7f>