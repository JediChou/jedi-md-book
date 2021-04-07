# Self Study

Author: Jedi Chou, Create at 2021.4.8 7:56 PM

* Daily study
  * 101WeiQi daily exercise check-in. 7:10, 7:10
  * 163 music APP check-in. 7:10
  * Don't memorize words APP check-in. 7:10
  * Tencent cartoon APP check-in. 7:10
  * NowCoder check-in. 7:10
  * Read articles and check interview invitation (MaiMai APP). 7:10
  * 百词斩. 7:15
  * Read Sina Blog
  * Exercise of Vocabulary (vocabulary.com)

* Weekly task
  * reading 163.com mails
  * Reading 1 minutes at SIMPLE wiki or Baike.Baidu
  * Go Game check
    * Leela Zero vs Leela Zero (86%)
    * Leela Zero vs Leela Zero
    * Leela Zero vs Leela Zero

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
