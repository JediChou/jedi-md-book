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

* 更改特定区域的变量

```html
<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    /* 只修改这一行下面的代码 */
    --penguin-belly : white;
    /* 只修改这一行上面的代码 */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }
```

* 使用媒体查询更改变量

  * CSS 变量可以简化媒体查询的定义方式。
  * 例如，当屏幕小于或大于媒体查询所设置的值，只要我们更新变量的值，那么使用了此变量的元素样式就都会更改。
  * 在 media query（媒体查询）声明的 :root 选择器里，重定义 --penguin-size 的值为 200px。 同时，重新定义 --penguin-skin 的值为 black， 然后通过缩放页面来查看它们是否生效。

```html
<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /* 只修改这一行下面的代码 */
      --penguin-size: 200px;
      --penguin-skin: black;
      /* 只修改这一行上面的代码 */
    }
  }
</style>
```

### 应用视觉设计

* 使用text-align属性创建视觉平衡

  * text-align: justify; 可以让除最后一行之外的文字两端对齐，即每行的左右两端都紧贴行的边缘。
  * text-align: center; 可以让文本居中对齐。
  * text-align: right; 可以让文本右对齐。
  * text-align: left; 是默认值，它可以让文本左对齐。

```html
<style>
  h4 { text-align: center; }
  p { text-align: justify; }
</style>
```

* 使用width属性调整元素的宽度
  * target: 应使用 fullCard class 选择器将卡片的 width 属性值设置为 245px。

```css
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
```

* 使用height属性调整元素的宽度
  * target: h4的height属性值应为25px。

```css
  h4 { height: 25px;}
```

* 使用 strong 标签加粗文本
  * target: 应添加一个 strong 标签。
  * target: strong 标签应在 p 标签里。
  * target: The strong tag should wrap around the words Stanford University.

* 使用u标签给文本添加下划线
  * target: 应添加一个u标签。
  * target: u标签的内容文本应为Ph.D. students。

* 使用 em 标签强调文本
  * target: 应添加一个em标签。
  * target: em标签应包裹p标签里的内容，但不包裹p标签本身。

* 使用s标签给文本添加删除线
  * target: 应添加一个 s 标签。
  * s 标签应该在 h4 标签内的 Google 文字外面， 它不应包含单词 Alphabet
  * h4 标签内应有单词 Alphabet，单词不应有删除线样式。

* Create a Horizontal Line Using the hr Element
  * Your code should add an hr tag to the markup.
  * The hr tag should come between the title and the paragraph.

```html
<h4><s>Google</s>Alphabet</h4>
<hr>
<p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
```

* Adjust the background-color Property of Text
  * Your code should add a background-color property to the h4 element set to rgba(45, 45, 45, 0.1).
  * Your code should add a padding property to the h4 element and set it to 10 pixels.
  * The height property on the h4 element should be removed.

```css
h4 {
  text-align: center;
  height: 25px;
  background-color: rgba(45, 45, 45, 0.1);
  padding: 10px;
  height: 0px;
}
```

* Adjust the Size of a Header Versus a Paragraph Tag
  * Your code should add a font-size property to the h4 element set to 27 pixels.

```css
h4 {
  text-align: center;
  background-color: rgba(45, 45, 45, 0.1);
  padding: 10px;
  font-size: 27px;
}
```

* Add a box-shadow to a Card-like Element
  * Your code should add a box-shadow property for the thumbnail id.
  * You should use the given CSS for the box-shadow value.
  * Jedi: box-shadow有什麼特殊技巧？

```css
#thumbnail {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
```

* Decrease the Opacity of an Element
  * Your code should set the opacity property to 0.7 on the anchor tags by selecting the class of links.

```css
.links {
  text-align: left;
  color: black;
  opacity: 0.7;
}
```

* Use the text-transform Property to Make Text Uppercase
  * The h4 text should be uppercase.
  * The original text of the h4 should not be changed.
  * Jedi: Other options contains lowercase, uppercase, capitalize, initial, inherit, none.

