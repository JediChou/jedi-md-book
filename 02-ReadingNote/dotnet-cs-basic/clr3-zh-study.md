# CLR via C# (中文第3版)

## 1.4 執行程序集的代碼

* lab-測試編譯器開關

```text
/optimize- /debug- (defalut)
/optimize- /debug(+full/pdonly)
/optimize+ /debug(-/full/pdonly)
```

* lab-確認那個開關會導致生成pdb文件

```text
只有在指定/debug(+full/pdonly)開關的前提下，編譯器才會
生成一個Program Databse(PDB)文件
```

* lab-Visual Studio開關在哪裡設置

```text
在Visual Studio中新建一個C#項目時，項目的“調試”（Debug）配置
指定的是/optimize-和/debug:full開關，而“發布”（Release）配置
指定的是/optimize+和/debug:pdonly開關。
```

* lab-使用NGen.ext

```text
这个工具将一个程序集的所有IL代码编译成本地代码，并将这些本地
代码保存到一个磁盘文件中。
```

* unsafe編譯器選項
* PEVerify.exe，確認是否保存不安全代碼

### 1.4.1 IL和验证

* IL是基于栈的
* IL没有提供操作寄存器的指令
* IL指令还是“无类型”(typeless)的
* 每个托管的应用程序都在一个AppDomain中执行
* 模型情况下，每个托管的EXE文件都在它自己的独立地址空间中运行，这个地址空间只有一个AppDomain
* 然而，CLR的宿主进程（比如IIS或MSSQL）可均定在单个操作系统中运行多个AppDomain

### 1.4.2 不安全的代码

* C#编译器默认生成safe代码
* 但也允许生成unsafe代码
* JIT编译unsafe方法时，会验证是否授予了System.Security.Permissions.SecurityPermission权限
* 如果代码没授权会抛出两个异常
  * System.InvalidProgramException
  * System.Security.VerificationException
* PEVerify.exe会检查其中是否含有不安全代码
* IL和知识产权保护，这里提到了混淆器（obfuscator）

## 1.5 本地代码生成器：NGen.exe

* 优点：
  * 加快应用程序的启动速度
  * 减小应用程序的工作集

* 缺点：
  * 没有知识产权保护
  * NGen生成的文件可能失去同步
  * 较差的执行时性能

* Jedi: 注意NGen版本之间的差异

## 1.6 Framework类库

* .NET Framework, Framework Class Library, FCL
* Type
  * Web服务（Web service）
  * Web窗体应用程序（Web Form）
  * Windows应用程序
  * 富Internet应用程序（Rich Internet Application, RIA）
  * Windows服务，Service Control Manager, SCM
  * 数据库存储过程
  * 组件库

* Part Namespace description
  * System, 包含每个应用程序都要用到的所有基本类型
  * System.Data，包含用于和数据库通信以及处理数据的类型
  * System.IO，包含用于执行流I/O以及浏览目录/文件的类型
  * System.Net，包含进行低级网络通信，并与一些常用Internet协议协作的类型
  * System.Runtime.InteropServices，包含允许托管代码访问非托管操作系统平台功能
  * System.Security，包含用于保护数据和资源的类型
  * System.Text，包含处理各种编码方式（比如ASCII和Unicode）的文本的类型
  * System.Threading，包含用于异步操作和同步资源访问的类型
  * System.Xml，包含用于处理XML架构（XML Schema）和数据的类型

## 1.7 通用类型系统

* Common Type System, CTS
* CTS -> CLI (Common Language Infrastructure)
* ECMA的Technical Committee 39专题网站
* 字段（Field）；方法（Method）；属性（Property）；事件（Event）
* private, family, family and assembly, family or assembly, public
* System.Object类型允许做下面这些事情
  * 比较两个实例的相等性
  * 获取实例的哈希码
  * 查询一个实例的真正类型
  * 执行实例的浅（按位）拷贝
  * 获取实例对象的当前状态的一个字符串表示
* lab files
  * clr_lab20151210_0843.cs

## 1.8 公共语言规范

