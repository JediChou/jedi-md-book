# Ma Ge Linux Training

* RHCE: RH033, RH133, RH253
* RHCA: RH401, RH423, RH442, RH436, RHS333
  * RH423 (LDAP) 红帽独有的协议
  * RH442 Linux调优
  * RH436 Linux各类集群 
* MySQL, NoSQL
* 岗位：运维工程师, 系统工程师, 系统架构师, DBA
* 方法：灵活应用基础知识（融汇贯通）

## 0201-Linux操作系统及常用命令

* GUI: Graphic User Interface
  * Windows
  * X-Window (x is mean super)
    * Gnome, KDE, XFace

* CLI: Command line interface
  * Shell (sh, bash, csh, ksh, zsh, tcsh)
  
* Operation Architecture
  * Hardware
  * Kernel
  * Library: API
  * Shell

* IDE: Integrate Develope Enviorment
* dll: Dynamaic Link Library
* so: shared object
* The minest linux only 4mb (kernel,shell,so,app).

* Login
  * user name (user id)

* authentication (认证)
  * desc: it is mean check process

* authorization (授权)
  * 认证后做授权
  
* Audition
  * 认证后做授权，而后进行审计
  * linux的审计大部分通过日志来进行

* prompt, 命令提示符
  * 在这个下面必须是命令或脚本

* magic number: 魔数
  * windows理解的二进制与linux不一样
  * #!/bin/bash, shebang
  * shebang is a magic number for linux/unix

* command input
  * syntax: command options.. arguments..
  * 短选项, 长选项

* list: ls
  * 列出指定路径下的文件
  * 目录: 本质是文件, 路径映射
  * 路径: ...
  * 目的: 层次化管理的目的 (可快速追溯文件)
  * 层次化管理的系统称“文件系统”
  * l, 代表长格式
  * 文件类型
    * -: 普通文件 (f)
    * d: 目录文件
    * b: 块设备文件 (block)
    * c: 字条设备文件 (character)
    * l: 符号链接文件 (symbolic link file)
    * p: 命令管道文件 (pipe)
    * s: 套接字文件是你 (socket)

* 目录
  * 根目录, 一级子目录, 二级子目录
  * 在目录树结构中
    * 节点下还有节点, 则该节点是目录
    * 节点下没有节点, 则该节点是文件
  * 相对路径, 绝对路径
  * FHS, Filesystem Hierarchy Standard [可检索百度百科]
  * TODO: 文件名是否为文件的一部分?
  
* ls的位置表示信息
  * ls的第1个位表示的是文件类型
  * 后面9个位代表文件权限，每3位一组(rwx)
    * rwx(能读、能写、能执行)
    * rw-(能读、能写、不能执行)
  * TODO: 文件硬链接的次数
  * TODO: 文件的属主
  * 文件的属组
  * 文件大小 (size, 单位byte)
  * 创建日期
  * 文件名
