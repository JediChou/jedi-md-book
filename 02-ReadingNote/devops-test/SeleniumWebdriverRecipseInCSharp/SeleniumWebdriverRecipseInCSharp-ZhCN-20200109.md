# Selenium WebDriver Recipes in CSharp, Second Edition

Book information:

* 作者: Zhimin Zhan
* 出版社: Apress
* ISBN-13 (pbk): 978-1-4842-1741-2
* ISBN-13 (electronic): 978-1-4842-1742-9

## Content

* 第1章：介绍
  * Selenium Language Bindings
  * 环境配置
    * 前置条件
	* 创建Visual Studio解决方案
	* 创建测试并运行
  * 跨浏览器测试
    * Firefox
	* Chrome
	* Internet Explorer
	* IE Edge
  * Visual Studio单选测试框架
    * Visual Studio Unit Testing Framework Fixtures
	* 其他可替代的方案：NUnit
  * 运行测试脚本
    * 在Visual Studio中运行测试
	* 在命令行下运行测试
	
* 第2章：定位Web元素
  * 启动浏览器
  * 按ID查找元素
  * 按Name查找元素
  * 按超链接文件查找元素
  * Find element by Partial Link Test
  * 按XPath方式查找元素
  * 按Tag查找元素
  * 按Class查找元素
  * 以CSS选择器查找元素
  * Chain FindElement to find child elements
  * 查找多个元素
  
* 第3章：超链接
  * 通过文本点击超链接
  * 通过ID点击超链接
  * Click a link by partial text
  * 通过XPath方式点击超链接
  * 点击内容一样的链接组中的特定链接
  * 确认链接是否存在
  * 获取链接的各项属性
  * 链接在新窗口打开时处理方式

* 第4章：按钮
  * 按名称点击按钮
  * 按名称点击表单按钮
  * 提交表单
  * 按ID点击按钮
  * 按name点击按钮
  * 点击图片按钮
  * 通过JavaScript点击按钮
  * 确认按钮是否存在
  * 确认按钮是否为可点击状态

* 第5章：文本字段和文本框
  * 根据文本字段的name执行信息输入
  * 根据文本字段的ID执行信息输入
  * 密码输入
  * 清除文本字段的内容
  * 文本框的信息输入
  * 文本字段和文本框的内容判断（断言）
  * 焦点控制
  * 设置只读文本字段或禁用文字字段的值
  * 设置并判断隐藏文本字段的值

* 第6章：单选按钮
  * 点击单选按钮
  * 清除单选按钮选项
  * 确定单选按钮选项被选中
  * 遍历单选按钮组
  * 点击单选按钮组中的某个单选按钮
  * 根据单选按钮的文本进行点击
  * 自定义单选按钮：iCheck

* 第7章：复选框
  * 根据name检查复选框
  * 根据ID检查复选框
  * 清除复选框内容
  * 判定复选框是否被选中
  * 查找子节点
  * 自定义复选框：iCheck
  
* 第8章：选择列表
  * 根据文本选择列表项
  * 根据值选择列表项
  * 根据索引选择列表项
  * 遍历选择列表项后选择列表项
  * 选择多个列表项
  * 清除所有选择项
  * 断言：判断列表项被选中
  * 断言：判断列表项的内容是否正确
  * 断言：多个列表项的内容判断

* 第9章：导航与浏览器设置
  * 页面跳转
  * 页面浏览
  * 执行右键事件
  * 使用指定大小打开浏览器
  * 浏览器最大化
  * 移动浏览器
  * 浏览器最小化
  * 焦点切换与控制
  * 选择浏览器窗口（或选项卡）
  * 记录当前页面并进行回退操作

* 第10章：断言
  * 断言：页面Title判定
  * 断言：页面内容判定
  * 断言：页面HTML内容判定
  * Assert checkbox selected
  * Assert button enabled
  * Assert label text
  * Assert span text
  * Assert div text or HTML
  * Assert table text
  * Assert text in a table cell
  * Assert image present
  
