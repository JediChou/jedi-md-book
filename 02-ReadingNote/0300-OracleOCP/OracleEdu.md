Oracle Education
================

# Oracle 10g

## Oracle 10g - OCA

* Oracle Database 10g: SQL Fundamentals
* Oracle Database 10g: Program with PL/SQL
* Oracle Database 10g: Advanced PL/SQL
* Oracle Database 10g: SQL Tuning Workshop

## Oracle 10g - OCP
	
* Oracle Database 10g: SQL Fundamentals
* Oracle Database 10g: Administration Workshop I
* Oracle Database 10g: Administration Workshop II

## Oracle 10g - OCM

* OCP related courses and plus,
* Oracle Database 10g: SQL Tuning Workshop
* Oracle Database 10g: Security
* Enterprise DBA Part 1B: Backup and Recovery
* Oracle Database 10g: Data Guard Administration
* Oracle Database 10g: RAC for Administrators
* Oracle Database 10g: Implement Streams


# Oracle Press

* MySQL and JSON: A Practical Programming Guide
* Oracle Database 12c Release 2 Performance Tuning Tips & Techniques
* Oracle R Enterprise: Harnessing the Power of R in Oracle Database
* Real World SQL and PL/SQL: Advice from the Experts
* Oracle Database Upgrade, Migration & Transformation Tips & Techniques
* Oracle Database 12c Security
* Oracle PL/SQL Performance Tuning Tips & Techniques
* Oracle NoSQL Database
* Oracle Database 12c New Features
* Oracle Database 12c The Complete Reference
* Oracle Database 12c Install, Configure & Maintain Like a Professional
* Database Cloud Storage
* Oracle Enterprise Manager Cloud Control 12c Deep Dive
* Oracle GoldenGate 11g Handbook
* MySQL Workbench: Data Modeling & Development
* Effective MySQL Replication Techniques in Depth
* Oracle Exalytics Revealed
* Oracle Exalogic Elastic Cloud Handbook
* Effective MySQL Backup and Recovery
* Oracle Database 11g Release 2 Performance Tuning Tips & Techniques
* Oracle Database 11g & MySQL 5.6 Developer Handbook
* Effective MySQL Optimizing SQL Statements
* Oracle Database 11g Oracle Real Application Clusters Handbook, 2nd Edition
* Oracle Database 11g Release 2 High Availability: Maximize Your Availability with Grid Infrastructure, RAC and Data Guard
* Achieving Extreme Performance with Oracle Exadata
* Oracle Database Administration For Microsoft SQL Server DBAs
* Oracle CRM On Demand Deployment Guide
* Oracle RMAN 11g Backup and Recovery
* Oracle Database 11g PL/SQL Programming Workbook
* Applied Oracle Security: Developing Secure Database and Middleware Environments
* Oracle Data Guard 11g Handbook
* Oracle Database 11g A Beginner's Guide
* Oracle CRM On Demand Reporting
* Oracle Database 11g PL/SQL Programming
* Oracle Database Ajax & PHP Web Application Development
* Oracle Database 11g DBA Handbook
* Oracle Database 11g New Features
* Oracle Database 11g SQL
* Oracle Application Server Portal Handbook
* Oracle Database 10g Performance Tuning Tips & Techniques
* Oracle Collaboration Suite Handbook
* Oracle Database 10g RMAN Backup & Recovery
* Oracle SQL Developer Handbook
* Oracle JDeveloper 10g for Forms & PL/SQL Developers: A Guide to Web Development with Oracle ADF
* Hands-On Oracle Database 10g Express Edition for Windows
* Oracle Discoverer 10g Handbook
* Oracle HTML DB Handbook
* Oracle Database 10g Linux Administration
* Expert Oracle PL/SQL
* Oracle Database 10g DBA Handbook
* Oracle JDeveloper 10g Handbook
* Oracle Database 10g PL/SQL Programming
* Oracle Database 10g The Complete Reference
* Oracle Database 10g PL/SQL 101
* Oracle Database 10g XML & SQL: Design, Build, & Manage XML Applications in Java, C, C++, & PL/SQL
* Effective Oracle Database 10g Security by Design
* Oracle Database 10g High Availability with RAC, Flashback & Data Guard
* Oracle Database 10g: A Beginner's Guide
* Oracle Database 10g New Features
* Oracle Database 10g SQL
* Effective Oracle by Design
* Oracle9i RMAN Backup & Recovery
* Oracle9i High-Performance Tuning with STATSPACK
* Oracle9i UNIX Administration Handbook
* Oracle9i DBA Handbook
* Oracle High-Performance SQL Tuning

# Review

## 第5章 Oracle存储结构
  - 052.6.1 了解表空间和数据文件
  - 052.6.2 创建和管理表空间
  - 052.6.3 管理表空间中的空间
  
* 052.6.1 了解表空间和数据文件
  - 5.1.1 Oracle数据存储模型
  - 5.1.2 段、区间、块和行
  - 5.1.3 文件存储技术