```css
h4 {
  text-align: center;
  background-color: rgba(45, 45, 45, 0.1);
  padding: 10px;
  font-size: 27px;
  text-transform: uppercase;
}
```

* Set the font-size for Multiple Heading Elements
  * font-weight 属性用于设置文本中字体的粗细。
  * Your code should set the font-weight property for the h1 tag to 800.
  * Your code should set the font-weight property for the h2 tag to 600.
  * Your code should set the font-weight property for the h3 tag to 500.
  * Your code should set the font-weight property for the h4 tag to 400.
  * Your code should set the font-weight property for the h5 tag to 300.
  * Your code should set the font-weight property for the h6 tag to 200.

```css
h1 {
  font-size: 68px;
  font-weight: 800;
}
h2 {
  font-size: 52px;
  font-weight: 600;
}
h3 {
  font-size: 40px;
  font-weight: 500;
}
h4 {
  font-size: 32px;
  font-weight: 400;
}
h5 {
  font-size: 21px;
  font-weight: 300;
}
h6 {
  font-size: 14px;
  font-weight: 200;
}
```

* Set the font-size of Paragraph Text
  * Your p tag should have a font-size of 16 pixels.

* Set the line-height of Paragraphs
  * Your code should set the line-height of the p tag to 25 pixels.

```css
p {
  font-size: 16px;
  line-height: 25px;
}
```

* Adjust the Hover State of an Anchor Tag
  * The anchor tag color should remain black, only add CSS rules for the :hover state.
  * The anchor tag should have a color of blue on hover.
  * Jedi: 懸停的顏色

```css
  a { color: #000; }
  a:hover { color: blue; }
```

* Change an Element's Relative Position
  * The h2 element should have a position property set to relative.
  * Your code should use a CSS offset to relatively position the h2 15px away from the top of where it normally sits.

 ```css
  h2 {
  position: relative;
  top: 15px;
}
 ```

* Move a Relatively Positioned Element with CSS Offsets
  * Your code should use a CSS offset to relatively position the h2 10px upwards. In other words, move it 10px away from the bottom of where it normally sits.
  * Your code should use a CSS offset to relatively position the h2 15px towards the right. In other words, move it 15px away from the left of where it normally sits.

```css
  h2 {
    position: relative;
    top: 10px;
    bottom: 10px;
    right: 15px;
    left: 15px;
  }
```

* Lock an Element to its Parent with Absolute Positioning
  * The #searchbar element should have a position set to absolute.
  * Your code should use the top CSS offset of 50 pixels on the #searchbar element.
  * Your code should use the right CSS offset of 50 pixels on the #searchbar element.

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

* Lock an Element to the Browser Window with Fixed Positioning
  * The #navbar element should have a position set to fixed.
  * Your code should use the top CSS offset of 0 pixels on the #navbar element.
  * Your code should use the left CSS offset of 0 pixels on the #navbar element.
  * Jedi: 這個例子要好好體會下！尤其是對position的了解要進一步加深才行。

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

* Push Elements Left or Right with the float Property
  * The element with id left should have a float value of left.
  * The element with id right should have a float value of right.
  * Jedi: 這個示例對我講也是個難點！

```css
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

* Change the Position of Overlapping Elements with the z-index Property
  * 使用 z-index 属性更改重叠元素的位置
  * The element with class first should have a z-index value of 2.

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```

