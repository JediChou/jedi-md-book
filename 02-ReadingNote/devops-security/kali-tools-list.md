# Kali Linux Tools list

* [tools-listing](https://tools.kali.org/tools-listing)
* [Kali Linux工具使用中文说明书](https://zing.gitbooks.io/kali-lunix/)

## Information Gathering

* [ace-voip](https://tools.kali.org/information-gathering/ace-voip)

ACE (Automated Corporate Enumerator) is a simple yet powerful VoIP Corporate Directory enumeration tool that mimics the behavior of an IP Phone in order to download the name and extension entries that a given phone can display on its screen interface. In the same way that the “corporate directory” feature of VoIP hardphones enables users to easily dial by name via their VoIP handsets, ACE was developed as a research idea born from “VoIP Hopper” to automate VoIP attacks that can be targeted against names in an enterprise Directory. The concept is that in the future, attacks will be carried out against users based on their name, rather than targeting VoIP traffic against random RTP audio streams or IP addresses. ACE works by using DHCP, TFTP, and HTTP in order to download the VoIP corporate directory. It then outputs the directory to a text file, which can be used as input to other VoIP assessment tools.

ACE（自动公司枚举器）是一个简单且强大的公司目录枚举工具，为了下载给定手机在其屏幕界面上显示的名称和扩展条目，它模拟 IP 电话的行为。 以同样的方式，VoIP 硬件电话的“企业目录”功能使用户能够使用他们的手机通过名称轻松拨号，ACE的开发来自一个针对名字企业目录实现“VoIP Hopper”自动化 VoIP 攻击的研究想法。 这个概念意味着将来可以基于用户的名字对用户进行攻击，而不是针对随机 RTP 音频流或 IP 地址定位 VoIP 流量。ACE 通过使用 DHCP，TFTP 和 HTTP 协议工作，以便下载 VoIP 公司目录。 然后将目录输出到文本文件，该文本文件可用作其他 VoIP 评估工具的输入。

* [Amap](https://tools.kali.org/information-gathering/amap)

Amap was the first next-generation scanning tool for pentesters. It attempts to identify applications even if they are running on a different port than normal.

It also identifies non-ascii based applications. This is achieved by sending trigger packets, and looking up the responses in a list of response strings.

Amap是第首款针对渗透测试人员的下一代扫描工具， 它尝试识别即使在不同于正常端口的端口上运行应用程序。 Amap还可以通过发送触发数据包并在响应字符串列表中查找响应来识别基于非ascii编码的应用程序。

* [apt2](https://tools.kali.org/information-gathering/apt2)

An Automated Penetration Testing Toolkit.

This tool will perform an NMap scan, or import the results of a scan from Nexpose, Nessus, or NMap. The processesd results will be used to launch exploit and enumeration modules according to the configurable Safe Level and enumerated service information.

All module results are stored on localhost and are part of APT2’s Knowledge Base (KB). The KB is accessible from within the application and allows the user to view the harvested results of an exploit module.

* [arp-scan](https://tools.kali.org/information-gathering/arp-scan)

The ARP Scanner

* [Automater](https://tools.kali.org/information-gathering/automater)

Automater is a URL/Domain, IP Address, and Md5 Hash OSINT tool aimed at making the analysis process easier for intrusion Analysts. Given a target (URL, IP, or HASH) or a file full of targets Automater will return relevant results from sources like the following: IPvoid.com, Robtex.com, Fortiguard.com, unshorten.me, Urlvoid.com, Labs.alienvault.com, ThreatExpert, VxVault, and VirusTotal.

这个工具是一个URL/域名，IP地址和MD5哈希OSINT工具，旨在使渗透测试人员更轻松地进行分析目标网址，给定一个目标（URL，IP或HASH）或一个<包含了目标的文件>。Automater将从以下来源返回相关结果
