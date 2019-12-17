# 一些没有归类的信息

* Jedi Chou
* 2017.3.23 整理

* Acunetix Web Vulnerability Scanner
* IBM Security AppScan

## New Concept: 推理鏈, 猜疑链

* 域名投钱赚钱>>中文域名投资>>微博账号投资>>微信公众号投资
* 投资外币>>投资比特币，
* 投资住房>>投资商铺>>投资墓地
* 互联网及移动互联网兴起>>消费者对手机及移动流量的需求大幅增加>>电讯公司需要建设更多的基站>>投资基站建设公司
* 某国核潜艇发生重大事故>>引发民众对多个筹备中的核电厂项目的担忧及恐慌>>核电对传统能源的替代作用减弱>>引发对传统化石能源需求增大的猜测>>传统化石能源的价格上涨
* 英国脱欧>>世界经济形式动荡>>投资人寻找安全资产>>日元几乎是唯一的不受美元绑定和政府控制的世界性高流动性货币（比如：港币等与美元牢牢挂钩，而人民币受政府的强力控制）>>投资人购进大量日元>>日元升值

## app

* Prisma
* Human Resource Machine

## Vocabulary.com - new words - 20170105

* cultivated
* Caribbean
* Erskine Caldwell (Famous Author !?)
* scurrying, momentary
* condiment, catsup, sweeteners
* acceleration
* hollow
* Singin, Unsinkable, acumen, gratify, hooligan, salutation, versatile, humble, gullible, dignified

## Vocabulary.com - new words - 20170106

* tattoo, needle
* mangling
* exposure,
* designate acceleration motion steep
* vampire bloodsucking noun preys blackmailer
* harmonica
* Shiny
* splendid, extraordinary , exceptional
* marvelous
* military

## Wikipedia

* Sandford_Fleming
  * emigrated, colonial
  * postage stamp
  * needs additional 'citations' for verification.
  * reilable
  * kirkcaldy, appreticed,
  * Quebec City, Montreal,, Peterborough, cousins

* Other
  * unanimous
  
## new site

* 找油网, 找钢网
* 美丽联合集团消息推送
* 光荣网络
* 猪八戒（CEO朱明跃）
* 优办：应对创业团队不断扩张，联合办公空间有何妙招？

## 随笔记录

* 规范系统方向：数据分析、概念思维、写作能力；
* 人际影响方向：消费者心理学、概念思维、写作能力。
* 不停降低估值
* 通货膨胀率上升，失业率下降；反之，失业率上升，通货膨胀率下降。
* 托马斯 · 谢林
* 债券交易, 公允价值, 内部收益率, 到期利率
* 无风险利率＋信用风险溢价＋久期（利率）风险溢价＋流动性风险＋其它
* 信用风险溢价, 流动性风险溢价
* 打过德州扑克的朋友，应该都听说过一句话：如果你不知道牌桌上谁是鱼（人傻钱多的那一个），那么你，就是鱼。

## 运维人员

* 对基础的系统掌握能力
* 对业务产品的理解能力
* 优秀的编码能力（精通python、java、Golang等）
* 容器化、大数据计算、机器学习算法与业务场景结合的能力。

## 金融方面的评估指标

《金融SDN技术能力评测指标》、《金融SDN技术能力评测基线》与《金融SDN技术能力评测解决方案》

## 值得推荐的书

* 《动手玩Docker》

## Dynatrace的配置

* eVAP1: 10.130.14.71
* workflow / wk@Foxconn.com

# The name of the web server agent (used for agent mapping on the dynaTrace Server).
Name evap1-server_dotnet

# The address of the dynaTrace Collector this agent should connect to. 
# The address is of the form host:port, e.g. exampleserver:9998
* Server hh-test01.cfa.com:9998

# Dynatrace的配置文件
* <dynatrace install directory>/agent/conf/dtwsagent.ini
* bootstrap agent (dtagent.dll) is loaded, but .NET agent (dtagentcore.dll) is not. Process restart or system reboot is required.
* message1
```
agent did not connect or did not find matching system profile. 
Please make sure that agent can connect to collector, and that
agent settings system profile name is valid. 
(.NET agent version:'v6.3.9.1009', Bootstrap 
agent version:'v6.3.0.1305').

evap1-server_dotnet
evap1-server_dotnet

015c0a4-7675-0f4c-8929-47d3c11ba1cd
```
* message2
```
eVAP1: 10.130.14.71
workflow / wk@Foxconn.com

.net collection: jedichou-study
iis collection: UE_IIS_Study

iis collection: EVIIS_EVDotNet
.net collection: EVDotNetMonitor_EVDotNet
EVDotNetMonitor_EVDotNet

iis-https

httpstat: 一個檢查網站性能的curl統計分析工具
Serialization And Deserialization In C# using Protobuf-net.dll
```

# 代码分析
* Code Analysis for Visual Studio 2012
  - not only for C++
  - Code Analysis - 代码分析
* How to Write Custom FxCop Rule - YouTube
  - https://www.youtube.com/watch?v=D_tThCGaylQ

# 2017.3.25
* 如何将Jetbrains TeamCity引入到开发中呢？
  - 现在TeamCity免费了，这是一个非常好的消息；
* 另外, 感觉dotPeek非常好用！
  - 注意到dotnet core 1.1在Win10编译的dll文件，其metadata信息是.net 4.6
  - 具体的规格是
    - 1.0.0.0, msil, .Net Framework v4.6.2, Debug
    - 联想到另外一个问题：如何打包一个小型的.net runtime，让4.6的程序可以脱离sdk/runtime的运行？
