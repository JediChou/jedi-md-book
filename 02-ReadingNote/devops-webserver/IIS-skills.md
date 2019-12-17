# Internet Information Server Skills

Author: Jedi Chou

## Get IIS version number - 2017.11.13 19:28

* Check local IIS Version number by PowerShell.

```ps
get-itemproperty HKLM:\SOFTWARE\Microsoft\InetStp\  | select setupstring,versionstring
```

* Check local IIS version number by command.

```shell
curl --silent -I http://microsoft.com/ |grep Server
```

## IIS Supported Downloads - 2017.11.13 19:41

Reference by [this link](https://www.iis.net/downloads/microsoft).

* [HttpPlatformHandler v1.2](https://www.iis.net/downloads/microsoft/httpplatformhandler)
  * Category: Host Applications, Develop
  * Works With: IIS 7.5, IIS 8, IIS 8.5, IIS 10

* [IIS Manager for Remote Administration 1.2](https://www.iis.net/downloads/microsoft/iis-manager)
  * Category: Manage
  * Works With: IIS 7, IIS 7.5, IIS 8, IIS 8.5

* [WinCache Extension for PHP](https://www.iis.net/downloads/microsoft/wincache-extension)
  * Category: Host Applications, Improve Performance, Develop
  * Works With: IIS 7, IIS 7.5, IIS 8, IIS 8.5, IIS 10

* [Administration Pack](https://www.iis.net/downloads/microsoft/administration-pack)
  * Category: Manage
  * Works With: IIS 7

* [Advanced Logging](https://www.iis.net/downloads/microsoft/advanced-logging)
  * Category: Serve Media
  * Works With: IIS 7, IIS 7.5, IIS 8

* Application Initialization Module for IIS 7.5
* Application Request Routing
* Bit Rate Throttling
* Database Manager
* Dynamic IP Restrictions
* FastCGI for IIS
* FTP Publishing Service
* Live Smooth Streaming
* Search Engine Optimization Toolkit
* Smooth Streaming
* Smooth Streaming Format SDK 1.0 Beta 2
* Transform Manager
* URL Rewrite
* UrlScan 3.1
* Web Deploy 3.6
* Web Farm Framework
* Web Playlists
* WebDAV Extension
* Windows Media Services 2008 R2
* Windows PowerShell Snap-In

## Some IIS skills - 2017.11.14 20:47

* Questions
  * appcmd.exe的基本使用 ?
  * appcmd.exe migrate config {Application Path} ?
  * 如何开发自定义模块([Link](http://msdn2.microsoft.com/en-us/library/bb332050.aspx))
  * 如何获取IIS的模块列表 ?
  * IIS6.0里的NNTP是什么 ?
  * metabase
    * applicationHost.config, web.config
    * administration.config, redirection.config
  * WAS, Windows Process Activation Service
  * 命令行安装IIS
* Windows Serve 2008提供了网络负载平衡（Network Load Balancing，NLB）程序

一些技巧

```bat
appcmd list site
appcmd list vdir
appcmd list app
appcmd list apppool
appcmd.exe lock config "WebSite1" -section:httpErrors
```

* 开发SOAP WebService的实时调试

```xml
<webServices>
  <protocols>
     <add name="HttpGet"/>
     <add name="HttpPost"/>
  </protocols>
</webServices>
```
