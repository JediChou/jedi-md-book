# Oracle Database 2 Day DBA

* 10g Release (10.1)
* Part Number B10742-03

## 1 Introduction

* About this Book
  * What this Book is Not
  * How to Use this Book with Related Material
* The Oracle Database
* Common Oracle Tasks
* Tools for Administering the Database

## 2 Installing Oracle and Buiding the Database

* Overview of Installation
  * Checking Prerequisites
  * Installation Choices
    * Basic Installation Choices
    * Advanced Installation Choices

* Installing Oracle Software and Database

* Using DBCA to Create and Configure a Database
  * Staring DBCA
  * Using DBCA to Create a Database
    * Database Templates
    * Database Identification
    * Management Options
    * Database Credentials
    * Storage Options
    * Database File Locations
    * Recovery Configuration
    * Database Content
    * Initialization Parameters
    * Database Storage
    * Creation Options
  * Using DBCA to Delete a Database
  * Using DBCA to Configure Database Options
  * Managing Templates with DBCA
    * Advantages of Using Templates
    * Types of Templates
    * DBCA Templates Provided by Oracle
    * Creating Templates Using DBCA
    * Deleting DBCA Templates

* Upgrading a Database
  * Overview of Database Upgrade Assistant
    * Before the Upgrade
    * During the Upgrade
    * Real Application Clusters Support
    * Support for Silent Mode
  * Oracle Database Version Restrictions
  * Starting the Database Upgrade Assistant
  * Upgrading the Database Using the Database Upgrade Assistant

* Installation: Oracle by Example Series

## 3 Getting Started with Oracle Enterprise Manager

* Introduction to the Oracle Enterprise Manager
  * Database Management Features
  * Online Help
  * Navigational Features

* Starting the Oracle Enterprise Manager Console
  * Starting dbconsole in Windows

* Accessing the Oracle Enterprise Manager
* Granting Database Control Administrative Privileges
* Setting Up Enterprise Manager Preferences
  * Defining Blackout Time Periods
  * Setting Preferred Credentials

* SQL Statements and Other Management Tools: SQL*Plus and iSQL*Plus
  * Starting SQL*Plus
  * Starting iSQL*Plus
* Managing Your Database: A Roadmap
* Getting Started: Oracle by Example Series

## 4 Configuring the Network Environment

* Understanding Network Configuration
  * Oracle Net Listener Configuration
  * Client Configuration
  * Connection Requests
  * Naming Methods
    * Local Naming
    * Directory Naming
    * Easy Connect Naming
    * External Naming

* Tools for Network Configuration
  * Oracle Net Configuration Assistant
  * Enterprise Manager
  * Oracle Net Manager

* Viewing Listener Configuration
* Starting and Shutting Down the Listener
* Configuring Oracle Networking on Client Machines
* Networking: Oracle by Example Series

## 5 Managing the Oracle Instance

* Overview of an Instance and Instance Management
  * Instance Memory Structure
    * The System Global Area (SGA)
    * Program Global Area (PGA)
  * Oracle Background Processes
  * Accessing the Database
    * How the Oracle Instance and Database are Started
    * Server and Client Processes
    * Network Connections
  *About Initialization Parameters

* Shutting Down and Restarting the Instance and Database
  * Starting and Shutting Down the Database Instance on Windows

* Viewing and Modifying Initialization Parameters
* Managing Memory Parameters
  * Modifying Memory Parameters

* Instances: Oracle by Example Series

## 6 Managing Database Storage Structures

* Exploring the Storage Structure of Your Database
  * Control File
  * Redo Log Files
    * Multiplexing the Redo Log
  * Archive Log Files
  * Rollback Segments
  * Tablespaces
    * Tablespaces Page
    * Some Tablespaces in the Database
    * Temporary Tablespace Groups
  * Datafiles
  * Other Storage Structures
    * Initialization Parameter File
    * Password File
    * Backup Files

* Common DBA Tasks for Managing Database Storage
  * Viewing Tablespaces in Your Database
  * Creating a Tablespace
  * Modifying a Tablespace
  * Dropping a Tablespace
  * Reclaiming Wasted Space
    * Using the Segment Advisor
    * Shrinking Database Objects

* Managing Undo for Your Database

* About Undo
  * Undo Tablespace Size and Retention Time
  * Automatic Undo Management
  * Undo Management with Enterprise Manager
  * Using Oracle Recommendations for Managing Undo
    * Extending the Undo Tablespace
  * Using the Undo Advisor
    * Setting New Threshold Undo Retention Time

* Making Changes to the Database Storage Structure

