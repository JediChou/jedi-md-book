# 1. IIS背景知识及IIS 7.0的新特性

* 来自：IIS7开发与管理完全参考手册

## 1.2 IIS 5.0和IIS 5.1

* IIS 5.0 (Windows 2000 Server, Windows 2000 Profesional)
* IIS 5.0和5.1几乎完全相同，根据操作系统有微小差别
* II5 5.0成为系统服务
* IIS 5.0架构可处理
  * 静态内容
  * ISAPI函数
  * ASP脚本

## 1.3 IIS 6.0

* IIS 6.0 (Windows Server 2003, Windows XP Profesional 64)
  * 基于Windows Server 2003 Service Pack 1代码库的基础进行构建的
* 在Server 2003上有版本限制
  * Server 2003 Web Edition 只能运行IIS和其他几个辅助服务，但不能运行 MS SQL Server
  * Server 2003, Server 2003 Data Center 则有集群技术
* Other:
  * Windows Server 2003提供了Native XML Web Service
  * Windows Server 2003改善了网络负载均衡，提供了NLB Manager工具
  
### 1.3.1 默认的安全性

* 默认不安装IIS
* 默认安装只显示静态HTML的页面要求，动态内容全被锁定
* 可通过Web服务扩展进行管理 (Web Service Extension)
* ASP和ASP.NET必须分别启用（原因：避免将未知服务暴露给外界）

* IIS6用Network Service的低权限账号运行用户代码（几乎无任何权限）
* IIS6允许对身份验证过程进行委托
  * 支持Passport进行身份验证, 但用的很少
  * 支持Kerberos身份验证，可保护AD，解决资源访问问题
  
* IIS6还提供特定的文件服务
  * 默认情况不允许执行命令行代码
  * 默认情况不允许传输可执行文件
  * 管理员可指派一个具体的MIME类型，令IIS为其提供服务
  * 否则将得到一个IIS的404错误
  * 补充：IIS的早期版本包括了一个通配符映射，可以为任何文件类型提供服务
  
### 1.3.2 处理请求

* II6相比之前，改变了IIS处理请求的方式，提高了性能
* II6用Http.sys来侦听请求，然后转发给工作进程
* 工作进程与应用程序池是隔离的（意味着系统可同时处理多个请求，并建立架构）
* 发生错误时，该架构可隔离错误
* 发生错误时，不会污染其他程序池
* 多处理器的优势可得到发挥

### 1.3.3 附加特性

* HTTP压缩
  * IIS6同时支持静态和动态
  * IIS5中HTTP压缩是作为一个ISAPI出现
  * IIS6中则成为一个集成的功能

* 内核模式和永久性缓存
  * IIS6提供了内核模式缓冲区的功能
  * IIS6增加了一种永久性缓存机制
  * IIS6还使用了启发式缓存技术

* XML Metabase
  * IIS6以前，metabase是一个二进制文件
  * IIS6则将其保存一个XML文件
  * IIS6中，即使Website处理活动中，metabase依然可修改
  * IIS6中，metabase要生效则必须重启IIS
  * IIS6中，metabase的XML是无结构文件，有些还是依赖注册表
  * IIS7中，这些问题都得到了修复

* 应用程序池
  * 可配置不同的应用程序池

* FTP服务
  * IIS6对FTP服务进行了扩展
  * 针对AD域帐号、Windows帐号，IIS提供了全新的隔离模式，安全性更好
  * www.iis.net有一个新的FTP服务器程序

* SMTP和POP服务
  * Jedi：几乎不用
  
## 1.4 IIS 7.0

* Windows Server 2008对IIS 7.0的功能有所限制
* Windows Server 2008 Core Edition，IIS 7.0会同时安装到系统中。但没有.NET Framework！
* Windows Server 2008 Web Edition没有限制IIS，但仅支持3种角色服务
  * Web Server, Windows Media Server, Sharepoint Services
  * 显然无法充当AD服务器
  
## 1.5 IIS 7.0的特性

* IIS 7.0能够与ASP.NET框架高度集成，并提供完整API
  * 可为平台提供完整的可扩展能力和管理接口

* IIS 7提供了配置委托和完整的诊断套件
  * 提供需求跟踪
  * 提供高级日志功能
  * XML配置文件

* IIS 7将ASP.NET与请求管道进行了集成
* IIS 7的模块化设计还有利于我们开发定制模块
  * IIS 插件
  
### 1.5.1 集成的请求管道

* IIS7，IIS管道和ASP.NET管道进行了合并
* Classic管道模式可模拟IIS 6.0的IIS管道，也可以模拟IIS 6.0的ASP.NET管道
* Figure 1.1，IIS 6的处理方式
* Figure 1.2，IIS 7的处理方式
* Jedi: 不是特别理解两个图，文字描述有点绕口

### 1.5.2 可配置性

* XML配置文件同时保存了IIS设置和ASP.NET设置
* Web farm中的多系统部署更为方便，并且改善了配置的部署过程
  * 配置会立马生效
  
* IIS7使用applicationHost.config保存该配置
  * applicationHost.config也可和ASP.NET的设置一同保存在web.config文件中
  * Notice! IIS7的配置选项保存在该文件的system.webServer一节中
  
* 使用applicationHost.config
  * 全局保存文件保存位置: %windir%\system32\inetsrv
  * 文件第一部分，system.applicationHost
    * 保存了网站、应用程序、虚拟目录和应用程序池的配置信息
  * 文件第二部分，system.WebServer
    * 保存了其他配置及全局默认设置

