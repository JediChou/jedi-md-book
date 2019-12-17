# OpenStack部署实践-Ch01 - 阅读笔记

* 作者：张子凡
* 出版社：人民邮电出版社
* ISBN：978-7-115-34679-7

## 第1章 OpenStack基本操作系统环境的PXE自动部署

* Page 1， “我们重点阐述CentOS以及Ubuntu操作系统的自动化部署问题”
  * Jedi: 显然实验环境要么CentOS，要么Ubuntu。别费脑子搞其他的！

* Page 1，“而是尝试多点部署OpenStack组件，就需要将MySQL、RabbitMQ、nova-api、Keystone、Galance等分别安装到不同的虚拟机中”
  * Jedi: 对开发来讲这些组件有些也不常见
  * Jedi: 硬件资源是充足的

* Page 1，“一个好的思路是在CentOS上创建多个Ubuntu虚拟机来运行OpenStack的多个控制服务，而计算节点则直接采用Ubuntu，因为计算节点是由OpenStack系统直接控制的，并不需要我们通过命令行来创建虚拟机。”
  * Jedi: 显然各节点的操作系统能实现混搭
  * Jedi: 计算节点比较特殊，受OpenStack系统直接管控

### 1.1 PXE、kickstart与preseed简介

* Jedi: PXE是远程启动技术，在无盘工作站上面基本都用这个

#### 1.1.1 PXE简介

* Page 2, PXE原理
  * 网卡启动时会发出DHCP请求，从PXE服务器端获得动态IP地址等
  * 自动下载一个用于引导操作系统的启动软件包到本地内存
  * 通过该软件加载操作系统启动文件，从而开始操作系统的安装工作
  * Jedi: 完全引用书中内容

### 1.2 PXE服务器的准备
  
#### 1.2.1 kickstart与preseed简介