* CLR/CTS
* Test類型的字段和方法（從元數據中獲取）
  * AnEvent, 字段, 時間：字段名是AnEvent，類型是System.EventHanlder
  * .ctor，方法，構造器
  * Finalize，方法，析构器
  * add_AnEvent，方法，事件的add访问器方法
  * get_AProperty，方法，属性的get访问器方法
  * get_Item，方法，索引器的get访问器方法
  * op_Addition，方法，+操作符
  * op_Equality，方法，==操作符
  * op_Inequlity，方法，!=操作符
  * remove_AnEvent，方法，事件的remove访问器方法
  * set_AProperty，方法，属性的set访问器方法
  * set_Item，方法，索引器的set访问器方法
  * 其他还包括：.class, custom, AnEvent, AProperty, Item

* lab files
  * clr_lab20151210_0904.cs
  * clr_lab20151210_1059.cs

## 1.9 与非托管代码的互操作性

* 托管代码能调用DLL中的非托管函数
  * P/Invoke, Platform Invoke
  * 频繁调用Kernel32.dll, User32.dll
    * lab C#可调用Kernel32.dll导出的CreateSemaphone函数

* 托管代码可使用现有的COM组件（服务器）
  * .NET Framework SDK -> TlbImp.exe
    * Jedi: .NET Framework Type Library to Assembly Converter
    * 例如：可以从一个C#应用程序中使用DirectX COM组件

* 非托管代码可使用托管类型（服务器）
  * 例如：可以使用C#来创建一个ActiveX空间或者一个Shell扩展
  * 详细参考.NET Framework SDK中的TlbExp.exe、RegAsm.exe

## Ch2 生成、打包、部署和管理用用程序及类型

* Target
  * .NET Framework部署目标
  * 将类型生成到模块中
  * 元数据概述
  * 将模块合并成程序集
  * 程序集版本资源信息
  * 语言文化
  * 简单应用程序部署（私有部署的程序集）
  * 简单管理控制（配置）

### 2.1 .NET Framework部署目标

* Microsoft产品缺陷
  * 不能确保向前兼容
  * 安装的复杂度太高
  * 安全性弱

* 微软正在尽力解决此问题
  * 通过授权来控制（Jedi:简直是折磨大众）

### 2.2 将类型生成到模块中

* csc /out:Program.exe /t:exe /r:MSCorLib.dll clr_lab20151210_1404.cs
* csc /out:Program.exe /t:exe clr_lab20151210_1404.cs
* MSCoreLib.dll，它包含了所有核心类型：Byte, Char, String, Int32
* 如果处于某种原因，不希望自动应用MSCorLib.dll程序集, 那么可以打开/nostdlib开关
  * csc /out:Program.exe /t:exe /nostdlib clr_lab20151210_1404.cs
  * 这样编译当然会出错，因为找不到基本类型咯!

* 响应文件
  * 执行csc.exe时，编译器会打开响应文件，并使用其中包含的所有开关
  * 感觉像是这些开关直接在命令行上传递给csc.exe
  * Myproject.rsp Demo

    ```bat
      /out:MyProject.exe
      /target:winexe
    ```

  * csc @MyProject.rsp CodeFile1.cs CodeFile2.cs
  * C#编译器允许同时指定多个响应文件(即本地的、全局的)。
  * 除了在命令行上显示指定的文件，编译器还会自动在当前目录查找一个本地CSC.rsp文件
  * 系统默认的全局csc.rsp存在 %SystemRoot%\Microsoft.NET\Framework\vX.X.X目录中
  * reference开关的检索次序
    * 工作目录
    * csc.exe本身所在目录
    * 使用/lib编译器开关指定的任何目录
    * 使用LIB环境变量指定的任何目录

### 2.3 元数据概述

* 一个托管PE文件由4个部分构成：PE32(+)头、CLR头、元数据、IL
  * PE32(+)头是Windows要求的标准信息
  * CLR头是一个小的信息块，是那些需要CLR的模块说特有的
    * CLR的主、次版本号；
    * 一些标志flag；
    * 一个MethodDef token，它指定了模块的入口方法
    * 一个可选的强名称数字签名
    * 还包含模块内部的特定元数据表的大小和偏移量
    * Memo: 可检查CorHdr.h中的定义（IMAGE_COR20_HEADER）
  * 元数据
  * IL代码

