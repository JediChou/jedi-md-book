# Linux指令范例速查手册

## 1.1 basename

* Demo 1: 去掉路径，只显示文件名

```bash
basename /bin/rmdir
```

* Demo 2: 去掉路径和扩展名

```bash
basename /etc/gai.conf .conf
```

## 1.2 cd

## 1.3 chgrp

## 7.3 finger

* Desc: 用户信息查询
* Install: ```apt-get install finger```
* Demo: ```finger bin```

## 7.4 gpassword

* Desc: 管理组文件/etc/group
* Demo 217: 向组中添加新的用户
