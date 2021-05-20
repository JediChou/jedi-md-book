# Self Study

Author: Jedi Chou, Create at 2021.5.20 7:52 AM

* Don't memorize words APP check-in. **6:55**
* Tencent cartoon APP check-in. **6:55**
* NowCoder check-in. **6:55**
* Read articles and check interview invitation (MaiMai APP). **6:55**
* 163 music APP check-in. **6:55**
* 百词斩. **7:00**
* 101WeiQi daily exercise check-in. **7:05** **7:05**
* Download books from salttiger. **7:54**
* Check github messages. **7:56**
* Check gitee messages. **7:59**
* Check news from ZhiHu app or website. **8:00**
* reading mails from skyzhx@163.com. **8:01**
* Read Sina Blog. **8:08**
* Read 139 mails. **8:09**
* Download ebook from jb51.net. **8:12**
* Go Game check
  * Leela Zero vs Leela Zero(B5s-W3s) **8:04** (87%-81%)
  * Leela Zero vs Leela Zero(B5s-W3s) **8:12** (81%-79%)
  * Leela Zero vs Leela Zero(B5s-W3s) **8:24** (79%-74%)
* Exercise of Vocabulary (vocabulary.com). **8:26**
* Reading mail from jedigit@163.com mails. **10:35**
* Reading 1 minutes at SIMPLE wiki or Baike.Baidu. **10:44**
* Adjust Java study conceps list

## Proxy