* URL位置所进行的配置可以保存在applicationHost.config，也可放在web.config中
  * 管理人员和开发人员要尤其注意这些

* MyWebSite举例

```xml
<location path="MyWebSite">
  <system.webServer>
    <security>
      <authentication>
        <windowsAuthentication/>
      </authentication>
    </security>
  </system.webServer>
</location>
```

* ASP网站举例

```xml
<system.webServer>
  <asp/>
</system.webServer>
```

* 配置应用池举例

```xml
<system.applicationHost>
  <applicationPools>
    <applicationPoolDefaults>
      <processModel
        userName = "Site1AppPoolUser"
        password = "Passw0rd"
      />
    </applicationPoolDefaults>
  </applicationPools>
</system.applicationHost>
```

* IIS7采用这种方式的优势是
  * 无需修改注册表，用XCopy即可完整部署
    * 提高了在远程服务器上部署的速度
  * 为自定义网站提供了简洁的安装手段
  * 修改操作可以进行委托
    * 开发人员可无需学习IIS管理

* 可扩展的配置架构
  * 新的配置模型, applicationHost.config -> globalModules
  * 举例说明

```xml
<globalModules>
  <add name="MyNewModule" image="c:\mymodule.dll"/>
</globalModules>
<module>
  <add name="MyNewModule"/>
</module>

<!-- 为新模块在inetsrv\config\schema文件中创建一个新的架构文件 -->
<!-- MyNewModule.xml -->
<configSchema>
  <sectionSchema name="MyNewModule">
    <attribute name="enabled" type="bool" defaultValue="false"/>
    <attribute name="message" type="string" defaultValue="Hello World!"/>
  </sectionSchema>
</configSchema>

<!-- 最后需要在applicationHost.config文件中注册该模块 -->
<configSection>
  <section name="MyNewModule"/>
</configSection>
```

### 1.5.3 组件化

* 不需要再使用ISAPI过滤器来修改请求过程
* 可将自行开发的组件直接注入到处理管理中
  * 可以是第三方工具或组件
  * 可以是微软公司提供的现有核心组件

### 1.5.4 安全性

* 默认条件下，主要的组件也处于禁用状态
* 为了启用ASP.NET，用户必须将ASP.NET作为一项服务扩展
* Class ASP必须单独启用，类似第三方CGI（Perl、PHP）
* 最小安装
  * IIS6针对第三方CGI要打很多补丁
  * IIS7默认可处理静态页面
  * 默认提供的功能有：默认文档、目录浏览、HTTP错误、重定向
  * 为.NET扩展提供有：登录、跟踪、请求过滤（类似URLScan）、静态内容、HTTP压缩、管理控制台
  * Figure 1-3，Jedi：默认选项的截图

* 管理委托
  * IIS6: 本地管理员可授权给用户，令用户完成IIS管理工作
  * IIS6: 也可通过WMI和ADSI选项来直接管理网站配置
  * 虽然提供了便利，但现实很骨感！IIS7对此进行了改变
    * 更细的配置项
  * 通过overrideMode，管理员可以让开发人员利用配置文件对特定网站进行管理
    * 举例

    ```xml
    <!-- 为了让开发人员配置网站MySite中除了Windows身份验证之外 -->
    <!-- 的其他IIS选项，我们可以在applicationHost.config文件中 -->
    <!-- 使用以下代码，这样可以强制性地使用Windows身份验证     *->
    <location path="MySite" overrideMode="Allow">
      <system.webServer>
        <authentication>
          <windowsAuthentication enabled="true" lockAttribute="enabled">
            <providers>
              <add value="Negotiate" />
              <add value="NTLM" />
            </providers>
          </windowsAuthentication>
        </authentication>
      </system.webServer>
    </location>
    ```

  * 举例2

  ```xml
  <!-- 为了让同一个开发人员在同一网站上启用或禁用Windows身份验证，-->
  <!-- 同时又不改变providers元素，我们可以使用以下代码            *->
  <location path="MySite" overrideMode="Allow">
    <system.webServer>
      <authentication>
        <windowsAuthentication enabled="true" lockElements="providers">
          <providers>
            <add value="Negotiate" />
            <add value="NTLM" />
          </providers>
        </windowsAuthentication>
      </authentication>
    </system.webServer>
  </location>
  ```

  * 特性委托还可以应用于GUI管理工具

* 统一的身份验证和授权
  * IIS7的身份验证和授权过程将先前版本的IIS的身份验证选项和ASP.NET选项进行了合并
    * IIS6中，ASP.NET对一个Adobe Acrobat文件进行访问控制非常困难
  * 使用ASP.NET中的Forms身份验证来控制ASP.NET之外的内容，将在14章讨论

* 请求过滤
  * IIS5的URLScan工具提供了此相关功能
  * 在URLScan工具中，通过使用AllowExtension或DenyExtension配置，可以仅为某些特定文件类型提供服务
  * 举例1

  ```xml
    <configuration>
    <system.webServer>
      <requestFiltering>
        <fileExtensions allowUnlisted="false">
          <add fileExtensions=".aspx" allowed="true"/>
        </fileExtensions>
      </requestFiltering>
    </system.webServer>
  </configuration>
  ```

  * 举例2

  ```xml
    <configuration>
    <system.webServer>
      <requestFiltering>
        <fileExtensions allowUnlisted="true">
          <add fileExtensions=".doc" allowed="false"/>
        </fileExtensions>
      </requestFiltering>
    </system.webServer>
  </configuration>
  ```

  * 举例3：隐藏BIN文件夹

  ```xml
  <configuration>
  <system.webServer>
    <requestFiltering>
      <hiddenNamespaces>
        <add hiddenNamespaces="BIN"/>
      </hiddenNamespaces>
    </requestFiltering>
  </system.webServer>
  </configuration>
  ```

