/**
 * 错误常量由 os.constants.errno 给出
 */

// POSIX 错误常量
// 常量	描述
// E2BIG	表明参数列表比期望的要长.
// EACCES	表明操作没有足够的权限.
// EADDRINUSE	表明该网络地址已经在使用.
// EADDRNOTAVAIL	表明该网络地址当前不能使用.
// EAFNOSUPPORT	表明该网络地址簇不被支持.
// EAGAIN	表明当前没有可用数据,稍后再次尝试操作.
// EALREADY	表明socket有一个即将发生的连接在进行中.
// EBADF	表明一个文件描述符不可用.
// EBADMSG	表明一个无效的数据信息.
// EBUSY	表明一个设备或资源处于忙碌中.
// ECANCELED	表明一个操作被取消.
// ECHILD	表明没有子进程.
// ECONNABORTED	表明网络连接已经被终止.
// ECONNREFUSED	表明网络连接被拒绝.
// ECONNRESET	表明网络连接被重置 .
// EDEADLK	表明一个资源死锁已经被避免 .
// EDESTADDRREQ	表明需要目的地址 .
// EDOM	表明参数超过了函数的作用域 .
// EDQUOT	表明已经超过磁盘指标 .
// EEXIST	表明文件已经存在 .
// EFAULT	表明一个无效的指针地址 .
// EFBIG	表明文件太大 .
// EHOSTUNREACH	表明主机不可达 .
// EIDRM	表明识别码已经被移除 .
// EILSEQ	表明一个非法的字节序 .
// EINPROGRESS	表明一个操作已经在进行中 .
// EINTR	表明一个函数调用被中断 .
// EINVAL	表明提供了一个无效的参数 .
// EIO	表明一个其他的不确定的 I/O 错误.
// EISCONN	表明socket已经连接 .
// EISDIR	表明路径是目录 .
// ELOOP	表明路径上有太多层次的符号连接 .
// EMFILE	表明有太多打开的文件 .
// EMLINK	表明文件上有太多的硬连接 .
// EMSGSIZE	表明提供的信息太长 .
// EMULTIHOP	表明多跳被尝试 .
// ENAMETOOLONG	表明文件名太长 .
// ENETDOWN	表明网络关闭 .
// ENETRESET	表明连接被网络终止 .
// ENETUNREACH	表明网络不可达 .
// ENFILE	表明系统中打开了太多的文件 .
// ENOBUFS	表明没有有效的缓存空间 .
// ENODATA	表明在流头读取队列上没有可用的信息 .
// ENODEV	表明没有这样的设备 .
// ENOENT	表明没有这样的文件或目录 .
// ENOEXEC	表明一个执行格式错误 .
// ENOLCK	表明没有可用的锁 .
// ENOLINK	表明链接在服务 .
// ENOMEM	表明没有足够的空间 .
// ENOMSG	表明想要的数据类型没有信息 .
// ENOPROTOOPT	表明给定的协议不可用 .
// ENOSPC	表明该设备上没有可用的空间 .
// ENOSR	表明没有可用的流资源 .
// ENOSTR	表明给定的资源不是流 .
// ENOSYS	表明功能没有被实现 .
// ENOTCONN	表明socket没有连接 .
// ENOTDIR	表明路径不是目录 .
// ENOTEMPTY	表明目录是非空的 .
// ENOTSOCK	表明给定的项目不是socket .
// ENOTSUP	表明给定的操作不受支持 .
// ENOTTY	表明一个不适当的 I/O 控制操作.
// ENXIO	表明没有该设备或地址 .
// EOPNOTSUPP	表明一个操作不被socket所支持. 注意尽管ENOTSUP 和 EOPNOTSUPP 在Linux上有相同的值时, 根据 POSIX.1 规范,这些错误值应该不同.)
// EOVERFLOW	表明一个值太大以至于难以用给定的数据类型存储.
// EPERM	表明操作没有被许可.
// EPIPE	表明破裂的管道 .
// EPROTO	表明协议错误 .
// EPROTONOSUPPORT	表明一个协议不被支持 .
// EPROTOTYPE	表明socket错误的协议类型 .
// ERANGE	表明结果太大了 .
// EROFS	表明该文件系统是只读的 .
// ESPIPE	表明无效的查询操作 .
// ESRCH	表明没有这样的进程.
// ESTALE	表明该文件处理是稳定的 .
// ETIME	表明一个过期的时钟 .
// ETIMEDOUT	表明该连接超时 .
// ETXTBSY	表明一个文本文件处于忙碌 .
// EWOULDBLOCK	表明该操作被屏蔽 .
// EXDEV	表明一个不合适的连接 .