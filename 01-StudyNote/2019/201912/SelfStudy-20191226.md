# Self Study

Author: Jedi Chou, Create at 2019.12.26 8:32 AM

* Daily study
  * Check-in
    * 101WeiQi daily exercise check-in. 8:45
    * Read articles and check interview invitation (MaiMai APP). 8:51
    * NowCoder check-in and do an exercise that contains 20 puzzles. 8:52
    * Don't memorize words APP check-in. 8:53
    * 163 music APP check-in. 8:53
    * Tencent cartoon APP check-in. 8:53
    * Exercise of Vocabulary (vocabulary.com). 9:11

  * Micro habit
    * Read Sina Blog. 9:00
    * Reading 1 minutes at SIMPLE Wiki. 9:07

  * Reading
    * 163.com mail. 8:33
    * Feedly RSS. 8:44

* Weekly review
  * Read a thesis and don't record
  * Open class APP by 163.com check-in

## Other

* Async-Profiler
  * [repo](http://github.com/jvm-profiling-tools/async-profiler)

* 郁闷,突然间发现OmniSharp会发生不可调试的问题. 14:23
  * 发现手动建立的fib在命令行下都可以正常build、run
  * 但在vscode中就会调试插件就会报错，其信息如下：
  * There are unresoved dependencies. Please execute the restore command to continue.
  * 尝试安装低版本的OmniSharp也还是无法解决问题
  * 现在怀疑是dotnet core版本升级到3.1后引发的问题. 14:23
  * 发现WakaTime有些影响VSCode的性能，会不停的去连接服务器. 14:27
  * 问题依旧，而且报告npm、typescript插件都很慢，是否是因为内存不足？ 14:30
  * 稍后重启看看，可能是Chrome占用了较多内存。14:31
  * 发现点击错误提示的"restore"按钮后，在"输出"中有一段乱码，原因不明. 14:58
  
  ```output
  d:\temp\fib\fib.csproj �Ļ�ԭ�� 16.62 ms ����ɡ�
  Done: 0.
  ```

  * OmniSharp的repo上有人提到在增加以下设定就会修复问题. 15:30
  
  ```json
  "omnisharp.path": "1.34.4-beta.7"
  ```

  * 经过若干测试后发现，修改成1.34.4-beta.8后在我的电脑上问题解决. 16:34

  ```json
  "omnisharp.path": "1.34.4-beta.8"
  ```

  * 不过发现实际上OmniSharp的1.34.4-beta8其实根本就下载不到，所以似乎OmniSharp干脆就不检查依赖了. 16:37
