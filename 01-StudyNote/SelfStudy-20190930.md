# Self Study

Author: Jedi Chou, Create at 2019.9.30 8:10 AM

* Daily study
  * Check-in
    -[x] Read articles and check interview invitation (MaiMai APP). 8:18
    -[x] 101WeiQi daily exercise check-in. 8:20
    -[x] NowCoder check-in and do an exercise that contains 20 puzzles. 8:30
    -[x] Don't memorize words APP check-in. 8:20
    -[x] 163 music APP check-in. 8:21
    -[x] Tencent cartoon APP check-in. 8:23
    -[x] Exercise of Vocabulary (vocabulary.com). 8:35
    -[x] Open class APP by 163.com check-in. 8:42

  * Micro habit
    -[x] Reading 1 minutes at SIMPLE Wiki. 8:46
    -[x] Read Sina Blog. 8:58

  * Reading
    -[x] Feedly RSS reader. 9:23
    -[x] 163.com mail. 9:54

* Weekly review
  -[x] Read a thesis and don't record. 9:41

## Other

* Words
  * sprinkler: 洒水车
  * attempt: 尝试
  * interstice: 空隙
* BitLocker有API调用吗？

* 在WSL中安装Apache/PHP/MySQL

```shell

# 安装apache2
1917  sudo apt-get install apache2

# 启动apach2的两种方式, 安装后要记得更新
1920  sudo service apache2 start
1927  sudo /etc/init.d/apache2 start
1994  sudo apt-get update
1995  sudo apt-get upgrade

# 安装mysql的服务器和客户端
1996  sudo apt-get install mysql-server mysql-client
2001  sudo service mysql start
2002  sudo mysql -u root

# 安装php，并查看php的版本
2003  sudo apt-get install php
2005  php -version

# 安装php的扩展模块, 安装后进行更新
2006  sudo apt-get install libapache2-mod-php
2007  sudo apt-get install php-mysql
2008  sudo apt-get install php-gd
2009  sudo apt-get install php-json
2010  sudo apt-get install php-curl
2011  sudo apt-get install php-xml
2012  sudo apt-get install php-int1
2015  sudo apt-get update

# 安装phpmyadmin, 这个并不成功（需另外查找原因）
# 问题: phpmyadmin可安装，也配置成功。但Apache启动后无法使用，连目录也找不到。
2016  sudo apt-get install -y phpmyadmin

```

* 在WSL中安装Apache/PHP/MySQL（补疑：发现Win10上有80端口怎样都无法关闭，原因不明）
  * IIS进程已排查
  * 明确原因由SQL Server 2008的报表服务引起
  * SQL Server 2008服务（服务名称: ReportServer$JEDILOCALSQL）
  * 显示名称: SQL Server Reporting Services (JEDILOCALSQL)
  * 描述: Manages, executes, renders, schedules and delivers reports.
