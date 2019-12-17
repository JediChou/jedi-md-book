# Introduction to .NET Debugging using Visual Studio 2010

* [REF](https://www.0daydown.com/03/518640.html)
* [Official Site](https://www.pluralsight.com/courses/vs-intro-dbg)
* Author: Mario Hewardt

## 0 Importance of Debugging 20120328174853

* Logistics
  * Familiary with C# assumed
  * Familiary with Visual Studio development
  * All demos are shown using Visual Studio Utilimate

* Importancd of Debugging
  * $60 billion per year in economic losses due to software defects
  * Perfect code is an illusion
  * Legacy code
  * Deep understanding of system as a whole

## 1 Debugging a Process 20120328174853

* Why Visual Studio?
  * Lots of other debuggers and tools available
  * Visual Studio provides
    * Feature rich
    * Ease of use
    * Robust debugger
    * Withstood the test of time

* Suiteable for non production trouble shotting
  * Developer testing
  * QA testing
  * Pre production testing
  * Can sometimes be useed in production

* Debugg philosophy
  * Deubgging can viewed as one big decision tree
  * Indivdual nodes represent theories
  * Leaf nodes represent possible root causes
  * Traversal of tree boils down to process state inspection
  * Minimizing time to resolution is key
    * Careful traversal of the decision tree
    * Pattern recognition
    * Visualization and easy use helps minimize time to resolution

* Example Debugging Decision Tree
  * high memory
    * .NET heaps
      * .NET types?
        * Long referecens?
        * Finalizer problem?
      * Native
    * Native heaps
    * Virtual?

## 2 Debugging a Running Process 20120328174853

* How to Debug a Process
  * Attaching to an already running instance of a process
  * Staring a process under the Visual Studio debugger

* Debugging a Running Process
  * Without a solution loaded you can still debug
  * Attach to an existing process
  * Useful when solution isn't readily available
  * Accessible from the Debug menu (Attach to process)
    * Debug configuraiton also available in the Debug Menu (Option and Settings)
  * Source code debugging still available when attaching to process
    * All debugging options available

## 3 Demo Debugging a Running Process 20120328174853

* Jedi: 直接以Attach方式来调试一个Windows Form程序
* Jedi: 设置断点后可以断进来
* Lab: 已做实验，是OK的

## 4 Debugging Using a Solution

* Debugging a Solution
  * Debug menu, Star Debugging item
    * F5 is a shortcut
  * Easier access to the source code and symbols since its loaded in the solution
  * Certain difference exists in comparison to debugging an already running process
    * Hosting for ASP.NET application

## 5 Demo Debugging Using a Solution

* Jedi: 做了一个断点被handle的例子

## 6 Summary

* Fundamentals
* Debugging process
* How to debug a process
  * Running to debug a process
  * Debugging a new instance of a process
  
## 7 Introduction

* Debug windows
* Controlling execution
* Symbols
* Source server
* Options and settings
* Debugging toolbar
* Most all of these are accessible from the Debug Menu

## 8 Debug Windows

* Debug Windows are means to introspect on the state of a process
* Opens a new window with the selected information it
* Window categories
  * Data inspection
  * Threading
* Accessible from menu
  * Debug -> Windows
  
## 9 Controlling Execution

* By default, an application will run uninterrupped
* Debugging is all about looking at the state of the process
* Controlling execution allows
  * Pausing execution
  * Resuming execution
  * Stepping through the application in smaller chunks
  * In the case of Intellitrace, allows backward and forward stepping

* Exceptions control the execution of the application
* Behaviors of encountered exceptions can be configured
  * Based on categroy
    * C++ exceptions
    * CLR exceptions
    * MDA exceptions
  * Thrown
  * Use-unhanndled
  
## 10. Demo Controlling Execution

* Demo
* Jedi: 学到一招，侦错->例外状况->激活Common Lanague Runtime Exceptions
  * Jedi: 可以捕获被catch到的异常是否有被激活，绝对是调试必备！
  * Jedi: 在VS2010中的快捷键是Ctrl+D,E
  * Jedi: 但在VS2019中就没有这个功能了

## 11 Symbols

* Jedi: 首先解决符号文件是什么？
* Auxiliary metadata about your code
* Less important due to the self describing nature of .NET
* Private symbols gives additional information
  * Source line numbers
  * Local variable names
  
* Jedi: 再来解释Symbols是怎么用的！
* Jedi: Symbols也需要服务器，这有点让我纳闷。
* Using Symbols
  * Debugger must be told where the symbols reside
    * Debug -> Options and Settings -> Symbols
  * Callstack and Modules window can also load symbols
  * Microsoft has a public symbol server that can be selected
    * Most all of the Microsoft symbols are available
  * All or a few select symbol files can be loaded

## 12 Demo Symbols

* Demo
* Jedi
  * 用attach模式也可以进行调试
  * 需要配置Symbols目录
  * 若不配置，则打的断点是无效断点
  * Symbols目录可以自己随便指定一个目录(存放pdb)
* Jedi
  * 自行制定Symbols目录的调试在我的机器上无法重复出来
  * WindowsFormsApplication1.exe
  * WindowsFormsApplication1.pdb
  * Notice: pbd要和exe处于同一目录下
  
## 13 Source Server

* Enables Visual Studio to pull source files from source control system
* You no longer have to worry about the correct version of the source file
  * For example, hotfixes, V1 vs V2 etc
* PDF files contain the "path" to ther source server

## 14 Demo Debugging .NET Framework Code

* Demo
* Jedi: Symbols option增加一个MS的地址
  * [link1](http://referencesource.microsoft.com/symbols)
  * 在我电脑上似乎没用！
* Jedi: 重要选项要勾选上
  * 侦错 -> 一般 -> 启用Just My Code（仅限Managed）
  * 侦错 -> 一般 -> 启用来源伺服器支援

* Jedi: 似乎没有办法Step Into到DataSet的构造方法、File中的静态方法中去；
