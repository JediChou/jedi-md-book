# Redis入门指南(学习笔记)

## lab3

```text
3．增加指定浮点数
INCRBYFLOAT key increment
INCRBYFLOAT 命令类似INCRBY命令，差别是前者可以递增一个双精度浮点数，如：
redis＞INCRBYFLOAT bar 2.7
"6.7"
redis＞INCRBYFLOAT bar 5E+4
"50006.69999999999999929"
```

不可执行

## lab4

```text
4．向尾部追加值
APPEND key value
APPEND作用是向键值的末尾追加value。如果键不存在则将该键的值设置为value，即相
当于SET key value。返回值是追加后字符串的总长度。例如：
redis＞SET key hello
OK
redis＞APPEND key " world!"
(integer) 12
此时key的值是"hello world!"。APPEND命令的第二个参数加了双引号，原因是该参数包
含空格，在redis-cli中输入需要双引号以示区分。
```

## lab5

```text
5．获取字符串长度
STRLEN key
STRLEN命令返回键值的长度，如果键不存在则返回0。例如：
redis＞STRLEN key
(integer)12
redis＞SET key 你好
OK
redis＞STRLEN key
(integer)6
```

注意在Windows上的redis的长度为4
