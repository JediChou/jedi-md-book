# Elasticsearch: 权威指南

## 序言

* Clint是第一个将ElasticSearch 0.4投入生产环境的用户.
* Zach写了很多关于ElasticSearch的博客，而且愿意自掏腰包来培训.
* Zach还编写一个PHP客户端
* Shay Banon
* Jedi: 本书是基于ElasticSearch 2.0编写的

## 前言

* Elasticsearch 是一个分布式、可扩展、实时的搜索与数据分析引擎。
* 无论你是需要全文搜索，还是结构化数据的实时统计，或者两者结合
* 还将介绍结构化搜索、数据分析、复杂的人类语言处理、地理位置和对象间关联关系等
* 充分利用 Elasticsearch 的水平伸缩性，应当如何建立数据模型
* 以及在生产环境中如何配置和监控你的集群

### 谁应该读这本书

* 但有用过SQL和关系数据库会更佳

### 为什么我们要写这本书

* 因为Elasticsearch需要更好的阐述
* 它的目的是写一本即便是什么都不懂的初学者（不管是对于搜索还是对于分布式系统）也能拿起它简单看完几章，就能开始搭建一个原型。

### Elasticsearch版本

* 本书的初始印刷版针对的是 Elasticsearch 1.4.0
* 本书的线上版本 针对的是 Elasticsearch 2.x
* Jedi: 我看的是针对2.x的；
* Jedi: 我阅读时ElasticSearch的版本已经到了7，不过在社区似乎6比较流行
* Jedi: 所有的中间版本最好搞个列表出来

### 如何读这本书

* Jedi: 强调“深入学习，并理解其中逻辑”
* 集群内的原理、分布式文档存储、执行分布式检索和分片内部原理

### 本书导航

### 在线资源

* [英文社区](https://discuss.elastic.co/c/elasticsearch/)
* [中文社区](http://elasticsearch.cn/)

### 本书协议约定

### 使用代码示例

### 鸣谢

## 基础入门

* Case: Wikipedia使用Elasticsearch提供带有高亮片段的全文搜索，还有search-as-you-type和did-you-mean的建议。
* Case: 卫报使用Elasticsearch将网络社交数据结合到访客日志中，为它的编辑们提供公众对于新文章的实时反馈。
* Case: Stack Overflow将地理位置查询融入全文检索中去，并且使用more-like-this接口去查找相关的问题和回答。
* Case: GitHub使用Elasticsearch对1300亿行代码进行查询。
* Jedi: 支持PB级数据
* 革命性的成果在于将这些单独的，有用的组件融合到一个单一的、一致的、实时的应用中。

### 你知道的, 为了搜索…

* 精确的形容ElasticSearch
  * 一个分布式的实时文档存储，每个字段 可以被索引与搜索
  * 一个分布式实时分析搜索引擎
  * 能胜任上百个服务节点的扩展，并支持 PB 级别的结构化或者非结构化数据

* Elasticsearch开源协议为Apache 2 license

#### 安装并运行ElasticSearch
