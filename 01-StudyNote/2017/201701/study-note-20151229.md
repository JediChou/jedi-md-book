# Study note - 2015.12.29

* [Codeanywhere](http://www.codeanywhere.com "CodeAnyWhere")
* .Net Basic Class - The 2nd Day - 01 OOP
* .Net Basic Class - The 2nd Day - 02 猜拳游戏 (没看完）
* Deploy web service for generate PDF
* 处理王林要的Excel报表工具

## CodeAnyWhere is a fun website

* It provide a cloud code IDE for everyone
* Register process is very simple
* 不知道怎么在CodeAnyWhere中提交代码到GitHub上
* PM 15:38, 直接就按照下面的方式就可以提交到GitHub上

```shell
git add *
git commit
git push
```

* 牛B的玩意，那个HTML5完全就可以在上面练习就行了！
* 非付费用户只能创建一个container，所以只要珍惜的用。

## .Net Basic Class - The 2nd Day - 01 OOP

* Class & Object, instance
* Constructor
  * public constructor
  * private constructor
* Overload
  * constructor overload
* 封装、封装！

## .Net Basic Class - The 2nd Day - 02 猜拳游戏

* Field （请用.Net Reflector去检查反编译结果）
* 给变量起名时不能和特殊符号起名，但是编译器内部可以用这些特殊符号
* Calculator的实验
  * “操作数”和“被操作数”被封装成属性
* 猜拳游戏
  * 封装：规则、玩家、电脑、裁判

## Deploy web service for generate PDF

* Connect info:
  * IP: 10.132.160.210
  * User: administrator
  * Password: **LBPEapp.74257**

* 发布步骤
  * 在服务器上建立一个虚拟目录
  * 并让该目录有可执行ASP.NET的权限，注意将执行的框架选为.NET 2.0
  * 然后将本地的代码拷贝到该目录上，此时在客户端就可以连接了

* 客户端遗留问题
  * 未处理大文件的问题，因为上传下载都用的是Byte数组，后续容易限制
  * 文件上传和下载都是通过MemoryStream实现的，所以大文件会占用大量内存
  * 未去数据库验证案件编号的正确性，发给“客户”时使用时会加上
  * 同时，发给“客户”时生成的PDF文档会自动上传到DFM中，对应的数据库信息也要添加
  * 该Web service没经过压力测试，整个程序都是单线程的

## 处理王林要的Excel报表工具

* 要如何删除指定列（记得要从后往前删，索引值较大的先删除）
* NPOI中没有直接删除列的函数，真是蛋疼！
* 想用VBA写，可几乎所有的对象都不熟悉
