# PtIntroPHPMVCCakePHP

* Jedi Chou start study at 2018.12.19 18:17
* Author: Jill Gundersen
* Introduction to PHP MVC with CakePHP Training
* [Download](https://www.0daydown.com/01/290688.html)
* [Course Link](https://www.pluralsight.com/courses/introduction-php-mvc-cakephp)
* [Author](https://www.pluralsight.com/authors/jill-gundersen)

## 01. Introduction to PHP MVC

* 01_01-Introduction
  * Jedi: say hello

* 01_02-CakePHP Framework
  * CakePHP is a free, open-source, rapid development framework for PHP.
  * Framework Based on MVC
    * CakePHP is an MVC framework
      * Separates the code into ares which allows for rapid development.
      * Simplifies the mundane and repetitive tasks in developing web applications.

* 01_03-Why CakePHP
  * Why use it?
    * CakePHP is similar to C#'s MVC framework, which I am familiar with.
    * Clean URLs
      * Out of the box CakePHP has nice URLs
      * Does not use "index.php" which is prevalent in most PHP frameworks
    * Separates presentation layer from business and logic layer
    * Easily extendable
    * Active community
    * Active development team (update regularly)

* 01_04-Overview of MVC
  * MVC Design Pattern Separates an Application Into Three Parts
  * CakePHP Request Cycle
    * Client
    * View
    * Dispatcher
    * Controller
    * Model

* 01_05-Course Objectives
  * Basic Overview of CakePHP
    * Remember this is an introduction course
  * Understand the MVC framework
    * Shown by example
  * Create a Functional Application
    * Media Catalog
      * Installation of CakePHP
      * Creating a database and tables
      * Management of the database (from applications)
      * Working with data validation
      * Adding a layout
      * Authertication
        * Limit access to ceratain areas of the site.

## 02. Installation of CakePHP

* 02_01-Choosing the Right Installation
  * CakePHP can be run on any OS
    * Author will cover installtion on the following machines
      * Linux command line
      * Linux with NetBeans IDE
      * Window using XAMPP
      * Window with NetBeans IDE
      * Windows with IIS
* CakePHP Requirements
  * PHP Version
    * 5.2.8 or Higher
  * Database
    * MySQL, PostgreSQL, Microsoft SQL Server, SQLite
      * MySQL with phpMyAdmin
  * Web Server
    * Apache, IIS

* 02_02-Installation of CakePHP on Linux
  * Command Line for Our installation
    * For this course I will be using the Ubuntu OS, but the process is similar on other flavors of Linux.
  * Initial Setup Environment
    * Building on the LAMP Stack - Linux, Apache, MySQL, PHP
      * Linux
      * Apache Web Server
      * MySQL
        * Make sure you have your username/password handy
        * create a database for our course
          * Catalog
      * PHP
        * Version 5.2.8 or higher
    * Additionally
      * Download CakePHP
        * git://github.com/cakephp/cakephp.git
        * https://github.com/cakephp/cakephp/zipball/2.3.6
  * Configure CakePHP
    * Create a Folder for our New CakePHP site
      * Move the CakePHP you downloaded into this folder
        * I like to keep my individual web sites under a WebSites folder
        * etc./home/username/WebSites/Catalog
    * Change the Permissions on the CakePHP app/tmp Folder
      * chmod 777 -R tmp
    * Alter Two files in the CakePHP app/config Folder
      * database.php.default
      * core.php
    * Configure Apache Web Server
      * Alter the 'etc/hosts' file
        * Add Catalog after 'localhost'
          * Make sure there is a space between the two
      * Craete a new virutalhost file
        * Located inside the /etc/apache2/sites-available
          * Hit: Copy the default file and rename that to be Catalog
      * Enable the New Site
        * a2ensite Catalog
      * Reload Apache
        * This allows Apache to recognize the changes we just make to the configuration
* Operation
  * Check Apache start
  * Check phpMyAdmin work correct
  * Create Catalog database at phpMyAdmin
  * cd WebSites/Catalog/
  * cd app/Config/
  * vi core.php
  * re-config security hashing methods. (Generate a string at textmechanic.com)
  * re-config encrypt/decrypt strings. (Generate a string at textmechanic.com)
  * quit vi
  * cp database.php.default database.php
  * vi database.php
  * change default variable
    * 'host' => 'localhost'
    * 'login' => 'your database username'
    * 'password' => 'your database password'
    * 'database' => 'your database name'
  * quit vi
  * cd ../
  * ls
  * chmod -R 777 tmp
  * ls -all (check tmp execute permission)
  * sudo vi /etc/hosts
  * 127.0.0.1  localhost Catalog
  * quit vi
  * cd /etc/apache2/sites-available/
  * sudo cp default Catalog
  * sudo vi Catalog
  * add a servername - Servername Catalog
  * change DocumentRoot /home/pluralsight/WebSites/Catalog/app/webroot
  * change

* Study to 0:09:58