* 052.6.2 创建和管理表空间
  - 5.2.1 创建表空间
  - 5.2.2 更改表空间
  - 5.2.3 删除表空间
    - Windows上操作时候要先停止Windows Oracle服务
  - 5.2.4 OMF
  - 练习 5-2：创建、更改和删除表空间
  
* 052.6.3 管理表空间中的空间
  - 5.3.1 区间管理
    - On the job tip: Oracle公司建议使用AUTOALLOCATE，但如果您知道段的大小，也可以相应地放置它们，UNIFORM SIZE理当是最佳选项。
    - On the job tip: 将表空间转换为本地管理非常便捷，但SYSTEM表空间除外，SYSTEM表空间要求执行一些附加步骤。系统管理员的产品文档指南对此作了详细介绍。
  - 5.3.2 管理段空间
    - 练习 5-3：更改表空间特性

* Summary. Page 183

## 第6章 Oracle安全性

* 6.1 创建和管理数据库用户账户
  - 6.1.1 用户帐户属性
    
	- 用户名
	  - Example: create user john identified by pa55w0rd
	  - Example: create user "john" identified by pa55w0rd
	  - Example: create user "john%#" identified by pa55w0rd
	  - Example: create user "table" identified by pa55w0rd
	    - Jedi: 这个有意思
	  - on the job tips: 虽然可以使用不合乎标准的用户名，但这可能产生令人生畏的混乱局面。某些应用程序依赖大小写转换；其他应用程序总是使用双引号。最好始终使用大写字母和标准字符。
	
	- 默认表空间和配额
	  - alter database default tablespace tablespace_name ;
	  - on the job tips: 
	  ```
	    创建数据库后，勿将SYSTEM作为默认表空间。这是一项后果严重的实践，因为
		可能有非系统用户填充这个表空间，从而妨碍数据字典乃至整个数据库的操作。请
		立即进行更改。
	  ```
	  - 配额
	  - 显示配额：select username, DEFAULT_TABLESPACE, temporary_TABLASPACE from dba_users where username = "JOHN";
	  - 更改配额：alter user john quota 10m on user;
	  - 更改配额：alter user john quota unlimited on example
	  - 考点：要创建表，用户必须具有执行CREATE TABLE的权限，而且拥有在其中创建表的表空间上的配额。
	  - on the job tip:
	  ```
	  大多数用户不需要任何配额，因为他们从不创建对象。它们只拥有针对其他模式拥
	  有的对象的权限。少数拥有对象的模式可能对其对象所在的表空间拥有QUOTA
	  UNLIMITED配额。
	  ```
	  
	- 临时表空间
	  - 考点：用户不需要临时表空间上的配额
	  - ALTER USER username TEMPORARY TABLESPACE tablespace_name
	  - on the job tip:
	  ```
	  如果多个用户登录到同一个用户账户，这些用户将共用一个临时表空间。这可能产生
	  性能瓶颈，可以使用临时表空间组来避免此问题的出现。
	  ```
	  
	- 配置文件
	- 账户状态
	  - 状态：OPEN, LOCKED, EXPIRED, EXPIRED & LOCKED, EXPIRED (GRACE), LOCKED (TIMED), EXPIRED & LOCKER (TIMED), EXPIRED ((GRACE) & LOCKER)
	  - 锁定账户: ALTER USER username ACCOUNT LOCK;
	  - 解除账户锁定：ALTER USER usernname ACCOUNT UNLOCK;
	  - 强制用户更改口令：ALTER USER username PASSWORD EXPIRE;
	  
  - 6.1.2 身份验证方法

    - 操作系统身份验证
    - 口令文件身份验证
    - 口令身份验证
    - 外部身份验证
    - 全局身份验证

  - 操作系统和口令文件身份验证
    - 授权：GRANT [sysdba | sysoper] TO username;
    - 在SQL*Plus中建立连接：CONNECT username / password [@db_alias] AS [ sysdba / sysoper];
	- 使用口令文件登录：CONNECT / AS [SYSOPER / SYSDBA];
	- 考点：必须对所有用户会话进行身份验证。不存在“匿名登录”的说法，必须使用一些身份验证方法。
	
  - 口令身份验证
    - 通过口令身份验证进行连接：CONNECT username / password [@db_alias];
	- 任何用户都可以随时更改自己的用户口令：ALTER username IDENTIFIED BY password;
	
  - 外部身份验证
    - 启用Advance Security选项
	  - 可以是Kerberos、RADIUS服务器、Windows本地身份验证服务
	- 未启用Advance Security选项时
	  - 则唯一可以使用的外部身份验证形式是操作系统身份验证。
	  - 此技术使用于操作系统用户账户同样的名称创建Oracle用户账户。
	  - 查询方式：select value frmo v$parameter where name = 'os_auther_prefix';
	  - Linux/Unix:
	    - create user ops$jwatson identified externally;
		- grant create session to ops$jwatson;
		- sqlplus /
	  - Windows:
	    - create user "OPS$JWACER\JOHN WATSON" identified externally;
		- 用户名必须采用大写形式
		- 因非法字符缘故，需把用户名放在双引号中
		- 提示：
		```
		  外部身份验证十分有用，但这只在用户真正登录到承载数据库的计算机上时才有
		  效。用户很少这么做，因此，该技术对用于运行维护或批处理作业的账户很有用。
		```
  
  - 全局身份验证
    - 可以在目录；只能在目录中定义用户
	
