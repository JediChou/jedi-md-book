# Bumla document review

## Overview

An overview of what Bulma as a **framework** is all about

### Start

* Install
  * npm install bulma
  * [cdnjs](https://cdnjs.com/libraries/bulma)
  * [download](https://github.com/jgthms/bulma/tree/master/css)

* Code requirements
  * "<!doctype html>"
  * meta项

    ```html
    "<meta name="viewport" content="width=device-width, initial-scale=1">"
    ```

* Starter template
  * Jedi: 内容很简单
  * Jedi: 注意all.js一定要引入

* bulma-start
  * bulma-start -> npm package
  * Jedi: 应该是一个示例工程

### CSS classes

* 日期: 2019-3-12
* EN: Bulma is simply a collection of CSS classes. Write the HTML code you want.
* CN: Bulma是一堆CSS类的集合，你可以用它来创建页面。 Jedi
* [repo](https://github.com/jgthms/bulma)
* [css download](https://github.com/jgthms/bulma/blob/master/css/bulma.css)
* Jedi: 提到Bulma对现有页面的样式不会有什么影响. 11:51
* Jedi: Bulma对常用标签进行了两次修改. 11:51
  * generic.sass，定义了基本样式. 11:52
  * .content类用于部分文本内容的形式. 11:52

### Modularity

* 日期: 2019-3-12
* EN: Just import what you need
* CN: 只加载需要的内容
* Jedi: Bulma包含39个sass文件可以加载. 11:55
* Jedi: 以下加载应该是在node开发中使用. 11:55

    ```javascript
    @import "bulma/sass/utilities/_all.sass"
    @import "bulma/sass/grid/columns.sass"
    ```

* Jedi: Modularity-demo1.html
* Jedi: 仅加载button的样式

```javascript
@import "bulma/sass/utilities/_all.sass"
@import "bulma/sass/elements/button.sass"
```

* Jedi: Modularity-demo2.html

### Responsiveness

* EN: Bulma is a mobile-first framework
* CN: Bulma是一个手机优先的框架
* Vertical by default
  * columns垂直堆叠
  * level组件及其子元素将垂直显示
  * nav标签将隐藏
* Breakpoints
  * 5 breakpoints
    * mobile
    * tablet
    * desktop
    * widescreen
    * fullhd
  * 9 responsive mixins
    * "=mobile"
    * "=tablet"
    * "=tablet-only"
    * "=touch"
    * "=desktop"
    * "=desktop-only"
    * "=widescreen"
    * "=widescreen-only"
    * "=fullhd"
* Disabling breakpints
  * Jedi: 这个要自己重新编译，并改变两个变量
  * Jedi: 以下对变量进行说明

```javascript
$widescreen-enable: false
$fullhd-enable: false
```

* Variables
  * $gap
  * $table
  * $desktop
  * $widescreen
  * $fullhd

### Colors

* 日期: 2019-3-12
* EN: The colors that style most Bulma elements and componets
* CN: Bulma绝大部分元素和组件都能具有color样式
* Jedi: 好像没法用咧？ 15:03
  * color-demo-01-white的颜色渲染不出来. 15:03
* Jedi: 暂时放到一边吧. 15:03

### Functions

* 日期: 2019-3-12
* Jedi: Bulma有3个自定义函数可用来动态变更颜色
  * powerNumber($number, $exp)
  * colorLuminance($color)
  * findColorInvert($color)
* Jedi: 这个还不知道怎么用? 15:21

### Mixins

* 日期: 2019-3-12
* EN: Utility mixins for custom elements and responsive helpers
* CN: 为自定义元素和响应式提供的mixin
* "=arrow($color)", 创建一个css向下箭头
* "=block", 将margin-bottom设置为1.5rem，如果元素是最后一个元素则例外.
* "=clearfix", 清除浮动.
* "=center($size)", 将元素定位与父元素的中间.
* "=delete", 创建一个css的加号。常用于模态窗、消息、标签等.
* "=fa($size, $dimensions)", 将字体设置为Awesome字体或图标容器.
* "=hamburger($dimensions)", 创建一个汉堡包样式的Bar组件，常用于导航栏.
* "=loader", 创建一个加载spinner组件，常用在".loader"组件中.
* "=overflow-touch", 在ios设备上设置keeps momentum时的容器样式.
* "=overlay($offset:0)", 使得元素覆盖父容器，比如使用模态窗.
* "=placeholder", 设置占位符样式.
* "=unselectable", 设置元素无法被选中. 常用于禁用按钮功能.
* Jedi: MDGBZ, 怎么没有示例. 15:33

## Modifiers

An **easy-to-read** naming system designed for humans

### Modifiers syntax

* EN: Most Bulma elements have alternative styles. To apply them, you only need to append one of the modifier classes. They all start with is- or has-.

### Helpers

### Responsive helpers

### Color helpers

### Typography helpers

## Layout

Design the **strucurte** of your webpage with these CSS classes

### Container

### Level

### Media Object

### Hero

An imposing here banner to showcase something.

### Section

A simple container to divide your page into sections, like the one you're currently reading

### Footer

A simpler responsive **footer** which can include anything: lists, headings, columns, icons, buttons, etc.

### Titles powered by Flexbox

A single title element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like girds

## Elements

Essential interface elements that only require a **single CSS class**

### Box

A white **box** to contain other elements

### Button

The classic button, in different colors, sizes and states

### Content

A single class to handle **WYSIWYG** generated content, where only **HTML tags** are available

### Delete

A versatile **delete** cross

### Icon

Bulma is compatible with **all icon font libraries**: Font Awesome 5, Font Awesome 4, Material Design Icons, Open Iconic, Ionicons etc.

### Image

A container for responsive images.

### Notification

Bold notification blocks, to alter your users of something

### Progress Bar

Native HTML progress bars

### Table

The inevitable HTML table, with special case cells

### Tags

Small tag labels to insert anaywhere

### Title and Subtitle

Simple heading to add depth to your page

## Customize

Create your **own theme** with a simple set of variables

### Concepts

What makes Bulma customizable

### Variables

See how Bulma uses Sass variables to allow easy customization

### With node-sass

Use npm/yarn and node-sass

### With Sass CLI

Use the Sass command line

### With webpack

Use Bulma with webpack

## Columns

The power of **Flexbox** in a simple interface

### Basic

* Columns powered by Flexbox
* Jedi: 这个主题是Basic

### Sizes

* Columns sizes
* Define the size of each column individually

### Responsivenss

Handle different column layouts for each breakpoint

### Nesting

A simple way to build responsive columns

### Gap

Customize the gap between the columns

### Options

Design different types of column layouts

## Form

The indispensable **from controls**, designed for maximum clarity

### General

All generic form controls, designed for consistency

### Input

The text input and its variations

### Textarea

The multiline textarea and its variations

### Select

The browser built-in select dropdown, styled accordingly

### Checkbox

The 2-state checkbox in its native format

### Radio

The mutually exclusive radio button in their native format

### File

A custom file upload input, without JavaScript

## Components

Advanced multi-part components with lots of passibilities

### Breadcrumb

A simple breadcrumb component to improve your navigation experience

### Card

An all-around flexible and composable component

### Dropdown

An interactive dropdown menu for discoverable content

### Menu

A simple menu, for any type of vertical navigation

### Message

Colored message blocks, to emphasize part of your page

### Modal

A classic modal overlay, in which you can include any content you want

### Navbar

A responsive horizontal navbar that can support images, links, buttons, and dropdowns

### Pagination

A responsive, usable, and flexible pagination

### Panel

A composable panel, for compat controls

### Tabs

Simple responsive horizontal navigation tabs, with different styles
