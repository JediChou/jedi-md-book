# How to debug bash script

* Resouce collection by Jedi Chou.
* Date: 2016.3.26 14:59

## Skill-1

[Ref](http://stackoverflow.com/questions/951336/how-to-debug-a-bash-script)

```bash
sh -x script [arg1 ...]
bash -x script [arg1 ...]
```

## Skill-2

[Ref](http://coolshell.cn/articles/1379.html)

a detail introduce for skill-1 by chinese

```bash
$bash -x script.sh
+ echo 'Hello chenhao,'
Hello chenhao,
++ date +%Y-%m-%d
+ echo 'Today is 2009-08-31'
Today is 2009-08-31
```

## Skill-3

Use BASH Debugger, a high level shell debug tool.
[Ref](http://bashdb.sourceforge.net/)
