# SQL Server 2008 Essential Training

* Author: Simon Allardice
* Publisher: lynda.com Senior Author

## 00 Introduction

### 01 welcome

* This course will focus at SQL Server 2008 R2.
* And other SQL Server version contains:
  * EXPRESS Edition
  * WEB Edition
  * COMPACT Edition
  * DEVELOPER Edition
  * WORKGROUP Edition
  * AZURE
  * STANDARD Edition
  * ENTERPRISE Edition
  * DATA WAREHOUSE

## 01 Getting Started

### 1.1 Core Concepts

* section metadata
  * file: 71929_01_01_LA11_coreconcepts.mov
  * length: 09:04 hour
  * start: null
  * end: 2019.12.8 13:19 PM

* Jedi: Use a data set to show data.
* Jedi: Data is information.

* RDBMS
  * Security
  * Integrity
  * Performance
  * Reliability

* hosted solution
  * Jedi: What is it?
* Advance features (analysis service, reporting service)

* SQL Server
  * Part1
    * Analysis Services
    * Integration Services
    * Books Online
    * Reporting Services
  * Part2
    * SQL Server Management Studio
    * Business Intelligence Development Studio
    * Configuration Manager
    * SQL Server Profiler

### 1.2 SQL Server R2

* section metadata
  * file: 71929_01_02_LA11_editions
  * length: 03:08 hour
  * start: 2019.12.8 13:20 PM
  * end: 2019.12.8 13:27 PM

* Focus at standard edition.

### 1.3 SQL Server Applications

* section metadata
  * file: 71929_01_03_SC12_APPS.mov
  * length: 05:46 hour
  * start: 2019.12.8 13:28 PM
  * end: 2019.12.8 13:38 PM

* Import and Export Data (32-bit)
* Import and Export Data (64-bit)
* SQL Server Business Intelligence Developer
* SQL Server Management Studio
* Analysis Services
  * Deployment Wizard
* Configuration Tools
  * Reporting Services Configuration Management
  * SQL Server Configuration Manager
  * SQL Server Error and Usage Reporting
  * SQL Server Installatio Center (64-bit)
* Documentation and Tutorials
  * Microsoft SQL Server Samples Overview
  * SQL Server Books Online
  * SQL Server Tutorials
* Integration Services
  * Data Profile Viewer
  * Execute Package Utility
* Performance Tools
  * Database Engine Tuning Advisor
  * SQL Server Profiler

## 02 Installing SQL Server 2008 R2

### 2.1 Preparing for Installation

* section metadata
  * file: 71929_02_01_SC12_INSTALLPREP.mov
  * length: 03:44 hour
  * start: 2019.12.8 13:41 PM
  * end: 2019.12.8 13:48 PM

* 'nothing installed' vs 'everything installed'
* partially installed
* OS supported:
  * Win 7, Win Vista, WinXP
  * Win Server 2003, Win Server 2008