* 远程管理
  * IIS7引入了一项新的远程管理服务，IIS Manager工具可通过HTTPS远程管理IIS7的安装
  * 对远程连接用户而言，未进行委托的功能是无法看到的
  * 远程管理无法看到共享中Windows用户的访问许可（即CAL）

### 1.5.5 IIS管理工具

* IIS Manager
* AppCmd.exe命令行工具
  * 举例1

  ```bat
    @ 用appcmd创建一个Web网站
    appcmd.exe add site /name:MyNewSite /id:999 /bindings:"http/*:80:"
    /physicalPath:"C:\inetpub\MyNewSite"
  ```

  * Jedi: 在有VS2015的环境下只看到C:\Program Files\IIS Express，是否说明这只是试用版？
  * 举例2

  ```bat
    @用appcmd备份、恢复metadata
    @在IIS6之前备份比较不方便
    appcmd.exe add backup MyWebSiteBackup
    appcmd.exe restore backup MyWebSiteBackup
  ```

* ASP.NET管理名称空间
  * 例子1：用C#去创建一个IIS网站

  ```c#
  // Jedi Notice:
  // 1. 执行时要用命令行方式去执行（用管理员权限）
  // 2. c:\inetpub\MyNewSite文件目录要存在
  // 3. IIS里没有MyNewSite这个站点
  // 否则会报错！

  using System;
  using System.Collections.Generic;
  using System.Text;
  using Microsoft.Web.Administration;
  namespace MSWebAdmin_Application
  {
    class Program
    {
      static void Main(string[] args)
      {
        ServerManager serverManager = new ServerManager();
        serverManager.Sites.Add(
          "MyNewSite", "http", ":8123:",
          "c:\\inetpub\\MyNewSite"
        );
        serverManager.Sites["MyNewSite"].ServerAutoStart = true;
        serverManager.CommitChanges();
      }
    }
  }
  ```

  * 例子1：创建了之后要写一个applicationHost.config配置文件

  ```xml
  <site name="My New Site" id="999" serverAutoStart="true">
    <application path="/">
      <virtualDirectory path="/" physicalPath="c:\inetpub\MyNewSite" />
    <application>
    <bindings>
      <binding protocol="http" bindingInformation=":80:" />
    </bindings>
  </site>
  ```

* Windows管理规范
  * WMI也可以创建Web网站
  * 例子

  ```vbs
  ' 最后一句有些问题。错误信息：D:\crWeb.vbs(6, 1) SWbemObjectEx: Invalid parameter
  Set oService = GetObject("winmgmts:root\WebAdministration")
  Set oBinding = oService.Get("BindingElement").SpawnInstance_
    oBinding.BindingInformation = "*:8013:"
    oBinding.Protocol = "http"
  oService.Get("Site").Create "MyNewSite", array(oBinding), "C:\inetpub\MyNewSite"
  oService.Get("Application").Create "/", "MyNewSite", "C:\inetpub\MyNewSite"
  ```

### 1.5.6 诊断

* IIS7以前都未提供诊断功能
  * 通过一个新的API集合，可以确定网站的运行时状态（程序的运行时状态、程序池的运行时状态）
  * 甚至通过WMI和托管代码来控制这些状态
  * 还可以对管道中请求推出的位置进行跟踪
  * 新的Request Tracing模块可以跟踪任何请求，并进行日志记录

* 运行时状态和控制API
  * API可获取状态（服务器、网站、应用程序，被处理的请求）
  * 该API在工作进程和应用程序域中提供了一个HttpRequest对象
  
* 请求跟踪
  * 通过使用请求跟踪模块，可以对任何类型的内容或结果代码的日志记录和跟踪进行配置
  * 与多数IIS设置类似，请求跟踪在服务器级、网站级和应用程序级进行配置
  * 配置请求跟踪非常简单
    * 首先，需要定义一个跟踪条件
    * 可以是基于结果编码的
    * 也可以是请求的执行时间
    * 或者是两者结合的
  * 执行跟踪
    * Figure 1.6 显示了跟踪结果
    * 本书20章将更深入地讨论请求跟踪

### 1.5.7 兼容性

* 兼容IIS6
* 手段：Classic模式、IIS 6.0 Metabase Compatiability Module
* Jedi：大部分都是解决IIS6.0向IIS7.0迁移的问题

### 1.5.8 附加功能

* FTP、SMTP

## 1.6 本章小结

## 第2章 IIS7.0的架构

* IIS初衷：HTTP请求、Gopher请求（1-6代）
* 简单请求->CGI->ASP->ASP.NET（Ajax, SilverLight）

## 2.1 IIS 4.0以及更早版本的IIS

* IIS4.0，最为Windows NT4的可选软件包（常被称为IIS 1）
* 提供ISAPI
* IIS3.0引入了ASP，因为单进程出现问题容易导致整个服务崩溃
* IIS4.0采用了隔离技术解决了ASP崩溃的问题
* IIS4.0改进了Web服务器的配置。
  * 除了启动过程中需要的配置选项，IIS4还提供了名为metabase的全新存储区
  * 提高了访问配置的读取效率，也提高了注册表的安全性
  
### 2.1.1 Inetinfo.exe

* IIS1-IIS3都有inetinfo.exe提供Web请求服务
* IIS4提供了隔离功能
  * 由MTS（Microsoft transaction server）完成
  * MTS是IIS4的组成部分
