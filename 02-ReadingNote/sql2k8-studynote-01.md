# SQL Server 2008学习笔记：日常维护、深入管理、性能优化

* 吴戈，朱勇，赵婉芳编著.
* 北京：人民邮件出版社，2009.10
* ISBN 978-7-115-21179-8

## 1.1 基础知识

### 1.1.1 SQL Server 2008产品概况

* Enterprise Edition
* Standard Edition
* Workgroup Edition
* Web Edition
* Compact
* Express

### 1.1.2 安装SQL Server 2008的软、硬件需求

Software

* Windows Installer 4.5
* .NET Framework 3.5 SP1
* SQL Server Native Client
* Microsoft SQL Server安装程序支持文件

Hardware

* RAM: 512MB

Network

* Shared Memory
* Named Pipes
* TCP/IP
* VIA

## 1.2 应用情景

安装SQL Server 2008

1. 打开向导
2. 安装程序支持规则检查
3. 输入产品密钥
4. 同意许可条款
5. 安装程序支持文件
6. 功能选择
7. 实例配置
8. 磁盘空间要求
9. 服务器配置
10. 数据库引擎配置
11. 错误和使用情况报告

* 查看和配置SQL Server服务
  * 管理工具->服务->SQL Server(MSSQLSERVER)。
  * 可执行启动、停止、暂停、恢复

* 配置Windows防火墙允许访问SQL Server 2008服务器
  * 例外->添加端口->输入名称->端口号设置为1433
  * 用netstat -an来检查1433端口是否开通（Jedi:也可以用telnet）
  
* 使用SQL Server Management Studio
* 使用SQL Server Business Intelligence Development Studio
* SQL Server配置管理器

* osql实用工具
  * osql /S localhost /Usa /P sa
  
* sqlcmd实用工具
  * sqlcmd -Usa -Psa -Slocalhost
  
## Transat-SQL语言

## 2.1 基础知识

### 2.1.1 Transact-SQL的语法元素

1. 标识符
2. 数据类型
3. 函数
4. 运算符
5. 表达式
6. 注释
7. 保留关键字

### 2.1.2 数据库对象的命名

```text
  [
    服务器名称.[数据库名称].[架构名称].
  | 数据库名称.[属主名称].
  | 属主名称.
  ]
  ]
  对象名
```

```text
  均为有效的对象命名
  server.database.schema.object
  server.database..object
  server..schema.object
  server...object
  database.schema.object
  database..object
  schema.object
  object
```

### 2.1.3 同义词

select * from master.dbo.spt_values

### 2.1.4 数据类型

1. 二进制数据(binary, varbinary, image)
2. 字符串数据(char, varchar, text)
3. Unicode数据(nchar, nvarchar, ntext)
4. 日期和时间数据(datetime, datetime2, date, time, datetimeoffset)
5. 数字数据(bigint, int, smallint, tinyint, decimal, numeric, float9(n), real)
6. 货币数据(money, smallmoney)

### 2.1.5 常量

1. 字符串常量
2. Unicode字符串常量(N'Jedi')
3. 二进制常量(0xFE)
4. bit常量
5. datetime常量
6. integer常量
7. decimal常量
8. float和real常量
9. money常量
10. uniqueidentified常量
11. 指定负数和正数

### 2.1.6 常量

```sql
begin
  declare @abc int
  set @abc = 2
  print @abc
end
```

### 2.1.7 运算符

1. 算术运算符
2. 赋值运算符
3. 位运算符
4. 比较运算符
5. 逻辑运算符 (all, and, any, between, exists, in, like, not)
6. 字符串串联运算符
7. 一元运算符

### 2.1.8 常用函数

* 聚合函数
  * avg
  * binary_checksum
  * checksum
  * checksum_agg
  * count
  * count_big
  * grouping
  * max
  * min
  * sum
  * stdev
  * stdevp
  * var
  * varp
  
* 日期和时间函数
  * dateadd
  * datediff
  * datename
  * datepart
  * day
  * getdate
  * getutcdate
  * month
  * year
  
* 数学函数
  * abs
  * ceiling
  * exp
  * floor
  * log
  * log10
  * pi
  * power
  * rand
  * round
  * square
  * sqrt
  
* 字符串函数
  * ascii
  * char
  * charindex
  * difference
  * left
  * len
  * lower
  * ltrim
  * patindex
  * replace
  * replicate
  * reverse
  * right
  * rtrim
  * space
  * str
  * substring
  * upper
  
* 文本和图像函数
  * patindex
  * textptr
  * textvalid
  
### 2.1.9 流程控制语句

1. IF..ELSE
2. WHILE
3. WAITFOR
4. GOTO
5. RETURN
6. TRY...CATCH

### 2.1.0 Transact-SQL语句的分析、编译和执行

## 2.2 应用情景

### 应用场景10 使用set statistics io语句

```sql
use master
go

set statistics io on
select * from spt_values
go

set statistics io off
select * from spt_values
go

===============

(2508 row(s) affected)
Table 'spt_values'. Scan count 1, logical reads 14, physical reads 0, read-ahead reads 0, lob logical reads 0, lob physical reads 0, lob read-ahead reads 0.
```

### 应用情景11 使用set statistics time

```sql
use master
go

set statistics time on
select * from spt_values
go

set statistics time off
go
```
