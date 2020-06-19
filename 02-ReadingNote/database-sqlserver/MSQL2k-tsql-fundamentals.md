# SQL Server 20008: TSQL fundamentals

## Ch1 T-SQL查询和编程基础

### 1.1 理论背景

* SQL, structured query language
* RDBMS, rational database management system
* SQL -> tsql (sql dialect)

#### 1.1.1 SQL

* sql-86, sql-89, sql-92, sql-1999, sql-2003, sql-2006, sql-2008
* DDL, data defined language
* DML, data manipulation language
* DCL, data control language

#### 1.1.2 集合论

* Georg Cantor (Set Theroy)

#### 1.1.3 谓词逻辑

* sub title: predicate logic
* 谓词逻辑, branch of math
* Dr Edgar F. Codd
* Jedi: 谓词逻辑为sql提供了理论模型
* Jedi: tsql则继承sql实现了谓词逻辑，并形成为一个DBMS

#### 1.1.4 关系模型

* Relational model
* Dr. Edgar F. code create relation ship model, and Chris Date and Hugh Darwen increase and complete it.
* Concepts: proposition, domain, n-ary relation, n-tuple, ordered pair and etc.

* 命题、谓词和关系
  * example: 雇员Itzik Ben-Gan成出生于1971年2月12日，隶属于IT部门
  * Jedi: 目的就是将example从自然语言翻译成“命题、谓词和关系”表述的方式
  * Jedi: select * from employee where birth = '1971/02/12' and department = 'IT'
  * Jedi: 也就是将要有一个现实意义的表述（目的）
  * **Jedi: 命题->形式化(formalize)->分析出具体的数据(关系本身)->并定义其结构（关系的标题）**
  
  * 缺少的值
    * Jedi: 解释了NULL的来历

  * 约束
    * constraint
    * entity integrity
    * referential integrity
    * candidate key
    * foreign key
