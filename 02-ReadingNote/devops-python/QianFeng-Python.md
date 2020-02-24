# 千锋教育-Python 900集（学完可就业/2019版）

## P11千锋Python教程：05-安装问题总结

* python -m pip install --upgrade pip
* pip list
* Jedi: 这些配置项都可以变更位置
* Jedi: 注意使用virtualenv的使用

## P12千锋Python教程：06-第一个python小程序

* 保存的后缀名为py（hello.py）；
* 执行：python FileName.py；

## P13千锋Python教程：07-介绍命名规则

* 注意中文输入法的符号乱入
* 交互式 vs 源码式
* 命名要注意编码规范

## P14千锋Python教程：08-变量

* Jedi: 全部讲解的是内部类型

## P15千锋Python教程：09-变量命名规则

* 数字、字符、下划线
* 不能以数字开头
* 严格区分大小写
* 不能使用python关键字

* 列印关键字

```python
import keyword
print(keyword.kwlist)
```

* 变量命令请遵守编码手册(驼峰式，下划线式-Python推荐？)

## P16千锋Python教程：10-回顾

* Jedi: 略

## P17千锋Python教程：11-print使用

* pip
  * pip list
  * pip install package-name
  * pip uninstall package-name 
  * pip install package-name=versio-id
  * pip freeze > requirements.txt
  * pip install -r requirements.txt

## P18千锋Python教程：12-转义字符

* help(print)
* 注意print的split符号选项（这个基本不用，但也是知识点）
* 转义符：\n, \t, \r, \", \'

## P19千锋Python教程：13-字符串和常量

* print(r'hello \py\thon')
* '-', "-", '''-'''