* 元数据：是一个二进制数据块，由几个表构成。
  * 定义表，definition table
  * 引用表，reference table
  * 清单表，manifest table
* 常用的元数据定义表 （Table 2-1）
  * ModuleDef

    ```text
      总是包含一个用于标识模块的记录项。在这个记录项中，包含模块的文件名和扩
      展名（但不含路径），以及一个模块版本ID（采用由编译器创建的GUID的形式）。
      这允许自由地重命名文件，同时保留其原始名称记录。然而，我们强烈反对重命
      名一个，它可能妨碍CLR在运行时正确定位程序集。
    ```

  * TypeDef

    ```text
      模块中定义的每个类型都在这个定义表中有一个对应的记录项。每个记录项都包
      含类型的名称、基类型、一些标志（public,private等）以及一些索引，这些索引
      指向该类型在MethodDef表中拥有的方法、在FieldDef表中拥有的字段、在
      PropertyDef表中拥有的属性以及在EventDef表中拥有的时间
    ```

  * MethodDef

    ```text
      模块中定义的每个方法都在这个定义表中有一个对应的记录项。每个记录项都包
      含方法的名称，一些标志（private,public,virtual,abstract,static,final等）、
      签名以及该方法的IL代码在模块中的偏移量。每个记录项还应用了ParamDef表
      中的一个记录项，后者包括与方法参数有关的更多信息。
    ```

  * FieldDef

    ```text
      模块中定义的每个字段都在这个定义表中有一个对应的记录项。每个记录项都包
      含标志（private, public）等、类型和名称
    ```

  * ParamDef

    ```text
      模块中定义的每个参数都在这个定义表中有一个对应的记录项。每个记录项都包
      含标志（in, out, retval等）、类型和名称
    ```

  * PropertyDef

    ```text
      模块中定义的每个属性都在这个定义表中有一个对应的记录项。每个记录项都包
      含标志、类型和名称
    ```

  * EventDef

    ```text
      模块中定义的每个属性都在这个定义表中有一个对应的记录项。每个记录项都包
      含标志、类型和名称
    ```

* 常用的引用元数据表

  * AssemblyRef

    ```text
      模块中引用的每个程序集在这个表中都有一个对应的记录项。每个记录项都包含
      绑定到程序集说需要的信息：程序集名称（不含路径和扩展名）、版本好、语言文化
      （culture）以及公钥标记（根据发布者的公钥生成的一个小的哈希值，它标识了所引
      用的程序集的发布者）。在每个记录项中，还包含一些标志（flag）和一个哈希值。
      这个哈希值本应作为所引用的程序集的二进制数据的一个校验和来使用。但是，
      目前的CLR完全忽略这个哈希值，未来的CLR可能同样如此
    ```

  * ModuleRef

    ```text
      当前模块引用的类型可能是由别的PE模块实现的，所有那些模块在这个表中都
      有一个对应的记录项。每个记录项都包含模块的文件名和扩展名（不含路径）。在
      当前的调用程序集中，可能是别的模块实现了你需要的类型，这个表的作用便是
      建立同那些类型的绑定关系。
    ```

  * TypeDef

    ```text
      模块引用的每个类型在这个表中都有一个对应的记录项。每个记录项都包含类型
      的名称和一个应用（指向类型的位置）。如果类型是在另一个类型中实现的，引用
      指向的就是一个TypeDef记录项。如果类型是在同一个模块中实现的，引用指向
      的就是一个ModuleDef记录项。如果类型是在调用程序集内部的另一个模块中实
      现的，引用指向的就是一个ModuleRef记录项。如果类型是在一个不同的程序集
      中实现的，引用指向的就是一个AssemblyRef记录项
    ```

  * MemberDef

    ```text
      模块引用的每个成员（字段和方法，以及属性方法和事件方法）都在这个表中有一
      个对应的记录项。每个记录项都包含成员的名称和签名，并指向对成员进行定义
      的那个类型的TypeRef记录项
    ```

* 除了“表2-1”和“表2-2”还有其他许多定义表和引用表
* ildasm program
  * ctrl + M，可查看这些定义表和应用表
  * view-statics，可查看部分统计信息

