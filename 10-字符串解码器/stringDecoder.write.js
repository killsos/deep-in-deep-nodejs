/**
 * stringDecoder.write(buffer)
 * 
 * buffer <Buffer> 包含待解码字节的 Buffer
 * 返回一个解码后的字符串
 * 并确保返回的字符串不包含 Buffer 末尾残缺的多字节字符
 * 残缺的多字节字符会被保存在一个内部的 buffer中用于
 * 下次调用 stringDecoder.write() 或 stringDecoder.end()
 */