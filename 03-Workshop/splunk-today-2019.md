## Splunk Today 2019-2-16

* 停止或重启w32time服务

1、net stop w32time
2、net start w32time
3、w32tm /resync


* 从命令行同步时间

同步时间批处理命令：

```bat
@echo off
sc config w32time start= auto
net stop w32time
net start w32time
net time \\13.89.46.24 /set /y
```

## SPLUNK Today 2019-3-6

* Splunk产品线今日有新的版本
  * Splunk Enterprise 7.2.4.2
  * Splunk Cloud (需要账号，所以就不记录版本号了)
  * Splunk Light 7.2.4
  * Splunk Free (和Enterprise一致)
    * Jedi: 不知道为啥要单独标识出来，毛病！

* Splunk的索引在disable时无法删除
  * OS: Windows
  * Version: Splunk 7.2.3 (build 06d57c595b80)
  * 以下示例
  
  ```shell
  > splunk disable index localupdateindex
  Index "localupdateindex" has been disabled.
  
  > splunk remove index localupdateindex
  index=localupdateindex is disabled.  Unable to remove disabled indexes.
  
  > splunk enable index localupdateindex
  Index "localupdateindex" has been enabled.
  
  > splunk remove index localupdateindex
  Index "localupdateindex" is being deleted.
  ```

* SPLUNK删除监控
  * OS: Windows
  * Version: Splunk 7.2.3 (build 06d57c595b80)
  * 以下示例
  
  ```shell
  C:\Program Files\Splunk>splunk remove monitor c:\windows\windowsupdate.log
  Removed monitor of 'c:\windows\windowsupdate.log'
  ```

* Splunk培训系列01-10-实战-使用转发器转发数据
* Splunk培训系列01-11-实战-数据分析和可视化
  * Jedi: 先初略浏览一遍
  * Jedi: 1.75x
  * Jedi: Splunk如何从数据库的表中建立监控、索引？
  * Jedi: 或者说是从ODBC连接中建立监控、索引？
  