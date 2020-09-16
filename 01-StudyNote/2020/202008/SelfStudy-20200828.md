# Self Study

Author: Jedi Chou, Create at 2020.8.28 7:32 AM

* Daily study
  * 101WeiQi daily exercise check-in. 7:34
  * 163 music APP check-in. 7:34
  * Read articles and check interview invitation (MaiMai APP). 7:35
  * Don't memorize words APP check-in. 7:35
  * NowCoder check-in. 7:36
  * Tencent cartoon APP check-in. 7:36
  * Read Sina Blog. 7:43
  * Exercise of Vocabulary (vocabulary.com). 7:50
  * Reading 1 minutes at SIMPLE wiki. 8:02
  * 163.com mail. 11:10

## Other

* 打卡
  * 更新香信的“调查问卷列表”. 7:37
  * 更新香信的“个人14天内旅居史”. 7:37
  * 编写Ding’Ding的工作日报. 17:48

* Go Game check
  * Leela Zero vs Leela Zero. 8:40
  * Leela Zero vs Leela Zero. 8:48
  * Leela Zero vs Leela Zero. 8:57

* 发现netbeans12下载的校验类型分别为SHA-512,PGP,ASC，以后在对象存储中也应该进行此类校验. 9:31
* [H2 memory database](http://h2database.com/)有点意思. 11:02
* [好东西-hotexamples](https://csharp.hotexamples.com/). 16:45
* Amazon文档的font-family: Monaco,Menlo,Consolas,Courier Prime,Courier,Courier New,monospace. 16:46

## 多线程专题

* Memo: 昨日的笔记夹在绿色笔记本中
* 基本的lock
* await/async基本示例

## Java基础教程全面的深入学习Skywalking

### C0. 学习目标. 9:44 AM

* 单体架构变为微服务架构(架构复杂了)
  * 某个服务挂掉后如何快速定位
  * 如何获取某个服务的性能指标，以便可以调度AP资源

* 能够知道什么是Skywalking
* 能够搭建Skywalking环境
* 能够使用Skywalking进行rpc调用监控
* 能够使用Skywalking进行mysql调用监控
* 了解Skywalking插件
* 了解Skywalking agent和Open Tracing原理

### C1. Skywalking概述. 10:16 AM

* 1.1 什么是APM系统
* 1.2 什么是Skywalking

* detail: 什么是APM系统
  * application performance management
  * 1.1.1 APM概述：APM系统是可以理解系统行为，用于分析性能问题的工具，以便发生故障的时候，能够快速定位和解决问题。
  * 1.1.2 分布式链路追踪：性能分析、链路梳理
  * 1.1.2 分布式链路追踪：为了解决这些问题，Google推出了一个分布式链路跟踪系统Dapper，之后各个互联网公司都参照Dapper的思想退出了自己的分布式链路跟踪系统，而这些系统就是分布式系统下的APM系统。
  * 1.1.3 什么是OpenTracing（**规范**）：分布式链路跟踪最先由Google论文中提出，而OpenTracing通过提供平台无关、厂商无关的API，使得开发人员能够方便的添加（或更换）追踪系统的实现。
  * 1.1.3 什么是OpenTracing：没有时间、没有调用关系（Image1)
  * 1.1.3 什么是OpenTracing：横轴的方式来展示 -> 并行情况，资源耗时情况（Image2）
  * 1.1.4 主流的开源APM产品：PinPoint，优点：无侵入式，缺点：慢
  * 1.1.4 主流的开源APM产品：Skywalking，优点：支持多个RPC
  * 1.1.4 主流的开源APM产品：Zipkin，推特团队维护，优点：简单
  * 1.1.4 主流的开源APM产品：CAT，代码有侵入性，要埋点

### C2. 1.2 什么是Skywalking. 10:30

* 1.2.1 Skywalking概述
  * 优点1：多语言自动探针，Java, .NET Core和NodeJS
  * 优点2：多种监控手段，语言探针和service mesh
  * 优点3：轻量高效，不需要额外搭建大数据平台
  * 优点4：模块化架构，UI、存储、集群管理多种机制可选
  * 优点5：支持告警
  * 优点6：优秀的可视化效果
  * Jedi: service mesh?
  * 整体架构图
  * 三个部分P1：探针（Agent)fuze进行数据的收集，包含了Tracing和Metrics是数据，agent会被安装到服务所在的服务器上。
  * 三个部分P2：可观测分析平台OAP（Observability Analysis Platform），接受探针发送的数据，并在内存中使用分析引擎（Analysis Core）进行数据的整合运算，然后将数据存储到对应的存储介质上，比如：ElasticSearch、Mysql、H2等。同时OAP还使用查询引擎（Query Core）提供HTTP查询接口。
  * 三个部分P3：提供独立的UI进行数据的查看，UI调用OAP提供的接口，获取数据后进行展示。

* 1.2.2 Skywalking的优势
  * 社区活跃
  * 支持多种语言
  * 探针无侵入性（无需修改代码）
  * 探针性能优秀（比PinPoint要好）
  * 支持组件较多（特别是rpc框架，如：dubbo, gRpc, motan

* 1.2.3 Skywalking的主要概念
  * 服务(service)
  * 端点(endpoint)
  * 实例(instance)

### C3. 1.3 环境搭建

* 在虚拟机CentOS中搭建Skywalking
* Skywalking默认使用H2内存数据库，重启后数据会丢失
* 作者将使用ElasticSearch作为存储
* 作者将VM的内存设为3G，CPU设为2核
* 用ip addr来查看VM的IP地址
* 用CRT登录至VM

```bash
mkdir /usr/local/skywalking
cd /usr/local/skywalking
```

* Jedi: 未看完 10:37 AM
