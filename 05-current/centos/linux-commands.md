# Linux commands

* unset?

## 2020.9.23

* 在Ubuntu上列举所有的服务: service --status-all
* 在Ubuntu上列举所有未启动的服务: service --status-all | grep '\[ - \]'
* 在Ubuntu上列举所有已启动的服务: service --status-all | grep '\[ + \]'

* $ sudo apt-get autoclean --dry-run
* 查看apt的cache目录

```bash
$ apt-config dump | grep "^Dir\( \|::Ca\)"
Dir "/";
Dir::Cache "var/cache/apt";
Dir::Cache::archives "archives/";
Dir::Cache::srcpkgcache "srcpkgcache.bin";
Dir::Cache::pkgcache "pkgcache.bin";
```

* 搜索mysql的ubuntu安装包

```bash
sudo apt search mysql-server
```

* how to uninstall mysql in ubuntu

```bash

Source: https://linuxx.info/how-to-uninstall-mysql-in-ubuntu/
```

* the issue message during install mysql at wsl ubuntu 18.04

```output
$ sudo apt install mysql-server-5.7
Reading package lists... Done
Building dependency tree
Reading state information... Done
Some packages could not be installed. This may mean that you have
requested an impossible situation or if you are using the unstable
distribution that some required packages have not yet been created
or been moved out of Incoming.
The following information may help to resolve the situation:

The following packages have unmet dependencies:
 mysql-server-5.7 : PreDepends: mysql-common (>= 5.5) but it is not installable
                    Depends: mysql-client-5.7 (>= 5.7.31-0ubuntu0.18.04.1) but it is not going to be installed
                    Depends: mysql-common (>= 5.8+1.0.4~) but it is not installable
                    Depends: libevent-core-2.1-6 (>= 2.1.8-stable) but it is not installable
                    Recommends: libhtml-template-perl but it is not installable
E: Unable to correct problems, you have held broken packages.
```
