# Zabbix Study & Implement Notes

* Author: Jedi Chou
* Date: 2016-6-22 14:16

## Book: Zabbix从入门到精通

## 第1章: 简介

* Alexei Vladishev create it
* Zabbix SIA (what is it?)
* It support polling and trapping
* Feature
  * Colleciton
    * usable and performance check
    * support snmp, ipmi, jmx
    * custome monitor
    * custome collection time
    * server/proxy/agents
  * support zabbix trigger
  * advanced
    * escalation
    * macro
    * remote automation
  * graphic
  * user can extended graphic
    * multi-monitor
    * network maps
    * user customer screen and slide shows
    * report
    * high level source monitor
  * history
    * save info to database
    * history support configure
    * support gabage clear
  * easy config
    * add target at dashboard
    * support template
  * template
    * add monitor group
    * create template from a exist template
  * quick web interface
    * php
    * log adult
  * zabbix api
    * zabbix api
  * privilege system
    * privilege verify
    * acl
  * full feature, agent easy to extended
    * deploy to target
    * support linux and windows
  * 守护进程
    * develope by C
    * 易移植
  * suit for complex enviorment

* zabbix process
  * zabbix_agentd, 客户端守护进程收集客户端数据
  * zabbix_get, 单独使用，通常在server或proxy端执行获取远程客户端信息的命令
  * zabbix_sender, 用于将数据传给server或proxy
  * zabbix_server, 服务器端守护进程
  * zabbix_proxy, 代理守护进程
  * zabbix_java_gateway, Java网管，类似agentd
  
## 第2章: Installation

* os: linux, aix, freebsd, netbsd, openbsd, hp-ux, mac os x, solaris
* db: mysql 5.0.3, oracle 10g, postgresql 8.1, sqlite 3.3.5, ibm db2 9.7
* web: apache 1.3.12, php 5.3.0
* php extended package
  * gd, bcmath, ctype, libXML(2.6.15), xmlreader, Xmlwriter
  * Session, sockets, mbstring, gettext, ibm_db2, mysqli
  * oci8, pgsq
* special (OpenIPMI, libssh2, fping, libcurl, libiksemel, net-snmp)
* java gateway special package
  * logback-core-0.9.27.jar
  * logback-classic-0.9.27.jar
  * slf4j-api-1.6.1.jar
  * android-json-4.3_r3.1.jar
* time sync
  * use crontab -l，定时同步
* Zabbix数据库硬盘容量计算
  * Jedi: 这个例子比较实际
  * 每秒处理的数据量
  * 历史记录保存时间
  * 趋势数据保存时间
  * 事件记录保存时间
  * 数据库空间计算公式
    * zabbix配置: 固定大小，一般小于10MB
    * 历史数据: 天数*(监控项总数/刷新频率)*24小时*3600秒*50字节
    * 趋势数据: 天数*(监控项总数/3600)*24小时*3600秒*128字节
    * 事件数据: 天数*事件个数(大概值)*24小时*3600秒*130字节

* Installation
  * nginx安装
  * php安装+nginx配置
  * mysql安装
  * php parameter configuration:
    * bcmath: --enable-bcmath
    * mbstring: --enable-mbstring
    * sockets: --enable-sockets
    * gd: --with-gd
    * libxml: --with-libxml-dir=/usr/local
    * xmlwriter: --with-xmlwriter-dir=/usr/local
  * php.ini
    * max_execution_time = 300
    * memory_limit = 128M
    * post_max_size = 16M
    * upload_max_filesize = 2M
    * max_input_time = 300
    * date.timezone PRC

  * create user for zabbix
    * groupadd zabbix
    * useradd -g zabbix zabbix

  * init db

    ```shell
    # mysql -uroot -pttlsapwd
    mysql create database zabbix default charset utf8;
    mysql quit;
    # mysql -uroot -pttlsapwd  database/mysql/schema.sql
    # mysql -uroot -pttlsapwd  database/msyql/images.sql
    # mysql -uroot -pttlsapwd  database/mysql/data.sql
    ```

* configure zabbix

  ```shell
  mkdir /etc/zabbix
  cp config/zabbix_server.conf /etc/zabbix/
  vim /etc/zabbix/zabbix_server.conf
  DBName=zabbix
  DBUser=root
  DBPassword=ttllsapwd
  DBPort=3306
  ```

* starup zabbix server

  ```shell
  /usr/local/zabbix-2.2.2/sbin/zabbix_server
  ```

