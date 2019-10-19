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

## 4 Debugging Using a Solution 20120328174853

* Debugging a Solution
  * Debug menu, Star Debugging item
    * F5 is a shortcut
  * Easier access to the source code and symbols since its loaded in the solution
  * Certain difference exists in comparison to debugging an already running process
    * Hosting for ASP.NET application
