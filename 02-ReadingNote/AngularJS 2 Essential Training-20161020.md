# AngularJS 2 Essential Training

* Student: Jedi Chou
* Publisher: Lynda.com

## Introduction

### Welcome

* Done
* 一些简单的简介，把AngularJS的特点给点出来
* 讲解者使用TypeScript和AngularJS进行混合开发
* 用Visual Code作为IDE，调试使用Chrome内置工具
* 做了一个带有左侧工具条的页面，很不错

### Why use AngularJS 2

* 有JavaScript的Compnent和Service
* AngularJS分离了Compnent和Service (依赖注入)
* 分离后可以构建大型项目

### What you should know before watching this course

* HTML5, JavaScript, TypeScript
* 反而没有CSS

### Using the exercise files

* 需要NodeJS和NPM

### Basics of TypeScript

* TypeScript -> Compile -> JavaScript (*.js)
* TypeScript focus 1
  * ES2015 class
  * Modules
  * Variables
  * Function signatures

* TypeScript focus 2
  * Writing classes
  * Angular decorators
  * Parameter type annotations

* TS Feature: Simplicity, Source Code
* TS Sample

```typescript
  import {Component} from 'angular2/core';
  import {FormBuilder} from 'angular2/common';

  @Component({
    selector: 'media-trackr-app'
    templateUrl: 'app/app.component.html',
    styleUrls ['app/app.component.css']
  })
  export class AppComponent {
    constructor(formBuilder: FormBuilder) {}
  }
```

* Jedi: 多少有些难接受NodeJS

### Course overview

* Directives, Components, Pipes, Routing, Services, HTTP
* 就是围绕在introduction里面做的例子来讲的

## 1. Architecture Overview

### Components, Bootstrap, and the DOM

* Bootstrap UI framework, 用来构建页面的component
* class MediaItemComponent
  * mediaItem
  * onDeleteClick
  * map to a html code block

* class ViewRatingComponent
  * selector: 'view-rating'
* 相互之间都有对应关系

### Directives and pipes

* Angular Directives
  * Structual: ngIf, ngFor, routerLink
  * Attribute: Demo

  ```typescript
    @Decorator({
      selector: 'mwFavorite'
    });

    <div [mwFavorite]="true">
      <img src="fav.png">
    </div>
  ```

* Angular Pipe
  * DISTRICT 19
  * TODO: Jedi-管道这段没太看懂

### Data binding

* {{movie.title}}
* Client side to Server side
  * Server side: Conditional Loop or switch
* Expressions and statements
* Value binding
* Event binding
* Expression operators
* Demo

  ```typescript
    Billng Address: <input #billing>
    Shipping Address: <input #shipping>
    <button (click)="shipping.value=billing.value">
      Use Billing
    </button>
  ```

### Dependency injection

* Case 1
  * A Component named AddressManager
  * binding new AddressValidate()
  * binding new DataStore()
  * 用依赖注入的方式来进行绑定

* Case 2
  * Component 1: I need a FormBuilder
  * Component 2: I need Http
  * Component 3: I need a Router
  * 用依赖注入的方式来
  * Constructor(formBuilder) {}
  * Constructor(formBuilder: FormBuilder) {}
  * 举例：bootstrap(App, [DataService, FormulaService]);
  * 举例：bootstrap(App, [FormulaService]);
  * 举例：通过依赖注入自动生成DataService、FormulaService的实例，并绑定到Component1上
  * 举例：当然也是是调用

### Services and other business logic

* Component
  * method: getCustomers()
  * method: addCustomer(customer)

* Component转变成Service
* Service
  * method: getCustomers()
  * method: addCustomer(customer)
  * Demo

  ```typescript
    class MediaItemService() {
      getById(id) {}
    }
  ```

* Other
  * MediaItemService
  * MediaItemComponent
  * 通过依赖注入让组件包含服务？

* 使用AngualrJS的服务，并让服务和组件进行绑定，组合成一个新组件

### Data persistence

* In-Memory Data Store, ComponentA[add(item)], ComponentB[get()]
* Data Store Service[Local Storage Service], ComponentA, ComponentB
* Data Store Service[HTTP], ComponentA, ComponentB
  * Data Store Service[XHR], ComponentA, ComponentB -> Angular HTTP XHR
  * Data Store Service[JSONP], ComponentA, ComponentB -> Angular HTTP JSONP

### Routing

* 解决路径的统一命名问题
* Angular Router Module
  * Route configuration
  * Routing links
  * Route outlets
  * Routing events
* [Link](http://domain/customerapp/customer/12)

## 2. Components

### Component metadata

* Decorator
  * Expression that evaluates to a
  * function allowing annotation of
  * classes at design time
* TODO: 需要重复这个例子，看懂了意思，但没完全明白

### The component selector

* TODO: 看的一知半解

### The component template

* TODO: 看的一知半解

### Styling a component

* TODO: 看的一知半解

### Using other components in a component

* TODO: 看的一知半解

### Interpolation and the expression context

* Angualr Template Syntax
  * Interpolation
  * Binding
  * Expressions
  * Conditional templating
  * Template variables
  * Template expression

* Nonsupported in {{}}
  * Assignments
  * Newing up variables
  * Chaining expressions
  * Inrementing/decrementing

* TODO: 看的一知半解
  
### Event binding

* TODO: 看的一知半解

## 3. Directives and Pipes

### Structural directives - ngIf

* TODO: 看的一知半解

### Structural directives - ngFor

* TODO: 这个和1.2.x的做法不太一样

### Structural directives - built in

### Attribute directives - custom

### Using directive values

### Working with events in directives

### Angular pipes - built in

### Angular pipes - custom

## 4. Forms

## 5. Dependency Injection and Services

## 6. HTTP

## 7. Routing

## 8. Conclusion
