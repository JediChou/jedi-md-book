# ASP.NET 3.5揭秘-卷1

* Study: Jedi Chou

## 第1章 ASP.NET Framework概述

### 1.3.1 动态编译

* ASP.NET临时文件夹
  * \WINDOWS\Microsofot.NET\Framework\v2.0.50727\Temporary ASP.NET Files

* 要灵活使用aspnet_compiler.exe
* Jedi: 去查下MSDN，每个参数都要做个例子
* "通过设置CompilationMode属性，可以禁用单个页面"
  * 属性用于<%@ Page %>指令
  * Jedi: Lab-20161227-ASP.NET-Unleased-010301

* 代码清单1-12 FirstPage.aspx
  * private golbal::System.Web.UI.WebControls.Label @_BuildControllblServerTime()
  * private golbal::System.Web.UI.HtmlControls.HtmlForm @_BuildContorlform()
  * Jedi: 没有誊写完整的代码，没办法执行编译
  * Jedi: 这里要做些实验
* Jedi: 选择不同的程序池其动态编译的放置到那个目录？

### 1.3.2 控件树

* ASP.NET页面即“控件树”

```asp.net
__Page ASP.showcontroltree_aspx
ctl02 System.Web.UI.LiteralControl
ctl00 System.Web.UI.HtmlControls.HtmlHead
    ctl01 System.Web.UI.HtmlControls.HtmlTitle
ctl03 System.Web.UI.LiteralControl
form1 System.Web.UI.HtmlControls.HtmlForm
    ctl04 System.WebUI.LiteralControl
    DropDownList1 System.Web.UI.WebControls.DropDownList
    ctl05 System.Web.UI.LiteralControl
    Button1 System.Web.UI.WebControls.Button
    ctl06 System.Web.UI.LiteralControl
ctl07
```

```asp.net
__Page ASP.ch1_codelist0111_aspx
ctl01 System.Web.UI.LiteralControl
ctl02 System.Web.UI.LiteralControl
Head1 System.Web.UI.HtmlControls.HtmlHead
    ctl00 System.Web.UI.HtmlControls.HtmlTitle
ctl03 System.Web.UI.LiteralControl
form1 System.Web.UI.HtmlControls.HtmlForm
    ctl04 System.Web.UI.LiteralControl
    Label1 System.Web.UI.WebControls.Label
    ctl05 System.Web.UI.LiteralControl
    Label2 System.Web.UI.WebControls.Label
    ctl06 System.Web.UI.LiteralControl
    btnAdd System.Web.UI.WebControls.Button
    ctl07 System.Web.UI.LiteralControl
```

* LiteralControl类用于表示页面中的HTML内容

### 1.3.3 使用代码隐藏页面

* ASP.NET Framework允许创建两种不同类型的ASP.NET页面
  * 但文件页面或双文件页面

* 错误信息
  * 加载错误: CS0246: The type or namespace name 'system' could not be found (are you missing a using directive or an assembly reference?
  * 未实现超类的方法: ASPNET: Make sure that the class defined in this code file matches the 'inherits' attribute, and that it extends the correct base class (e.g. Page or UserControl).
  * 必须继承：The 'CodeFile' attribute cannot be used without an 'Inherits' attribute

* 代码是如何隐藏工作的
  * CodeList0112.aspx, D:\temp\ASP.NET3.5-Unleased\ch1
  * CodeListCodeBehind.aspx.cs, D:\temp\ASP.NET3.5-Unleased\ch1
  * codelist0112.aspx.98a39332.compiled (Jedi:这是一个XML文件)
    * c:\windows\Microsoft.NET\Framework64\TemporaryASP.NET Files\root\216ce3e4\f77993589
* 选择单文件页面或代码隐藏页面

### 1.3.4 处理页面事件

* 页面执行生命周期(page execution lifecycle)
  * PreInit, 在页面初始化之前发生
  * Init, 初始化服务器控件，它是在其生命周期的第一步时发生
  * InitComplete, 当页面初始化已完成时发生
  * PreLoad
  * Load
  * LoadComplete
  * PreRender
  * PreRenderComplete
  * SaveStateComple
  * Unload
