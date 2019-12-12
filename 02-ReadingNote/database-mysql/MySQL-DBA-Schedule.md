# MySQL for Database Administrators Ed 3.1

* Ref: From: Oracle.com

## Topic

* Introduction
* MySQL Architecture
* System Administration
* Server Configuration
* Clients and Tools
* Data Types
* Obtaining Metadata
* Transactions and Locking
* Storage Engines
* Partitioning
* User Management
* Security
* Table Maintenance
* Exporting and Importing Data
* Programming Inside MySQL
* MySQL Backup and Recovery
* Replication
* Introduction to Performance Tuning
* Conclusion

## Objectives

* Describe the MySQL Architecture
* Install and Upgrade MySQL
* Use the INFORMATION_SCHEMA database to access metadata
* Perform the MySQL start and shutdown operations
* Configure MySQL server options at runtime
* Use available tools including MySQL Workbench
* Evaluate data types and character sets for performance issues
* Understand data locking in MySQL
* Understand the use of the InnoDB storage engine with MySQL
* Maintain integrity of a MySQL installation
* Use triggers for administration tasks
* Use Enterprise Audit and Pluggable Authentication
* Configure advanced replication topologies for high availability
* Describe introductory performance tuning techniques
* Perform backup and restore operations
* Automate administrative tasks with scheduled events

## MySQL Database Administrator Certification Discount Package (In-Class)

* Configure MySQL server options at runtime.
* Describe introductory performance tuning techniques.
* Describe the MySQL Architecture.
* Evaluate data types and character sets for performance issues.
* Install and Upgrade MySQL.
* Maintain integrity of a MySQL installation.
* Perform backup and restore operations .
* Perform backup and restore operations .
* Perform the MySQL start and shutdown operations.
* Understand data locking in MySQL.
* Understand the use of the InnoDB storage engine with MySQL.
* Understand views.
* Use the INFORMATION_SCHEMA database to access metadata.
* Use triggers for administration tasks.

## MySQL Database Administrator Certification Discount Package (LVC)

* Configure MySQL server options at runtime.
* Describe introductory performance tuning techniques.
* Describe the MySQL Architecture.
* Evaluate data types and character sets for performance issues.
* Install and Upgrade MySQL.
* Maintain integrity of a MySQL installation.
* Perform backup and restore operations .
* Perform backup and restore operations .
* Perform the MySQL start and shutdown operations.
* Understand data locking in MySQL.
* Understand the use of the InnoDB storage engine with MySQL.
* Understand views.
* Use the INFORMATION_SCHEMA database to access metadata.
* Use triggers for administration tasks.

## MySQL Database Administrator Certification Discount Package (Training On Demand)

* Describe the MySQL Architecture.
* Install and Upgrade MySQL.
* Use the INFORMATION_SCHEMA database to access metadata.
* Perform the MySQL start and shutdown operations.
* Configure MySQL server options at runtime.
* Evaluate data types and character sets for performance issues.
* Understand data locking in MySQL.
* Understand the use of the InnoDB storage engine with MySQL.
* Maintain integrity of a MySQL installation.
* Use triggers for administration tasks.
* Understand views.
* Describe introductory performance tuning techniques.
* Perform backup and restore operations.

## 如何成为MySQL DBA

* [Ref](http://wubx.net/being-mysql-dba/)

## 基础知识

* Linux的安装及目录结构意义
* 常用的Linux命令，大概20多个
* 网络基本知识，进一步了解网关及路由相关概念,dhcp
* 撑握一定的Linux网络服务，如果LAMP结构，dns,  ftp 等

## MySQL基础

* 了解MySQL的版本意义
* 学习MySQL的安装方式，从根本下理解MySQL的启动原理
* 学习SQL语言，把高中数学中集合知识好好在学习一下，再来看SQL语言
* 学习SQL在MySQL使用中的一些规范（这些最好找有经验的请教一下，或是看看大会中别人分享的学习思考）
* 学习MySQL的高级特性： 触发器，事件，存储过程编程，分区等
* 学习MySQL的复制，了解复制原理及实现及相关高可用配合中有什么不足
* 学习PXC结构的实现，了解运维中的坑
* 系统的学习一下MySQL的体系结构，思想如何做MySQL优化，总结配置优化
* 学习MySQL的备份恢复，这块可能需要多一些时间好好的系统的学习一下
* 掌握几种压力测试的方法，方便优化后能做一个验证
* 深入理解Innodb的体系结构，全面理解一下事务及锁的实现，能解析出来一个update tb1 set col1=col1+1 where pk=10;  这样的语句在Innodb都干了什么了。

## MySQL高阶

* 理解MySQL的特点，方便在实际环境决择
* 理解操作系统的IO调度，内存分配，CPU使用等
* 理解复制的优缺点及改善的方法
* 理解系统监控及系统瓶颈点分析
* 有一定的问题排查思路
* 可以全面的理解高可用的实现及自定义实现高可用架构
* 有一定的平台管理意识及实现能力
* 理解拆分的作用及实现的方法

## MySQL高手

* 了解现有硬件的特点
* 了解业务的实现及难点
* 了解常见NoSQL的使用
* 关注新技术
* 进入MySQL DBA架构师级别可以行容量的规划

## DBA Roles and Responsibilities

* [Ref](https://sqldbpool.com/2008/12/22/dba-roles-and-responsibilities/)

## DBA Responsibilities

* Installation, configuration and upgrading of Microsoft SQL Server/MySQL/Oracle server software and related products.
* Evaluate MSSQL/MySQL/Oracle features and MSSQL/MySQL/Oracle related products.
* Establish and maintain sound backup and recovery policies and procedures.
* Take care of the Database design and implementation.
* Implement and maintain database security (create and maintain users and roles, assign privileges).
* Database tuning and performance monitoring.
* Application tuning and performance monitoring.
* Setup and maintain documentation and standards.
* Plan growth and changes (capacity planning).
* Work as part of a team and provide 7×24 supports when required.
* Do general technical trouble shooting and give consultation to development teams.
* Interface with MSSQL/MySQL/Oracle for technical support.
* ITIL Skill set requirement (Problem Management/Incident Management/Chain Management etc)

## Types of DBA

* Administrative DBA – Work on maintaining the server and keeping it running.
  * Backups
  * Security
  * Patches
  * Replication
  * Memo: Things that concern the actual server software.

* Development DBA – works on building queries, stored procedures, etc. that meet business needs.
  * Memo: This is the equivalent of the programmer. You primarily write T-SQL.

* Architect – Design schemas.
  * Build tables, FKs, PKs, etc.
  * Memo 1: Work to build a structure that meets the business needs in general.
  * Memo 2: The design is then used by developers and development DBAs to implement the actual application.

* Data Warehouse DBA – Newer role, but responsible for merging data from multiple sources into a data warehouse.
  * Memo 1: May have to design warehouse, but cleans, standardizes, and scrubs data before loading.
  * Memo 2: In SQL Server, this DBA would use DTS heavily.

* OLAP DBA – Builds multi-dimensional cubes for decision support or OLAP systems.
  * Memo: The primary language in SQL Server is MDX, not SQL here
