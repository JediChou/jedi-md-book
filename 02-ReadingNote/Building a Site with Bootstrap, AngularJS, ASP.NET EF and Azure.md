# Building a Site with Bootstrap, AngularJS, ASP.NET EF and Azure

* Publisher:
* Author:

## Chapter 02. Starting Off

### 03. Visual Studio Requirements

* nuget 2012
  * web essentials
  * nuget package management

* warpbootstrap.com (themes & templates)

### 04. Creating the Project

### 05. MVC in A Nutshell

* Jedi: 涉及用到for的地方都應該使用Partial View來代替?

### 06. Copy Template into Project

* Jedi: 原始的site.css文件不刪除掉，但將裡面的內容清空

### 07. Using LESS

* Rename site.css to site.less
* Jedi: 沒太看懂?

### 08. Creating The Layout (Master Page)

* Modify _Layout.cshtml
* Notice: RenderSection("scripts", required: false)
  * Jedi: 可用來加載其他資源，比如特定的CSS或Javascript
  * Jedi: 要設置成“非必須”的，這樣加載起來比較合適
  * Jedi: 使用的時候在視圖中單獨設置一段section即可
  * Jedi: 可以設置兩段section，一段用來加載css，一段用來加載js（放在cshtml的footer後面）

* Jedi: 要深刻理解Bootstrap不容易
  * Jedi: Boostrap層次: 會用組件、能該樣式、能製作App/Mobile的網站、能定制主題
  
### 09. Fixing The Layout

* Jedi: 修復css/js/img的加载目录
* Isotope v1.5.14是商业版本
* Jedi TODO-List: 总是有Modernizr.js，它到底是干啥的？

### 10. Using Web Essentials

* Menu
  * Minify CSS file(s)
  * Minify JavaScript file
  * Create CSS bundle file
  * Create JavaScript bundle file
  * Create solution settings
  * Create color palette
  * Create Markdown stylesheet
  * Diff selected files
  * Run JSHint

* Jedi: 有提到CoffeScript
* Jedi: bundle功能在我的vs2015上完全不能用（看不到菜单）

### 11. Summary

* Using a template can speed up your development speed.
* ASP.NET MVC includes many features you'll need for your back-end code
* Using a Master Page can simplify the markup of most pages you develop
* Web Essentials can supply crucial tools to make your site fast!

## Chapter 03. Creating Content

### 01 Introduction

* Creating the View
* Using Forms
* Validating Forms
* Creating a Service
* Using Dependency Injection
* Bringing it together
* Using ActionLinks
* Using Security

### 02. Creating The View

### 03. Using Form

* Jedi: 作者的做法是“先建立表单-传参-建实体类”，与TDD正好反过来。

### 04. Unobtrusive Validation

* Jedi: 使用jQuery的验证插件
