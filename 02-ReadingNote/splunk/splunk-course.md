
# Splunk培训系列

## Splunk培训系列01-初识Splunk01

### 机器数据

### Splunk组件

* 索引器
* 索引头
* 搜索节点
* 转发器
* 接收器
* 应用

### Splunk 分布式架构

* Layer 1: Search Head
* Layer 2: Splunk node1, Splunk node2, Splunk node3, Splunk node4
* Layer 3: App Server, Service Bus, BPM Product, Firewall

### 通用转发器

* heavy, light, universal
* light比较多
* 转发器无法进行搜索

### 通用转发器的限制

* 没有搜索、索引或告警功能。
* 不解析数据
* 不通过syslog输出数据
* 不包含捆绑的Python版本

### 多种应用场景

* 维度1: 索引数据->搜索和调查->添加知识->监视告警->报表分析
* 维度2: 日志管理&IT运维分析、应用程序管理、安全&合规、业务分析+大数据分析等
* 维度1、维度2相互映射，互为补充

### Splunk开发平台

* [Splunk DEV](http://dev.splunk.com/)
* Splunk Web Framework
* Figure
  * 内容 -> 数据导入、应用，其他内容
  * 用户界面&开发接口 -> Web Framework, SDK, REST API
  * 核心引擎 -> 搜索处理语言SPL, 索引, 搜集

### Splunk Apps

* apps.splunk.com
* splunkbase.splunk.com
* 安装方式
  * 在splunk enterprise中直接下载安装

### Splunk Enterprise

* 当前最新版本：6.4.2
* Jedi: 大概是1.5年前的东西了

### Splunk Universal Forwarder

* 当前最新版本：6.4.2
* 支持的平台更多

## 02. Splunk培训系列01-在Linux平台安装

### 安装前准备

* 配置一致的时间
* 建议搭建企业内NTP服务器，将所有相关设备指向该服务器
* Jedi: 时间戳不一致会导致后续的调试很难定位到具体问题

### 安装环境

* CentOS 6.7, 64bit
* Splunk Enterprise
  * splunk-6.4.2-00f5bb3fa822-Linux-86_64.tgz
* Splunk Univeral Forwarder:
  * splukforwarder-6.4.2-00ff5bb3fa8220Linux-x86_64.tgz
* 以root用户安装（可使用非root用户）

### 安装步骤

* tar xzvf splunk-6.4.2-00f5bb3fa822-Linux-86_64.tgz -C /opt //安装
* /opt/splunk/bin/splunk start --accept-license // 首次启动
* /opt/splunk/bin/splunk start enable boot-start // 开启自启动
* 配置环境变量

### 演示Splunk安装

* tar xzvf splunk-6.4.2-00f5bb3fa822-Linux-86_64.tgz -C /opt
* splunk start --accept-license
  * Jedi: 注意8000端口、8089端口的启用情况
  * Jedi: spluk有默认密码（admin/changeme）
  * Jedi: 要注意防火墙的设置（service iptables status）

* 配置splunk的开机自启动
  * splunk enable boot-start

### 启动/关闭/重启

* 启动: splunk start
* 关闭: splunk stop
* 重启: splunk restart
* 查看状态: splunk status
* 查看版本: splunk version
* 查看进程: ps -ef | grep splunk

* Jedi: Splunk使用mongodb作为KV存储

### 端口

* Splunk Web: 8000
* Splunkkd: 8089
* 均可修改
* 开通防火墙端口

### Splunk Web

* 访问地址，例如：[link](http://ip:8000)
* 显示语言取决于浏览器
  * [link2](http://ip/zh-CN/app/launcher/home)
  * [link3](http://ip/en_US/app/launcher/home)
* 默认用户名和密码: admin/changeme
* 首次登陆会要求修改密码
* 后续修改密码：设置->访问控制->修改密码

### 卸载Splunk Enterprise

* splunk disable boot-start
* splunk stop
* rm -rf/opt/splunk
* 卸载要慎重，注意数据备份

### 安装Splunk Universal Forwarder

* tar xzvf splunkforwarder-6.4.2-00f5bb3fa822-Linux-x86_64.tgz -C /opt
* /opt/splunkforwarder/bin/splunk start --accept-license
* /opt/splunkforwarder/bin/splunk enable boot-start
* 配置环境变量

* 端口冲突问题
  * splunk enterprise和splunk universal都是使用8089端口
  * 查看splun universal的状态

    ```shell
    > ./splunk show splunkd-port
    Splunk username: ***
    ```

* 通过命令行修改端口

```shell
> ./splunk set splunkd-port 8091
> ./splunk restart
```

### splunk universal 启动/关闭/重启

* 启动/关闭/重启等命令和splunk enterprise一直

### splunk universal forwarder密码修改

* 默认密码: admin/changeme
* 修改密码:

    ```shell
    > ./splunk edit user admin -password 'admin' -role admin -auth admin:changeme
    ```

* splunk universal forwarder修改密码不需要重启

### Splunk universal forwarder的卸载

* 删除目录即可

## 03. Splunk培训系列03-在Windows平台安装

### Windows安装前准备

* 配置一致的时间
* 建议搭建企业内NTP服务器，将所有相关设备指向该服务器

### Windows安装用户的选择

* 本地系统用户，本次采用此方式
* 域用户，较复杂，请参考文档

### Windows安装步骤

* GUI安装，比较简单
* 通过服务面板设置为开机自启动

### Windows启动/关闭/重启

* 启动：splunk start
* 关闭：splunk stop
* splunk restart
* splunk status
* splunk version
* windows command
  * net start splunkd
  * net stop splunkd
* 通過控制面板

### Windows上的Splunk演示

* Jedi: 在Windows上大部分的操作都需要administrator權限
* Demo: splunk status
* Windows上的默認安裝會自動啟動（以服務的方式運行）

* 端口查看
  * splunk show splunkd-port
  * splunk show web-port

### Windows的Splunk訪問地址、卸載（略過）

### Windows安裝Splunk Universal Forwarder

* GUI安裝，比較簡單

## Splunk培训系列01-安裝後配置04

### 配置Splunk服务器名称

* 设置 -> 服务器设置 -> 常规设置
* 默认是服务器主机名
* 也可通过命令行修改: splunk set servername myname1
* 修改需要重启Splunk

### 配置端口号

* Splunkd端口号：8089
* Splunk Web端口号：8000
* 可在Splunk Web中修改，也可以通过CLI命令修改
  * splunk set splunkd-port 8090
  * splunk set web-port 8001
* 配置后需要重启Splunk

* 也可以通过Web页面来修改端口

### 设置默认Host名称

* 设置源自该服务器的事件的默认host值
* 可在Web界面修改
* 或者通过Splunk CLI修改
  * splunk set default-hostname myname3
* 配置后需要重启服务器

### Splunk Web启动SSL（HTTPS）

* 在Splunk Web中启用：设置->服务器设置->常规设置
* 通过Splunk CLI命令：
  * splunk enable web-ssl // enable
  * splunk disable web-ssl // disable
* 需要重启
* 重启后的URL变更为[new link](https://192.168.1.113:8000)

### (important) 修改默认索引位置

* 默认索引目录为：/opt/splunk/var/lib/splunk/
* 可以通过配置文件进行修改（例如：修改为/foo/splunk）
  * mkdir /foo/splunk (非root用户请更改目录所有者chown)
  * splunk stop
  * cp -rp /opt/splunk/var/lib/splunk/* /foo/splunk
  * vi /opt/splunk/etc/splunk-launch.conf
  * SPLUNK_DB=/foo/splunk
  * splunk start

* Jedi: 在Windows上这个选项是否生效还要做个实验. 15:46
* Jedi: 默认的Windows索引在这个目录下：C:\Program Files\Splunk\var\lib\splunk

### 创建索引

* 索引：被索引的数据存储在索引（index）中，类似于database。
* 设置 -> 索引
* 默认索引：main
* 在Splunk Web中创建/删除索引
* 通过Splunk CLI创建/删除索引
  * splunk add index myindex1
  * splunk remove index myindex1
* other: splunk list index

### 配置接收端口

* splunk enterprise与universal forwarder之间的接收端口，默认为TCP 9997
* 设置 -> 转发和接收 -> 配置接收, 新增9997
* 通过Splunk CLI命令
  * splunk enable listen 9997
* 无需重启splunk

### 授权（许可证）设置

* 轻量级的转发许可证不需要授权
* 使用情况报表也在设置页中

## Splunk培训系列01-Splunk目录结构

```app
splunk_home
  * bin (executables)
  * etc (license, config)
    * system
    * apps
      * search
      * launcher
      * <custome app>
    * users
  * var
    * lib
      * splunk
        * indexes
```

* Jedi: splunk_home目录下还有share,lib
  * lib里在windows上有两个目录(cmake,node_modules)
    * cmake里是C/C++连接mongodb的库文件
    * node_modules说明splunk enterprise前端是用node写的
  * share里也都是一个库
    * iso3166.csv 存的国别对应表
    * GeoLite2-City.mmdb是IP地址库
    * splunk子目录里面都是node模块，应该是根据所有Splunk都共有的前端js库

* bin
  * 强调了里面有python的脚本
  * btool, bloom(这些都是什么鬼)
* etc
  * apps -> splunk app的部署目录
  * deployment-apps -> 很多转发器需要管理，就可以通过这个目录 (批量推送至转发器)
  * system: 存储splunk的基本配置项
    * cat web.conf // 检查是否启用SSL

* Jedi: splunk app看起来就都是nodejs编写的
* Jedi: splunk app配置后在该app的目录下就会建立起一个local目录，用来存在配置值

* splunk的内部索引都不记录到license费用中
