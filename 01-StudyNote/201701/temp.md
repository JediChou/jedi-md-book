360 Note
========

# Temp
# 2016-6-29

idea is cheap
idea is everything as long as you are willing to test it
keyword pair: open source & CDN 
非常规认知型工作，常规认知型工作，常规手工型工作，非常规手工型工作
 
1、CPU總核數最大值？128？數據庫欄位128?
2、同上，磁盤總數，分區。
3，PHP服務器是否應該與MYSQL服務器分開。即數據庫端做成WEBSERVICE形式對外開放。（方便日後其他形式的WEB業務端的增加？）
4，日誌文件是否以XML的實體文件形式儲存，改成數據庫數據的形式？方便WEB端展示，減輕服務器讀取文件的壓力以及極大減小客戶端傳輸數據大小。前者方便管理員以文件形式查看但服務器消耗較大，後者方便WEB處理服務器消耗小，但管理員不能以XML查看。
5，是否與LOGBAK整合成一體。1024*1024*1024*1024 10^12
6，是否應對讀寫特別大的進程記錄起來。（磁盤活動）
7，服務器數據庫零點自動清理刪除三十天前的數據，這種方式？需要配置文件的方式自定義嗎？
8，IP不能確定，需配置文檔
9，WARNING報警功能？
10，參數順序抓取，開線程異步抓取？

开源项目是要有人用才能生长起来的，而个人做大型开源框架的问题就是初期没人使用，
也就生长不起来。但小而美使用成本低的项目，只要做到前面说的几个点，就可以慢慢
让更多人用起来，生长起来，而且小项目关键点少，在这块已经有很完善的解决方案的
情况下，除非有重大突破，否则大公司再做一个一样的已经没什么意义了，开源项目毕
竟不是创业产品，大公司不会恶意竞争。典型的案例是 jQuery 和 AFNetworking。

10.134.158.107, administrator, foxconn.88
(spotlight oracle cluster)

EDM-电子舞曲目前取得了巨大的成功，众多品牌广告商都趋之若鹜地投重金到电子舞曲市场，很多明星也非常愿意代言相关品牌活动。
私有化：概念、理由、過程、手段、成功/失敗案例

Vagrant: Vagrant是一种对虚拟化进行抽象的工具，能够简化个人机器设置的过程，通常用于开发或测试目的，可以在团队成员之间很方便地进行共享。
WinRM: 如果你打算尝试从非Windows平台上远程访问Windows系统，那么即使使用远程PowerShell也无能为力，你唯一的选择就是直接调用winrm web service。

AB股制度
音乐市场：大佬/小弟，资本，名角，大拿……
购物决策平台

# 2016-6-29
* 自己研发中间件的前提（数据化运营）
  - 数据化运营，则要实现“全链路的监控”
  - 简单的非大规模分布式系统; 数据化运营的大规模分布式系统; 高效运维可精确定位问题的分布式系统
  - 淘宝的中间件：RPC远程过程调用框架, MQ消息中间件, 分布式数据库
  - 三点注意：业务拆分, 拆分数量, 存储方式
  - 如果想发布应用，那就必须把应用的所有管理和监控都做出来。
  
