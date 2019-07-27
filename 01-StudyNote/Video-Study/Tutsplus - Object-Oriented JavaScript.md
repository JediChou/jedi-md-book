# Tutsplus - Object-Oriented JavaScript

* [jsbin](https://jsbin.com/)

## 0. Introduction

* 课程介绍，打个招呼而已
* Jeremy McPeak

## 1. Primitives and Objects

* Primitives: 基元；原型？
* 基本类型
  * String
  * Number
  * Boolean
  * Undefined
  * Null
* 引用类型
  * Object
  * Array
  * Function
  * Date
  * RegExp

* 第一屏演示

```screen

D:\>node
> "hello".length
5
> new String("hello").length
5
> var obj = new String("Hello");
undefined
> typeof obj
'object'
> typeof "string"
'string'
> typeof String("hello");
'string'
> obj.valueOf();
'Hello'
> typeof obj.valueOf()
'string'

```

* 第二屏演示

```screen

D:\>node
> var num = new Number(10);
undefined
> typeof num
'object'
> typeof 10
'number'
> typeof Number(10)
'number'
> typeof num.valueOf()
'number'
> var sum = num + 10
undefined
> typeof sum
'number'
> typeof num
'object'

```

* 第三屏演示

```screen

D:\>node
> var num = 10
undefined
> num.property = "hello"
'hello'
> num.property
undefined
> num = new Number(10)
[Number: 10]
> num.property = "hello"
'hello'
> num.property
'hello'

```

* Jedi: 这里的几个特性比较神奇!
* Jedi: 没看到几个js中用new的。Why？

## 2. Creating Objects and Factory Functions

* 创建对象的三种方式
* 写一个工厂方法

## 3. The this Keyword

* 使用this来访问对象的属性
* 在浏览器中如果没有特指，this将指向“浏览器的window对象”
* bind方法是什么意思？
  * Jedi TODO: 这个要详细了解一下。
