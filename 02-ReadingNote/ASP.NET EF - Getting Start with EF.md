# ASP.NET EF - Getting Start with EF

## 01-Entity Framework 5 - Plating Ahead

* Define model
* Express & execute query
* EF determines & executes SQL
* EF transforms results into your types
* [Jedi] Change Front Page
* EF SaveChanges
* EF determines & executes SQL

## 06. What's new in EF5

* Query Performance
  * Auto Cached Queries
  * Even with .NET 4 apps running on a box with .NET 4.5 installed

* Enum support
* Sptaial data support ?
* Table Valued Function support
  * Only for DB First EDMX

* Code First adds new tables to existing databases
  * DbContext Code Generation Template by default
  * Most notable: Color & Diagrams

* EF move to Open Source
  * [EF](http://entityframework.codplex.com)
  
## 07.Upgrading EF4 Projects

* Sub title: Moving a solution from EF4.X to EF5
* Change Target framework from .net 4.0 to .net 4.5

## 08. Choosing DB First, Model First or Code First

* Modeling Workflow Decision Tree
  * Prefer Visual Designer -> A
  * Existing Database -> B
  * Existing Classes -> C
  * C-> YES, A->NO and B->NO, Code First
  * C-> NO , A->YES and B->NO, Model First
  * C-> NO , A->YES and B->YES, Datebase First

## 09. What's Coming in EF6

* Sub title: What about EF6?
  * Open Source at entityframework.codeplex.com
  * Nightly builds available
  * Periodic alpha/beta releases to Nuget
  * Basic EF workflow will not change
  * Look forward to:
    * Stored Procedure support in Code First
    * Support for .NET 4.5 Asyc/Await pattern
    * The return of Custom Conventions
    * Migrations support for Multi-tenant databases
    * Full EF API moves from .NET into Nuget package
    * Enum & Spatial data support for .NET 4 project
    * PowerTools updated and incorporated into EF Designe r
    * More

## 10 Summary

* Entity Framework Overview for Newbies
* Understand EF versioning and features
* Basic steps for using Entity Framework
* What's new in EF5 and what's coming in EF6
* Moving EF4 apps to EF5
* Understanding the different modeling workflows
* Details and examples in rest of course modules

## 11 Resource

* thedatafarm.com/blog
* blogs.msdn.com/adonet
* Entityframework.codeplex.com
* Programming Entity Framework 1st and 2nd Edition
* Programming Entity Framework: Code First (2011)
* Programming Entity Framework: Code First (2012)
* More Pluralisght Videos on EF. [Link](http://pluralsight.com/trainning/Course#entity-framework)

## Chapter 2, Database First Modeling

### 2.1 Introduction

### 2.2 Outline

* Creating a Database First Model
* Look at the Model Metadata
* VS2012 Adds Color and Diagrams to EF Designer
* Updating the Model when the Database Changes
* More with Stored Procedures
* .NET 4.5 Enum & Spatial types in DB First
* Fixing up Entity Keys when Mapping to Database Views

### 2.3 Creating and inspecting the model and it's generated code

* Create a class project
* Delete class1.cs file
* From Data select ADO.NET Entity Data Model
* Select "Generation from database"