* WAM（Web Application Manager）是MTS的一个组件
  * 它可以作为ISAPI应用程序的包装器，可令ISAPI应用程序在进程外运行
  * mtxex.exe是MTS的执行体
  * WAM导向器需要使用mtx.exe，以IWAN_{ComputerName}帐号运行

### 2.1.2 ISAPI与CGI的比较

* CGI弱点
  * 伸缩性不佳
  * 容易导致资源迅速消耗，进而影响Web服务器的速度
* ISAPI也有同样缺点
* ISAPI应用程序当作一个过滤器来使用

### 2.1.3 Active Server Page

* 为了抗衡Perl CGI，从IIS3就具备
* IIS7要使用ASP，用户必须安装ASP Classic模块

## 2.2 IIS 5.0

* 更改了IIS4的架构，部分原因是要使用COM+架构
* 故mtx.exe代理无法再用于运行进程外的应用程序
* 应用程序保护
  * 进程内方式(low)、进程池方式(medium)、进程外方式(high)
  * dllhost.exe的COM+进程

## 2.3 IIS 6.0

### 2.3.1 Http.sys

* Http.sys是IIS6使用的新型侦听器
* 从IIS6开始侦听器与inetinfo.exe分离开
  * inetinfo.exe在用户模式下运行
  * Http.sys则完成侦听HTTP请求的功能，在内核模式下运行

* 内核模式和用户模式  
  * Http.sys可以将请求转发给合适的队列
  * 进行性能调优时，可将负载重的应用程序分隔到不同的应用程序池
  * 对每个应用池而言，队列规模是可配置的
  * Http.sys可进行请求缓存，并尽可能在内核模式中完成请求的服务

* 其他http.sys功能
  * Http.sys还能够处理TCP/IP连接，包括创建连接和断开连接

### 2.3.2 IIS Admin Service

* 单独处理FTP、SMTP
* 另外还处理metabase驻留在内存中的副本

### 2.3.3 Web Administrator Service

* 可以处理IIS6.0所有的Web网站功能
* 组件1：Configuration Manager，配置Web网站
* 组件2：Application Pool Manager，读取配置文件，将修改保存到metabase中
* Notice（不要弄混淆）:
  * Windows Server 2003 - Web Administration Service
  * Windows Server 2008 - Windows Process Activation Service

### 2.3.4 工作进程

* IIS6在一个宿主工作进程中运行应用程序
* 进程隔离

### 2.3.5 应用程序池

* 全新的进程配置方式，Web Garden
* Figure 2.3，这个概念比较重要

## 2.4 IIS 7.0的架构

### 2.4.1 集成管道模式

* ASP.NET是IIS 7.0进步的一大原因（身份认证、请求处理管道）
* 管道集成的优势
  * 基于ASP.NET的Web应用程序及IIS7.0扩展提供了更好的性能
  * 通过使用托管代码获得更好的控制能力

* 经典模式（Figure 2.4）
* 集成管道模式（Figure 2.5）
* 将应用程序迁移到集成管道
  * 实例

  ```bat
  appcmd.exe migrate config {application path}
  ```

### 2.4.2 可扩展性和模块化

* IIS 7.0包括40个组件
* 利用模块化可以完成
  * 只需加载应用程序执行或配置过程中的模块，提高IIS安全性，降低内存使用
  * 将定制模块插入到管道

* 模块，如：身份验证令牌缓存、ISAPI过滤器、URL映射等
  * 公共例程模块：主要是缓存功能
  * 托管引擎：ASP.NET，即ManagedEngine模块
  * IIS 7.0本机模块
  * 托管模块
  
### 2.4.3 IIS Manager的可扩展性

* administration.config -> moduleProviders
* 参考本书第12章

### 2.4.4 Metabase-走吧！走吧！走了！

* applicationHost.config, web.config
  * applicationHost.config, 可以在网站级和应用程序级对配置进行控制
  * applicationHost.config，可以控制服务器本身
  * web.config，可以重新定义更高级别的设置
  * web.config，通过配置锁定和管理委托可控制特定的配置部分，还可防止修改
  * applicationHost.config存在%windir%\system32\inetsrv\config
  * attribute-name=default-value [metadata][description]
  
* applicationHost.config类似于

```xml
<system.webserver>
  <defaultDocument enabled="true">
    <files>
      <add value="Default.aspx" />
    </files>
  </defaultDocument>
</system.webserver>
```

* web.config从applicationHost.config中继承的例子

```xml
<system.webserver>
  <defaultDocument enable="true">
    <files>
      <remove value="Default.aspx" />
      <add value="Home.aspx" />
    </files>
  </defaultDocument>
</system.webserver>
```

* 默认安装的情况下，IIS7并没有在网站的根目录下创建web.config文件
* 上一条的原因：为了兼容WCF

* 其他XML配置文件: administration.config
  * 如需添加自定义模块，那么administration.config文件就非常重要
  * 原因：现在administration中生成一个项，才能在GUI中使用这些模块

* 其他XML配置文件: redirection.config

```xml
<!-- 简单保存web服务器的集中配置信息和身份证书 -->
<configuration>
  <configSections>
    <section name="configurationRedirection" />
  </configSections>
  <configurationRedirection enabled="true"
    path="\\server1\centralconfig$\"
    userName="domain1.local\config"
    password="Password1" />
</configuration>
```

* Metabase Compatibility
  * 解决兼容性问题
  
### 2.4.5 WAS和工作进程

* Figure 2.6