# 2016-7-1
* Manning Microservices in .NET
PART 1: GETTING STARTED WITH MICROSERVICES IN .NET
1. MICROSERVICES AT A GLANCE
1.1. What is a Microservice?
1.1.1. What is a Microservices Architecture?
1.1.2. Microservice Characteristics
1.2. Why Microservices?
1.2.1. Enabling Continuous Delivery
1.2.2. High Level of Maintainability
1.2.3. Resilient and Scalable
1.2.4. The Costs and Downsides of Microservices
1.2.5. Greenfield vs. Brownfield
1.2.6. Code Reuse?
1.3. Serving a User Request - An Example of How Microservices Work in Concert
1.3.1. Main Handling of the User Request
1.3.2. Side Effects of the User Request
1.3.3. The Complete Picture
1.4. A .NET Microservices Technology Stack
1.4.1. Nancy
1.4.2. OWIN
1.4.3. Setting Up a Development Environment
1.5. A Simple Microservices Example
1.5.1. Create an Empty ASP.NET 5 application
1.5.2. Add Nancy to the Projects
1.5.3. a Nancy Module with an Implementation of the Endpoint
1.5.4. Add an OWIN Middleware
1.6. Summary
2. A BASIC SHOPPING CART MICROSERVICE
2.1. Overview of the Shopping Cart Microservice
2.1.1. Components of the Shopping Cart Microservice
2.2. Implementing the Shopping Cart Microservice
2.2.1. Creating an Empty Project
2.2.2. The Shopping Cart Microservice's API for other services
2.2.3. Fetching Product Information
2.2.4. Parsing the Products Response
2.2.5. Adding a Failure Handling Policy
2.2.6. Implementing a Basic Event Feed
2.3. Running the Code
2.4. Summary
PART 2: BUILDING MICROSERVICES
3. IDENTIFYING AND SCOPING MICROSERVICES
3.1. The Primary Driver for Scoping Microservices: Business Capabilities
3.1.1. What is a Business Capability?
3.1.2. Identifying Business Capabilities
3.1.3. Example: Point of Sale System
3.2. The Secondary Driver for Scoping for Microservices: Supporting Technical Capabilities
3.2.1. What is a Technical Capability?
3.2.2. Examples of Supporting Technical Capabilities
3.2.3. Identifying Technical Capabilities
3.3. What to do When the Correct Scope is not Clear?
3.3.1. Sometimes Start a Bit Bigger
3.3.2. Carve Out New Microservices from Existing Microservices
3.3.3. Plan for Carving Out New Microservices Later
3.4. Well Scoped Microservices Adhere to the Microservice Characteristics
3.4.1. Primarily Scoping to Business Capabilities Leads to Good Microservices
3.4.2. Secondarily Scoping to Supporting Technical Capability Leads to Good Microservices
3.5. Summary
4. MICROSERVICE COLLABORATION
4.1. Types of Collaboration: Commands, Queries and Events
4.1.1. Commands and Queries: Synchronous Collaboration
4.1.2. Events: Asynchronous Collaboration
4.1.3. Data Formats
4.2. Implementing Collaboration
4.2.1. Setting Up a Project for the Loyalty Program Microservice
4.2.2. Implementing Commands and Queries
4.2.3. Implementing Commands with HTTP POST or HTTP PUT
4.2.4. Implementing Queries with HTTP GET
4.2.5. Data Formats
4.2.6. Implementing an Event Based collaboration
4.3. Summary
5. DATA OWNERSHIP AND DATA STORAGE
5.1. Each Microservice has a Data Store
5.2. How to Partition your Data Between Microservices?
5.2.1. Rule 1: Data Ownership Follows Business Capabilities
5.2.2. Rule 2: Replicate for Speed and Robustness
5.2.3. Where Does a Microservice Store its Data?
5.3. Implementing Data Storage in a Microservice
5.3.1. Storing Data Owned by the Microservice
5.3.2. Storing Events Raised by a Microservice
5.3.3. Setting Cache Headers in Nancy Responses
5.3.4. Reading and Using Cache Headers
5.4. Summary
6. DESIGN FOR ROBUSTNESS
6.1. Expect Failures
6.1.1. Have Good Logs
6.1.2. Roll forward vs Roll back
6.1.3. Do Not Propagate Failures
6.2. The Client Side of a Collaboration is Responsible for Robustness
6.2.1. Robustness Pattern: Retry
6.2.2. Robustness Pattern: Circuit Breaker
6.3. Implementing Robustness Patterns
6.3.1. Implementing a Fast Paced Retry Strategy with Polly
6.3.2. Implementing a Circuit Breaker with Polly
6.3.3. Implementing a Slow Paced Retry Strategy
6.3.4. Log All Unhandled Exceptions
6.4. Summary
7. WRITING TESTS FOR MICROSERVICES
7.1. What and How to Test
7.1.1. The Test Pyramid: What to Test in a Microservices System
7.1.2. System Level Tests: Testing a Complete Microservices System End-to-End
7.1.3. Service Level Tests: Testing a Microservice From Outside Its Process
7.1.4. Unit Level Tests: Testing Endpoints From Within the Process
7.2. Testing Libraries Used: Nancy.Testing and xUnit
7.2.1. Meet Nancy.Testing
7.2.2. Meet xUnit
7.2.3. xUnit and Nancy.Testing working together
7.3. Writing Unit Tests Using Nancy.Testing
7.3.1. Setup a Unit Test Project
7.3.2. Use the Browser Object to Unit Test Endpoints
7.3.3. Use Configurable Bootstrapper to Inject Mocks into Endpoints
7.4. Writing Service Level Tests
7.4.1. Create Service Level Test Project
7.4.2. Create Mocked Endpoints
7.4.3. Start All Processes of the Microservice Under Test
7.4.4. Execute Test Scenario Against the Microservice Under Test
7.5. Summary
7.6. Further Reading
PART 3: OPERATIONALIZING AND REUSING CROSS CUTTING CONCERNS
8. INTRODUCING OWIN: WRITING AND TESTING OWIN MIDDLEWARE
8.1. Handling Cross Cutting Concerns
8.2. The OWIN Pipeline
8.2.1. What Belongs in OWIN and What Belongs in Nancy?
8.3. Writing Middleware
8.3.1. Middleware as Lambdas
8.3.2. Middleware Classes
8.4. Testing Middleware and Pipelines
8.5. Summary
8.6. Further Reading
9. CROSS CUTTING CONCERNS: MONITORING AND LOGGING
9.1. Monitoring Needs in Microservices
9.2. Logging Needs in Microservices
9.2.1. Structured Logging with SeriLog
9.3. Implementing Monitoring Middleware
9.4. Implementing Logging Middleware
9.4.1. Adding a Correlation Tokens to All Log Messages
9.4.2. Adding a Correlation Token to All Outgoing HTTP Requests
9.4.3. Logging Requests and Request Performance
9.4.4. Configuring an OWIN Pipeline with Correlation Token and Logging Middleware
9.5. Summary
10. SECURING MICROSERVICE TO MICROSERVICE COMMUNICATION
10.1. Microservices Security Concerns
10.1.1. Authenticate Users at the Edge
10.1.2. Authorize Users In Microservices
10.1.3. How Much Should Microservices Trust Each Other?
10.2. Implementing Secure Microservice to Microservice Communication
10.2.1. Meet IdentityServer
10.2.2. Implementing Authentication With IdentityServer Middleware
10.2.3. Implementing Microservice-to-Microservice Authorization With IdentityServer and Middleware
10.2.4. Implementing User Authorization in Nancy Modules
10.3. Summary
11. BUILDING A REUSABLE MICROSERVICE PLATFORM
11.1. It Should be Quick and Easy to Create a New Microservice
11.2. Creating a Reusable Microservice Platform
11.3. Packaging and Sharing Middleware with NuGet
11.3.1. Creating a Package with Logging and Monitoring Middleware
11.3.2. Creating a Package with Authorization Middleware
11.3.3. Creating a Package with Rest Client Factory
11.3.4. Using the Microservice Platform in Microservice
11.4. Summary
PART 4: BUILDING APPLICATIONS
12. CREATING APPLICATIONS OVER MICROSERVICES
13. EVOLVING THE SYSTEM
APPENDIXES
APPENDIX A: DEVELOPMENT ENVIRONMENT SETUP
A.1. Set Up an IDE
A.1.1. Visual Studio 2015
A.1.2. Visual Studio Code
A.1.3. ATOM
A.2. Set Up DNX
A.3. Set Up Postman
APPENDIX B: DEPLOYMENT

