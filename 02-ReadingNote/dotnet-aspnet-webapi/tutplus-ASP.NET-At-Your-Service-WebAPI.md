# TusPlus - ASP.NET At Your Service - Web API

## ASP.NET-AYSWebAPI-01.mp4

* Download Visual Studio 2013 or Visual Studio 2013 Express
* Download Fiddle
* [Study Ref](http://www.asp.net/web-api)
* [Official site](https://code.tutsplus.com/courses/aspnet-at-your-service-web-api)
* Special talk about WebAPI security
* ASP.NET Web API Poster (pdf document)
* Memo:
  * study by Jedi at 2016.8.9 13:59
  * prepare for develope WebAPI

## ASP.NET-AYSWebAPI-02.mp4

* Introduce Filddler Web Debugger
* Composer
  * Parsed method: GET, POST, etc...
  * Protocol: HTTP/1.1, HTTP/2.0, etc...
  * Request Body: you can input some text

* Capturing window
  * Capturing: enable, unable
  * Kind: All Processes, Web Browser, Non-Browser, Hide All

* Execute a Composer Action, result will be show on the Inspectors
  * Head
    * Request Headers
    * GET / HTTP/1.1
    * Client (User-Agent: Filddler)
    * Transport (Host: 114.foxconn.com)
  * Other
  * Get SyntaxView
  * Transformer
  * Headers
  * TextView
  * ImageView
  * HexView
  * WebView
  * Auth
  * Caching
  * Cookies
  * Raw
  * JSON
  * XML

* Memo:
  * study by Jedi at 2016.8.9 14:39
  * how to use fiddler to check a web page response

## ASP.NET-AYSWebAPI-03.mp4

* Hypertext Transfer Protocol
  * Jedi: 《图解HTTP》, [日] 上野宣 著, 于均良 译, 图灵程序设计丛书
  * [Wiki](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

* Internet protocol suite
  * Application layer
    * BGP, DHCP, DNS, FTP, HTTP, IMAP,
    * LDAP, MGCP, NNTP, NTP, POP,
    * ONC/RPC, RTP, RTSP, RIP, SIP,
    * SMTP, SNMP, SSH, Telnet, TLS/SSL,
    * XMPP, and more ...
  * Transport layer
    * TCP, UDP, DCCP, SCTP, RSVP, and more ...
  * Internet layer
    * IP(IPv4, IPv6), ICMP, ICMPv6, ECN,
    * IGMP, IPsec, and more ...
  * Link layer
    * ARP, NDP, OSPF, Tunnels(L2TP),
    * PPP, MAC(Ethernet, DSL, ISDN, FDDI), and more ...

* HTML
  * Dynamic HTML
  * HTML (audio, canvas, video)
  * XHTML (Basic, Mobile Profile, C-HTML)
  * HTML element (span and div)
  * HTML attribute
  * HTML frame
  * HTML editor
  * Character encodings (Unicode)
  * Language code
  * Document Object Model
  * Browser Object Model
  * Font family
  * Style sheets (Cascading (CSS))
  * Web colors
  * HTML Scripting
  * JavaScript (WebGL, WebCL)
  * W3C (Validator)
  * WHATWG
  * Quirks mode
  * Web storage
  * Web browser (layout) engine
* Memo:
  * Study by Jedi at 2016.8.9 15:10

## ASP.NET-AYSWebAPI-04.mp4

* Sample 1 - request detail

```text
POST / HTTP/1.1 // /is mean /cat
Host: www.google.com:80
Accept: application/json  // other: text/html, application/xml
Content-Type: application/json
Content-Length: 85
User-Agent: Fiddler // Mozilla/5.0
Authorization:
```

* Memo
  * Study by Jedi at 2016.8.9 17:06
  * The explain detail of HTTP GET/POST request.

## ASP.NET-AYSWebAPI-05.mp4

* GET, POST, PUT, DELETE
  * Others: OPTION
* GET - retrieval resource - specified in url www.example.com/cat?id=12 (nobody)
* POST - send data to save/created www.example/cat  (body)
* PUT - update data  www.example.com/cat/12  (body)
* DELETE - delete data  www.example.com/cat/12  (no body)

* Body (html source)
* json (json.org)
* xml (xml standard document)

* Memo
  * Study by Jedi at 2016.8.9 17:30
  * Request method, Response result format
  * Again at 2019.12.9 15:59
  
## ASP.NET-AYSWebAPI-06.mp4

Status Code

* 1xx - Informational
* 2xx - Success
  * 200 OK - Get
  * 201 Create - POST
* 3xx - Redirection
* 4xx - Unauthorize, Bad Request(Client problems)
* 5xx - Server Problem

* Accept: application/json

```json
{"Name": "Value"}
```

* Accept: application/xml

```xml
<Name></Name>
```

* Memo
  * Study by Jedi at 2019.12.9 16:26
  * Chapter 2.5: HTTP Responses
  * Length: 06:12

## ASP.NET-AYSWebAPI-07.mp4

* New Project (.NET Framework 4.5)
  * Visual C# - Web - ASP.NET Web Application
  * Select Web API Option
  * Add folders and core reference for: MVC, Web API
    * Keep default
  * Change Authetication
    * Keep default

* Directory
  * App_Data: App_Data文件夹应该包含应用程序的本地数据存储
  * App_Start
    * BundleConfig.cs
  * FilterConfig.cs
  * RouteConfig.cs
  * WebApiConfig.cs: 本课程要注意到地方
  * Areas-[详见](https://docs.microsoft.com/zh-cn/aspnet/core/mvc/controllers/areas?view=aspnetcore-3.1)
  * Content
  * Controllers
    * HomeController.cs for web page
  * ValuesController: ApiController for Web API
  * fonts
  * Models
  * Script
  * Views
  * Global.asax
  * packages.config
  * Web.config

* Memo
  * Study by Jedi at 2019.12.9 16:45 PM
  * Chapter 3.1: Creating a Web API Project
  * Length: 10:44

## ASP.NET-AYSWebAPI-08.mp4

* Create a empty ASP.NET Project, only select Web API reference.
* Config Steps
  * Step 1: Project Properties
  * Step 2: Web
  * Step 3: Start Action
  * Step 4: Don't open a page. Wait for a request from an external appliation.

* Add 'Web API 2 Controller - Empty'
  * TestController: ApiController
  * [call get at browser](https://localhost:44381/api/Test/Get)

* Jedi: 在VS2019如何建立这种干净的WebAPI项目？
  * Jedi: 是可以的
  
* 3个练习
  
  * Lab0801: 建立基本的方法 public int Get()
    * function: public int Get() { return 300; }
    * [xxx/api/Test/Get](https://localhost:44381/api/Test/Get)
  
  * Lab0802: 建立符合控制器的方法 public int Get(int id)
    * function: public int Get(int id) { return id; }
  * [在浏览器中调用：xxx/api/Test/300](https://localhost:44381/api/Test/300)
  
  * Lab0803: 建立随意的控制器方法，并赋予[HttpGet]
    * function: public int Get(int number) { return number; }
  * [在浏览器中调用：xxx/api/Test/Get?number=2000](https://localhost:44381/api/Test/Get?number=2000)

* Memo
  * Study by Jedi at 2019.12.9 18:45 PM
  * Chapter 3.2 M(no-V)C
  * Length: 00:16:18 hour
  
## ASP.NET-AYSWebAPI-09.mp4

* Memo
  * Study by Jedi at 2019.12.9 18:45 PM
  * Chapter 3.3 Working With Controllers
  * Length: 00:09:55 hour

## ASP.NET-AYSWebAPI-10.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-11.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-12.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-13.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-14.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-15.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-16.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-17.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-18.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-19.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-20.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-21.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-22.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-23.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-24.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-25.mp4

* Memo
  * Study by Jedi at

## ASP.NET-AYSWebAPI-26.mp4

* Memo
  * Study by Jedi at

```text
3.4 Understanding Actions 18:40
3.5 Serialization 12:19
3.6 Routing 07:57

4.Building an API
4.1 What We Are Building 03:39
4.2 Setting Up Our Project 05:38
4.3 Entity Framework and Code First 18:09
4.4 Adding Entities and Seed Data 17:32
4.5 Creating Repositories and a Service Layer 15:55
4.6 Our First Controller, Actions and Model 28:20
4.7 Model Validation 10:47
4.8 More Actions 15:49
4.9 Adding A Base Controller 04:25
4.10 More Routing 22:19

5.Wrapping Up
5.1 Dependency Injection 09:54
5.2 Enhancing Our Models 09:06
5.3 Security Considerations 08:27
5.4 Thank You 01:05
```