## 2.5 Windows Server 2008的架构

* Server Core
* 虚拟化
* WCF

### 2.5.1 Server Core安装选项

### 2.5.2 虚拟化

### 2.5.3 故障转移群集功能

* Jedi: 这个要研究下！

### 2.5.4 WCF

### 2.5.5 BitLocker加密技术

### 2.5.6 网络访问保护

* Network Access Protection, NAP

## 2.6 本站小结

## 第3章 规划IIS 7.0的部署

* 关键问题1：技术性的。如：哪种硬件设备，哪种软件设置
* 关键问题2：组织方式。如：域等

## 3.1 Windows 2008 Server的部署规划

* OS、网络拓扑结构、备份/恢复、复制方式、系统升级/全新安装
* 常规：开发、测试、部署应用程序/内容
* 其他：
  * 有多少用户？
  * 网络流量有多少？
  * 性能瓶颈有哪些？
  * 如何扩展？
  
### 3.1.1 Windows Server 2008对硬体的要求

### 3.1.2 32位操作系统还是64位操作系统

### 3.1.3 使用哪个Server版的操作系统

* Windows SErver 2008 Standard Edition
  * IIS无法支持大内存，上限4GB
  * IIS无集群

* Windows Server 2008 Web Edition
  * 可运行SQL Server
  * 无法运行Exchange Server
  * 32位支持4CPU，4GB内存
  * 64位支持4CPU，32G内存
  * IIS 7.0， Windows SharePoint Services, Windows Media Services

* Windows Server 2008 Enterprise、Datacenter Editions
  * x86, 64GB内存，32CPU
  * x64, 2TB内存，64CPU
  * 支持集群，支持多CPU，SQL Server

* Server Core
  * 有IIS7，但无法运行ASP.NET
  * 主要支持DNS，Active Directory服务，DHCP服务
  * 还支持网络负载均衡、Microsoft故障转移群集

* 服务器虚拟化
* Windows Server 2008 for Itanium-Based Systems
  * 专门用于运行高可伸缩性的数据库和其他定制应用程序的
  * 没有ASP.NET框架
  * 不适合用于部署IIS

* 许可证
  * 集成CAL需要费用

### 3.1.4 升级还是全新安装

* 全新安装
* 升级
* 升级路线

### 3.1.5 规划硬件

* 当部署大量服务器时，需要使用Windows Deployement Services
* 通信硬件：网络架构规划、网络物理组件架构、文件存储（SAN/NAS）
* 硬件兼容性：HCL
* 硬件需求及推荐

### 3.1.6 规划网络