* Chapter 11: Framews
  * Testing Frames
  * Testing iframe
  * Test mulitple iframes
  
* Chapter 12: AJAX
  * Wait within a time frame
  * Explicit waits until time out
  * Implicit waits until time out
  * Wait AJAX call to complete using JQuery

* Chapter 13: Pop-up
  * File upload
  * JavaScript pop-ups
  * Modal style dialog boxes
  * Timeout on a test
  * Pop-up handler approach
  * Basic or Proxy Authentication dialog box
  * Internet Explorer modal dialog box

* Chapter 14: Debugging Test Scripts
  * Print text for debugging
  * Write page source or element HTML into a file
  * Take a screenshot
  * Leave the browser open after test finishes
  * Debug test execution using Debugger
    * Enable breakpoints
	* Execute one test case in debugging mode
	* Step over test execution

* Chapter 15: Test Data
  * Get data dynamically
  * Get a random boolean value
  * Generate a number within a range
  * Get a random character
  * Get a random string at fixed length
  * Get a random string in a collection
  * Generate a test file at fixed sizes
  * Retrieve data from database

* Chapter 16: Browser Profile
  * Get browser type and version
  * Set HTTP proxy for browser
  * Verify file download in Chrome
  * Verify file download in Firefox
  * Bypass basic authentication by embedding username and password in URL
  * Bypass basic authentication with FireFox AutoAuth plug-in
  * Manage cookies
  * Headless browser testing with PhantomJS
  * Test responsive web sites

* Chapter 17: Advanced User Interactions
  * Double-click a control
  * Move mouse to a control: Mouse over
  * Click and hold: Select multiple items
  * Context click: Right-click a control
  * Drag-and-drop
  * Drag slider
  * Send key sequences: Select All and Delete

* Chapter 18: HTML5 and JavaScript
  * HTML5 email type field
  * HTML5 time field
  * Invoke 'onclick' JavaScript event
  * Invoke JavaScript events such as onchange
  * Scroll to the buttom of a page
  * Chosen: Standar select
    * Chosen: Multiple select
  * AngularJS web pages
  * Ember JS web pages
  
* Chapter 19: WYSIWYG Editor
  * TinyMCE
  * CKEditor
  * SummerNote
  * CodeMirror
  
* Chapter 20: Leverage Programming
  * Throw exceptions to fail test
    * Flag incomplete tests
	* Stop test execution during debugging a test
  * Ignorable test statement error
  * Read external file
  * Data-driven tests with Excel
  * Data-driven test with CSV
  * Identify element IDs with dynamically generated long prefixes
  * Sending special keys such as Enter to an element or browser
  * Use of Unicode in test scripts
  * Extract a group of dynamic data: Verify search results in order
  * Verify uniqueness of a set of data
  * Extract dynamic visible data rows from a results table
  * Extract dynamic text following a pattern using Regex

* Chapter 21: Optimization
  * Assert string in page_source is faster than the text
  * Getting text from more specific elements is faster
  * Avoid programming if-else block code if possible
  * Use variable to cache unchanged data
  * Enter large text into a text box
  * Use environment variables to change test behaviors dynamically
  * Test a web app in two languages
  * Multi-language testing with lookups

* chapter 22: Gotchas
  * Test starts browser but no execution with blank screen
  * Be aware of browser and driver changes
  * Failed to assert copied text in changes
  * The save test works for Chrome, but not for Internet Explorer
  * "Unexpected tag name 'input'"
  * Element is not clickable or not visible

* Chapter 23: Remote Control Server
  * Selenium Server installation
  * Execute tests in the specified browser on another machine
  * Selenium Grid
    * Start the hub
	* Start the nodes
	* Using Grid to run tests
	* Concerns with Selenium Grid

* Chapter 24: Afterword
  * Practice makes perfect
    * Write tests
	* Improve programming skills
  * Successful test automation
    * Maintain test scripts to keep up with application changes
	* Shorten test execution time to get quick feedback

* Chapter 25: Resources
  * Books
  * Web sites
  * Tools
