/**
 * os.constants.signals
 * 信号常量由 os.constants.signals 给出
 */

// 常量	描述
// SIGHUP	发送来表明当一个控制终端关闭或者是父进程退出.
// SIGINT	发送来表明当一个用户期望中断一个进程时. ((Ctrl+C)).
// SIGQUIT	发送来表明当一个用户希望终止一个进程并且执行核心转储.
// SIGILL	发送给一个进程来通知它已经试图执行一个非法的,畸形的,未知的或特权的指令.
// SIGTRAP	发送给一个进程当异常已经发生了.
// SIGABRT	发送给一个进程来请求终止
// SIGIOT	SIGABRT的同义词
// SIGBUS	发送给一个进程来通知它已经造成了总线错误.
// SIGFPE	发送给一个进程来通知它已经执行了一个非法的算术操作.
// SIGKILL	发送给一个进程来立即终止它.
// SIGUSR1 SIGUSR2	发送给一个进程来确定它的用户定义情况.
// SIGSEGV	发送给一个进程来通知段错误.
// SIGPIPE	发送给一个进程当它试图写入一个非连接的管道时.
// SIGALRM	发送给一个进程当系统时钟消逝时.
// SIGTERM	发送给一个进程来请求终止.
// SIGCHLD	发送给一个进程当一个子进程终止时.
// SIGSTKFLT	发送给一个进程来表明一个协处理器的栈错误.
// SIGCONT	发送来通知操作系统继续一个暂停的进程.
// SIGSTOP	发送来通知操作系统暂停一个进程.
// SIGTSTP	发送给一个进程来请求它停止.
// SIGBREAK	发送来表明当一个用户希望终止一个进程.
// SIGTTIN	发送给一个进程当它在后台读取TTY时.
// SIGTTOU	发送给一个进程当它在后台写入TTY时.
// SIGURG	发送给一个进程当socket由紧急的数据需要读取时.
// SIGXCPU	发送给一个进程当它超过他在CPU使用上的限制时.
// SIGXFSZ	发送给一个进程当它文件成长的比最大允许的值还大时.
// SIGVTALRM	发送给一个进程当一个虚拟时钟消逝时.
// SIGPROF	发送给一个进程当一个系统时钟消逝时.
// SIGWINCH	发送给一个进程当控制终端改变它的大小.
// SIGIO	发送给一个进程当I/O可用时.
// SIGPOLL	SIGIO同义词
// SIGLOST	发送给一个进程当文件锁丢失时.
// SIGPWR	发送给一个进程来通知功率错误.
// SIGINFO	SIGPWR同义词
// SIGSYS	发送给一个进程来通知有错误的参数.
// SIGUNUSED	SIGSYS的同义词