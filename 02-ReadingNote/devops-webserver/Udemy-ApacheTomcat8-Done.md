# Udemy - Apache Tomcat 8

* 超级讨厌印度口音. 19:37
  * 虽然一点不讨厌印度人，但就不是喜欢——因为有点听不懂. 19:38

## Introduction

* 概要性的内容，其实也可以不听。 19:42
* Apache software Foundation (ASF)
* Java Servlet, JSP, Java EL, and Websocket
* Logical Terminology
* Server
* Service(s) + Connector(s) (HTTP, HTTPS)
* Engine(s), like Catalina
* Host(s), like localhost
* Context(s)
  * docs, examples,host-manager, manager, ROOT
  * Application or Webapps

## Setup

* download, install & configure java
  * download a jre
  * set JRE_HOME or JAVA_HOME
  * Jedi: 使用JAVA_HOME为主

* Java installation demonstration
  * Environment variable

* Jedi: 都TM在Windows下操作，真是狗屎. 20:00

## Tomcat Setup

* Download, Install & Configure Apache Tomcat
  * 设置CATALINA_HOME环境变量
  * Jedi: 设置成TOMCAT的安装目录
  * C:\CompTech\Software\apache-tomcat-8.0.17

* 安装示例
  * Jedi: 这是2015年的视频
  * CLASSPATH路径里要把tomcat的包都加上
  * CLASSPATH=%CATALINA%\lib\*
  * 点击starup.bat启动tomcat即可

## Tomcat Setup HelloWorld

* 进入%CATALINA%执行startup.bat
* Hello world web application
  * 调用hello world的servlet
  * 调用cookies的servlet
  * 调用session的servlet
* Jedi: 没什么卵营养. 13:10

## Tomcat setup Folder maintenance

* 项目代码都放在%CATALINA%\webapps中
* 注意项目目录中的web.xml
  * 这些设置起始是很恶心的东西
  * 示例项目里的class文件和java文件是同时存在的

* Change in hello world servlet program demostration
  * 好弱智的示例. 13:18

## 小结

* 什么都没学到，只看了最为基础的东西。
