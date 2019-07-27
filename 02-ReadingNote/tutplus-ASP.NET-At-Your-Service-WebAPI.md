# TusPlus - ASP.NET At Your Service - Web API

## ASP.NET-AYSWebAPI-01.mp4

* Download Visual Studio 2013 or Visual Studio 2013 Express
* Download Fiddle
* [Study Ref](http://www.asp.net/web-api)
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
  
## ASP.NET-AYSWebAPI-06.mp4

* 1xx - Informational
* 2xx - Success
  * 200 OK - Get
  * 201 Create - POST
* Pause at 02:50 mins
