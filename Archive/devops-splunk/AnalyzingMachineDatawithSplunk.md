# Analyzing Machine Data with Splunk

* Student: Jedi Chou
* Start at 2018.12.20 11:14
* [Course](https://www.pluralsight.com/courses/splunk-analyzing-machine-data)
* Author: [Thomas Henson](https://www.pluralsight.com/authors/thomas-henson)
  * HADOOP GURU
  * @Henson_tm www.thomashenson.com

## 01 - Course Overview - Course Overview

* Objective
  * Splunk development environment
  * Write Splunk queries
  * Downloading from Splunkbase
  * Running Splunk on Hadoop with Hunk
* You'll be able to analyze machine data in your Splunk environment
* Console command
  * sudo splunk/bin/splunk start --accept-license

## 02 - What Is Splunk - What Is Splunk

* Analyzing Log Files (Normal way)
  * Ingest (JAVA)
  * Store (Database)
  * Visualize (HTML)
* Splunk contains all compnenets.
* Why Learn Splunk?
  * Money -> New Insights
  * Insane -> Community
  * 70% -> Fun
* Friendly
  * Basic Windows Administration
  * Basic Linux Administration
  * Windows Environment
  * Hadoop Sandbox

## 03 - What Is Splunk - Overview

* Overview
  * Why machine data?
  * Splunk Terms
  * Careers in Splunk

## 04 - What Is Splunk - Machine Data

* Machine data: Data generate by machines, computer processing, applications and sensor data.

* Where

```text
Machine data is everywhere.
In fact you are generating it right now!
```

* From
  * OS
    * Server & Workstation Logs (Linux/Windows)
    * Log files
    * Access
    * File system
  * Networks
    * Firewall
    * Warnings
    * Alerts
    * IP addresses
  * Database
    * Audit logs
    * Configurations
    * Schemas
    * Tables
    * Queries
  * Web
    * Transactions
    * click-stream
    * Location
    * Browser
    * Time
  * DevOps
    * Test logs
    * log4j alerts
    * Event logs
    * Code check-in
  * IOT
    * GPS
    * RFID
    * Biometric
    * Limitless

## 05 - What Is Splunk - Splunk Architecture

* Splunk Workflow
  * Ingest Logs
  * Index Logs
  * Visual Data

* Figure discuss (Splunk Architecture)

* Term
  * Index
  * Events
  * Search
  * Pivot
  * Dashboard
  * Forwarder

## 06 - What Is Splunk - Careers in Splunk

* Security is on the of the fastest growing sectors in IT
* IOT is a apply scenario, etc smart car.
* Who is splunk for?
  * DevOps
  * Data Analyst
  * Anyone

## 07 - What Is Splunk - Summary

* Definition of Splunk
* Understand machine data
* A look at Splunk architecture
* Careers in Splunk

## 08 - Setting up the Splunk Environment - Overview

* How Splunk is licensed
* Where to get Splunk
* Installing Splunk
* Running Splunk

## 09 - Setting up the Splunk Environment - Splunk Licensing

* Flavors of Splunk
  * Enterprise
  * Cloud
  * Light
* Capped at 500 MB of data
* Splunk cost
  * Deily Index Volume, Perpetual License(per GB), Annual Term License(per GB)
  * 1GB/day, $4500, $1800
  * 10GB/day, $2500, $1000
  * 50GB/day, $1900, $760
  * 100GB/day, $1500, $600
  * >100GB/day, Contact sales, Contact sales

## 10 - Setting up the Splunk Environment - Getting Splunk

* Splunk Website
* Register with Splunk.com
* [Official site](https://www.splunk.com)
* [Documentation](https://docs.splunk.com/Documentation)
* [Community](https://www.splunk.com/en_us/community.html)

## 11 - Setting up the Splunk Environment - Installing Splunk

* Install Splunk (Simple & Easy)

## 12 - Setting up the Splunk Environment - Adding Data to Splunk

* Logging into Splunk
* Testing the environment
* Open windows event viewer: Start > Search > Event Viewer
* Export log to a CSV file
* Tips: Only Upload Event Logs from .csv if you don't have permissions to monitor
* Tips: Monitor gives up the ability to view events as they occur
* Tips: Remember Forward gives us the ability to view log files from other machines
* Import data steps
  * Click monitor
  * Click Local Event Logs
  * Select application
  * Click Next and Commit
* Search
  * source="WinEventLog:*" host="MIS-F3216338"
  * source="WinEventLog:*" host="MIS-F3216338" EventCode=1001

## 13 - Setting up the Splunk Environment - Summary

* Summary
  * Splunk documentation
  * Explained Splunk cost
  * Walked through installing Splunk
  * Up and running with Splunk

## 14 - Basic Searching Techniques - Overview

* Adding more data
* Deep dive into Splunk search
* Reporting in Splunk
* Alert based reports

## 15 - Basic Searching Techniques - Demo - Adding More Data

* Windows System Logs
* Windows Security Logss
* Import data steps
  * Click monitor
  * Click Local Event Logs
  * Select System Logs
  * Select Security Logss
  * Click Next and Commit

## 16 - Basic Searching Techniques - Search in Splunk

* Analyze data
  * Date time
  * Event IDs
  * Etc

* Testing Data
  * Setup alerts
  * Create dashboards

## 17 - Basic Searching Techniques - Demo - Splunk Search

* Jedi: How to delete data source.
  * For example: Delete tutorial data (tutorial.zip).

* Demo
  * Search > Data Summary > Select MIS-F3216338 from Hosts list
  * Jedi: Mixed some Chinese character columns
  * Click auditing key word in the "SourceName=Microsoft Windows security auditing" of first record.
  * And select Add to search.
  * The search command changed -> host="MIS-F3216338" auditing
  * Click EventCode at Fields list
  * Click 5156 at the pop window.
  * The search command changed -> host="MIS-F3216338" auditing EventCode=5156

## 18 - Basic Searching Techniques - Splunk Search Commands

* SPL
  * Splunk Processing Language
