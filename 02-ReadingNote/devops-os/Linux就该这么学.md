# Linux就该这么学

## 1.3 安装您的Linux系统

* 据进勇将企业版RH要注册后才可以更新. 2019.11.8 10:01 AM
* 默认安装类型
  * Minimal Install
  * Infrastructure Server
  * File and Print Server
  * Basic Web Server
  * Virtualization Host
  * Server with GUI
* 为什么在安装的时候就设置hostname呢？ 2019.11.8 10:40 AM
* kdump服务是什么？ 2019.11.8 10:43 AM
  * 文中解释：kdump可以在OS发生crash时获取某些信息，以利于后续优化. 2019.11.8 10:44

## 1.4 重置root管理员密码

* 获取RHEL7的版本号. 2019.11.8 10:49

```shell
# cat /etc/redhat-release
```

* 找回密码这段有点没看到，后面一定要做下实验，步骤也要做好详细记录. 2019.11.8 10:50 AM
  * Lab: 恢复用户密码

## 1.5 RPM（红帽软件包管理器）

* RPM包的历史来源，避免复杂的编译，简化校验、安装、卸载、查询、升级。 2019.11.8 10:52 AM
* RPM有点像Windows系统中的控制面板. 2019.11.8 10:52 AM

* 表1-1 常用的RPM软件包命令. 2019.11.8 10:56 AM
  * Jedi: 仅做记录不画表格至markdown文件上
  * 安装软件：rpm -ivh filename.rpm
  * 升级软件：rpm -Uvh filename.rpm
  * 卸载软件: rpm -e filename.rpm
    * Jedi: 这个有问题吧！ 安装过后的文件还会以rpm文件的形式存在吗？ 2019.11.8 11:19 AM
  * 查询软件描述信息：rpm -qpi filename.rpm
  * 列出软件文件信息：rpm -qpl filename.rpm
    * Jedi: qpi - query package information
  * Jedi: qpl - query package and get list
  * 查询文件属于哪个RPM：rpm -qf filename

## 1.6 Yum软件仓库

* Jedi: RPM报和操作系统版本是否有关？ 2019.11.8 11:23 AM
* 表1-2 常见的Yum命令. 2019.11.8 11:23 AM
  * 列出所有仓库: yum repolist all
  * 列出仓库中所有软件包: yum list all
  * 查看软件包信息: yum info package-name
  * 安装软件包: yum install package-name
  * 重新安装软件包: yum reinstall package-name
  * 升级软件报: yum update package-name
  * 移除软件包: yum remove package-name
  * 清除所有仓库缓存: yum clean all
  * 检查可更新的包: yum check-update
  * 查看系统中已经安装的软件包组: yum grouplist
  * 安装指定的软件包组: yum groupinstall package-group-name
  * 删除指定的软件包组: yum groupremove package-group-name
  * 查看指定软件包组信息: yum groupinfo package-group-name

## 1.7 systemd初始化进程

* 无论怎样，RHEL7系统选择 systemd初始化进程服务已经是一个既定事实，因此也没有了“运行级别”这个概念. 2019.11.8 15:01 PM
* Jedi: 用RH不多，所有有点看不懂. 2019.11.8 15:01
* 表1-3：systemd与System V init的区别
  * System V init运行级别
    * 0, 关机
  * 1, 单用户模式
  * 2, 等同于级别3
  * 3，多用户的文本界面
  * 4, 等同于级别3
  * 5, 多用户的图形界面
  * 6, 重启
  * emergency, 紧急shell
  * systemd目标名称
    * runlevel0.target, poweroff.target, 关机
  * runlevel1.target, rescue.target,单用户模式
  * 2, 等同于级别3
  * 3，多用户的文本界面
  * 4, 等同于级别3
  * 5, 多用户的图形界面
  * 6, 重启
  * emergency, 紧急shell
