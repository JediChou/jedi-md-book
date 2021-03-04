# qfedu: Vue2 and Vue3

## 001-vue介绍

* vue.js是什么?
* Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
* 让开发人员无需操作DOM

## 002-vue初始化

* 模板语法 => 两个大括号

## 003-vue原理

* 给出了一段obj的get、set代码来揭露原理
* jedi: 揭示了绑定对象属性
* jedi: 关于watcher等观念需访问[“深入响应式原理”](https://cn.vuejs.org/v2/guide/reactivity.html)

```javascript
var obj = {};
Object.defineProperty(obj, "myname", {
    set() {},
    get() {}
});
```

## 004-MVC, MVP, MVVM

* 2020.11.27 11:50 AM

* MVC: model-view-controller，后端模式走向了前端

* MVP: model-view-presenter
  * presenter: 前端
  * view和model不绑定
  * 导致view很麻烦

* MVVM: model-ViewModel(+Binder)-View
  * 提供了双向绑定
  * vue就采用这种方式的前端框架
  * id="app"就是view
  * data:{}就是model
  * var vm = new Vue({})就是view-model

## 005-语法
