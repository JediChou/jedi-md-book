# Selenium WebDriver Recipes in CSharp, Second Edition

Book information:

* Author: Zhimin Zhan
* Publisher: Apress
* ISBN-13 (pbk): 978-1-4842-1741-2
* ISBN-13 (electronic): 978-1-4842-1742-9

## Content

* Chapter 1: Introduction
  * Selenium Language Bindings
  * Set up the Development Environment
    * Prerequistes
	* Set up Visual Studio Solution
	* Create a test and run it
  * Cross-Browser Testing
    * Firefox
	* Chrome
	* Internet Explorer
	* Edge
  * Visual Studio Unit Test Framework
    * Visual Studio Unit Testing Framework Fixtures
	* Alternative Framework NUnit
  * Run Recipe Scripts
    * Run Tests in Visual Studio
	* Run Tests from the Command line
	
* Chatper 2: Locating Web Elements
  * Start browser
  * Find element by ID
  * Find element by Name
  * Find element by Link Text
  * Find element by Partial Link Test
  * Find element by XPath
  * Find element by Tag Name
  * Find element by Class
  * Find element by CSS Selector
  * Chain FindElement to find child elements
  * Find multiple elements
  
* Chapter 3: Hyperlink
  * Click a link by text
  * Click a link by ID
  * Click a link by partial text
  * Click a link by XPath
  * Click nth link with exact same label
  * Verify that a link is present or not
  * Getting link data attributes
  * Test links open a new browser window
  
* Chapter 4: Button
  * Click a button by text
  * Click a form button by text
  * Submit a form
  * Click a button by ID
  * Click a button by name
  * Click an image button
  * Click a button via JavaScript
  * Assert a button present
  * Assert a button enabled or disabled
  
* Chapter 5: TextField and TextArea
  * Enter Text into a Text Field by Name
  * Enter Text into a Text Field by ID
  * Enter Text into a Password Field
  * Clear a Text Field
  * Enter Text into a Multiline Text Area
  * Assert Value
  * Focus on a Control
  * Set a Value to a Read-only or Disabled Text Field
  * Set and assert the value of a hidden field
  
* Chapter 6: Radio Button
  * Select a Radio Button
  * Clear Radio Option Selection
  * Assert a Radio Option is Selected
  * Iterate Radio Buttons in a Radio Group
  * Click nth Radio Button in a Group
  * Click Radio Button by the Following Label
  * Customized Radio Buttons: iCheck

* Chatper 7: Check Box
  * Check by name
  * Check by ID
  * Clear a check box
  * Assert a check box is checked (or not)
  * Chain FindElement to find child elements
  * Customized Check Boxes: iCheck
  
* Chapter 8: Select List
  * Select an option by text
  * Select an option by value
  * Select an option by index
  * Select an option by iterating all options
  * Select multiple options
  * Clear all selections
  * Assert selected option
  * Assert the value of a select list
  * Assert multiple selections

* Chapter 9: Navigation and Browser
  * Go to a URL
  * Visit pages within a site
  * Perform actions from the right-click context menu
  * Open browser in certain size
  * Maximize browser window
  * Move browser window
  * Minimize browser window
  * Scroll focus to control
  * Switch between browser windows or tabs
  * Remember current web page URL and return to it later

* Chapter 10: Assertion
  * Assert page title
  * Assert page text
  * Assert page source
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