* AD还是独立安装
* 服务器安装位置
* Server Farm（IIS Server Farm）
  * Jedi: 这个玩意要重点研究！
  * [link1](https://technet.microsoft.com/zh-cn/library/jj129385(v=ws.11).aspx)
  * [link2](https://technet.microsoft.com/zh-cn/library/jj129399(v=ws.11).aspx)
  * [link3](https://technet.microsoft.com/zh-cn/library/jj129384(v=ws.11).aspx)
  * [link4](https://technet.microsoft.com/zh-cn/library/jj129387(v=ws.11).aspx)
  * [link5](https://technet.microsoft.com/zh-cn/library/jj134044(v=ws.11).aspx)

* 网络负载均衡
  * Jedi：还挺麻烦的！

* 群集
  * Enterprise/Datacenter才提供群集
  * 支持8个节点
* 虚拟化
* 使用虚拟化的一般场景
* 企业内部网环境
* Extranet
* Web Farm

### 3.1.7 规划安全性

* 网络安全性
  * 网络用户帐号
  * 防火墙和代理服务器
  * 网络访问保护
  * IPv6
  * 日志和审计

* Windows服务器的安全性
  * 远程访问
  * 文件、文件夹的安全性
  * 注意共享内容

* 应用程序安全性
* 物理安全性

### 3.1.8 规划备份和恢复

* 卷影拷贝服务
* Windows Server 2008的备份功能（Windows Server 2008 Backup）

## 3.2 规划IIS 7.0部署

* 群集
* Web Farm

### 3.2.1 IIS 7.0的需求

### 3.2.2 安装决策

### 3.2.3 规划IIS有关的安全性

* IIS 6.0之后IIS对安全进行的修改
  * Form身份验证不再仅限于针对ASP.NET
  * 提供了匿名帐号作为ASP.NET进程帐号来运行程序
  * 启用匿名帐号

  ```xml
    <anonymousAuthetication enabled="true" userName"" defaultLogonDomain="" />
  ```

* 管理帐号及委托
  * 配置节锁定模式
  * 微弱IIS Manager
  * 可以锁定WebSite1网站中与HTTP错误有关的配置，但不会锁定其他网站

  ```bat
  appcmd lock config "WebSite1" -section:httpErrors
  ```

* IIS7的访问策略
  * 用请求过滤替代了URLScan
  * Jedi: 用Extranet进行配置，有类似防火墙的作用  

### 3.2.4 规划开发环境

### 3.2.5 规划生产环境

### 3.2.6 共享配置

* 账户密码同步的问题

### 3.2.7 内容复制

* DFS复制
* 群集不支持DFS
* Robocopy + Task Scheduler Service

## 3.3 应用程序部署规划

* ISAPI过滤器
* COM组件
* 在全局程序集缓存（Global Assembly Cache, GAC）中安装的ASP.NET程序集
* SSL证书
* 数据库DSN
* 计算机密钥，一般可以复制配置ASP.NET文件
* 客户注册表设置

## 3.4 自动化部署工具

* WMI配置脚本
* 远程安装服务（Remote Installation Service, RIS）
* 部署及自动安装
* 第三方克隆工具

### 3.4.1 Windows Deployement Service

### 3.4.2 批量激活

## 3.5 系统能力规划

### 3.5.1 流量

### 3.5.2 WCAT

### 3.5.3 IIS7请求跟踪

### 3.5.4 可伸缩性

### 3.5.5 规划应用程序的能力

* ASP.NET 2.0引入了processModel/autoConfig配置
  * 自动配置MaxIoThreads、MaxWorkerThreads
  * 问题：一个CPU只能为12个请求提供服务
  
## 3.6 本章小结

## 第4章 安装IIS 7.0

## 4.1 全新安装

### 4.1.1 在安装Windows Server 2008过程中同时安装IIS 7.0

* 随操作系统默认安装
* 测试安装

### 4.1.2 通过DVD驱动器在一台现有的服务器上安装IIS 7.0

* IIS 7.0的默认安装方式

## 4.2 升级安装

* 一、升级操作系统时安装
  * 硬件必须能够运行Windows Server 2008和IIS7
* 二、迁移升级

### 4.2.1 就地升级

* 可通过DotNetNuke的Web安装，将一台Windows Server 2003和IIS6服务器升级为Windows 2008和IIS7
  * Jedi Question: DotNetNuke是什么玩意？

* 升级状态
  * 当前的服务器
    * Hardware: Memory 2GB,
    * OS: Win2003 Enterprise R2 SP2
    * IIS config: IIS6.0, ASP.NET 2.0
    * IIS app: DotNetNuke, [localhost](http://local/dotnetnuke)
    * Action: 要先删除FrontPage服务器扩展
  * 将Win2003升级到Win2008
    * Action: 进行完整备份（Jedi: 完全COPY一份虚拟机，在COPY的那份上进行升级）
    * Action: 升级前进行随便整理
    * Action: 确保域控能正常连接
    * Notice: Administrative Tool, IIS Manager
    * Notice: 有些在IIS6中的模块会升级后带入到IIS7，在IIS7中有些模块是不必要的，可以删除掉
    * Preview
      * 和在Win2003中的使用没有区别
      * IIS6的所有metabase配置项都迁移到了xml格式的IIS7配置中
      * 应用程序池、NTFS文件、文件夹权限维持现有的安全设置
  * 升级应用程序及配置
    升级中最大的问题是metabase配置项缺失，导致升级完成后应用不正常
    * metabase兼容性
      * IIS7使用XML来保存配置项
      * 因为有些配置项是放在web.config中，所有有些会升级失败，要开启metabase兼容模式（Jedi:在哪里设置？）
      * 通过IIS 6.0 ManagementCompatibility来安装metabase兼容特性
    * 集成管道模式和经典管道模式的对比
      * IIS7中新的集成管道模式可以将ASP.NET完整地集成到进程中。
      * IIS6中ASP.NET是作为一个ISAPI应用程序运行的，并在管道之外处理。
      * 要深入理解需参考www.iis.net
      * Notice： 经典模式、集成管道模式在IIS7中有重大变化；

### 4.2.2 迁移升级

* Notice: 微软有迁移工具
  * Jedi: 这个要好好查一下

## 4.3 为现有安装添加新特性

### 4.3.1 安装新特性

* 包括
  * ASP.NET
  * Basic身份验证
  * Windows身份验证
  * 动态内容压缩
* 开启步骤
  * Server Manager - Roles - Open Web Server (IIS) - Add Role Services
  * Select Application Development - Check Required Role Services
  * Notice：ASP.NET需要使用ISAPI阔真、ISAPI过滤器、.NET扩展
  * Notice:.NET环境也将添加到Windows Process Activation Service中
* 选择角色服务
  * Basic Authentication
  * Windows Authetication
  * Dynamic Content Compression
  * Notice: 安装这些需用DVD或ISO镜像，还需重启服务器

### 4.3.2 配置和测试新特性

* 检查缺省网站
* Jedi: 其他的特性要如何检查

### 4.3.3 在IIS7.0上运行ASP.NET 1.1

* Jedi：暂时整个略过去

## 4.4 自动安装及配置

* 自动化解决方案，Windows Server 2003前可使用Remote Installation Services完成
* 自动化解决方案，Windows Server 2003开始可使用Windows Deployment Services(WDS)

## 4.5 从命令行安装Server Core

* 如果服务器使用的是Windows Server 2008的Server Core方式则必须从命令行安装IIS
* 在Windows2003中使用sysocmgr.exe来安装IIS7.0
* 在Windows2008中使用pkgmgr.exe来安装

### 4.5.1 Pkgmgr.exe

* [REF](https://technet.microsoft.com/zh-cn/library/cc749465(v=ws.10).aspx):
* Install Step (使用管理员权限)

```bat
start /w pkgmgr /iu:IIS-WebServerRole;WAS-WindowsActivationService;
WAS-Process Model;WAS-NetFxEnvironment;WAS-ConfigurationAPI
```

* 完整的安装命令

  ```bat
  start /w pkgmgr
  /iu:IIS-WebServerRole;
  IIS-WebServer;
  IIS-CommaonHttpFeatures;
  IIS-StaticContent;
  IIS-DefaultDocument;
  IIS-DirectoryBrowsing;
  IIS-HttpErrors;
  IIS-HttpRedirect;
  IIS-ApplicationDevelopment;
  IIS-ASPNET;
  IIS-NetFxExtensibility;
  IIS-ASP;
  IIS-CGI;
  IIS-ISAPIExtensions;
  IIS-ISAPIFilter;
  IIS-ServerSideIncludes;
  IIS-HealthAndDiagnostics;
  IIS-HttpLogging;
  IIS-LoggingLibraries;
  IIS-RequestMonitor;
  IIS-HttpTracing;
  IIS-CustomLogging;
  IIS-ODBCLogging;
  IIS-Security;
  IIS-BasicAuthentication;
  IIS-WindowsAuthetication;
  IIS-DigestAuthentication;
  IIS-ClientCertificateMappingAuthentication;
  IIS-IISCertificatMappingAuthentication;
  IIS-URLAuthorization;
  IIS-RequestFiltering;
  IIS-IPSecurity;
  IIS-Performance;
  IIS-HttpCompressionStatic;
  IIS-HttpCompressionDynamic;
  IIS-WebServerManagementTools;
  IIS-ManagementConsole;
  IIS-ManagementScriptingTools;
  IIS-ManagementService;
  IIS-IIS6ManagementCompatibility;
  IIS-Metabase;
  IIS-WMICompatibility;
  IIS-LegacyScripts;
  IIS-LegacySnapIn;
  IIS-FTPPublishingService;
  IIS-FTPServer;
  IIS-FTPManagement;
  WAS-WindowsActivationService;
  WAS-ProcessModel;
  WAS-NetFxEnvironment;
  WAS-ConfigurationAPI
  ```

  * 上述命令等同于从Server Manager中安装Web服务器角色，并选中了所有IIS7.0选项。
  * 根据实际情况可少选择安装项

* 使用“echo %errorlevel”来检查是否存在安装错误
* 在Server Core操作系统中测试IIS
  * 用浏览器验证
  * wfetch.exe(来自IIS 6.0 Resource Kit)

### 4.5.2 使用pkgmgr.exe进行无人值守安装

* 第一种方式
  * 命令: start /w pkgmgr /n:{unattent XML}
  * unattent.xml

  ```xml
  <?xml version="1.0">
  <unattend xmlns="urn:schemas-microsoft-com:unattend"
    xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State">
  <servicing>
    <!--
      Install a selectable update in a package that is in the Windows
      Foudation namespace
    *->
    <package action="configure">
      <assemblyIdentity
        name="Microsoft-Windows-Foundation-Package"
        version="6.0.5308.6"  <!-- Replace with your Windows Version -->
        language="neutral"
        processorArchiteicture="x86"
        publicKeyToken = "31bf3856ad364e35"
        versionScope="nonSxS"
      />
      <selection name="IIS-WebServerRole" state="tru"/>
    </package>
  </servicing>
  ```

  * 第二种方式
    * 命令: start /w pkgmgr /n:unattend.xml
    * 注意64位操作系统还要注意一个参数, processorArchitecture="amd64"
    * unattent.xml

    ```xml
    <?xml version="1.0" ?>
    <unattend xmlns="urn:schemas-microsoft-com:unattend"
      xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State">
      <servicing>
        <!-- Install a selectable update in a package that is in the Windows Foudation  *->
        <package action="configure">
          <assemblyIdentity
            name="Microsoft-Windows-Foundation-Pcakge"
            version="6.0.5303.0"
            language="neutral"
            processorArchitecture="x86"
            publicKeyToken="31bf3856ad364e35"
            versionScope="nonSxS"
          />
          <selection name="IIS-WebServerRole" state="true"/>
          <selection name="IIS-WebServer" state="true"/>
          <selection name="IIS-CommonHttpFeatures" state="true"/>
          <selection name="IIS-StaticContent" state="true"/>
          <selection name="IIS-DefaultDocument" state="true"/>
          <selection name="IIS-DirectoryBrowsing" state="true"/>
          <selection name="IIS-HttpErrors" state="true"/>
          <selection name="IIS-HttpRedirect" state="true"/>
          <selection name="IIS-ApplicationDevelopment" state="true"/>
          <selection name="IIS-ASPNET" state="true"/>
          <selection name="IIS-NetFxExtensibility" state="true"/>
          <selection name="IIS-ASP" state="true"/>
          <selection name="IIS-CGI" state="true"/>
          <selection name="IIS-ISAPIExtensions" state="true"/>
          <selection name="IIS-ISAPIFilter" state="true"/>
          <selection name="IIS-ServerSideIncludes" state="true"/>
          <selection name="IIS-HealthAndDiagnostics" state="true"/>
          <selection name="IIS-HttpLogging" state="true"/>
          <selection name="IIS-LoggingLibraries" state="true"/>
          <selection name="IIS-RequestMonitor" state="true"/>
          <selection name="IIS-HttpTracing" state="true"/>
          <selection name="IIS-CustomLogging" state="true"/>
          <selection name="IIS-ODBCLogging" state="true"/>
          <selection name="IIS-Security" state="true"/>
          <selection name="IIS-BasicAuthentication" state="true"/>
          <selection name="IIS-URLAuthorization" state="true"/>
          <selection name="IIS-RequestFiltering" state="true"/>
          <selection name="IIS-IPSecurity" state="true"/>
          <selection name="IIS-Performance" state="true"/>
          <selection name="IIS-HttpCompressionStatic" state="true"/>
          <selection name="IIS-HttpCompressionDynamic" state="true"/>
          <selection name="IIS-WebServerManagementTools" state="true"/>
          <selection name="IIS-ManagementConsole" state="true"/>
          <selection name="IIS-ManagementScriptingTools" state="true"/>
          <selection name="IIS-ManagementService" state="true"/>
          <selection name="IIS-IIS6ManagementCompatibility" state="true"/>
          <selection name="IIS-Metabase" state="true"/>
          <selection name="IIS-WMICompatibility" state="true"/>
          <selection name="IIS-LegacyScripts" state="true"/>
          <selection name="IIS-LegacySnapIn" state="true"/>
          <selection name="WAS-WindowsActivationService" state="true"/>
          <selectino name="WAS-ProcessModel" state="true"/>
          <selection name="WAS-NetFxEnviorment" state="true"/>
          <selection name="WAS-ConfigurationAPI" state="true"/>
        </package>
      </servicing>
    </unattend>
    ```

### 4.5.3 使用Windows Deployment Services安装

* Jedi: 不推荐使用这个

## 4.6 主机托管服务建议

* Microsoft的官方建议
  * 每个网站都可以使用自己的应用程序池
  * 应该使用Windows域账号
  * 不需要使用多账号
  * 内容可以保存一个存储中
* IIS的3种设备：域控制器、Web服务器、保存Web网站内容和配置文件的硬体

### 4.6.1 目录结构

* 微软推荐一种特定的目录结构，并且推荐了一种能够安全访问这个目录结构的结束（Table4-1）
  * 在这个目录中
    * 每个网站都拥有一个内容目录
    * 一个日志目录
    * 一个请求跟踪日志目录

* APP-Directory1
  * Directory
    * "content root">\"site name"
    * example: e:\content\Site1
  * Security
    * Administrators: 完全控制
    * System: 完全控制
    * <AppPool ID>: 可以列出文件夹内容
  * Memo
  ```
    该文件夹是网站的根目录。AppPool ID必须拥有对该文件夹的读取权限，
    但是不需要拥有对该文件夹的写入权限。
  ```
* APP-Directory2
  * Directory
    * "content root"\"site name"\wwwroot
    * example: e:\content\site1\wwwroot
  * Security
    * Administrators: 完全控制
    * System: 完全控制
    * AppPool ID: 完全控制
  * Memo
  ```
    该文件夹是一个Web网站拥有者的根目录。运行该网站的应用程序池
    应该能够访问该文件夹。
  ```
* APP-Directory3
  * Directory
    * "content root"\"site name"\logs\logfiles
    * example: e\:content\site1\logs\logfiles
  * Security
    * Administrators: 完全控制
    * System: 完全控制
    * "DomainName"\"MachineIdentty": 完全控制
  * Memo
  ```
    该文件夹用于保存Web日志。他与保存网站内容的文件夹平行，因此该文件夹无
    法由浏览网站的用户所访问。因为HTTP.SYS需要写入日志文件，所以必须为
    运行HTTP.SYS的账号提供访问这个文件夹的权限。当HTTP.SYS写入日志文
    件时，如果写入的日志文件是另一台计算机上的日志文件，那么运行HTTP.SYS
    的用户账号应该是另一台计算机上的账号
  ```
* APP-Directory4
  * Directory
    * "content root"\"site name"\logs\failedReqLogFiles
    * example: e:\content\site1\logs\failedReqLogFiles
  * Security
    * Administrators: 完全控制
    * System: 完全控制
    * <AppPool ID>: 完全控制
  * Memo
  ```
    该文件夹用于保存失效请求日志文件，利用该日志文
    件，网站拥有者可以诊断改网站存储在的问题。这些
    日志是由具有AppPool身份标识的账号写入的，而
    具有AppPool身份标识的账号是作为Site Owner（
    即网站拥有者）运行的
  ```
* xcacls.exe
  * 可通过microsoft resource kits中的xcacls.exe创建上述目录
  * 可使用下列批处理来制定NTFS权限

```bat
SETLOCAL
REM Save command-line arguments passed as parameters:
SET SITE_ID=%1
SET CONTENT_ROOT=%2

md %CONTENT_ROOT%\site%SITE_ID%
md %CONTENT_ROOT%\site%SITE_ID%\logs

REM ACL SITE DIRECTORY FOR ADMINS AND APPPOOL ACCOUNT
xcacls %CONTENT_ROOT%\site%SITE_ID% /G {DomainName}\PoolId%1:R /y
xcacls %CONTENT_ROOT%\site%SITE_ID% /E /G Administrator:F

REM CREATING FAILED REQUEST LOG DIRECTORY
md %CONTENT_ROOT%\site%SITE_ID%\logs\failedReqLogfiles
xcacls %CONTENT_ROOT%\site%SITE_ID%\logs\failedReqLogfiles /G {DomainName}\PoolId%1:F /y
xcacls %CONTENT_ROOT%\site%SITE_ID%\logs\failedReqLogfiles /E /G Administrators:F

REM CREATING WEBLOG DIRECTORY. HTTP.SYS LOGS AS MACHINE IDENTITY
md %CONTENT_ROOT%\site%SITE_ID%\logs\logfiles
xcacls %CONTENT_ROOT%\site%SITE_ID%\logs\logfiles /G {DomainName}\{MachineIdentity}:F /y
xcacls %CONTENT_ROOT%\site%SITE_DI%\logs\logfiles /E /G Administrators: F

REM CREATING WEB CONTENT DIRECTORY
md %CONTENT_ROOT%\site%SITE_ID%\wwwroot
xcacls %CONTENT_ROOT%\site%SITE_ID%\wwwroot /G {DomainName}\PoolId%1:F /y
xcacls %CONTENT_ROOT%\site%SITE_ID%\wwwroot /E /G Administrators:F

```