# 2016.7.2
* 中国企业运用数据和分析的目的
  - 提升业务流程和成本的效率 57%
  - 管理风险 52%
  - 开发新产品和服务 50%
  - 分析现有客户群体的需求、价值、盈利性和忠诚度 50%
  - 预测/管理技能短板 48%
  - 推动战略和变革 48%
  - 监测市场 46%
  - 分析产品如何被使用 43%
  - 发现新客户  43%
  - 提高财务报告质量 40%

# 2016.7.3
* 视频网站的基础架构（网络、软件、硬件、数据库等）
* D3/BaiDu Graphics

# 2016.7.6
* Vue.js
* OTA(Online Travel Agent)
*  Timeseries Database
* 实时的监控报表系统，报警和自动故障恢复系统，以及分布式的日志分析和 tracing 系统
* 整个监控报警系统每分钟处理 25 亿次的 metrics 写入，一百七十万的复杂查询和两万五千次的报警规则
* KV 中间件
* Poseidon 系统是一个日志搜索平台
* 优选金融

# 2016.7.7
* 微分方程、向量分析、矩阵、拉普拉斯变换、傅里叶变换、复变分析、数值方法、概率论、数理统计、运筹学、博弈论、控制理论、组合数学、信息论
* 关联交易和信息披露违规行为
* 免责声明
* 杠杆收购
* 如果你不能讓別人輕易了解你在做什麼，就是你還不了解自己在做甚麼。
* 市场化的浮动汇率
* 《反轉四進制》 (relationship: 《聖經密碼》)
* 在富士康里使用google account
* Google学术、百度学术

# 2016.7.8
* 如何确定文章与实际状况的差异，例如用一个信息“失真率”来衡量

# 2016.7.9
* chef, winrm, windows cookbook, powershell, push jobs
* Wealthfront 选择的了11 大类 ETF
  - 美国股票
  - 其他发达国家股票-
  - 新兴市场股票
  - 分红股票
  - 房地产
  - 自然资源
  - 美国政府债券
  - 公司债券
  - 新兴市场债券
  - 市政债券
  - 防通胀证券
* 高度诚信、财务稳健 -> 如何量化！？
* 特许经营
* 特许金融分析师
* 绘制一份深圳的房价图，房价数据可从网上搜索得来（即使全部是假的，但比例关系基本不会变动）
* corelib
  - https://colorlib.com/polygon/gentelella/index.html
  - https://colorlib.com/wp/
  - https://colorlib.com/wp/free-bootstrap-admin-dashboard-templates/
  - https://github.com/puikinsh/gentelella
  
# 买强手棋给文心

# 点子-20160608-1911
设计一个适用于租客的超小移动型空调。
痛点：贵、难移动、大
1.三个鞋盒那么大
2.不外接、充电后可用13小时
3.空调水有盒子接
4.支持手机操控（蓝牙、WIFI）
5.充电模块、空压机模块可组合

# SnmpSharpNet
# Phpstorm-8.0.3 注册码和下载地址
username :cf96PiPYt271u1TC

License Key :
97807-12042010
00001GctOKh8f206hliugiW6iAS5bh
8AAXfEtfpdDSr0oZfJFMQmzncjbdGu
4p"Q3ShiftP0eHtNAUh973O1FnzpzL

http://download-cf.jetbrains.com/webide/PhpStorm-8.0.3.exe

# feedly keyword
[cum], [playboy], [pussy], [nice leg], [tit], [porn gif], [hot girl], [sexual], [x-art], [nice shot], [cum gif], [Anal sex]