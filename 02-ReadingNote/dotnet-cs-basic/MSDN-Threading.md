# 托管线程处理

* [Ref](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/)

* 本章内容
  * 托管线程处理基本知识
  * 使用线程和线程处理
  * 托管线程处理的最佳做法
  * 线程处理对象和功能

* 参考
  * System.Threading
  * System.Collections.Concurrent
  * System.Threading.Tasks

* 相关章节
  * 应用作用域
  * Asynchronous File I/O
  * 基于任务的异步模式(TAP)
  * 使用异步方法调用同步方法
  * 并行编程
  * 并行LINQ(PLINQ)

## 1. 托管线程处理基本知识

* 本节内容
  * 线程与线程处理
  * 托管线程中的异常
  * 为多线程处理同步数据
  * 前台和后台线程
  * Windows中的托管和非托管线程
  * 线程本地存储：线程相关的静态字段和数据槽

### 1.1 线程与线程处理

* [Page](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/threads-and-threading)

* **进程和线程**

  * 进程
    * 进程是一种正在执行的程序
    * 操作系统使用进程来分隔正在执行的应用程序。

  * 线程  
    * 线程是操作系统向其分配处理器时间的基本单元。
    * 每个线程具有计划优先级并维护系统用于保存线程执行暂停时线程上下文的一组结构。
    * 线程上下文包含线程顺畅继续执行所需的全部信息，包括线程的一组CPU寄存器和堆栈。
    * 进程的所有线程共享其虚拟地址空间。
    * 线程可执行任意部分的程序代码，包括其他线程正在执行的部分。

  * .NET程序
    * 默认情况下，.NET程序由单个线程（通常称为主线程）启动 。
    * 但是，它可以创建其他线程，以与主线程并行或同时执行代码。 这些线程通常称为工作线程 。

* **何时使用多个线程**

  * 好处：使用多线程可以提高应用程序的响应能力，并利用多处理器或多核系统提高应用程序吞吐量。

  * 分场景：
    * 请思考桌面应用程序，其主线程负责用户界面元素并响应用户操作。 使用工作线程执行耗时的操作
    * 可以使用专用线程，提高网络或设备通信对传入消息或事件的响应能力。

  * 如果程序执行可并行执行的操作
    * 可通过在单独线程中执行这些操作并在多处理器或多核系统中运行程序减少总执行时间
    * 在此类系统中，使用多线程处理可能会提高吞吐量和响应能力。

* **如何在.NET中使用多线程处理**

  * .NET Framework 4
    * 任务并行库(TPL)
    * 并行LINQ(PLINQ)
  
  * TPL和PLINQ依赖于ThreadPool线程
    * System.Threading.ThreadPool类为.NET应用程序提供工作线程池
    * 还可使用线程池线程。
    * 可参考[托管线程池](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/the-managed-thread-pool)

  * 还可以使用表示托管线程的System.Threading.Thread类
    * 参考[使用线程和线程处理](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/using-threads-and-threading)

  * 多个线程可能需要访问共享的资源。
    * 要使资源保持未损坏的状态并避免争用条件，必须同步对资源的线程访问。
    * 可能还需要协调多个线程的交互。
    * .NET 提供了一系列可用于同步对共享资源或协调线程交互的访问的类型。
    * 参考[同步基元概述](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/overview-of-synchronization-primitives)

  * 请务必处理线程异常。 线程中未经处理的异常通常会终止进程。
    * 参考[托管线程异常](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/exceptions-in-managed-threads)

### 1.2 托管线程中的异常

* [Page](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/exceptions-in-managed-threads)

* **背景**

  * 从.NET Framework 2.0版开始，公共语言运行时允许线程中的多数未经处理的异常正常继续。
    * 在多数情况下，这意味着未经处理的异常会导致应用程序终止。

  * 公共语言运行时为用于控制程序流的某些未经处理的异常提供支持：
    * 由于Abort得到调用，因此ThreadAbortException 在线程中抛出。
    * 由于线程执行时所在的应用域正在卸载，因此AppDomainUnloadedException在线程中抛出。
    * 公共语言运行时或主机进程通过引发内部异常来终止线程。

* **在开发过程中暴露线程处理问题**

  * 如果允许线程不给出任何提示就失败（不终止应用程序），则可能无法检测出重大的编程问题。
  * 如果允许线程中未经处理的异常正常继续，直到操作系统终止程序为止，将会在开发和测试过程中暴露此类问题。
  * 对先前版本的更改

* **主机重写**

  * ICLRPolicyManager::SetUnhandledExceptionPolicy 函数用于设置未经处理的异常的策略

### 1.2 为多线程处理同步数据

[Page](https://docs.microsoft.com/zh-cn/dotnet/standard/threading/synchronizing-data-for-multithreading)

