# Manning - Get Programming with Node.js 2019.2

## 1.4 Working with the Node.js REPL in terminal

* Read-Evaluate-PrintLoop (REPL)
* To exit this prompt, type .exit or press Ctrl-C twice.
* In appendix A, I discuss keywords in Node.js and how they pertain to application development.
* Learn Linux in a Month of Lunches by Steven Ovadia [Manning. 2016]
* JavaScript ES6 syntax
* Screen Shot: Listing0102-REPL command examples.png
* Table 1.1 REPL commands and remender

## 2 Running a Node.js application

* Target
  * Creating and saving a JavaScript file
  * Running your JavaScript file with Node.js
  * Loading files into REPL

* A foreach demo(Reference at page 23)

```javascript
let printNumbers = arr => {
    arr.forEach(num => console.log(num));
};
```

## 2.1 Creating a JavaScript file

* Strict mode
* Some mistakes discovered by stric mode include
  * Accidentally creating global variables
  * Assigning variables that can’t be assigned
  * Using non-unique function parameter names or property names in an object literal

## 2.2 Running your JavaScript file with Node.js

```bash
node hello.js
```

## 2.3 Running individual JavaScript commands

* Listing 2.1 Declaring a JavaScript variable in message.js
* Listing 2.2 Loading a JavaScript file into REPL
* Listing 2.3 Use a file's contents in REPL
* Listing 2.4 Results from the console.log loop

* Quck check 2.2
  * What are three ways in which you could exit the REPL environment? (Ctrl+C, .exit, Ctrl+D).
  * How do you load a file that isn't in your project folder into REPL (.load your-js-file.js).
  * What happens if your run .save with a filename that already exists? (Save a new JavaScript file)

* Try it
  * A message with an interpolated string variable with
  * A message with an interpolated integer variable with

* Listing 2.5 String interpolation example

## Unit 1 Geting started with Node.js

Topic: Lession 3 introduces npm and discusses how to configure a new Node.js application.

* Build a modules
* how packages and modules offer tools and support to your application.

Topic: Lession 4 introduces the idea of a web server running on Node.js as a way to launch a simple website.

* Setup the server.
* Write code to get your website content viewable.

Topic: Lession 5 on lesson 2 by giving the app enough information to load web content base on different requests.

* Build your first application route.

Topic: Lession 6 teaches you how to server different HTML files from your web server rather than simple response.

* Adds support for application assets: CSS, JavaScript that runs on the user's device, and image loading.
* Organize and structure application to handle more request with less code clutter.

Topic: Lession 7 shows you how to put everything together by building a complete multipage application.

* Start a new application from scratch.
* then you add three views, routes
* routes for the views and assets
* and a public client folder

## Lession 3 Creating a Node.js module

* Creating a Node.js module
* Construting a Node.js application with npm
* Installing a Node.js package with npm

**NOTE** The exports object is a property of the module object. module is both the name of the code files in Node.js and one of its global objects. exports is shorthand for module .exports.

```bash
$ cat message.js
"use strict";
exports.messages = [
    "A change of environment can be a good thing!",
    "You will make it!",
    "Just when with the code!"
]
$ cat positiveMessage.js
"use strict";
const messageModule = require("./message");
messageModule.messages.forEach(msg => console.log(msg));
```

* Listing 3.1 Log messages to console in printMessages.js

## 3.1 Running npm commands

* Table 3.1 npm commands to know
  * npm init: 初始化nodejs项目，同时创建package.json文件。
  * npm install package: 安装指定包。
  * npm publish: 保存并发布nodejs模块（或应用）至社区。
  * npm start: 启动应用。
  * npm stop: 停止应用。
  * npm docs package: 打开包的说明文档。

* npm install参数
  * npm install package --save：包只供给当前项目。
  * npm install package --global：所有的模块和项目都能使用。

* npm uninstall package：删除指定包。
* 后续讲解：npm install express -S（安装express框架）
* 后续讲解：npm install express-generator -g（安装Express.js的generate CLI）
* 为生产环境安装：--save-prod
* 为开发环境安装：--save-dev

* Modules, packages, and dependencies
  * Modules: concept, functionality, or library.
  * Packages: contain multiple modules or a single module.
  * Dependencies: modules used by an application or another module.

## 3.2 Initializing a Node.js application

* package.json就像C#项目中的*.csprj或app.config文件一样。
* Listing 3.2 Result of package.json file in recipe_connection project in terminal

```json
{
  "name": "recipe_connection",
  "version": "1.0.0",
  "description": "An app to share cooking recipes",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jedi chou",
  "license": "ISC"
}
```

* 说明
  * name：项目名称
  * version：版本
  * description：模块说明
  * main：入口文件
  * scripts：相关脚本节点
  * test：测试脚本的命令
  * author：作者
  * license：授权协议

* 执行cities包的安装：npm install cities --save
* Listing 3.3 Result of your package.json file after package installation in terminal

```json
{
  "name": "recipe_connection",
  "version": "1.0.0",
  "description": "An app to share cooking recipes",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "jedi chou",
  "license": "ISC",
  "dependencies": {
    "cities": "^2.0.0"
  }
}
```

* 说明：
  * dependencies：依赖项
  * cities：依赖项的名称为版本号
* 修改package.json同时也会产生package-lock.json文件！不用管它——这是npm自动产生的文件，用来跟踪项目的依赖项。
* 如果包文件掉了，或是某些文件丢失——可以npm install将确认的包安装上（这点类似dotnet restore，或nuget的install-packages）

* Listing 3.4 Implementing the cities package in main.js

```javascript
const cities = require("cities");
var myCity = cities.zip_lookup("10016");
console.log(myCity);
```

* Listing 3.5 Sample result from running main.js in terminal

```bash
$ node main.js
{
  zipcode: '10016',
  state_abbr: 'NY',
  latitude: '40.746180',
  longitude: '-73.97759',
  city: 'New York',
  state: 'New York'
}
```

## 3 Summary

* Listing 3.6 Exporting a function

```javascript
// main.js
// 注意：本地文件要加上"./"，不然引用不到
const ops = require("./numOps");
var tmp = ops.addNums(2,3);
console.log("tryit-0306 output: ", tmp);
```

```javascript
exports.addNums = (x, y) => {
    return x + y;
}
```

## 4 Lesson Building a simple web server in Node.js

* Generating a basic web server using Node.js and npm
* Writing code that processes requests from a browser and sends back a response
* Running a web server in your browser

## 4.1 Understanding web servers

## 4.2 Initializing the application with npm

## 4.3 Coding the application