## 2.4 将模块合并成程序集

* 程序集的一些重要特征
  * 程序集定义了可重用的类型
  * 程序集标记了一个版本号
  * 程序集可以有关联的安全信息
* 程序集产生的历史原因：隔离开发
* 可以在应用程序的配置文件中指定一个codeBase元素，从而配置这个应用程序下载程序集。

* 使用多文件程序集的三点理由：
  * 可用单独的文件对类型进行划分，允许文件以“增量”方式下载（就像前面在Internet下载的例子中描述的那样）。将类型划分到不同的文件中，还使我们能够对购买和安装的应用程序进行部分或分批打包/部署。
  
  * 可在自己的程序中添加資源或數據文件。例如，假定一個類型的作用是计算某些保险资料。该类型可能需要访问一些精算表才能完成计算。在这种情况下，不必在自己的源代码中嵌入精算表。相反，可以使用一个工具（比如稍后要讨论的程序集链接器AL.exe），使数据文件成为程序集的一部分。顺便说一句，这个数据文件可以是任何格式——包括文本文件、Microsfot Office Excel电子表格文件以及Microsoft Office Word表格等——只要应用程序知道如何解析文件的内容。

  * 程序集包含的各个类型可以用不同的编程语言来实现。例如，一些类型可以用C#实现，一些类型用Visual Basic实现，其他类型则用其他语言实现。编译用C#写的类型时，编译器会生成一个模块。编译用Visual Basic写的类型时，编译器会生成另一个模块。然后，可以用一个工具将所有这些模块合并成单个程序集。其他开发人员在使用这个程序集时，只知道这个程序集包含了一系列类型，根本不知道、也不关心这些类型分别是用什么语言来写的。顺便说一句，如果愿意，可以对每个模块都运行一下ILDasm.exe，以获得相应的IL源代码文件。然后运行ILAsm.exe，将所有IL源代码文件传给它。随后，Ilasm.exe会生成包含全部类型的单独一个文件。要实现这个技术，源代码编译器必须能够生成纯IL代码

* 为了生成一个程序集，必须选择自己的一个PE文件作为“清单”的宿主。
* 表2-3， 清单元数据表
  * AssemblyDef

    ```text
      如果该模块标识的是一个程序集，就在这个元数据表中包含单个记录项。该
      记录项列出了程序集名称（不含路径和扩展名）、版本（major,minor,build和
      revision）、语言文化（culture）、一些标志（flag）、哈希算法以及发布者的公钥（可为
      null）
    ```

  * FileDef

    ```text
      作为程序集一部分的每个PE文件和资源文件在这个表中都有一个对应的记
      录项（包含清单本身的那个文件除外，它在AssemblyDef表中显示为单一的记
      录项）。在每个记录项中，都包含文件名和扩展名（不含路径）、哈希值和一些
      标志（flags）。假如该程序集只包含它自己的文件，FileDef表中将无记录
    ```

  * ManifestResourceDef

    ```text
      作为程序集一部分的每个资源在这个表中都有一个对应的记录项。记录项中
      包含资源的名称、一些标志（如果在程序集外部可见，就为public；否则为
      private）以及FileDef表的一个索引（指出资源包含在哪个文件中）。如果资源
      不是一个独立文件（比如.jpg或者.gif文件），那么资源就是包含在PE文件中
      的一个流。对于嵌入的资源，这个记录项还包含一个偏移量，指出了资源流
      在PE文件中的起始位置。
    ```

  * ExportedTypesDef

    ```text
      从程序集的所有PE模块中到处的每个public类型在这个表中都有一个对应
      的记录项。记录项中包含类型的名称、FileDef表的一个索引（指出类型是由
      该程序集的哪个文件实现的）以及TypeDef表的一个索引。注意，为了节省文
      件空间，从包含清单的文件导出的类型不在这个表中重复，因为可以使用元
      数据的TypeDef表来获取类型信息
    ```

* 指定以下任何一个命令含开关，C#编译器都会生成一个程序集：
  * /t[arget]:exe
  * /t[arget]:winexe
  * /t[arget]:library
  * Memo: 最终生成的文件分别是CUI执行体、GUI执行体或者DLL