* Download
  * Standard edition: MSDN or TechNet
  * Express: [microsoft express](http://www.microsoft.com/express/database)

### 2.2 Service Accounts

* section metadata
  * file: 71929_02_02_SC12_SERVICEACCOUNTS.mov
  * length: 02:33 hour
  * start: 2019.12.8 13:49 PM
  * end: 2019.12.8 13:59 PM

* Database Engine
* SQL Server Agent
* Reporting Service
* Analysis Service
* Integration Service

* The author create 5 user for those SQL basic services.

### 2.3 Installation

* section metadata
  * file: 71929_02_03_SC12_INSTALLATION.mov
  * length: 11:42 hour
  * start: 2019.12.8 13:59 PM
  * end: 2019.12.8 14:47 PM

* The author introduce planning section of setup menu.
  * System Configuration Checker

* Installation
  * New installation add features to an existing installation
  * New SQL server failover installation
  * Add node to a SQL Server failover cluster
  * Upgrade from SQL Server 2000, SQL Server 2005 or SQL Server 2008
  * Search for product updates

* Setup rules
  * Minimum operating system version
  * Setup administrator
  * Restart computer
  * Windows Management Instrumentation (WMI) service
  * Consistency validation for SQL Server registry keys
  * Long path names to files on SQL Server installation media
  * SQL Server Setup Product Incompability

* Setup Support Rules
  * Fusion Active Template Library (ATL)
  * Unsupported SQL Server products
  * Performance counter registry hive consistency
  * Previous releases of SQL Server 2008 Business Intellgence Developer
  * Privious CTP installation
  * Consistency validation for SQL Server registry keys
  * Computer domain controller
  * Microsoft .NET Application Security
  * Edition WOW64 platform
  * Windows PowerShell
  * Windows Firewall

* Service Accounts
* Collation
  * Jedi: you can configure character coding rule.
  * Jedi: One configuration for data engine
  * Jedi: Another configuration for analysis service

* Database Engine Configuration
  * Account Provisioning
  * Data Directories
  * FILESTREAM

* Analysis Service Configuration
  * Account Provisioning
  * Data Directories

* Reporting Services Configuration
  * Install the native mode default configuration.
  * Install the SharePoint integrated mode default configuration.
  * Install but do not configure the report server.

* Error Reporting
* Installation Configuration Rules
  * FAT32 File System
  * Instance name
  * SQL Server 2000 Analysis service (64-bit) install action
  * Existing clustered or cluster-prepared instance
  * Cross language installation
  * Same architecture installation
  * Reporting Services Catalog Database File Existence
  * Reporting Services Catalog Temporary Dabase File Existence

* Ready to Install
* Installation Progress
* Complete

### 2.4 Post Install

* section metadata
  * file: 71929_02_04_SC12_POSTINSTALL.mov
  * length: 03:09 hour
  * start: 2019.12.8 14:48 PM
  * end: 2019.12.8 15:24 PM

* Analysis exam papers for Cici 15:22
* Jedi: tell us how to open sql server configuration tools
* Jedi: connect to database engine use SSMT

### 2.5 Sample Database

* section metadata
  * file: 71929_02_05_SC12_SAMPLEDBS.mov
  * length: 04:53 hour
  * start: 2019.12.8 15:25 PM
  * end: 2019.12.8 15:35 PM

* [link](http://sqlserversample.codeplex.com)
* AdventureWorks2008R2_RTM.exe

* It contains mult sample database
  * AdventureWorks OLTP 2008R2
    * AdventureWorks Data Warehouse 2008R2
    * AdventureWorks LT 2008R2
  * AdventureWorks OLAP Standard 2008R2
  * AdventureWorks OLAP Enterprise 2008R2
    * AdventureWorks OLTP
    * AdventureWorks Data Warehouse
    * AdventureWorks LT
  * AdventureWorks OLAP Standard
  * AdventureWorks OLAP Enterpriese

* [github link](https://github.com/microsoft/sql-server-samples)

## 03 Tools and System Databases

### 3.1 SMSS introduce

* section metadata
  * file: 71929_03_01_SC12_SSMSINTRO.mov
  * length: 08:07 hour
  * start: 2019.12.8 15:39 PM
  * end: 2019.12.8 16:05 PM

* SSMS - Sql Server Management Studio
* Object Explorer
  * Databases
  * Security
  * Server Objects
  * Replication
  * Management
  * SQL Server Agent

* menu of selected database
  * take offline
  * restore
  * import data
  * export data
  * copy database
  * and other functions

* database->reports
  * disk usage
  * disk useage by top tables
  * disk useage by table
  * disk useage by partition
  * backup and restore events
  * all transactions
  * all blocking transactions
  * top transactions by age
  * top transactions by blocked transactions count
  * top transactions by locks count
  * resource locking statistics by objects
  * object execution statistics
  * database consistency history
  * index usage statistics
  * index physical statistics
  * schema changes history
  * user statistics

* Create a table relationship diagram
* Deleted table from diagram

* Open a SQLCMD console

* View->Template Explorer
* SQL Server Templates
  * Aggregate
  * Assembly
  * Audit
  * Backup
  * Certificate
  * Change Data Capture
  * Change Tracking
  * Credential
  * Database
  * Database Mail
  * Database Trigger
  * Default
  * Earlier Versions
  * Endpoint
  * Event Notification
  * Extended Property
  * Full-text
  * Function
  * Index
  * Linked Server
  * Login
  * Partition Function
  * Partition Schema
  * Recursive Queries
  * Recursive Govemor
  * Restore
  * Role
  * Rule
* Jedi: This is a good news for me.

### 3.2 Books online

* section metadata
  * file: 71929_03_02_SC12_BOOKSONLINE.mov
  * length: 04:53 hour
  * start: 2019.12.8 16:05 PM
  * end: 2019.12.8 16:14 PM

* Notice tutorials from SQL Server Online Books
* Role type from SQL Server Online Books
  * Information Worker
  * Administrator
  * Developer
  * Architect

### 3.3 system database

* section metadata
  * file: 71929_03_03_SC12_SYSTEMDB.mov
  * length: 02:22 hour
  * start: 2019.12.8 16:14 PM
  * end: 2019.12.8 PM

* system databases
  * master
  * model
  * msdb
  * tempdb

## 04 Creating Databases

### 4.1 Planning your database

* section metadata
  * file: 71929_04_01_SC12_PLANNING.mov
  * length: 09:39 hour
  * start: 2019.12.8 16:21 PM
  * end: 2019.12.8 16:45 PM

* Jedi: Power Design model to SQL Server Database.
* Jedi: methodical.

* What's it for
  * The database stores necessary product and order information.
  * Use story
    * We help customers find books,
    * discover what others though about them,
    * purchase and track their orders,
    * contribute their own reviews and opinions,
    * and learn about other products they might like base on people with similar reading habits

* What do you have?
  * Existing database? (Don't just import: re-architect)
  * Existing process?
    * Physical assets: order forms, filing cabinets, people

* What table do you need?
  * For example: employee, customer, product, comment, event, blog

* What columns do you need?
  * Like: Fname, Lname, Email, ID, DateStarted, Role

* What relationships do you need?

### 4.2 Create database

* section metadata
  * file: 71929_04_02_SC12_CREATEDB.mov
  * length: 04:07 hour
  * start: 2019.12.8 17:52 PM
  * end: 2019.12.8 18:02 PM

* Database files
  * TwoTreesTest
  * TwoTreesTest_log

* General
  * Intial size
  * Autogrowth (It can adjusted).

* Options
  * Collation
  * Recovery model
  * Compability level
  * Other options

* Filegroups

* Database Properties
  * Gernal
  * Files
  * Filegroup
  * Options
  * Change Tracking
  * Permissions
  * Extended Properties
  * Minorting
  * Transaction Log Shipping

### 4.3 Create tables

* section metadata
  * file: 71929_04_03_SC12_CREATETABLES.mov
  * length: 07:51 hour
  * start: 2019.12.8 18:02 PM
  * end: 2019.12.8 18:13 PM

* Create an employee table.
* Create a diagram for current database.
  * And add a new table at diagram.
  * Jedi: This feature can split domain knowledge.
  * Jedi: You can use it to create whole tables.

### 4.4 Data types

* section metadata
  * file: 71929_04_04_SC12_DATATYPES.mov
  * length: 12:25 hour
  * start: 2019.12.8 18:13 PM
  * end: 2019.12.8 18:43 PM

* character
  * text
  * ntext
  * char
  * nchar
  * varchar
  * nvarchar

```description
                  unicode    or    non-unicode
fixed length      nchar            char
or
variable length   nvarchar         varchar

```

* Fixed-length character data
  * nchar(10): 20 bytes, padding with spaces
  * char(10): 10 bytes, padding with spaces

* Variable length character data
  * nvarchar(10): it depends, up to 20 bytes
  * nvarchar(4000): maximum specified length
  * varchar(8000): maximum specified length
  * nvarchar(max): up to 2GB

* Exact numbers
  * int: -2 billion to 2 billion
  * smallint: 32768 to 32767
  * tinyint: 0 to 255
  * big int: +/- 2^63
  * money: +/- 922,337,203,685477.5808
  * smallmoney: +/- 214,748.3648
  * decimal: fixed precision and scale (p,s), decimal(9,2)
  * numeric
  * float(n)
  * real
  
* Date data types
  * date
  * time
  * datetime
  * datetime2
  * datetimeoffset
  * smalldatetime

* Other
  * binary
  * varbinary
  * bit
  * xml
  * uniqueidentifier
  * user defined

* Check SQL Server Books Online!

### 4.5 Keys

* section metadata
  * file: 71929_04_05_SC12_KEYS.mov
  * length: 08:09 hour
  * start: 2019.12.8 18:44 PM
  * end: 2019.12.8 18:54 PM

* primary key
  * identity specification (is identity)

### 4.6 default value

* section metadata
  * file: 71929_04_06_SC12_default.mov
  * length: 04:39 hour
  * start: 2019.12.8 18:54 PM
  * end: 2019.12.8 19:01  PM

* default values
* default value or binding option
* change datetime default value should make a lab.

### 4.7 check constraint

* section metadata
  * file: 71929_04_07_SC12_CHECKCN.mov
  * length: 02:25 hour
  * start: 2019.12.8 19:01 PM
  * end: 2019.12.8 19:05 PM

* Like CKQuanity: quanity > 0 and quanity < 51.

### 4.8 Unique

* section metadata
  * file: 71929_04_08_SC12_UNIQUE.mov
  * length: 04:34 hour
  * start: 2019.12.8 19:05 PM
  * end: 2019.12.8 19:13 PM

* Index/Keys
  * General
  * Is Unique: Yes
  * Type: Primary Key
* Create a unique, and name it IX_ProductName

### 4.9 Creating Relationships - introduce

* section metadata
  * file: 71929_04_09_SC12_RELATIONINTRO.mov
  * length: 09:51 hour
  * start: 2019.12.8 19:14 PM
  * end: 2019.12.8 19:25 PM

* One to many
* Many to many
* Example: author, AuthorTitle, title

### 4.10 Creating Relationships

* section metadata
  * file: 71929_04_10_SC12_CREATEREL.mov
  * length: 09:51 hour
  * start: 2019.12.8 19:25 PM
  * end: 2019.12.8  PM

* Add relationship at Diagram.
* Add relationship at Table Design view.
* Lab: Add a foreign key and some foreign data duplicate.
* To 04:52

71929_04_11_SC12_NORMALIZE.mov
71929_04_12_SC12_COMPUTED.mov

## 05 Importing Existing Data

71929_05_01_SC12_IMPEXP.mov
71929_05_02_SC12_EXCEL.mov
71929_05_03_SC12_CSV.mov
71929_05_04_SC12_ACCESS.mov

## 06 Retrieving Data with SQL

71929_06_01_LA11_introtsql.mov
71929_06_02_SC12_SELECT.mov
71929_06_03_SC12_CHGDEFAULT.mov
71929_06_04_SC12_CONDITIONS.mov
71929_06_05_SC12_ORDER.mov
71929_06_06_SC12_FUNCTIONS.mov
71929_06_07_SC12_DISTINCT.mov
71929_06_08_SC12_JOIN.mov
71929_06_09_SC12_SUBQUERY.mov