* Page 2, “kickstart是Red Hat公司针对自动安装Red Hat、Fedora与CentOS这3种同一体系的操作系统而制定的问答规范。”
  * Jedi: [Ref1](https://www.centos.org/docs/5/html/Installation_Guide-en-US/ch-kickstart2.html)

* Page 2, “preseed则是Debian/Ubuntu操作系统自动安装的问答规范，同样可以预定义Ubuntu如何安装，其配置更多通过手动处理”
  * Jedi: 如果自动化程度很低，这个就不太适用了
  
#### 1.2.2 Ubuntu操作系统的基本安装与更新

* 步骤1：设置服务器IP地址
* 步骤2：安装SSH Server
* 步骤3：更新Ubuntu的源
* 步骤4：更新系统与确认签验
* 步骤5：安装与配置DHCP、TFTP服务
* 步骤6：HTTP服务器的作用与安装
* 步骤7：kickstart与preseed配置文件的生成

### 1.3 复制Ubuntu和CentOS操作系统文件

#### 1.3.1 复制Ubuntu操作系统全目录、内核与启动镜像文件

* Page 6 to 7
  * Jedi: 这个过程很不熟悉！要依赖进勇来研读下～
  
#### 1.3.2 复制CentOS操作系统全目录、内核与启动镜像文件

* Page 7
  * Jedi: 现在看来就是在制作远程启动的文件

### 1.4 PXE客户端操作系统的选择与引导过程

#### 1.4.1 创建PXE客户端导示文件

* Page 7 to 8
  * Jedi: 算是一个应答文件，后续可以自定义
  * Jedi: 这个应答文件如何显示中文
  
#### 1.4.2 选择安装配置文件

* Page 8 to 9
  * Jedi: 代码段1、2、3都要注意一下
  * Jedi: 这些内容有些匪夷所思，不知道哪里有只能或规范
  * Jedi: 要制作这个不容易
  
### 1.5 CentOS宿主机的kickstart配置文件

* Page 10, “为了简化虚拟机管理工具，我们要求宿主机的CentOS操作系统要带最小图形化界面且包含了虚拟化运行环境（KVM）与管理工具virt-manager的软件包”
  * Jedi: 在CentOS上KVM看来是必须的

* Page 10
  * Jedi: 执行system-config-kickstart命令可进入图形化配置界面
  * Jedi: 配置后可保存.cfg的定制化安装配置文件
  * Jedi: 一些细节（Page 13）
    * 指定安装操作系统时安装文件的位置
    * 硬盘分区与LVM
    * 首先分出一个可以启动的主分区/boot与swap
    * 将余下的硬盘空间做成一个PV并创建卷组
    * %packages标记的后续行指定需要安装的软件包
    * 安装操作系统时，可提前配置某个文件…
    * 指定GRUB引导程序的安装位置。

### 1.6 OpenStack计算节点的足迹preseed配置文件

* Page 13 to 23
  * Jedi: 鸟人堆配置档骗钱
  * Jedi: 细节与过程
    * Localization
    * Keyboard
    * Network configuration
    * Network console (例子中可自行部分全被注释掉了)
    * Mirror settings
    * Clock and time zone setup
    * Partitioning
    * Configure APT to not install recommended packages by default
    * Account setup
    * Apt setup
    * Package selection
    * Boot loader installation
    * Finishing up the installation
    * X configuration
    * Preseeding other packages
    * Advanced options (书中这段无配置项)
    * Running custom commands during the installation

* 指定客户端使用的PXE网卡：

```bash
d-i netcfg/choose_interface select eth0
```

* 指定客户端的主机名与域名：

```bash
d-i netcfg/get_hostname string nova
d-i netcfg/get_domain string xinlixun.com
```

* 指定Ubuntu安装源时，需要指向国内的搜索软件源而不能直接指向mirrors.163.com，否则会出现在Ubuntu基本软件包（base）安装时找不到内核文件的情况：

```bash
d-i mirror/http/hostname string cn.archive.ubuntu.com
```

* 指定Ubuntu操作系统文件的下载目录，这里指向PXE服务器的/var/www/ubuntu目录：

```bash
d-i mirror/http/directory string /ubuntu
```

* 指定Ubuntu时区与授权中心，这里指向中国的授权中心IP地址（210.72.145.44）：

```bash
d-i time/zone string Asia/Chongqing
d-i clock-setup/ntp-server 210.72.145.44
```

* 用户系统目录加密选项，要注意下面这行代码是正确的，这样才能不用加密

```bash
d-i user-setup/encrypt-home boolean false
```

* 硬盘分区选项，这里采用标准的IVM方式

```bash
d-i partman-auto/method string lvm
```

* 创建用户名及密码选项。

```bash
d-i passwd/root-login boolean false
d-i passwd/user-fullname string Romi Zhang
d-i passwd/username string romi

# Normal user's password, either in clear text
d-i passwd/user-password password mypassword
d-i passwd/user-password-again password mypassword

# 这里使用了明文密码
```

* 选择Ubuntu安装包，这里选择安装标准的包，即standard：

```bash
tasksel tasksel/first multiselect standard
```

* 安装boot loader选项，这里是指GRUB引导程序。

```bash
d-i grub-installer/only_debian boolean true
d-i grub-installer/bootdev stgring (hd0,0) (hd1,0)
```

### 1.7 常见问题与处理

* Notice: No filename or root path specified

### 1.8 小结

### 1.9 参考

* [CentOS kickstart标准只能](http://fedoraproject.org/wiki/Anaconda/Kickstart)
  * Jedi: 有了新版本，有点挠头～

* [使用preseed安装Ubuntu](https://help.ubuntu.com/lts/installation-guide/i386/preseed-using.html)
  * Jedi: 内容也更新了，可[参考](https://help.ubuntu.com/lts/installation-guide/armhf/apbs02.html)

* [Ubuntu 12.04 preseed文件参考](https://help.ubuntu.com/12.04/installation-guide/example-preseed.txt)
