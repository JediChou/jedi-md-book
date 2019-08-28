# 千锋Java：ElasticSearch6入门教程

## 千锋Java教程：1.ElasticSearch概述

* Index -> Table
* Type
* Document
* Mapping
* RESTful

## 千锋Java教程：2.Restfull风格和Curl命令

* RESTful APP
  * GET/POST/PUT/DELETE
  * 在浏览器中输入这个[链接](http://www.weather.com.cn/data/sk/101010100.html)
  
* CURL
  * Demo: curl www.baidu.com, 访问一个网页
  * Demo: curl -o tt.html www.baidu.com, 网页保存到网页中
  * Demo: curl -i www.baidu.com, 显示响应的头信息
  * Demo: curl -v www.baidu.com, 显示一次HTTP请求的通信过程
  * Demo: curl -X GET/POST/PUT/DELETE url, Jedi: 需要另外做实例

## 千锋Java教程：3.CentOS7下安装ElasticSearch6.2.4-1

* Jedi: 视频中的最高版本是6.2.4，目前我学习的版本是7.2.0
* Jedi: [下载地址](https://www.elastic.co/cn/downloads/elasticsearch)

* 安装1: 配置JDK
  * 步骤1：JDK的安装在这个地方讲师是用的拷贝->解压模式（安装包拷贝至/opt然后再解压）
  * 步骤2: 环境变量配置是编辑/etc/profile文件，然后将上述语句贴在文件的最后
  * 步骤3: 用source /etc/profile来令配置文件直接生效
  * 步骤4: 用java --version来验证JDK是否安装成功

```shell
export JAVA_HOME="/opt/jdk1.8.0_144"
export PATH="$JAVA_HOME/bin:$PATH"
export CLASSPATH=".:$JAVA_HOME/lib"
```

* 安装2：安装ElasticSearch 6.2.4
  * 步骤1：cp ./elasticsearch-6.2.4.tar.gz /opt
  * 步骤2：tar -xzvf elasticsearch-6.2.4.tar.gz
  * 步骤3：启动 cd bin；elasticsearch
  
* 其他
  * ElasticSearch的配置文件是elasticsearch.yml
  * 6.2.4在默认情况下并不允许使用root登录
  * 允许用root用户启动, bin/elasticsearch -Des.insecure.allow.root=true
  * 允许用root用户启动, 也可直接修改配置文件中的启动项
  * 从安全角度考量，最好为ElasticSearch单独创建“用户组”、“用户”，详见以下操作
  
```shell
groupadd eszu
useradd esyonghu -g eszu -p 123456
cd /opt
chown -R esyonghu:eszu elasticsearch-6.2.4
```

## 千锋Java教程：3.CentOS7下安装ElasticSearch6.2.4-2

* 允许ElasticSearch进行远程访问
  * cd config
  * vi elasticsearch.yml
  * 修改network.host: 192.168.0.1
  * 修改http.port:9200
  
* Jedi: 这里会有很多配置问题！需要多看两遍。
* 在windows上会碰到要设置节点名称的问题
  * 修改：network.host: 192.168.0.1
  * 修改http.port:9200
  * 修改cluster.initial_master_nodes: ["node-1"], 使用单个节点

## 千锋Java教程：5.安装ElasticSearch-Head插件

* Jedi: 为什么我超级讨厌nodejs呢？
* Jedi: 为什么ElasticSearch-Head不用Java开发呢？CAO
* Jedi: ElasticSearch6-Head不就是一个nodejs的app吗？并不觉得是插件！因为并没有安装到Plugins目录下。
* Jedi: 这个玩意必须要有替代品

## 千锋Java教程：6.安装Kibana

1. 下载Kibana, [link](https://www.elastic.co/downloads/kibana)
2. 把下载的压缩包拷贝到/soft目录下
3. 解压缩，并把解压后的目录移动到/usr/local/kibana
4. 编辑kibana配置文件，将server.host.elasticsearch.url修改成所在服务器的ip地址
5. 开启5601端口（要注意防火墙）
6. 启动kibana

* Notice: kibana与ElasticSearch的版本要一致
* Jedi: 不推荐在linux的根目录下创建soft目录，不标准
* systemctl start firewallId.service
* firewall-cmd --permanenet --zone=public --add-port=5601 /tcp，开始5601的TCP访问权限
* firewall-cmd -reload，重启防火墙
* /usr/local/kibana/bin/kibana，启动kibana
* systemctl stop firewalld.service, 停止防火墙
* Jedi: 将所的女讲师一直在使用CP大法，我是学生会不爽！
* Kibana自带一个Console，可以用来编写ElasticSearch的各类查询，算是一个开发工具

## 千锋Java教程：7.倒排索引

* 讲解倒排索引
  * 原理和mysql的索引机制类似
  * 用分词（中文、英文有区别）对文档提取不唯一的词组
  * 以上动作得到列表（包括：单词ID/单词/倒排列表）
  * 同时倒排索引还会计算单词的频率（也即出现的次数）
  * TF: 单词频率信息
  * 增加频率得到的列表为（包括：单词ID/单词/倒排列表-DocID;TF）
  * 还能在倒排索引的列表中增加单词出现的位置，如：(1,<11>,1), (2,<7>,1)

## 千锋Java教程：8.倒排索引

* Jedi: 我是可以理解，但不是很深刻
* 使用标准化规则（normalization）
* 建立倒排索引的时候，会对拆分的每个单词进行相应的处理，以替身后面搜索的时候能够搜索到相关联文档的概率
* Jedi: 上面这条规则是否和分词有关？怎么改呢？

## 千锋Java教程：9.分词器介绍及内置分词器

* 分词器：从一串文本中切分出一个一个的词条，并对每个词条进行标准化；
  * character filter: 分词之前的预处理，过滤掉HTML标签，特殊符号转换等
  * tokenizer: 分词
  * token filter: 标准化

* 内置分词
  * standard分词器: (默认的)会将词汇单元转换成小写形式，并去除停用词和标点符号，支持中文采用的方位为单字切分
  * simple分词器：首先会通过非字母字符来分割文本信息，然后将词汇单元统一为小写形式。该分词器会去掉数字类型的字符。
  * whitespace分词器：仅仅是去除空格，对字符没有lowcase化，不支持中文；并且不对生成的词汇单元进行其他的标准化处理。
  * language分词器：特定语言的分词器，不支持中文。

## 其他相关链接

* [ElasticSearch下载地址](https://www.elastic.co/cn/downloads/elasticsearch)
* [ELS相关1](https://blog.csdn.net/wolovexiexiongfei/article/details/83022146)
* [ELS相关2](https://blog.csdn.net/chen_2890/article/details/83757022)

## 相关书籍

* [深入理解Elasticsearch(原书第2版) 中文pdf扫描版[65MB]](https://www.jb51.net/books/652442.html)
* [Elasticsearch大数据搜索引擎 带目录完整版pdf[184MB]](https://www.jb51.net/books/658770.html)
* [从Lucene到Elasticsearch：全文检索实战 高清pdf扫描版[79MB]](https://www.jb51.net/books/647877.html)
* [Elasticsearch集成Hadoop最佳实践 带目录完整pdf[42MB]](https://www.jb51.net/books/622030.html)
* [Elasticsearch技术解析与实战 (朱林) 完整扫描版[147MB]](https://www.jb51.net/books/587224.html)
* [ELK stack权威指南 (饶琛琳著) 完整pdf扫描版[238MB]](https://www.jb51.net/books/557416.html)
* [大数据搜索与日志挖掘及可视化方案(第2版) 带书签目录 pdf版](https://www.jb51.net/books/596572.html)
* [Elasticsearch顶尖高手系列：核心知识篇+高手进阶篇 全套视频教程](https://www.jb51.net/books/587233.html)
* 京东有售：Flume：构建高可用、可扩展的海量日志采集系统
* 京东有售：日志管理与分析权威指南
* 京东有售：Kibana数据可视化
* 京东有售：Flume日志收集与MapReduce模式
* 京东有售：UNIX/Linux网络日志分析与流量监控
* 京东有售：日志管理与分析指南

## Other

* ElasticSearch: Logs, 快速且可扩展的日志管理，绝不会让您失望
* ElasticSearch: Infrastructure, 对您的系统指标进行检测和可视化
* ElasticSearch: APM, 获得有关自己应用程序性能的洞见
* ElasticSearch: Uptime, 监测您的应用和服务遇到的可用性问题并相应采取对策。
* ElasticSearch: Maps, 实时探索位置数据，与研究您的其他 Elasticsearch 数据没什么两样。
* ElasticSearch: SIEM, 快速进行大规模的交互式调查
* ElasticSearch: Site Search, 轻松为您的网站打造卓越的搜索体验
* ElasticSearch: App Search, 搜索文档、地理数据等形形色色的内容。
* ElasticSearch: Enterprise Search, 集中式搜索，应对企业内的数据孤岛情况
