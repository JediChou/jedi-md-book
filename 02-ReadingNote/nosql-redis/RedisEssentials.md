# Red Essentials, with Andrew Burgess

## RedisEssentials-01

* Introduction and Installation
* 00:05:18
* [Official site](http://redis.io)
* Redis is an open source, BSD licensed, advanced key-value store.
* brew install redis (MacOS)
* redis-server
* redis-cli

```redis
select 1
set name "joe"
get name
select 0
get name
exit
```

* Finish at 2018.12.21 1:43

## RedisEssentials-02

* Data Structures Overview
* 00:03:23
* command: set key value

```redis
set name "redis essentials"
set user:1 "joe simith"
set user:2 "jane doe"
```

* Finish at 2018.12.21 11:10

## RedisEssentials-03

* String Commands
* 00:08:54

```redis
set name "john"
get name
append name " smith"
get name
getrange name 0 3
setranage name 5 johnson
get name

getset name "joe smith"
get name

mset name "jane doe" age 25
get name
get age
mget name age

get age
incr age
get age

incr name
(error) ERR value is not an integer or out of range

decr age
get age

incrby age 10
get age

> decrby age 3
> get age

> incrby age 2.5
(error) ERR value is not an integer or out of range

> incrbyfloat age 2.5

> set age 10.5
> incr age
(error) ERR value is not an integer or out of range
> incrbyflot age 1

> clear

> setex color 4 blue
OK

> get color
"blue"

> get color
(nil)

> psetex color 4321 blue
OK

> get color
"blue"

> get color
"blue"

> get color
(nil)

redis 127.0.0.1:6379> psetex color 4321 blue
(error) ERR unknown command 'psetex'

get name

> strlen name
```

* Jedi: my redis is a lower version

```version
C:\server\redis-x64>redis-cli --version
redis-cli 2.4.5
```

* Finish at 2018.12.12 11:28

## RedisEssentials-04

* List Commands
* 00:11:06
