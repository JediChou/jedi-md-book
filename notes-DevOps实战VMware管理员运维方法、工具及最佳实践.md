# DevOps实战-VMware管理员运维方法、工具及最佳实践

* 譯者序
  * Vargrant, chef, ansible, razor, docker, microsoft powershell
  * vmware自身提供的持續集成、交付和部署產品(vmware vRealize automation)

* 前言
  * 網絡規模IT組織：Esty, Netflix, Amazon Web Service
  * 本書讀者 vmware sphere, linux administrator

* 關於作者
  * 作者：Trevor Roberts
  * 作者：Josh Atwell
  * 作者：Egle Sigler
  * 作者：Yvo van Doorn
  * 評審：Scott Lowe
  * 評審：Matt Oswalt
  
## 第1章 DevOps簡介

### 1.1 DevOps原則概述

* Gene Kim的《The Phoenix Project》中的三条道路
  * 优化从开发东IT运营的工作流。
  * 缩短和放大反馈循环。
  * 鼓励试验，快速从故障中学习。
* 与John Willis的CAMS概念相符（文化、自动化、计量、共享）。

### 1.2 采用系统思维

#### 1.2.1 改变团队的互动方式

* 第一件应该做的事：成为开发团队的顾问。
* 需求示例
  * 我们需要用于客户源代码的长期数据存储。
  * 我们需要在生产环境中运行独立于客户使用案例的Taao项目实例。
  * 在我们的最后一个发行周期中，代码在我的便携电脑上成功编译和运行，但是在部署到生产环境时崩溃。
* 某组织在最近的PuppetConf上发表讲话，分享其代码部署策略：当代码部署到生产环境时，编写代码的开发人员参与更改窗口期的轮班。这样，如果代码中出现任何复杂现象，他们可以立即协助运营团队查错和解决。坦率地说，这也使开发人员有动力编写更好的代码，避免在凌成3点接到电话去修复缺陷。

#### 1.2.2 改变基础设施部署方法

* 手工制作的“金映像”、雪花服务器、易碎箱。（Jedi：What?）
* 金映像：应该自动化！Solution: Git + Jenkins + CI(Packer Vagrant)
* 雪花服务器：高度定制的物理机或VM。有效的升级或打补丁！需加强迭代构建和测试。
* 易碎箱：每个人都害怕接触它（一台运行关键软件栈的物理机或VM）。利用分布式资源调度器、存储DRS、高可用性等VMWare基础设施可靠性机制。

#### 1.2.3 改变软件开发和部署方法

Jedi: 核心观点是实施CI。

#### 1.2.4 经常收集和响应有用的系统反馈并相应调整

* 系统思维的转变只有在有能力监控和分析系统性能时才能成功。
* 你的团队必须在问题发生之前预测到它们，以维护系统稳定性。
* 日志分析可能是最重要的工具之一。可参考的方案包括：VMWare vRealize Log Insight、Splunk、ELK（Logstash、Elasticsearch、Kibana）。

### 1.3 增进DevOps知识和技能

## 第2章 DevOps工具

本章主題：为成功而组织、服务器部署、配置管理、持续集成、日志分析

### 2.1 为成功而组织：看板

* 看板（Kanban，字面翻译为“标记卡片”）
* “积压工作”（Backlog）
* Jedi：现在的看板系统有很多，要找一个适合自己的却很难。还是根据开源的看板系统来修改比较合适。

### 2.2 服务器部署

