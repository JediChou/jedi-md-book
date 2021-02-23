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

* 使用十六进制编码获得指定颜色

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```

* 使用十六进制编码混合颜色

```html
<style>
  .red-text { color: #FF0000; }
  .green-text { color: #00FF00; }
  .dodger-blue-text { color: #1E90FF; }
  .orange-text { color: #FFA500; }
</style>
<h1 class="red-text">I am red!</h1>
<h1 class="green-text">I am green!</h1>
<h1 class="dodger-blue-text">I am dodger blue!</h1>
<h1 class="orange-text">I am orange!</h1>
```

* 使用缩写的十六进制编码

```html
<style>
  .red-text { color: #F00; }
  .fuchsia-text { color: #F0F; }
  .cyan-text { color: #0FF; }
  .green-text { color: #0F0; }
</style>
<h1 class="red-text">I am red!</h1>
<h1 class="fuchsia-text">I am fuchsia!</h1>
<h1 class="cyan-text">I am cyan!</h1>
<h1 class="green-text">I am green!</h1>
```

* 使用RGB值为元素上色

```html
<style>
  body {
    background-color: rgb(0,0,0);
  }
</style>
```

* 使用 RGB 混合颜色

```html
<style>
  .red-text { color: rgb(255, 0, 0); }
  .orchid-text { color: rgb(218, 112, 214); }
  .sienna-text { color: rgb(160, 82, 45); }
  .blue-text { color: rgb(0, 0, 255); }
</style>
<h1 class="red-text">I am red!</h1>
<h1 class="orchid-text">I am orchid!</h1>
<h1 class="sienna-text">I am sienna!</h1>
<h1 class="blue-text">I am blue!</h1>
```

* 使用 CSS 变量一次更改多个元素
  * good demo

```html
<style>
  .penguin {

    /* 只修改这一行下面的代码 */
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
    /* 只修改这一行上面的代码 */

    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

* 创建一个自定义的 CSS 变量

```html
<style>
  .penguin {
    /* 只修改这一行下面的代码 */
    --penguin-skin: gray;

    /* 只修改这一行上面的代码 */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
</style>
```

* 使用一个自定义的 CSS 变量

```html
background: var(--penguin-skin);
```

* 给CSS变量设置备用值
  * background: var(--penguin-skin, black);

```html
<style>
  .penguin {
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* 修改这行下面的代码 */
    background: var(--pengiun-skin, black);
    /* 修改这行上面的代码 */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* 修改这行下面的代码 */
    background: var(--pengiun-skin, black);
    /* 修改这行上面的代码 */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background: #c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>
```

* 通过浏览器降级提高兼容性

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    /* 后面的设置如果没有值，则前面会进行覆盖；算是一种补救 */
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

* 继承CSS变量
  * :root 是一个伪类选择器，它是一个能够匹配文档根元素的选择器，通常指的是 html 元素。 我们在 :root 里创建变量在全局都可用，即在任何选择器里都生效。

```html
<style>
  :root {
    --penguin-belly: pink;
  }
```