* 另外还支持 /t[arget]:module
  * 生成一个不包含清单元数据表的PE文件。肯定是一个DLL PE文件！
  * C#编译该形式输出文件的扩展名默认为“.netmodule”

* Notice: 不能从IDE中创建多文件程序集
  * 可以使用/addmodule开关
  * Example:

    ```bat
      // Rut.cs, 其中包含不常用的类型
      // fut.cs，其中包含常用类型
      csc /t:moudle RUT.cs
      csc /out:JeffTypes.dll /t:library /addmodule:RUT.netmodule FUT.cs
    ```

  * rut.netmodule

    ```text
      * 第1块: 编译RUT.cs所生成的IL
      * 第2块
      * 元数据
        * rut.cs定义的类型、方法等
        * rut.cs引用的类型、方法等
    ```

  * JeffTypes.dll

    ```text
      * 第1块： 编译FUT.cs所生成的IL
      * 第2块
        2.1 元数据
        2.2 FUT.CS定义的类型、方法等
        2.3 FUT.CS应用的类型、方法等
        2.4 List
          * 清单
          * 程序集文件（本身和rut.netmodule）
          * 公共程序集类型（本身和rut.netmodule）
    ```

  * TODO, 需要做一个测试

### 2.4.1 使用Visual Studio IDE将程序集添加到项目中

* 为了使自己的程序集出现在“.NET”选项卡的列表中，请在注册表中添加子项
  HKEY_LOCAL_MACHINE\SOFTWARE\Microsfot\.NETFramework\AssemblyFolders\MyLibName
* TODO, 需要做个实验
  
### 2.4.2 使用程序集链接器

* AL.exe实用程序可生成一个EXE或DLL PE文件
* 改变下JeffTypes.dll程序集

```bat
csc /t:module rut.cs
csc /t:module fut.cs
al /out:JeffType.dll /t:library fut.netmodule rut.netmodule
```

* AL.exe实用程序还可以生成CUI和GUI PE文件

    ```bat
    csc /t:module /r:JeffTypes.dll Program.cs
    al /out:program.exe /t:exe /main:Program.main program.netmodule
    ```

  * 第1行将program.cs文件生成一个program.netmodule
  * 第2行生成一个小的program.exe pe文件, 其中包含清单元数据表
  * al.exe还会生成一个小的全局函数

### 2.4.3 为程序集添加资源文件

* 可以将某个文件作为资源添加到程序集中，这是开关/embed[resource]来实现的
* 添加后的PE文件，其清单ManifestResourceDef表会相应更新
* al.exe还支持/link[resource]
  * 只是更新ManifestResourceDef和FileDef，但资源文件不会嵌入PE文件
  * 其资源文件会保持独立，并且必须和其他程序集文件一起打包和部署

* csc.exe也有/resource参数
  * 也允许将资源文件合并到编译器生成的程序集中
  * 并且更新ManifestResourceDef表

* csc.exe /linkresource
  * 将在MainifestResourceDef、FileDef添加一个记录，以便引用独立存在的资源文件

* winexe可以嵌入win32资源
  * csc /win32res [*.res]
  * csc /win32ico app.ico
  * csc /nowin32manifest

## 2.5 程序集版本资源信息

* al/csc生成的PE文件会嵌入标准的Win32版本资源
* 可以调用System.Diagnostics.FileVersionInfo的GetVersionInfo来获取信息
* 可指定以下信息

```text
[assembly: AssemblyTitle("JeffTypes.dll")]
[assembly: AssemblyDescription("This assembly contains Jeff's types")]
[assembly: AssemblyCompany("Wintellect")]
[assembly: AssemblyProduct("Wintellect (R) Jeff's Type Library")]
[assembly: AssemblyCopyright("Copyright (c) Wintellect 2010")]
[assembly: AssemblyTrademark("JeffTypes is a registered tradmark of Wintellect")]
[assembly: AssemblyVersion("3.0.0.0")]
[assembly: AssemblyInformationalVersion("2.0.0.0")]
[assembly: AssemblyCulture("")]
```

## 2.6 语言文化