* 早期的Ghost（需要Windows的Sysprep）
* 略晚点出现的Red Hat Satellite、PXE
* 现在VMWare发布了Auto Deploy，对vSphere服务器的部署有很大帮助。
* Jedi: 未听过Auto Deploy这个框架（或工具）。
* Red Hat用另一种眼光看待系统部署方法，开发了CloudForms（可与Chef和Puppet集成）。
* Jedi: 谨慎使用Red Hat的东西，不见得适合自己。
* 开源方案：Michael DeHaan的Cobbler。
* 开源方案：Nick Weaver的Razor。
* 其他方案：Crowbar和Foreman。
* Jedi：有重点谈到[Razor](https://puppet.com/blog/introducing-razor-a-next-generation-provisioning-solution/)
* Jedi：并没有查到多少关于Razor的信息，可能因为是和ASP.NET中的Razor重名的缘故。

### 2.3 配置管理

* CM可以解决“金映像”的问题。
* CM技术还可以用于配给与生产服务器配置完全相符的一致开发环境。这可以消除开发和运营团队之间“但是它在我的开发工作站上工作得很好”的争论。
* 特性：动态调整服务器特性、在不同平台上使用相同的指令。
* 本书会介绍Puppet、Chef、PowerShell DSC，你可以描述配给资源的预期状态，而不用担心工作是如何完成的。
* 大规模的解决方案：Ansible、Fabric或MCollective等编排系统大规模实现。

### 2.4 持续集成

* 本书方案：Jenkins + Git + Gerrit
* Jedi：其实还希望知道有没有非Jenkins的方案，毕竟Jenkins没有想象中的那么好用！

### 2.5 日志分析

Jedi：我们将来的定位基本还是ELK。

## 第3章 建立DevvOps配置管理测试环境

章节主题：用AutoLab进行环境配给、用Vagrant进行环境配给、用Packer创建映像、管理源代码、Git源代码控制。

### 3.1 用AutoLab进行环境配给

* AutoLab是Alastair Cooke和Nick Marshall在VMWare社区中其他人的帮助下开发的vSphere测试实验室配给系统。
* AutoLab支持最新版本的vSphere，可以运行包含VSAN支持的虚拟实验室。
* [AutoLab Link](http://www.labguides.com/autolab/)
* AutoLab在Youtube上有相关视频

### 3.2 用Vagrant进行环境配给

* Vagrant是Mitchell Hashimoto创建。
* 它能够帮助你根据模板文件（称作Vagrantfile）中定义的模式快速配置VM。
* [Vagrant Office site link](https://www.vagrantup.com/downloads)
* [Vagrant Github Repo](https://github.com/hashicorp/vagrant)
* [Vagrant Document](https://www.vagrantup.com/docs)
* Jedi：既然开源，那么非常值得考虑！
* Jedi：注意——“本书中的Vagrant示例基于VMWare Fusion插件，但是我们提供的例子作少数修改就可以用于其他虚拟化管理和云平台。如果按照本章中的例子学习，一定要为创建的每个Vagrantfile建立一个新目录”
* “安装Vagrant和VMware Fusion或Workstation插件后，你需要”

### 3.3 用Packer创建映像

* Jedi: 如果是收费软件就不值得不学习～

### 3.4 管理源代码

* SCM, Source code management.
* Git provide
  * [BitBucket](https://bitbucket.org/)
  * [Github](https://github.com/)
  * [Gitorious](https://github.com/gitorious)
* Jedi: 的确vagarent的文件用git管理是最好的.
* [vagrantup Ref](http://docs.vvagrantup.com/v2/)

## 第4章 Puppet简介

* Target
  * Puppet架构
  * Puppet资源
  * Puppet清单
  * Puppet模块

### 4.1 Puppet架构

* Puppet是由Puppet Labs开发的配置管理解决方案
* Puppet有开源版、企业版
* Puppet有两种部署拓扑：独立部署、主机-代理部署

#### 4.1.1 独立部署

* 独立配置中
  * 每台主机单独使用本地安装的Puppet代理软件管理；
  * 清单文件保存在本地，代理将配置管理指令编译为一个指令编目（catalog）
  * 此编目供代理执行
* 默认情形下代理运行于守护进程模式，每30分钟编译和执行编目。
* 如用corn，或MCCollective等编排系统，还可使用其他同步技术（如rsync）。

### 4.1.2 主机-代理部署

* Puppet代理 <-> Puppet主机 <-> Puppet代理
* Puppet主机组件
  * 控制面板（有监控台、在企业版中有）
  * PuppetDB（基于PostgreSQL、持久化保存编目、fact变量和报告、建立单独部署）
  * MCollective编排（通过消息组件进行异步管理、ActiveMQ）
  * 云配给（将工作负载配给到云端管理环境、管理任务、VMWare vSphere配给只能用Puppet企业版实现）

## 4.3 准备Puppet测试实验室

* os
  * puppet host: Ubuntu (12.04 or higher, 4GB RAM)
  * puppet agent 1: Ubuntu (12.04 or higher, 512MB RAM)
  * puppet agent 2: CentOS (6.5 or higher, 512MB RAM)

* Host安装Puppet的企业版（Puppet Master、Console、PuppetDB、Cloud Provisioning）
* Agent1、Agent2只安装Puppet Agent选项

```shell
puppet cert sign --all
```

### 4.3 Puppet资源

```pp
file { 'somefile':
  name => "/usr/local/file.txt",
  ensure => file,
  mode => 600,
  source => "/etc/puppet/files/source.txt",
}
```

* Jedi: 这些内容将来都应该通过python、ruby来自动生成。

### 4.4 Puppet清单

* Puppet不一定按照编写的顺序处理清单。
* 如果要制定优先顺序，应指定资源间的持续次序属性（before、require、notify、subscribe）。
* 程序清单4-1 Apache Web服务器的Puppet清单。

```pp
package { 'apache':
  name => 'httpd',
  ensure => installed,
}

file { 'apacheconf':
  name => '/etc/httpd/conf/httpd.conf',
  ensure => running,
  mode => 600,
  source => '/etc/puppet/files/httpd.conf',
  require => Package['apache'],
}

service { 'apache':
  name => 'httpd',
  ensure => running,
  enable => true,
  subscribe => File['apacheconf'],
}
```

* 扩展名为pp
* 应用命令

```shell
puppet apply filename.pp
```

* 如要观察apply的细节，可使用apply -d选项。
* 程序清单4-2 Apache Web服务器的另一种Puppet清单

```pp
package { 'apache':
  name => 'httpd',
  ensure => installed,
  before => File['apacheconf'],
}

file { 'apacheconf':
  name => '/etc/httpd/conf/httpd.conf',
  ensure => running,
  mode => 600,
  source => '/etc/puppet/files/httpd.conf',
  notify => Service['apache'],
}

service { 'apache':
  name => 'httpd',
  ensure => running,
  enable => true,
}
```

* Jedi: 程序清单4-3更为自然些。
* 程序清单4-3 使用链接箭头编写的Puppet清单

```pp
package { 'apache':
  name => 'httpd',
  ensure => installed,
}
->
file { 'apacheconf':
  name => '/etc/httpd/conf/httpd.conf',
  ensure => file,
  mode => 600,
  source => '/etc/puppet/files/httpd.conf',
}
->
service { 'apache':
  name => 'httpd',
  ensure => 'running',
  enable => true,
}
```

* puppet有条件表达式
* Jedi: 应该就普通的宏替换

```pp
$webserver='httpd'
file { 'apacheconf':
  name => "/etc/$webserver/conf/$webserver.conf",
  ensure => file,
  mode => 600,
  source => "/etc/puppet/files/$webserver.conf",
  require => Package['apache'],
}
```

* 以下演示if和case

```pp
if $operationsystem == 'centos' {
  $webserver = 'httpd'
  $confpath = "/etc/$webserver/conf/$webserver.conf"
}
elsif $operationsystem == 'ubuntu' {
  $webserver = 'apache2'
  $confpath = "/etc/$webserver/$webserver.conf"
}
else {
  fail("Unsupported OS")
}
```

```pp
case $operationsystem {
  centos: {
    $webserver = 'httpd'
    $confpath = "/etc/$webserer/conf/$webserer.conf"
  }
  ubuntu: {
    $webserer = 'apache2'
    $confpath = "/etc/$webserer/$webserver.conf"
  }
  default: {
    fail("Unsupported OS")
  }
}
```

* 程序清单4-4 使用条件语句支持多平台的Puppet清单

```pp
case $operationsystem {
  centos: {
    $webserver = 'httpd'
    $confpath = "/etc/$webserver/conf/$webserver.conf"
  }
  ubuntu: {
    $webserver = 'apache2'
    $confpath = "/etc/$webservver/$webserer.conf"
  }
  default: {
    fail("Unsupported OS")
  }
}

package { 'apache':
  name => $webserver,
  ensure => installed,
}

file { 'apacheconf': 
  name => $confpath,
  ensure => file,
  mode => 600,
  source => "/etc/puppet/files/$webservver.conf",
  require => Package['apache'],
}
```

* Jedi: 程序清单4-4是个比较完整的“配置档”

### 4.5 Puppet模块

* 程序清单4-5 从现有清单创建一个Puppet类
* Jedi: 这就是“会偷懒”的好处

```pp
class apache {
  case $operatingsystem {
    centos: {
      $webserver = 'httpd'
      $confpath = "/etc/$webserver/conf/$webserver.conf"
    }
    ubuntu: {
      $webserver = 'apache2'
      $confpath = "/etc/$webserver/$webserver.conf"
    }
    default: {
      fail("Unsupported OS")
    }
  }

  package { 'apache':
    name => $webserver,
    ensure => installed,
  }

  file { 'apacheconf':
      name => $confpath,
      ensure => file,
      mode => 600,
      source => "/etc/puppet/files/$webserver.conf",
      require => Package['apache'],
  }

  service { 'apache': 
    name => $webserver,
    ensure => running,
    enable => true,
    subscribe => File['apacheconf'],
  }
}
include apache
```

* 严肃地说，将清单更改成一个类所需要做的就是在清单之前加入“类名{"，在最后加入“}”。
* Jedi: 如此这个类就可以随便实例化，便于统一管理。
* 例如，如果想要命令Puppet部署特定的登录页面，可以这样定义类：

```pp
class apache($landingpage = "/etc/puppet/files/index.html") {
  # you manifest code
}
include apache
```

* 模块必须放在modulepath设置指定的位置，用户可以配置这个设置。
* 模块将放置在
  * /etc/puppetlabs/puppet/environments/production/modules
  * /etc/puppetlabs/puppet/modules
  * /opt/puppet/share/puppet/modules
* 开源版本的模块存放位置
  * /etc/puppet/modules
  * /usr/share/puppet/modules
* 显示模块路径

```shell
puppet config print modulepath
```

#### 4.5.1 Puppet Forge

* Puppet forge: Puppet lab的在线共享存储库。
* [Puppet Forge](http://forge.puppetlabs.com)
* 可将Puppet Forge视同为github

#### 4.5.2 创建第一个Puppet模块

* 用命令创建模块目录（类似于项目目录）

```shell
puppet module generate username-modulename
```

* 可编辑目录中的metadata.json来变更相应配置（存储地址等）
* 目录结构

```text
apache
  checksums.json
  files
  Gemfile
  manifests
    init.pp
  metadata.json
  Rakefile
  README.md
  spec
    classes
      init_spec.rb
    spec_helper.rb
  templates
  tests
    init.pp
```

* 重要文件（或组件）的介绍
  * files: 在清单执行期间分发的所有文件必须放置在这个目录下。
  * lib: 如果编写了任何自定义fact变量或类型，将代码放在这个目录下。
  * spec: 这个文件夹包含用于lib文件夹中自定义代码的测试。
  * templates: 如果想要部署运行时信息更改的软件包配置或者内容文件，将它们和一些嵌入Ruby（ERB）代码一起放在这个目录。
  * tests: 这个文件夹包含你想要用来说明模块使用方法的示例。
  * metadata.json: 这个文件包含semver格式的模块版本名称，以及puppet module generate命令提供的其余数据。
