# DynaTrace Check Point

## Test Item

* IIS, Apache, Nodejs
  * HTTP Status (200, 302, 400, 5xx)

* HTML
  * File upload
  * CSV import

* XHR (Ajax)
  * Javascript framework: jQuery
  * Javascript framework: Dojo
  * Javascript framework: KnockOut
  * Javascript framework: AngularJS
  * Javascript framework: Backbone
  * XHR (Ajax) Support IE 8 and older (Microsoft Atlas)

* Caching
  * Cookie
  * Page Caching
  * Varnish Cache

* .NET
  * ASP.NET MVC3
  * ASP.NET MVC4
  * ASP.NET MVC5
  * ASP.NET MVC5.5
  * ASP.NET MVC6
  * ASP.NET SingalR (Web Socket)
  * Web Service
  * Web API

## Test Item for Foxconn  

* IIS and DotNET
  * command
    * command line, port: 7920
  * windows service, port: 7930
  * asp.net
  * asp.net 2.0, port: 7940
  * asp.net 3.0, port: 7950
  * asp.net 3.5, port: 7960
  * asp.net 4.0, port: 7970
  * asp.net mvc 2, port: 7980
  * asp.net mvc 3, port: 7990
  * asp.net mvc 4, port: 8000
  * web service
    * asp.net 2.0 web service, port: 8010
    * asp.net 3.0 web service, port: 8020
    * asp.net 3.5 web service, port: 8030
    * asp.net 4.0 web service, port: 8040
  * rest
    * asp.net mvc webapi, port: 8050

* attach
  * asp.net http handle
  * wcf service
    * command line
  * windows service
  * web site
  * wpf

## Dynatrace help

### Geting start

* Welcome
  * How do I get started?
  * Which environments and versions does Dynatrace support?

* Install
  * How do I enable deep process monitoring?
  * How do I enable real user monitoring?
  * How do I install Dynatrace OneAgent?
  * How do I install Dynatrace Security Gateway?
  * How do I start VMware monitoring?
  * How do I update Dynatrace?
  * What data is included in real user monitoring?
  * Why are root privileges required on Linux?

* Good to know
  * 4 things you'll absolutely love about Dynatrace
  * Glossary
  * How do I set up user groups and permissions?
  * What can I learn from service quality reports?
  * Known solution and workarounds

### Advanced Install

* Can I automate installation using Windows Group Policy?
* Can I custom install with command line parameters?
* Can I disable monitoring?
* Can I install Dynatrace via AWS Elastic Beanstalk?
* Can I monitor multiple environments?
* How can I pass a proxy address during installation?
* How do I recover from a Deep process monitoring manually disabled error?
* How do I setup agentless real user monitoring?
* How do I uninstall Dynatrace OneAgent?
* What is 'complete' Apache web server restart?
* When should I install security Gateway?
* Where can I find OneAgent files and logs?

## Learn about Dynatrace security

## Monitor real user experienceim

## Resolve performance problems

## Cloud, virtualization, & hosts

## Monitor server-side services

## Monitor PaaS environments

## Dynatrace Managed

### Learn the Dynatrace Managed basics

* How do I get started with Dynatrace Managed?
  * undersand the entire setup process at a glance
  * Download and install Dynatrace Server
  * Set up user groups and rights
  * Download and install Dynatrace OneAgent
  * Restart server processes
  * Connect to your VMware platform

* How does pro-active support work?
  * What you get
  * How it works
  * What we send to the portal
  * Portal connection security

* What is a monitoring environment?

* Glossary
  * Apdex
  * Applications
  * Availability monitoring
  * Availability web checks
  * Candidates(aka "monitoring candidates")
  * Clickpath web check
  * Datacenter
  * Duration
  * Deep process monitoring
  * Event
  * External
  * External service
  * Multi-dimensional baselining
  * Problem
  * Processes
  * Process group
  * Real-user monitoring
  * Dynatrace OneAgent
  * oneagentmon device
  * Dynatrace Security Gateway
  * Session
  * Services (aka "Server-side services")
  * Service backtrace
  * Smartscape
  * Sythetic actions
  * User action
  * Wall-clock time

* Which environment and versions does Dyantrace support?

### Manage Users

* Can I manage users and groups with LDAP?
  * Connection setup
  * Groups query
  * User query
  * Map Dynatrace Managed and LDAP groups