* Center an Element Horizontally Using the margin Property
  * The div should have a margin set to auto.

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```

* Learn about Complementary Colors
  * The div element with class blue should have a background-color of blue.
  * The div element with class yellow should have a background-color of yellow.

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #0000FF;
  }
  .yellow {
    background-color: #FFFF00;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

* Learn about Tertiary Colors
  * The div element with class orange should have a background-color of orange.
  * The div element with class cyan should have a background-color of cyan.
  * The div element with class raspberry should have a background-color of raspberry.
  * All background-color values for the color classes should be hex codes and not color names.

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .orange {
    background-color: #FF7F00;
  }
  .cyan {
    background-color: #00FFFF;
  }
  .raspberry {
    background-color: #FF007F;
  }
  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

* Adjust the Color of Various Elements to Complementary Colors
  * header 元素的 background-color 属性值应为 #09A7A1。
  * footer 元素的 background-color 属性值应为 #09A7A1。
  * h2 元素的 color 属性值应为 #09A7A1。
  * button 元素的 background-color 属性值应为 #FF790E。

```html
<style>
  body { background-color: white; }
  header {
    background-color: #09A7A1;
    color: white;
    padding: 0.25em;
  }
  h2 { color: #09A7A1; }
  button { background-color: #FF790E; }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

* Adjust the Hue of a Color

  * Your code should use the hsl() property to declare the color green.
  * Your code should use the hsl() property to declare the color cyan.
  * Your code should use the hsl() property to declare the color blue.
  * The div element with class green should have a background-color of green.
  * The div element with class cyan should have a background-color of cyan.
  * The div element with class blue should have a background-color of blue.

```html
<style>
  body { background-color: #FFFFFF; }
  .green { background-color: hsl(120, 100%, 50%); }
  .cyan { background-color: hsl(180, 100%, 50%); }
  .blue { background-color: 	hsl(240, 100%, 50%); }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

* Adjust the Tone of a Color
  * The nav element should have a background-color of the adjusted cyan tone using the hsl() property.

```css
header {
  background-color: hsl(180, 90%, 35%);
  color: #FFFFFF;
}
nav { background-color: hsl(180, 80%, 25%); }
```

* Create a Gradual CSS Linear Gradient
  * 创建一个CSS线性渐变
  * The div element should have a linear-gradient background with the specified direction and colors.
  * Jedi: CSS线性渐变是个非常重要的特性。

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```

* Use a CSS Linear Gradient to Create a Striped Element
  * The angle of the repeating-linear-gradient() should be 45deg.
  * The angle of the repeating-linear-gradient() should no longer be 90deg
  * The color stop at 0 pixels should be yellow.
  * One color stop at 40 pixels should be yellow.
  * The second color stop at 40 pixels should be black.
  * The last color stop at 80 pixels should be black.

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```

* Create Texture by Adding a Subtle Pattern as a Background Image
  * 通过添加细微图案作为背景图像来创建纹理
  * Your body element should have a background property set to a url() with the given link.

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```

* Use the CSS Transform scale Property to Change the Size of an Element
  * 使用CSS Transform scale属性可以更改元素的大小
  * The transform property for #ball2 should be set to scale it to 1.5 times its size.

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

* Use the CSS Transform scale Property to Scale an Element on Hover
  * The size of the div element should scale 1.1 times when the user hovers over it.

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover { transform: scale(1.1); }
</style>
<div></div>
```

* Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
  * 使用 CSS Transform skex 属性沿X轴倾斜元素
  * The element with id bottom should be skewed by 24 degrees along its X-axis.

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```

* Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
  * The element with id top should be skewed by -10 degrees along its Y-axis.

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```

* Create a Graphic Using CSS
  * The value of the background-color property should be set to transparent.
  * The value of the border-radius property should be set to 50%.
  * The value of the box-shadow property should be set to 25px for offset-x, 10px for offset-y, 0 for blur-radius, 0 for spread-radius, and finally blue for the color.

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0px 0px blue;
  }
</style>
<div class="center"></div>
```

* Create a More Complex Shape Using CSS and HTML
  * The background-color property of the heart::after selector should be pink.
  * The border-radius of the heart::after selector should be 50%.
  * The transform property for the heart class should use a rotate() function set to -45 degrees.
  * The content of the heart::before selector should be an empty string.

```html
```
