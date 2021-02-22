# freecodecamp

## Responsive Web Design Certification (300 hours)

### Basic HTML and html5

* Introduction to Basic HTML and HTML5
* Say Hello to HTML Elements
* 将 a 嵌套在段落中
* 用 # 号来创建链接占位符
* 给图片添加链接
* 创建一个无序列表
* 创建一个有序列表
* 创建一个输入框
* 给输入框添加占位符文本
* 创建一个表单
* 给表单添加提交按钮
* 给表单添加一个必填字段
* 创建一组单选按钮
* 创建一组复选框
* 使用单选框和复选框的 value 属性
* 给单选按钮和复选框添加默认选中项
* 元素嵌套
* 声明HTML的文档类型
* 定义HTML文档的head和body

### 基础CSS

* 更改文本的颜色
* 使用元素选择器来设置元素的样式
* 使用 class 选择器设置单个元素的样式
* 使用 class 选择器设置多个元素的样式通过
* 更改元素的字体大小
* 设置元素的字体族名
* 引入谷歌字体
* 字体如何优雅降级
* 调整图片的大小
* 在元素周围添加边框

```css
.thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
}
</style>
```

* 用 border-radius 添加圆角边框

```css
.thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
}
```

* 用 border-radius 制作圆形图片

```css
.thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 59%;
}
```

* 给 div 元素添加背景色

```css
.silver-background {
    background-color: silver;
}
```

* 设置元素的 id
* 使用 id 属性来设定元素的样式

```css
  #cat-photo-form {
    background-color: green;
  }
```

* 调整元素的内边距(padding)
* 调整元素的外边距(margin)
* 给元素添加负外边距
  * 如果你把元素的 margin 设置为负值，元素会变得占用更多空间。

* 给元素的每一侧添加不同的内边距

```css
  .blue-box {
    background-color: blue;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    color: #fff;
  }
```

* 给元素的每一侧添加不同的外边距

```css
  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left:40px;
  }
```

* 使用顺时针标记指定元素的内边距

```css
  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px; // top, right, bottom, left
  }
```

* 使用顺时针标记指定元素的外边距

```css
  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
```

* 使用属性选择器来设置元素的样式

```css
  [type='checkbox'] {
    margin: 10px 0px 15px 0px;
  }
```

* 理解绝对单位与相对单位

  * 单位长度的类型可以分成 2 种：相对和绝对。 绝对单位与长度的物理单位相关。 例如，in 和 mm 分别代表着英寸和毫米。 绝对长度单位会接近屏幕上的实际测量值，不过不同屏幕的分辨率会存在差异，这就可能会造成误差。

  * 相对单位长度，比如 em 和 rem，它们的实际值会依赖其他长度的值而决定。 比如 em 的大小基于元素字体的字体大小。 如果使用它来设置 font-size 值，它的值会跟随父元素的 font-size 值来改变。

```css
  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }
```

* 给 HTML 的 body 元素添加样式

```css
  body {
    background-color: black;
  }
```

* 从 body 元素继承样式

```html
<style>
  body {
    color: green;
    background-color: black;
    font-family: monospace;
  }
</style>
<body>
  <h1>Hello World</h1>
</body>
```

* 样式中的优先级

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```

* Class 选择器的优先级高于继承样式

  * 在 style 标签里面声明的 class 顺序十分重要，之后的声明会覆盖之前的声明。 第二个声明的优先级始终高于第一个声明。 由于 .blue-text 是在后面声明的，所以它的样式会覆盖 .pink-text 里的样式。

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

* ID 选择器优先级高于 Class 选择器

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text { color: pink; }
  .blue-text { color: blue; }
  #orange-text { color: orange; }
</style>
<h1 id='orange-text' class="pink-text blue-text">Hello World!</h1>
```

* 内联样式的优先级高于 ID 选择器

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text { color: orange; }
  .pink-text { color: pink; }
  .blue-text { color: blue; }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white;">Hello World!</h1>
```

* Important 的优先级最高

  * 不过， 还有一种方式可以覆盖重新 CSS 样式。 这是所有方法里面最强大的一个。 在此之前，我们要考虑清楚，为什么我们要覆盖 CSS 样式。很多时候，你会使用 CSS 库， CSS 库中的样式会意外覆盖你的 CSS 样式。 如果想保证你的 CSS 样式不受影响，你可以使用 !important。

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text { color: orange; }
  .pink-text { color: pink !important; }
  .blue-text { color: blue; }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