* Storage: Oracle by Example Series

## 7 Administering Users and Security

* Overview of Users and Security
  * Database Administrative Accounts
    * SYS
    * SYSTEM
    * Administrative Privileges

* Administering Roles
  * Viewing Roles
  * Creating a New Role
  * Modifying Roles
  * Dropping Roles

* Administering Profiles

* Administering Database Users
  * Creating Users
  * Using a Shortcut to Create Users
  * Editing Users
    * Unlocking Accounts and Resetting Passwords
    * Granting Roles
    * Revoking Roles
  * Dropping Users

* Users: Oracle by Example Series

## 8 Managing Schema Objects

* Overview of Schemas and Common Schema Objects
  * Exploring Your Database's Schema Objects
  * Managing Database Objects

* Managing Tables
  * Viewing Tables
  * Viewing Table Data
  * Creating Tables
    * Types of Table
    * Column Attributes
    * Table Level Constraints
    * Storage Attributes
    * Other Table Creation Considerations
    * Estimating the Size of New Tables
    * Table Creation Example
  * Modifying Table Attributes
    * Adding a Column
    * Dropping a Column
    * Creating a New Table Constraint
    * Modifying an Existing Constraint
    * Dropping a Constraint
  * Dropping a Table

* Managing Indexes
  * Viewing Indexes
  * Creating a New Index
    * Index Types
    * Index Creation Example
  * Dropping Indexes

* Managing Views
  * View Creation Example

* Managing Database Resident Program Units
  * Managing Packages
  * Managing Package Bodies
  * Managing Standalone Subprograms
  * Managing Triggers

* Other Schema Objects

* Loading Data Into Tables

* Managing Access to Schema Objects

* Some Schemas of Interest
  * SYS Schema
  * SYSTEM Schema
  * Sample Schemas

* Schemas: Oracle by Example Series

## 9 Performing Backup and Recovery

* Overview of Oracle Backup and Recovery
  * Oracle Backup, Restore and Recovery Concepts
    * Consistent and Inconsistent Backups
    * Media Recovery
    * The RMAN Repository
    * The Flash Recovery Area

* Configuring Your Database for Basic Backup and Recovery
  * Planning Space Usage and Location for the Flash Recovery Area
    * Retention Policy and the Flash Recovery Area
    * Sizing the Flash Recovery Area
  * Credentials for Performing Oracle Enterprise Manager Backup and Recovery
  * Configuring the Flash Recovery Area and ARCHIVELOG Mode
  * Configuring Backup Settings
    * Understanding Backup Device Settings for Disk
    * Configuring Backup Policy Settings
  * Recording Your DBID and DB_UNIQUE_NAME

* Backing Up Your Database
  * Database Backup Concepts
    * Full Backups of Datafiles
    * Incremental Backups of Datafiles
    * Incrementally Updated Backups: Rolling Forward Image Copies of Datafiles
    * Tagging Backups
  * Performing and Scheduling Backups with Enterprise Manager
    * Performing a Whole Database Backup with Oracle Enterprise Manager
    * Using the Oracle-Suggested Backup Strategy
    * Scheduling Other Backup Tasks
  * Validating Backups

* Restore and Recovery Operations
  * Recovering a Whole Database from Backup
    * Recovering from a Lost SPFILE or Control File
  * Returning a Table to a Past State: Flashback Table
    * Enabling Row Movement on a Table
    * Performing Flashback Table
  * Recovering Dropped Tables: Flashback Drop

* Managing Your Backups
  * Using the Manage Current Backups Page in Enterprise Manager
  * Crosschecking Backups
  * Deleting Expired Backups
  * Deleting Obsolete Backups
  * Marking Backups Unavailable
  * Cataloging Additional Backups

* Backup and Recovery: Oracle by Example Series

## 10 Monitoring and Tuning the Database

* Proactive Database Monitoring
  * Alerts
  * Performance Self-Diagnostics: Automatic Database Diagnostics Monitor
  * Monitoring General Database State and Workload
  * Managing Alerts
    * Viewing Metrics and Thresholds
    * Setting Metric Thresholds
    * Setting up Notification
    * Responding to Alerts
    * Clearing Alerts

* Diagnosing Performance Problems
  * Viewing Performance Analysis
  * Responding to Performance Findings
  * Modifying Default ADDM Behavior
  * Running ADDM Manually

* Using Advisors to Optimize Database Performance
  * About Performance Advisors
  * Using the SQL Tuning Advisor
  * Using the SQL Access Advisor
  * Using the Memory Advisor

* Monitoring and Tuning: Oracle by Example Series
