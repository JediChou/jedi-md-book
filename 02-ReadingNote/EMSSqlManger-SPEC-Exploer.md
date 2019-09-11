# EMS SQL Manager SPEC Expoloer

* Jedi Chou, skyzhx@163.com
* 2019.7.27 11:34
* Source: [EMS Official site](https://www.sqlmanager.net/)

## Structure

* Database Maintenance Tools
  * SQL Backup
  * SQL Administrator
  
* Database Management Tools
  * SQL Manager
  
* Databse Conversion and Migration Tools
  * Data Export
  * DB Extract
  * Data Import
  * Data Pump
  
* Database Analysis Tools
  * Data Comparer
  * DB Comparer
  * SQL Query
  * Data Generator
  
* Components and Tools
  * Advanced Data Export VCL
  * Advanced Data Export .NET
  * Advanced Data Import
  * Advanced PDF Generator
  * Advanced Query Builder
  * Advanced Excel Report
  * Advanced Localizer

* Free Data Base Tools

## SQL Backup

### SQL Backup for SQL Server

* Compressing backup files (on any SQL Server version)
* Multiple compression levels to achieve optimal balance between backup size and execution time
* Backup encryption (on any SQL Server version)
* Support of SQL Server native backup encryption
* Reducing backup time up to 4 times (on any SQL Server version)
* Multi-threaded execution of backup operation to achieve maximum performance
* "One the fly" uploading of backups to several cloud storages simultaniously
* Backing up multiple databases to a single file
* Backup of files and filegroups
* Bulk Restore: emergency restore of multiple databases
* Scheduled check-up of multiple database backups
* Regular database infrastructure deployment from single backup to several servers at a time
* Prevention of the service task failure due to network problems
* Restore of broken connection on uploading to cloud storages
* Support of Cloud Storages: FTP (SSL), SFTP (SSH), Windows network folders (CIFS), Dropbox
* Support of Cloud Storages: Google Drive
* Support of Cloud Storages: Amazon S3, Microsoft Azure
* Support of SQL Server Failover Cluster
* Ability to perform 11 types of maintenance tasks including backup, re-indexing, updating statistics, etc.
* The possibility to download backup files from servers and cloud storages
* Utility for converting backup files from SQL Backup to SQL Server formats
* Unlimited number of remote and local storages for each backup
* Ability to ship databases between SQL Servers as per schedule
* Easy-to use wizard organizing the log shipping process
Intelligent Restore. Automatic history restore on a chosen date picking the files sequence based on server LSN numbers
Building the backup files sequence with the possibility to find and download the necessary files from cloud storages
Policy engine to quickly deploy maintenance tasks to multiple servers and to monitor their execution results
A set of standard templates for sample maintenance policies of server systems
Centralized monitoring of policies on multiple servers using the user-friendly GUI console
Ability to remotely install server components
E-mail notification mechanism informing of the task execution results
Generating reports on maintenance task results
Exporting maintenance tasks history to an external file
Working with Enterprise and BI versions of SQL Server (PRO version only)

## EMS SQL Backup for PostgreSQL

* 