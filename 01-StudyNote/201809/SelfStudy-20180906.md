# Self Study

Author: Jedi Chou
Create at 2018.9.5 07:41 AM

## Daily task

* Mail
  -[ ] check 163.com mail

* Daily Check-in task
  -[x] Read articles and check interview invitation (MaiMai APP).
  -[x] 101WeiQi daily exercise check-in.
  -[x] Don't memorize words APP check-in.
  -[x] NowCoder check-in and do an exercise that contains 20 puzzles.
  -[x] 163 music APP check-in.
  -[x] Open class APP by 163.com check-in.
  -[x] Tencent cartoon APP check-in.
  -[x] Double check
  
* Daily reading task
  -[x] Feedly RSS reader.
  -[x] ZHIHU Daily check.
  -[x] InfoQ check.
  -[x] Exercise of Vocabulary (vocabulary.com)
  
* Micro habit
  -[x] Reading 1 minutes at SZLIB (BOKAN site).
  -[x] Read a thesis and don't record.
  -[x] Commit a C code to GITHUB or GITEE.
  -[x] Reading 1 minutes at SIMPLE Wiki.
  
# New word or concept

* Elasticsearch, Kibana
* 何清吟,刘建辉,程建萍. 基于ESI的全球计算机领域文献计量分析. 软件导刊,2018,17(8):1-5
  - 文献计量学
  - 科学图谱绘制工具VOSviewer
  - 共词分析
  - 优化算法研究, 图像隐写分析, 量子密钥分配, 无线网络建模型, 物联网, 云计算, 大数据, 忆阻器, 忆阻电路及忆阻神经网络算法, 多输入输出系统（MIMO）
  - 学科分析工具INCite
  - 南京信息工程大学, 南洋理工大学
  - 中南大学
* https://en.cppreference.com  
* Magzine (for study english)
  - Fast Company
  - 1843
  - Wired
  - The New Yorker
  - Scientific American
* MySQL Lock
  - Reference: 为什么开发人员必须要了解数据库锁？. 咖啡拿铁. ITPUB微信公众号.
  - 间隙锁，是插入意向锁
  - 其实锁在数据库中其功能之一也是用来实现事务隔离性。
  - 而事务的隔离性其实是用来解决，脏读，不可重复读，幻读几类问题。
  - 在InnoDb中实现了两个标准的行级锁，可以简单的看为两个读写锁:
    - S-共享锁：又叫读锁，其他事务可以继续加共享锁，但是不能继续加排他锁。
	- X-排他锁: 又叫写锁，一旦加了写锁之后，其他事务就不能加锁了。
  - 意向锁在InnoDB中是表级锁,和他的名字一样他是用来表达一个事务想要获取什么。意向锁分为:
    - 意向共享锁:表达一个事务想要获取一张表中某几行的共享锁。
	- 意向排他锁:表达一个事务想要获取一张表中某几行的排他锁。
  - 在MySQL中innodbautoinclock_mode有3种配置模式：0、1、2，分别对应”传统模式”, “连续模式”, “交错模式”。
  - Jedi: 好文章
* http://sa.ylib.com