* What roles and user groups are available?
  * Cluster administrator
  * Default administrator account
  * Environment access rights

### Set up Cluster

* How do I add new cluster node?
  * Before you begin
  * Download the installer
  * Run the installer

* How do I remove a cluster node?
  * Removing a "dead" node

### Start monitoring

* How do I navigate between environments?
* How do I install Dynatrace OneAgent?
* Resolve performance problems
  * Detec, analyze, and resolve problems
    * How is the dynatrace approach to problem detection unique?
      * How Dynatrace correlates incidents across stack layers
        * Analyzing underlying dependencies ?
      * Why the slowest 10% of response times are important
      * How effective is time correlation?
    * What is the life cycle a problem?
      * Step 1: Problem #001 appears.
      * Step 2: Service becomes affected by Problem #001.
      * Step 3: More incidents are now affecting the service layer.
      * Step 4: Application level affected, end users start experiencing errors.
      * Step 5: ruxit correlates incidents and the root cause is identified.
    * What's the difference between problems and events?
  * Real-world use cases
    * High network retransmission rate as root cause
      * Understanding restransimission rate
      * The problem is detected
      * Root cause analysis of the problem
    * Virtual machine migration as root cause
  * Prediction-based anomaly detection
    * Prediction-based anomaly detection
  * Detection sensitivity and threshold settings
    * How are new problems evaluated and raised?
    * How do I adjust the sensitivity of problem detection?
  * Configure problem notification integrations
    * How do I set up email-based problem-notification?
    * How do I push problem notifications to third-party systems?
    * How do I push problem notifications to OpsGenie?
    * How do I push problem notifications to PagerDuty?
    * How do I set up ServiceNow problem notifications?
    * How do I push problem notification to VictorOps?
    * How can I set up outgoing problem-notifications using a webhook?
* Monitor cloud, virtualization, and hosts
  * Hosts
    * Can I monitor Docker contains?
    * How do I deploy Dynatrace OneAgent as a Docker container?

* Monitor real user experience
* Monitor server-side services

### Install and configure Dynatrace Server

* Can I install Dynatrace Server using custom parameters?
* Can I use a proxy for Internet access?
* Can I use my own SSL certificate?
* How do I backup Dynatrace Server?
* How do I enable availability web checks?
* How do I install Dynatrace Server?
* How do I uninstall Dyantrace Server?
* How do I update Dynatrace Server?
* How to configure SMPT server connnection?
* What are the hardware & software requirements?
* Which network ports does Dynate Service use?

## API documentation

### General information

* Pricing
* Rate limiting
* HTTPS
* URL prefix
* Dynatrace SaaS
* Dynatrace Managed URL Prefix
* Versioning

### Authentication

* Passing your API key in an authorization header
* Passing your API key in a query parameter

### Timeseries API

* GET parameters
  * timeseriesId
  * startTimestamp
  * endTimestamp
  * relativeTime
  * queryMode
  * aggregationType
  * entity

* POST payload
  * entities
  * filters

* Result
* Examples
  * fetch the average user CPU of a given host
  * fetch the number of received bytes for all network interfaces of all Windows hosts
  * Aggregation types
  * Available timeseries
  * Process types
    * Jedi notices: 后续可参照这个列表进行监控指标的抓取
    * linuxsystem
    * oracledb
    * apachehttp
    * windowssystem
    * windowsservice
    * mssql
    * db2
    * IIS
    * mysql
    * Java
    * dotnet
    * tomcat
    * websphere
    * apmng
    * jboss
    * weblogic
    * glassfish
    * iisapppool
    * postgres
    * mongodb
    * cassandra
    * memcached
    * couchdb
    * redis
    * ruby
    * perl
    * nodejs
    * python
    * nginx
    * varnishcache
    * haproxy
    * php
    * awsrds
    * erlang
    * dockerdaemon
    * mongodbrouter
* OS types
* Technology types
* Service types
  * webrequest
  * webservice
  * database
  * method
  * website
  * messaging
  * mobile
  * process
  * rmi

### Problem API

* Problem endpoint
* Status endpoint
* Feed endpoint
* HTTP GET parameters
* Problem details endpoint

### Topology and Smartscape API

### Real user monitoring JavaScript code management API

* Manually injected applications information endpoint
* Latest JavaScript code version endpoint
* Current Application Revision endpoint
