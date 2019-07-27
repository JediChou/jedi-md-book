# Splunk Sklls for Foxconn Job

* 重建local上的legal索引
  * 通过命令行停止指定的目录监控. Done
    ```shell
      > splunk remove monitor D:\splunk-language-check
      Removed monitor of 'D:\splunk-language-check'

      > splunk remove monitor D:\splunk-legal
      Removed monitor of 'D:\splunk-legal'
    ```
  * 在local上重建本地的legal索引. Done
  * 确认本地索引能够顺利执行legal索引的检索. Done
  * 通过代码能够顺利执行legal索引的检索. Done
  * 在代码中将索引前缀写到web.config中. TODO
  * 部署到Splunk181上. TODO
  * 在Splunk181上建立legal索引并进行测试. TODO
  * 测试eBigDataInput的txt导入. TODO
  * 测试eBigDataInput的word导入. TODO
  * 测试eBigDataInput的PDF导入. TODO
  * 重设置Splunk181上的legal索引，并进行检索. TODO

* SPL Machine Learning
  * [C# Client](https://www.splunk.com/blog/2014/09/09/new-splunk-tools-for-net-developers.html)
  * [Analyst Reports, E-Books, White Papers and More](https://www.splunk.com/en_us/resources.html#filter/filter3/E-Book)
  * [Splunk ML App](https://splunkbase.splunk.com/app/2890/)
  * [Splunk Hadoop Connector](https://www.splunk.com/en_us/solutions/solution-areas/big-data/splunk-hadoop-connect.html)
  * [Now! About the Machine Learning Toolkit](https://docs.splunk.com/Documentation/MLApp/4.1.0/User/About)
  * [DEV Splunk](http://dev.splunk.com/)
  * Splunk Analytics for Hadoop
  * Splunk Toturial
    * 需收集Splunk相关的论文.
    * 定下2个阶段的需求和计划
  * buttercupgames (error OR fail* OR severe)
  * (error OR fail* OR severe) OR (status=404 OR status=500 OR status=503)
  * sourcetype=access_*
  * sourcetype="www1/secure" (error OR fail* OR severe) OR (status=404 OR status=500 OR status=503)
  * sourcetype=access_* status=200 action=purchase categoryId=simulation
  * dc() function is the distinct_count function.
  * This search uses the count() function to return the total count of the purchases for the VIP shopper.
  * Sub Search：怎么叫“子查询”，SQL的子查询一样吗？
  * sourcetype=access_* status=200 action=purchase | top clientip | table clientip
  * sourcetype=access_* status=200 action=purchase clientip=87.194.216.51 | stats count, dc(productId), values(productId) by clientip

* 解决splunk的管理端口使用HTTP连接的方法
  * 基本原则：禁用SSL
  * 对应配置文件: %splunk%\etc\system\default\server.conf，并设置以下选项
    * enableSplunkdSSL = false
    * useClientSSLCompression = false
    * useSplunkdClientSSLCompression = false
  * 重启splunk服务, > splunk restart
  * 将连接文件中的Schme.HTTPS变更为Scheme.HTTP，重新编译执行即可

* [Music App for Splunk](https://splunkbase.splunk.com/app/4344/)
* [Splunk Machine Learning Toolkit](https://splunkbase.splunk.com/app/2890/#/details)
* [Create a Splunk app](http://dev.splunk.com/view/webframework-developapps/SP-CAAAEUC)
* [graphql-cn](http://graphql.cn)
* [talkingdata](https://www.talkingdata.com/)
  * 国内的一款产品

@朱 这两者是怎么关联起来的？能通过命令行设置吗？
下面这个是 监控日志路径、上面那个是 把日志储存到 splunk\var\lib
C:\Program Files\Splunk\etc\apps\search\local  这个路径下 有个inputs.conf
可以通过命令行  更方便的是 去修改这个inputs

```spl
// result like data table
index="legal" | top source  

// like query
index="legal" employee1="*edi"

// get total number
index="legal" employee1="*edi" | stats count

// get data source host
index="legal" employee1="*edi" | stats count by host

可以用Splunk+Zabbix的方式来实现一个看板.
```

* Splunk可以用来处理域控的某些问题
  * case: 查询哪些账号长期未使用；
  * case: 哪些账号使用最为频繁；
  * case: 哪些主机几乎没有登录过；

* [ElasticSearch compare Splunk](https://db-engines.com/en/system/Elasticsearch%3bSplunk)