### 6.1.3 创建用户

* 典型例子

```
  1  create user scott identified by tiger
  2  default tablespace users temporary tablespace temp
  3  quota 100m on users, quota unlimited on example
  4  profile developer_profile
  5  password expire
  6  account unlock;
```

* 更改口令：alter user scott identified by lion;
* 更改默认表空间和临时表空间：alter user scott default tablespace store_data temporary tablespace temp;
* 更改配额：alter user scott quota unlimited on store_data, quota 0 on user;
* 更改配置文件：alter user scott profile prod_profile;
* 强制更改口令：alter user scott password expire;
* 锁定用户：alter user scott account lock;
* 删除用户：drop user soctt;
* 练习6-1
  - 用SQL*plus连接至数据库
  - 创建三个用户
  ```
    create user sales identified by sales
	default tablespace storedata password expire;
	create user webapp identified by oracle
	default tablespace storedata quota unlimited on storedata;
	create user accounts identified by oracle;
  ```
  - 在Database Control上导航到Server选项卡，检查创建的用户信息
  - 用SQL*plus以SALES的身份尝试连接
  - 创建新口令，但发现什么都不能做
  - 在Database Control上发现SALES账户的状态是OPEN。
  
## 6.2 授予和撤销权限

* 权限分为两组：系统权限和对象权限

### 6.2.1 系统权限

* 系统权限约有200种。大多数都应用于影响数据字典的操作。其他的影响数据库或实例。
* 常见的权限如下：
  - 创建会话（CREATE SESSION）
  - 受限制的会话（RESTRICTED SESSION）
  - 更改数据库（ALTER DATABASE）
  - 创建表空间（CREATE TABLESPACE）
  - 创建表（CRAETE TABLE）
  - 授予任何对象权限（GRANT ANY OBJECT PRIVILEGE）
  - 创建任何表（CREATE ANY TABLE）
  - 删除任何表（DROP ANY TABLE）
  - 插入任何表、更新任何表、删除任何表（INSERT ANY TABLE, UPDATE ANY TABLE, DELETE ANY TABLE）
  - 选择任何表（SELECT ANY TABLE）
* 授予系统权限语法：GRANT privilege [, privilege...] TO username;
* 授予权限实例
```
  grant create session, alter session,
  create table, create view, create synonym, create cluster,
  create database link, create sequence,
  create trigger, create type, create procedure, create operator
  to username;
```
* 变体语法
  - connect system/oracle; grant create table to scott with admin option;
  - connect soctt/tiger; grant create table to jon;
  - 这里有个模式的概念（Admin Option）
* 考点：系统权限的撤销不会级联（这与撤销对象权限不同）
* ANY权限针对数据库中的所有相关对象给予权限，因此：grant select any table to scott;
  - 允许soctt查询数据库中每个模式中的每个表。
  - 在11g中不再包含SYS模式中的表。
  
### 6.2.2 对象权限

* 对象权限允许针对表和相关对象执行SELECT、INSERT、UPDATE和DELETE命令，也允许执行PL/SQL对象。
* 这些权限不存在于用户自己模式的对象中。
  - 如果用户拥有系统权限CREATE TABLE，那么可以针对创建的表执行SELECT和DML操作。
* 考点：ANY权限针对数据库中的每个用户账户中的每个对象授权，是系统权限，而不是对象权限。
* 表6-1
  - select (table, view, sequence, synonym)
  - insert (table, view, synonym)
  - update (table, view, synonym)
  - delete (table, view, synonym)
  - alter (table, sequence)
  - execute (procedure, function, package, synonym)
* grant privilege on [schema.]object to username [with grant option];
  - example: grant select on store.customer to scott;
  - example: grant select on store.orders to scott;
  - example: grant update (order_status) on store.orders to scott;
  - example: grant all on store.regions to soctt;
* on the job tip:
```
  通常认为在列级别授权是一种错误的做法，因为这涉及大量的工作。如果需
  要限制用户对特定列的访问权限，那么创建一个只显示这些列的视图通常是
  更好的替代做法。
```
* with grant option可使用户将其对象权限传给第三方。
  - connect store/admin123;
  - grant select on customers to sales with grant option;
  - connect sales/sales;
  - grant select on store.customers to webapp with grant option;
  - conn webapp/oracle;
  - grant select on store.customers to scott;
  - connect store/admin123;
  - revoke select on customers from sales;
* 练习6-2：授予直接权限

## 6.3 创建和管理角色

### 6.3.1 创建角色并授予角色权限

* 创建角色：create role rolename;
* 使用普通语法为角色授权，根据需求添加with admin或with grant option
* 以某HR模式为例，创建一个新员工角色：
```
  create role hr_junior;
  grant create session to hr_junior;
  grant select on hr.regions to hr_junior;
  
```