* [ie proxy](Https://10.153.24.98;Http://10.153.24.98;Http://10.134.33.98;Http://10.98.29.190;Https://Ca.Foxconn.Com;Http://Ca.Foxconn.Com;Http://esign.efoxconn.com;Http://ks.esign.efoxconn.com;Http://evouchers.efoxconn.com;Http://emvouchers.efoxconn.com;10.*;10.*;*.efoxconn.com;*.foxconn.com;*.moko.cc;*.163.com;*.mm131.com;*.mmjpg.com;*.jd.com;*.github.com;github.com;pan.baidu.com;https://ssl.mail.163.com;*.weibo.com;developer.aliyun.com;*.bilibili.com;*.adobe.com;*.elastic.co;*.sina.com.cn;transfer.efoxconn.com;*.qq.com;*.cnblogs.com;*.youdao.com;*.blogspot.com;*.youdao.com;*.yinxiang.com;*.youku.com;*.iteye.com;*.layui.com;*.amazeui.org;*.golang.org;www.0daydown.com;*.minmaxtec.com)

* Intranet Proxy

```text
10.191.131.12:3128
Https://10.153.24.98;Http://10.153.24.98;Http://10.134.33.98;Http://10.98.29.190;Https://Ca.Foxconn.Com;Http://Ca.Foxconn.Com;Http://esign.efoxconn.com;Http://ks.esign.efoxconn.com;Http://evouchers.efoxconn.com;Http://emvouchers.efoxconn.com

10.130.2.191:808
```

## Vedio study

* Begin Series to Web API: 01 What are Web API. 11:39
* Begin Series to Web API: 02 Overvview of HTTP. 12:45
* Begin Series to Web API: 03 Create a Web API project. 13:02
  * 😣 My visual studio 2019 without OpenAPI option. 12:56
  * ✅ Project->Add->Connected service->Add OpenAPI. 13:10
  * 😣 I need choice a json or xaml file, but I don't know what that means. 13:10
  * 😣 I can't found swagger/index.html when I add swagger.configuration.json. 13:40
  * ✅ There has an article about swagger configuration at JianShu. 13:41
  * ✅ I delete swagger service option, and use nuget packages management install Microsoft.OpenAPI package. 13:42
  * 😣 I can't found swagger/index.html again. 13:43
  * ✅ The article in the JianShu is a right solution. 13:52
* Begin Series to Web API: 04 Working with Controllers and Action methods. 18:12
  * 💬 Controller attribute: \[Route("api/\[controller\]")\]
  * 💬 Controller attribute: \[ApiController\]
  * 💬 Method attribute: \[HttpGet\]
* Begin Series to Web API: 05 Web API CRUD Conventions. 18:52
  * create, read, update, delete
  * create, post, 201(created), 400(bad request)
  * read, get, 200(ok), 404(not found)
  * update, put/pathc, 204(not content), 404(not found)
  * delete, delete, 204(not content), 400(bad request)
  * attribute: HttpGet, HttpPost, HttpDelete
  * C# code: HttpDelete, return BadRequest();, return NoContent();
* Begin Series to Web API: 06 Understanding Web API Routes. 19:02
  * [graph.microsoft.com](https://graph.microsoft.com/v1.0/me)
  * protocal structure: scheme + host name + path
  * line 35: HttpDelete("{id}")
  * line 36: public ActionResult DeleteRecipes(string id)
  * Jedi: Notice line 36 and 37, the id will be match.
* Begin Series to Web API: 07 Debug with Swagger UI. 20:04
  * [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/)
* Begin Series to Web API: 08_webapis_mid
* Begin Series to Web API: 09_webapis_mid
* Begin Series to Web API: 10_webapis_mid
* Begin Series to Web API: 11_webapis_mid
* Begin Series to Web API: 12_webapis_mid
* Begin Series to Web API: 13_webapis_mid
* Begin Series to Web API: 14_webapis_mid
* Begin Series to Web API: 15_webapis_mid
* Begin Series to Web API: 16_webapis_mid
* Begin Series to Web API: 17_webapis_mid
* Begin Series to Web API: 18_webapis_mid

## Muanual add Swagger support at ASP.NET Core Web API project

* Add nuget packages
  * Add Microsoft.OpenAPI packages.
  * Add NSwag.ApiDescription.Client.
  * Add Swashbuckle.AspNetCore.Swagger.
  * Add Swashbuckle.AspNetCore.SwaggerGen.
  * Add Swashbuckle.AspNetCore.SwaggerUI.

* Add SwaggerGen service to Startup (Startup.cs).

  ```C#
    services.AddSwaggerGen(c =>
    {
        //注意不能用大写V1，不然老报错，Not Found /swagger/v1/swagger.json
        // Jedi: Pay attension for the submitter's notice !
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    });
  ```

* Enable Swagger pipeline. Add some sections to Configure method (startup.cs).

  ```C#
    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
    // specifying the Swagger JSON endpoint.
    // UseSwaggerUI方法调用启用静态文件中间件。
    app.UseSwaggerUI(c => {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    });

    // 在webapi中不需加載這個選項，但在ASP.NET Core MVC中要增加這個管道
    // app.UseMvc();
  ```

* Ch04 智能合约和区块链操作系统, 4.1 以太坊：神一样的存在. 10:10
* Ch04 智能合约和区块链操作系统, 4.2 智能合约的定义、编译和测试. 10:10
  * JediL 有3种环境的配置，要安排实验逐一验证！
* Ch04 智能合约和区块链操作系统, 4.3 以太坊虚拟机EVM. 10:27
  * length: 8:33 mins

* Ch04 智能合约和区块链操作系统, 4.4 智能合约Solidity编程初探. 11:26
  * 静态语言，类似JavaScript
  * 不同1: address, 本身就是具备一个地址.
  * 不同2: payable, 内嵌支付功能.
  * 不同3: state, 存储在网络上区块链上.
  * 不同4: 运行环境在去中心化的区块链上.
  * 不同5: 一旦发生异常，所有的调用都会被回撤.
  * 开始学习Solidity的最好方式是remix
  * [remix](https://remix.ethereum.org)
  * [remix cn](http://remix.hubwiz.com/)
  * 源码文件结构(版本申明、引用文件、路径相关、在实际的编译中使用、代码注释、文档注释)
  * 引用文件：全局引入、自定义命名空间引入、分別定义引入
  * 合约结构
    * 状态变量（State variables）
    * 函数（Functions）
    * 函数修饰符（Function Modifiers）
    * 事件（Events）
    * 结构类型（Structs Types）
    * 枚举类型（Enum Types）
  * Jedi: 函数修饰符（Modifier）有点特殊，有点像单元测试中的setup().

* Ch04 智能合约和区块链操作系统, 4.5 以太坊的共识机制与挖矿. 11:55
  * PPT01P: 共识机制在以太坊中的价值（一致性要求）
  * PPT01P: 安全可靠的状态共识 <- 在不信任的网络中进行消息传递，要求有容错机制 <- 网络堵塞、网络故障、虚假消息
  * PPT02P: 以太坊共识机制版本，Froniter、Homestead、Metropolis、Serenity
  * PPT02P: PoW -> PoS
  * PPT02P: 讲课时以太网的共识机制处于“Homestead”（家园）
  * PPT03P: 如何解决记账权中心化问题 (Jedi: 不是特别懂)
  * PPT04P: Casper共识协议（基于保证金的经济激励共识协议）
  * PPT05P: 以太坊挖矿原理, PoW + Ethash(Dagger-Hashimoto)
  * PPT05P: 挖矿流程(Jedi: 没太听明白)
  * PPT05P: 挖矿步骤(Jedi: wallet+computer+dig client)
  * PPT05P: Claymore's Dual ETH + DCR/SC GPU Miner v6.3

* Ch04 智能合约和区块链操作系统, 4.6 EOS概述
  * PPT01P

```solidity
import "filename";
import * as symbolName from "filename"
import {symbol as alias, symbol2} from "filename"
```

```powershell
Measure-Command
```

## regx

* r"hel+o" -> helllllo
* r"(\d{1,3}\.){3}\d{1,3}"

## foxconn official dns

* 10.150.4.161
* 10.244.226.1

```powershell
Uninstall-WindowsFeature -Remove Web-Server  # Uninstall IIS.
$ENV:PSModulePath # The path of powershell modules storage.
Import-Module servermanager # Install servermanager module to local host.
Compress-Archive *.xlsx demo.zip # Compress all xlsx file to demo.zip
```

```powershell
# PowerShell for VS2019
# You can use this cmdlet to call web api.
# 391232.com
Invoke-RestMethod (Microsoft.PowerShell.Utility) - PowerShell
```

* template collectors
  * [story](https://toidicode.github.io/template/16-story/)
  * [cardio](https://toidicode.github.io/template/17-cardio/)
  * [made](https://toidicode.github.io/template/19-made-one/)
  * [weather](https://toidicode.github.io/template/21-weather/)

* Study how to use row id at SQL Server.

* HtmlRenderer.PdfSharp
* DirectML是個什麼東東？

```bash
# Bash命令行文件重命名(加扩展名)小技巧：
# 与其：mv -v 2021-04-06 2021-04-06.txt
# 不如：mv -v 2021–04-06{,.txt}
mv -v 2021-04-06 2021-04-06.txt
mv -v 2021–04-06{,.txt}
```

```shell
# I don't know how to use chcp.exe at windows console.
PS c:> chcp.exe
```

```markdown
# check all certificates on local computer.
MMC.exe -> add certificate node -> open
```

* What is postcss?
* 黑天鹅事件？
* snapshot機制？
* snapshot 通常是天级别，checkpoint 一般是小时级。
* 321備份策略：至少 3 个副本, 2 个不同的存储介质, 1 个 offsite
* todo
  * How to create a Deb package
  * How to create a RPM package
* Hyperledger: 開源的區塊鏈（聯盟鏈）
* Use RAM as a disk~
  * [link1](https://stackoverflow.com/questions/13727718/how-to-create-a-ram-disk-with-imdisk-and-c)
  * [link2](https://stackoverflow.com/questions/2402888/programmable-ram-disk-api-for-net)
* 《考试脑科学》
* [OneAPM工作两年总结](https://www.ituring.com.cn/article/497377)
  * HBase->Druid->ClickHouse(fast open-source OLAP DBMS)
  * 探针的原理, Metric 数据, Boot化
  * Camel中间件
  * Mock Agent: 当时我们经常遇到的开发测试问题是，测试不好造数据来进行测试，无法验证某些特定指标的数据，开发无法脱离探针团队单独验证新功能和数据。于是我们决定自己写一套探针数据生成器，定义了一套DSL语言，完整地定义了应用、探针等数据格式，并能自动按照定义规则随机生成指定数据到后端。
* dotnet core怎么连kafaka
  * [rdkafka-dotnet](https://github.com/ah-/rdkafka-dotnet)
  * [kafka-net](https://github.com/Jroland/kafka-net)
  * [kafka-net](https://github.com/ExactTargetDev/kafka-net)
  * [CSharpClient-for-Kafka](https://github.com/microsoft/CSharpClient-for-Kafka)
  * [kafka4net](https://github.com/ntent/kafka4net)
  * [kafka-sharp](https://github.com/criteo/kafka-sharp)
  * [kafunk](https://github.com/jet/kafunk)
* 什麼是GPG 验证？
* Main lang skills: C#,Java,Python,Cpp,C
* I should deep into SysInternals. **11:10**
* Book: Inside the Microsoft Build Engine: Using MSBuild and Team Foundation Build (Developer Reference) 2nd Edition
* Book: Deploying .NET Applications Learning MSBuild and ClickOnce
* Book: StyleCop Code Analysis How-to
* Book: MSBuild Trickery: 99 Ways to Bend the Build Engine to Your Will
* Book: Continuous Integration in .NET
* MLEveryday/100-Days-Of-ML-Code
* Windows Sysinternals Administrator's Reference
* [cicadasmile](https://github.com/cicadasmile)
* ChatUI
* 免疫逃逸?
* Java -> Web Services/SOAP/XML-RPC
* Web Services Description Language (WSDL)
* Universal Description,Discovery, and Integration (UDDI)
* 日志易
* 通过数据标准化算法分析出QPS 和慢速比，井根据实时压测反馈的数据生成水位线， 结合两个指标和水位线的波动情况进行自动扩容和缩容。
* 智能化故障诊断、异常点检测、根因分析等是智能运维要解决的核心问题
* Apache Dremel
* 轮询的C#实现
* Books: Build Your Own .NET Language and Compiler
* Github Codespaces (因為收費，並沒有什麼價值->考慮在內部搭建一套在線的Visual studio code)
* 現在的前端技術真是風起雲湧呀～
* css module? 不懂～

```powershell
# start notepad++
start "C:\Program Files (x86)\Notepad++\notepad++.exe"
```

* [github docs](https://docs.github.com/cn)
* npm總是有warning

```powershell
(Get-FormatData System.Diagnostics.Process).FormatViewDefinition.Count
(Get-FormatData System.Diagnostics.Process)
```

* [un.Block](https://unblock256.substack.com/)

```shell
# 以管理员方式运行cmd
runas /noprofile /user:administor cmd
```

* npm command
  * npm install npm@latest -> update npm

* C#應用程序的補丁機制？ **10:31**
* 開箱即用！要深刻理解之～ **10:33**
* Bootstrap, layui, tailwindcss, easyui. **10:47**
* [vite documents](https://cn.vitejs.dev/guide/). **10:53**

* [打造高速运转的迭代机器：现代研发流程体系打造](https://www.infoq.cn/article/al0aIS96xUzEdj2QK3uW)
  * 日志系统、APM 探针服务、统计监控服务、错误上报服务、OnCall报警服务以及AutoScale机制
  * Qmetry 和 Jira
  * Selenium 换到了 Cypress
  * [Confluence](https://www.atlassian.com/software/confluence). (文档管理)  **14:16**

* [不要把大型 JAR 包放进 Docker 镜像](https://www.infoq.cn/article/eULlQ4A3RcaLLQeImQy9)
  * 有益的实践. **14:16**

* [从零搭建一个基于ELK的日志、指标收集与监控系统](https://www.infoq.cn/article/5C7KNlvsEaaYjA5WVYrM)
* **[蚂蚁金服ZSearch在向量检索上的探索](https://www.infoq.cn/article/Rb1dzI4T69ivvQFvjCo7)**
* [从Zabbix到Prometheus，同程艺龙数据库监控系统的实践](https://www.infoq.cn/article/4IbBiSZwkkBhUwKlvDEY)
  * JMX，EC2，MySQL，PostgresSQL，SNMP，Consul，Haproxy，Mesos，Bind，CouchDB，Django，Memcached，RabbitMQ，Redis，syslog
* [从零开始入门 K8s：监控与日志的可观测性](https://www.infoq.cn/article/1WFHGE5QH9Xtit57gvj5)
* [谷歌面试题解析：单位换算](https://www.infoq.cn/article/dUaldE2WQiYZmsKLBhjH)
* [互联网产品运作模式详解](https://www.infoq.cn/article/3EVku39xVhJYs7ba9uk7)
* [寄存器基本原理（下篇）](https://www.infoq.cn/article/GyVRRvTsaJ32krxqpuQK)
* [喊话 JavaScript 开发者：玩 DOM 也要专业范儿](https://www.infoq.cn/article/3siSFK82XP06K6DDCwIt)
* [25个有用的Python代码段](https://www.infoq.cn/article/RoiUfiWxrT4xyS1dBKuh)
* [聊聊安全测试的“各种姿势”](https://www.infoq.cn/article/pAxfCz45JgNFlbSFExkb)
  * 漏洞盒子安全众测平台、360 补天安全众测平台、阿里先知安全众测平台、SOBUG 安全众测平台
  * Jedi: 值得多看幾次. **14:54**
* [从 OpenAI 的魔方机械手，看元学习的崛起](https://www.infoq.cn/article/1lfXdpTYh0jw2ZNjjRSw)
* [嘿，同学，你要的Java内存模型 (JMM) 来了](https://xie.infoq.cn/article/739920a92d0d27e2053174ef2)
* [来自 Airbnb、Netflix 等公司的代码评审最佳实践](https://www.infoq.cn/article/mEZfSYp11p2KFvHcXHoq)
* [人机对话关键技术及挑战](https://www.infoq.cn/article/QpC2C5HSpHRM9v88Llv0)
* [人脸、指纹、声音均可被模仿，生物识别真的安全吗？](https://www.infoq.cn/article/g02BWiyZLOhHG05dD2Oh)
  * Jedi: 有意思的攻擊方法. **15:19**
* [如何建设数据安全体系?](https://www.infoq.cn/article/vHy607MNm6biSJdIvZix)
* [如何快速采集分析平台日志，并进行展示监控？](https://www.infoq.cn/article/PkB5Fpt5LwPax3IhyCwU)
* [如何使 Python 程序快如闪电，提速 30%？](https://www.infoq.cn/article/HIXcsfZS7aHw5BufuOqk)
* [三步走！基于 Knative Serverless 技术实现一个短网址服务](https://www.infoq.cn/article/2v4QjIYziuj5Wf59rLs2)
* [深度学习中的微分](https://www.infoq.cn/article/7tfXxah6mfZpHVhK0SoC)
* [如何使用开源 Rasa 和 Mozilla 工具构建语音助手](https://www.infoq.cn/article/b8MzbLh0R1GyjLioFdsy)
* [giao-js 用js写一个js解释器](https://github.com/bramblex/jsjs)
* [rocketmq at stackoverflow](https://stackoverflow.com/questions/tagged/rocketmq)
* eslint是什麼鬼東西？
* Learn From Unit Test
* 收集一下dubbo的视频
* [PostCss](https://postcss.org/)
* Pulsar是消息队列服务的中间件？
* [QEMU 6.0.0 稳定版发布](https://www.oschina.net/news/139895/qemu-6-0-0-released?from=20210509)
* Content-Type=application/json
* Idea: Computer program lang study guide, and study project.
  * Compiler skills
  * Basic
    * basic type
    * constant, variable
    * comments
    * condistion, iteration
  * Middle
    * type convert
    * oop
    * String operation
    * I/O operation
    * File operation
  * High
* Keyword: msiexec, slient install.
* [Ruby视频收集](https://space.bilibili.com/286293946?from=search&seid=6856907615671458278)
* SysMain服務可以被禁用