* download client
  * [zabbix download](http://www.zabbix.com/download.php)
  * Jedi: 不推荐源码安装
  
* client configure

```shell
vim /usr/local/zabbix-2.2.2etc/zabbix_agentd.conf
Server=127.0.0.1
ServerActive=127.0.0.1
Hostname=Zabbix server
```

* startup zabbix client

```shell
/usr/local/zabbix-2.2.2/sbin/zabbix_agentd
```

* zabbix web configure - copy web file

```shell
mkdir /data/logs/nginx
mkdir /data/site/monitor.ttlsa.com/zabbix
cp -rp frontends/php/* /data/site/monitor.ttlsa.com/zabbix
```

* zabbix web configure - config virtual host

```shell
vim /usr/local/nginx-1.5.8/conf/vhost/monitor.ttlsa.com.conf
server {
    listen 80;
    server_name monitor.ttlsa.com;
    access_log /data/logs/nginx/monitor.ttlsa.com.access.log main;

    index index.html index.php index.html;
    root /data/site/monitor.ttlsa.com;

    location /
    {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ ^(.+.php)(.*)$ {
        fastcgi_split_path_info ^(.+.php)(.*)$;
        include fastcgi.conf;
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        fastcgi_param PATH_INFO $fastcgi_path_info;
    }
}
```

* online configure zabbix
  * open [link](http://monitor.ttlsa.com/zabbix)
  * step 1, welcome page
  * step 2, check php precondition
  * step 3, check mysql configuration
  * step 4, check zabbix server detail info
  * step 5, install description review
  * step 6, check php mysql write privilege for zabbix database
  * step 7, login into zabbix web management
  
* upgrade zabbix
  * step 1, close zabbix server
  * step 2.1, backup mysql databases
  * step 2.2, backup zabbix config files (/etc/zabbix, php, zabbix binary)
  * step 3.1, install zabbix server (upgrade your server & client)
  * step 3.2, check content of zabbix config file
  * step 4, starup zabbix components
  * step 5, deploye zabbix php codes
  
## 第3章 快速上手

* zabbix中文语言
  * 默认登录界面-profile-user-language-chinese(zh-cn)

* zabbix中文乱码
  * 上传simkai.ttf(楷体)文件到zabbix web程序的fonts目录下
  * modify zabbix php configure file

  ```shell
  # cd /data/site/www.ttlsa.com/zabbix/
  # sed -i 's/DejaVuSans/simkai/g' ./include/defines.inc.php
  ```

* zabbix监控第一台服务器
  * step 1, 安装zabbix客户端
  * step 2, zabbix监控服务器
  * step 2.1, 创建主机
    * configuration-Hosts-Create host
  * step 2.2 template os linux
  * step 2.3 view host list
  
* 查看监控数据
  * step 3.1 最新数据
  * step 3.2 图表数据
  
* zabbix用户管理
  * 登陆zabbix
  * 组介绍（zabbix administrator, 超级管理员组）

* 用户信息
  * 创建用户
  * 填写用户基本信息
  * 选择组

* 媒介信息 (Jedi:不懂)
  * 添加媒介
  * 录入邮箱信息

* 权限配置
  * 权限信息
  * 添加完成
  * 新用户登录
  
## 第4章 zabbix配置

* zabbix主机与组配置
  * 1.1 创建主机, configuration-hosts-create host
  * 1.2 克隆/完全克隆主机, configuration-hosts-server-clone/full clone
  * 2.0 主机参数
    * host name
    * visible name
    * groups
    * new host group
    * interfaces
    * monitored by proxy
    * status
  * 3.0 主机模板
    * unlink/unlink and clear
  * 4.0 主机组
    * 4.1 添加组名
    * 4.2 建组参数 (group name/hosts)

* zabbix资产清单inventory管理
  * 配置资产清单
    * 手动模式
    * 自动模式
  * 资产基本信息
  * 资产详细信息
  * 基本信息介绍
    * host name
    * visble name
    * host(agent, snmp, jmx, ipmi) interface
    * os
    * hardware
    * software
    * latest data
    * configuration
  * 清单变量

* zabbix监控项item
  * item构成 key+参数
  * zabbix创建监控项
    * configuration-hosts-items-create item
    * item property
      * host
      * name
      * type
      * key
      * host interface
      * type of information
      * data type
      * units
      * user custom multiplier
      * update interval (in sec)
      * flexible intervals
      * keep history(in days)
      * keep trends(in days)
      * store value
      * show value
      * log time format
      * new application
      * applications
      * populates host inventory field
      * description
      * enabled
    * 不可用的item
  * zabbix item detail
    * 灵活的参数, vfs.fs.size[/], vfs.fs.size[/opt]
    * key格式,  key [parameters]
    * key name, 0-9a-zA-Z
    * key parameters
      * quoted string, unquoted string, array
  * zabbix item types
    * item types (zabbix agent, simple checks, snmp, zabbix interal, ipmi, jmx monitoring)
    * notice of item types
  * all keys of zabbix agen
    * agent.hostname
    * agent.ping
    * agent.version
    * kernel.maxfiles
    * kernel.maxproc
    * log[file, regexp,encoding,maxlines,mode,output]
    * logrt[file_pattern, regexp,encoding,maxlines,mode,output]
    * net.dns[ip,zone,type,timeout,count]
    * net.dns.record[ip,zone,type,timeout,count]
    * net.if.collisions[if]
    * net.if.discovery
    * net.if.in[if,mode]
    * net.if.out[if,mode]
    * net.if.total[if,mode]
    * net.tcp.listen[port]
    * net.tcp.port[ip,port]
    * net.tcp.service[service,ip,port]
    * net.tcp.service.perf[service,ip,port]
    * net.upd.listen[port]
    * proc.mem[name,user,mode,cmdline]
    * proc.num[name,user,state,cmdline]
    * sensor[device,sensor,mode]
    * system.boottime
    * system.cpu.intr
    * system.cpu.load[cpu,mode]
    * system.cpu.num[type]
    * system.cpu.switches
    * system.cpu.util[cpu,type,mode]
    * system.hostname[type]
    * system.hw.chassis[info]
    * system.hw.cpu[cpu,info]
    * system.hw.devices[type]
    * system.hw.macaddr[interface,format]
    * system.localtime[type]
    * system.run[command,mode]
    * system.stat[resource,type]
    * system.sw.arch
    * system.sw.os[info]
    * system.sw.packages[package,manager,format]
    * system.swap.in[device,type]
    * system.swap.out[device,type]
    * system.swap.size[device,type]
    * system.uname
    * system.users.num
    * vfs.dev.read[device,type,mode]
    * vfs.dev.write[device,type,mode]
    * vfs.file.cksum[file]
    * vfs.file.contents[file,encoding]
    * vfs.file.exists[file]
    * vfs.file.md5sum[file]
    * vfs.file.regexp[file,regexp,encoding,start line,end line,output]
    * vfs.file.regmatch[file,regexp,encoding,start line,end line]
    * vfs.file.size[file]
    * vfs.fs.discovery
    * vfs.fs.inode[fs,mode]
    * vfs.fs.size[fs,mode]
    * vm.memory.size[mode]
    * web.page.get[host,path,port]
    * web.page.perf[host,path,port]
    * web.page.regexp[host,path,port,regexp,length,output]
    * vfs.file.time[file,mode]

* zabbix external checks 外部命令检测
  * script: shell脚本或者二进制文件名
  * parameters(s): 可选的命令参数
  * notice: 不要过度使用外部检测，会严重降低zabbix性能
  * sample: check_oracle.sh "-h host IP address"
  * sample: check_oracle.sh["h","{HOST.CONN}"]
  * sample: check_oracle.sh "-h" "192.168.1.4"
  
* zabbix simple checks
  * 客户端无需安装agent
  * sample simple checks:

    ```config
    net.tcp.service[ftp,,155]
    net.tcp.service[http]
    net.tcp.service.perf[http,,8080]
    ```

  * Basic check
    * icmpping[target,packets,interval,size,timeout]
    * icmppingloss[target,packets,interval,size,timeout]
    * icmppingsec[target,packets,interval,size,timeout,mode]
    * net.tcp.service[service,ip,port]
    * net.tcp.service.perf[service,ip,port]
  * icmp pings

* zabbix odbc monitor
  * install(redhat/fedora/centos), yum -y install unixODBC unixODBC-devel
  * install(suse), zypper in unixODBC-devel
  * install unixODBC driver, yum install mysql-connector-odbc
  * install unixODBC driver, zypper in MyODBC-unixODBC
  * config unixODBC (odbcinst.ini, odbc.ini)
  * config unixODBC

    ```shell
    # vi /etc/odbcinst.ini
    [mysql]
    Description = ODBC for MySQL
    Driver      = /usr/lib/libmyodbc5.so
    ```

    ```shell
    # odbc.ini
    Description = MySQL test database
    Driver      = mysql
    Server      = 127.0.0.1
    User        = root
    Password    =
    Port        = 3306
    Database    = zabbix
    ```

  * Check connect

    ```shell
    isql test
    ```

  * 编译支持ODBC的zabbix
    * --with-unixodbc[=ARG] use odbc driver against unixODBC package
  * 配置监控项
    * Type, Key, unique_description, data_source_name, User name
    * Password, SQL query, Type of information
  * notice
    * 查询语句执行时间不能超过配置的超时时间
    * 查询只允许返回一个值
    * 如果查询语句返回了多个列，它只去读第一列
    * 如果查询语句返回了多行，它只读取第一条
    * SQL语句必须是select开头, 只能是查询语句
    * SQL语句不能包含换行符
  * error message
  
* zabbix history trends历史与趋势数据详解
  * 保留历史数据
    * 监控项(item)配置里
    * 匹配更新监控项(item)
    * 设置Housekeeper tasks
  * 保留趋势数据
    * 监控配置表单
    * 批量更新监控项
    * 设置Housekeeper tasks

* zabbix自定义用户key与参数User parameters
  * 为什么要自定义KEY
  Page 103

## Book: Zabbix使用手册

## Book: Zabbix企业级分布式监控系统

## Book: Zabbix Network Monitoring Essentials

## Book: Zabbix 1.8 Network Monitoring
