# 極課學院-職業路徑圖-Web大前端工程師

## 初级WEB前端工程师

* 走进前端工程师的世界(8:07)
* BaiDu.com - F.I.S前端開發工具
* TaoBao.com
* Web2.qq.com/webqq.html
* map.baidu.com - 生活服務, 更多, 快捷酒店(全景)
* 水池 - www.html5tricks/demo/webgl-water/index.html
* programming skill, seo skill, 全zhan開發工程師
* html5 game
* 前端嗅覺, 展示良好的交互性, 時刻學習的能力
* 發展很快
* 前端必須適配多個設備
* Done at 2015-10-26 PM 12:50

## HTML5

### 1. HTML5與HTML4的區別

* video 1: 推出的理由及目标和语法的改变(7:42)
  * 推出的理由及目標-title
    * 兼容性低, 文檔結構不夠明確, Web應用程序的功能受到限制
    * 新API提供了新特性
  * 語法的改變-title
    * 內容類型 (html, htm)
    * DOCTYPE生命 (<!doctype html>)
    * 指定字符編碼 (<meta charset="utf-8">)
    * 可以省略標記的元素 (more)
    * 具有boolean的屬性 (default value -> true, notice)
    * 省略引號 (結合上部分)
  * Done at 2015-10-26 PM 12:59

* video 2: 新增的元素和废除的元素以及新增的属性和废除的属性(4:33)
  * 新增的結構元素-Title
    * section, article, aside, header, hgroup, footer, nav, figure
  * 新增的其他元素-Title
    * video, audio, embed, mark, progress, meter, time, ruby, rt, rp, wbr
    * canvas, command, details, datalist, datagrid, keygen, output, source
    * menu
  * 新增的input元素的類型-Title
    * email, url, number, range, Date Pickers
    * 廢除的元素-Big title
    * 能使用CSS代替的元素 (basefont, big, center, font, s, tt, u)
    * 不再使用frame框架
    * 只有部分瀏覽器支持的元素
    * 其他被廢除的元素
  * 新增的屬性和廢除的屬性-Title
    * 新增的屬性-表單相關的屬性
    * 新增的屬性-鏈接相關的屬性
    * 新增的屬性-其他屬性
    * 廢除的屬性(比較多，見課後資料)
  * Done at 2015-10-26 PM 13:09

* viedo 3: 全局属性(7:40)
  * 可以對任何元素都適用的屬性
  * contentEditable (ms, 允許用戶編輯, 隱藏狀態, demo-可編輯列表)
  * designMode (指定整個頁面是否可編輯, 配合contentEditable使用, 必須在js)
  * hidden (元素不可見狀態, 即隱藏, demo)
  * spellcheck (針對input/textarea進行語法檢查, demo)
  * tabindex (敲擊Tab讓element獲得腳本, demo, 其他元素必須指定tabindex屬性, -1->開發用)
  * Done at 2015-10-26 13:20
  
### 2. HTML5新增的主題結構元素

* video 1: article元素
  * article代表文檔、頁面或獨立的內容
  * 可嵌套使用
  * 可表示插件
  * demo-article, <header>, <p>, <footer>
  * blog可以進行嵌套, 有所屬關係, 代替了div-更語義化
  * 插件: #為當前頁面, demo, 可滑動(有滾動元素)
  * Done at 2015-10-26 13:54
  
* video 2: section元素
  * section, 對內容進行分塊
  * demo, section, h1, p, (沒有標題的話不建議使用)
  * demo, section與article的區別, 元素互換了, article是一個特定的section
  * notice 1: 不要將section元素作為設置樣式的頁面容器
  * notice 2: 如果article, aside, nav跟符合使用條件, 那不要使用section
  * notice 3: 沒有標題內容不要使用section
  * Done at 2015-10-16 14:00
  
* video 3: nav元素
  * nav元素, 頁面導航的連接組, 不是所有的鏈接都放入nav
  * 場景: 傳統導航條, 側邊欄導航, 頁內導航, 翻頁操作
  * demo-nav, nav-ul-li-a
  * nav可多處使用
  * footer不建議使用nav, notice: menu不建議代替nav, menu是交互元素
  * Dont at 2015-10-26 PM 14:06
  
* video 4: aside元素
  * aside元素, 文章或類型的附屬信息部分
  * demo-aside, <article><h1><p><aside><h1><p></aside>
  * demo-aside, 側邊欄, <aside><nav><h2><ul><li>, 加上css就會很PP
  * Done at 2015-10-26 PM 14:12
  
* video 5: time元素和pubdate屬性
  * 微格式, 利用class屬性實現, 現在使用是無歧義
  * time元素, 時間
    * demo-time

    ```html
    <time datetime="2015-10-10">2015-10-10</time>
    <time datetime="2015-10-10T20:00">2015-10-10</time>
    <time datetime="2015-10-10T20:00Z">2015-10-10</time>
    <time datetime="2015-10-10T20:00+09:00">2015-10-10</time>
    ```

    * Z->UTC標準時間, +09:00->時差
  
  * pubdate屬性
    * 可選屬性, article中使用
    * demo-pubdate

    ```html
    <article>
        <header>
            <h1>Apple</h1>
            <p>
                <!-- pubdate用來明確發布時間 -->
                <time datetime="2015-10-10" pubdate="true">2015-10-10</time>
            </p>
            <p>other event
                <time datetime="2015-10-10">2015-10-10</time>
            </p>
        </header>
    </article>
    ```

    * Dont at 2015-10-26 14:22

### 3. HTML5 新增的的非主体结构元素

* video 1: header元素 (5:13)
  * 非主體結構元素, 表示邏輯結構
  * 具有引導和導航作用的結構元素, ex: 數據表格, 搜索表單, logo
  * notice: header可出現多次
  * demo-header
  
  ```html
    <div class="header"></div>
        <div class="content"></div>
        <div class="footer"></div>

        <!-- now is changed -->
        <header>
            <h1/><h2/>
            <article>
                <header>
                    <h1></h1>
                </header>
            </article>
        </header>
  ```

  * demo-site: www.ghostchina.com

  * demo-header 2:

  ```html
  <header>
    <h1>it</h1>
    <a href="http://www.jikexueyuan.com>jike xueyuan</a>
    <nav>
      <ul>
        <li><a href="#>study</a></li>
        <li><a href="#>tech</a></li>
        <li><a href="#>geek</a></li>
      </ul>
    </nav>
  </header>
  ```

  * Done at 2015-10-26 PM 14:32

* video 2: footer元素和hgroup元素
  * footer, 作為上層父級內容區塊或是一個根區塊的腳註(作者,相關閱讀鏈接,版權信息)
    * demo-footer

    ```html
    <!-- now is changed -->
    <footer>
      <ul>
        <li><a href="#a">a</a></li>
        <li><a href="#b">b</a></li>
      </ul>
    </footer>
    ```

  * notice: article, section也可以嵌套footer
  
  * hgroup元素
	  * hgroup標題及其子標題進行分組的元素, 將h1~h6元素進行分組
	  * demo-hgroup
	  ```
		<article>
			<header>
				<hgroup>
					<h1>Article title</h1>
					<h2>sub title</h2>
				</hgroup>
				<p><time datetime="2015-10-10">2015-10-10</time></p>
			</header>
			<div>
				content of article
			</div>
			<footer>
				footer of article
			</footer>
		</article>
	  ```
  * Done at 2015-10-26 14:53  

* video 3: address元素和網頁編排規則
	* address, 呈現聯繫信息或作者名稱
		* demo-adress
		```
			<address>
				<a href="#">iwen</a>
				<a href="#">ime</a>
			</address>
		```
		```
			<footer>
				<div>
					<address>
						<a href="#">iwen</p>
						<a href="#">ime</p>
						<time datetime="2015-10-10">2015-10-10</time>
					</address>
				</div>
			</footer>
		```
	* html5的結構
		* 大綱編排規則
		* point.1 顯示編排內容區域塊
		* point.2 隱式編排內容區域塊
		* point.3 標題分級
		* point.4 不同區域塊可使用相同標題
		* demo-structure
		```
			<head>
				<meta charset="utf-8">
				<title>網頁編排</title>
			</head>
			<body>
				<header>
					<h1>Webpage title</h1>
					<nav>
						<ul>
							<li><a href="#a">a</a></li>
							<li><a href="#b">b</a></li>
							<li><a href="#c">c</a></li>
						</ul>
					</nav>
				</header>
				<article>
					<hgroup>
						<h1>title h1</h1>
						<h2>sub h2</h2>
					</hgroup>
					<p>content</p>
					<section>
						<div>
							<article>
								<h1>title</h1>
								<p>content</p>
							</article>
						</div>
					</section>
				</article>
				<footer>
					<small>copyright</small>
				</footer>
			</body>
		```

    * Done at 2015-10-26 PM 15:33

### 4.HTML5 表单新增元素与属性

* video 1: form屬性和formaction屬性
	* html4的表單必須在form內; 在html5中, 則可書寫在任何地方, 屬性值為該表單的id
	* demo-form
	```
		<form id="testform">
			<input type="text">
		</form>
		<textarea form="testform></textarea>
	```
	* formaction屬性, 為提交按鈕增加不同的formaction屬性, 從而提交到不同的頁面
	* demo-fromaction
	```
		<form id="testform-formaction">
			<input id="user" name="user" type="text"></input>
			<textarea id="desc" name="desc"></textarea>
			<input type="submit" name="s1" value="v1" formaction="xx1.jsp">button1</input>
			<input type="submit" name="s1" value="v2" formaction="xx2.jsp">button2</input>
			<input type="submit" name="s1" value="v3" formaction="xx3.jsp">button3</input>
		</form>
		<!-- debug with tomcat 8.0015 -->
	```
	* Done at 2015-10-26 PM 15:48
	
* video 2: formmethod和formenctype屬性 (5:41)
	* formmethod屬性
		* 提交方法, get/post
		* demo-formmethod
		```
			<form id="testform-formmethod>
				<input id="user" name="user"></input>
				<input id="s1" value="v1" type="submit" formmethod="post">Post</input>
				<input id="s2" value="v2" type="submit" formmethod="get">Get</input>
			</form>
		```
	* forenctype屬性
		* 指定編碼方式
		* demo-formenctype
		```
			<form id="testform-formenctype">
				<input type="text" formenctype="text/plain">s1</input>
				<input type="text" formenctype="multipart/form-data">s2</input>
				<input type="text" formenctype="application/x-www-form-urlencoded">s1</input>
			</form>
		```
	* Done at 2015-10-26 PM 16:16
	
* video 3: formtarget屬性和autofocus屬性
	* formtarget屬性
		* formtarget, 指定在何處打開表單提交後所加載的頁面
		* demo-formtarget
		```
			<form id="testform-formtarget">
				<input type=submit name=s1 value=v1 formtarget="_blank" formaction="http://localhost/s1.jsp>s1</input>
				<input type=submit name=s1 value=v1 formtarget="_self" formaction="http://localhost/s1.jsp>s1</input>
				<input type=submit name=s1 value=v1 formtarget="_parent" formaction="http://localhost/s1.jsp>s1</input>
				<input type=submit name=s1 value=v1 formtarget="_top" formaction="http://localhost/s1.jsp>s1</input>
				<input type=submit name=s1 value=v1 formtarget="framename" formaction="http://localhost/s1.jsp>s1</input>
			</form>
		```
	* autofocus屬性
		* autofocus, 但畫面打開時, 該控件自動獲得光標橋店
		* demo-autofocus
		```
			<!-- 不能亂用 -->
			<form id="form-autofocus>
				<input type="text">
				<input type="text" autofocus>
			</form>
		```
	* Done at 2015-10-26 PM 16:26
	
* video 4: required屬性和labels屬性
	* required屬性
		* required, 不可為空
		* demo-required
		```
			<form id="form-required">
				<input id=name name=name type=text required="required">
				<button type=submit>
			</form>
		```
	* labels屬性
		* labels, 可為button, select綁定一個nodelist對象, 代表該元素所綁定的標籤元素所構成的集合
		* demo-labels
		```
			<script>
				function Validate() {
					var txtName = document.getElementById("txt_name");
					var button = document.getElementById("btnValidate");
					var form = document.getElementById("demo-labels");
					if (txtName.value.trim() == "") {
						var label = document.createElement("label");
						label.setAttribute("for", "txt_name");
						form.insertBefore(label, button);
						txtName.label[1].innserHTML = "plse input your name";
						txtName.label[1].setAttribute("style", "font-size:9px;color:red");
					}
				}
			</script>
			<form id=demo-labels>
				<labels id=label for=txt_name">name:</label>
				<input id="txt_name">
				<input type="button" id=btnValidate value=check onclick="validate()">
			</form>
		```
	* Done at 2015-10-26 PM 16:37
	
### 5.HTML5 表单新增元素与属性（续）

* video 1: control属性与placeholder属性
	* control属性
		* control, label的control属性
		* demo-control-label
		```
			<script>
				function setValue() {
					var label = document.getElementById("label");
					var textbox = label.control;
					textbox.value = "010010";
				}
			</script>
			<form id=demo-control-label>
				<label id=label>
					<input id=txt_zip maxlength=6>
					<small>Pls input 6 number</small>
				</label>
				<input type=button value=default onclick="">
			</form>
		```
	* placeholder属性
		* placeholder, 文本框的placeholder属性, 未输入时的输入提示, 输入时文字消失
		* demo-text-placeholder
		```
			<input type=text placeholder="user name">
		```
	* Done at 2015-10-27 AM 11：14
	
* video 2: list属性和AutoComplete属性
	* list属性
		* list, 单行文本框增加了list元素, 该值为datalist的元素id.
		* demo-list-property
		```
			<form id=demo-list-property>
				<input type=text name=greeting list=greetings>
				<datalist id=greetings style="display: none">
					<option value="h5">h5</option>
					<option value="android">android</option>
					<option value="js">js</option>
				</datalis>
			</form>
		```
	* AutoComplete属性
		* AutoComplete, 文本框的AutoComplete属性, 提高安全性
		* demo-autocomplete-property
		```
			<input type=text name=greeting autocomplete="off">
			<input type=text name=greeting autocomplete="on">
			<input type=text name=greeting autocomplete="" list="greetings">
		```
	* Done at 2015-10-27 AM 11:25
	
* video 3: pattern属性和SelectionDirection属性
	* pattern属性
		* 文本框的pattern, 设置某个正则表达式，提交时进行检查
		* demo-pattern-property
		```
			<form id=demo-pattern-property action="http://local/xx.jsp>
				<input pattern="[A-Z]{3}" name=part>
				<input type=submit>
			</form>
		```
	* SelectionDirection属性
		* 文本框selectionDirection, input/textarea, 正向选择(foreward), 反向选择(backward)
		* demo-SelectionDirection-property
		```
			<!-- for firefox -->
			<script>
				function AD() {
					var control = document.forms[0]['text'];
					var Direction = control.selectionDirection;
					alert(Direction);
				}
			</script>
			<form>
				<input type=text name=text>
				<input type=button value=click me onclick="AD()">
			</form>
		```
	* Done at 2015-10-27 AM 11:40
	
* video 4: indeterminate属性和image提交按钮的height属性与width属性
	* indeterminate属性
		* 复选框的indeterminate属性, 尚未明确是否选取
		* dmeo-indeterminate-property
		```
			<!-- 实际只有3中属性值 -->
			<input type=checkbox indeterminate id='cb'>property test
			<script>
				var cb = document.getElementById("cb");
				cb.indeterminate = true;
			</script>
		```
	* image提交按钮的height属性与width属性
		* demo-image-heightandwidth
		```
			<form action="http://local/xx.jsp" method=post>
				name: <input type=text name=name>
				<input type="image" src="billd7.gif" alt=edit width=50 height=50>
			</form>
		```
	* Done at 2015-10-27 PM 12:39
	
### 6.HTML5 改良的 input 元素的种类
* video 1: 改良与增加 input 元素的种类 08:12
	* input-url
	```
		<form>
			<input name=url type=url value="http://www.163.com">
			<input type=submit value="submit">
		</form>
	```
	* input-email
	```
		<form>
			<input name=email type=email value="sky@163.com">
			<intput type=submit value=submit>
		</form>
	```
	* input-date
	```
		<form>
			<input name=date type=date>
			<intput type=submit value=submit>
		</form>
	```
	* input-time
	```
		<form>
			<input name=time type=time value="10:00">
			<intput type=submit value=submit>
		</form>
	```
	* input-datetime
	```
		<form>
			<input name=datetime type=datetime value="10:00">
			<intput type=submit value=submit>
		</form>
	```
	* input-datetime-local
	```
		<form>
			<input name=datetimelocal type=datetimelocal value="10:00">
			<intput type=submit value=submit>
		</form>
	```
	* Done at 2015-10-27 PM 14:45

* video 2: 改良与增加 input 元素的种类 06:50
	* input-month, <input name=month type=month value=2010-1-1>
	* input-week, <input name=week type=week>
	* input-number
	```
		<!-- demo 1 -->
		<input name=number type=number min="10" max="100" step=5 value=15>
		
		<!-- demo 2-->
		<script>
			function sum() {
				var n1 = document.getElementByName("num1");
				var n2 = document.getElementByName("num2");
				document.getElementByName("num3").valueAsNumber = n1 + n2;
			}
		</script>
		<form id=calculator>
			<input name=num1 type=number> + 
			<input name=num2 type=number> = 
			<input name=num3 type=number readonly>
			<input type=button value=calculate onclick>
		</form>
	```
	* Done at
	
* video 3: 改良与增加input元素种类(3)和表单验证 10:04
	* input-range <input name=range type=range value=5 min=0 max=10 step=5>
	* input-search <input name="search" type=search>
	* input-tel <input name="telephone" type=tel>
	* input-color <input name="color" type=color onchange="document.body.style.backgroundcolor = document.getElementById('').textContent.text>
	* input-output 
	```
		<script>
			function value_change() {
				var number = document.getElementById("range").value;
				document.getElementById("output").value = number;
			}
		</script>
		<form id="testform">
			<input id=range type=range min=0 max=100 step=5 value=10 onchange="value_change()">
			<output id=output>10</output>
		</form>
	```
	* input-表单的验证
	```
		<script>
			function check() {
				var email = document.getElementById("email");
				if (email.value == "") {
					alert('pls input email');
					return false;
				} else if (!email.checkValidity()) {
					alert('pls input right email');
					return false;
				}
			}
		</script>
		<form id=testform onsubmit="" novalidate="true">
			<label for="">Email</label>
			<input name=email type=email id=email><br/>
			<input type=submit>
		</form>
	```
	* Done at 2015-10-27 PM 15:21

### 7.HTML5 增强的页面元素
* video 1: figure、figcaption、details、summary和mark元素 09:30
	* figure, figcaption
	```
		<figure>
			<img src="1.jpg" alt="beauty">
			<img src="2.jpg" alt="beauty">
			<img src="3.jpg" alt="beauty">
			<figcaption>beauty</figcaption> <!-- only one -->
		</figure>
	```
	* details, summary
	```
		<script>
			function detail_onclick(detail) {
				var p = document.getElementById("p");
				if (detail.open) {
					p.style.visibility = "hidden";
				} else {
					p.style.visibility = "visiable";
				}
			}
		</script>
		<details id="details" onclick="detail_onclick(this)">
			<summary>need speed</summary>
			<p id="p" style="visibility:hidden">Hello</p>
		</details>
	```
	* mark, 高亮、突出显示 <p>hello <mark>world</mark></p>
	* Done at 2015-10-27 15:34
* video 2: progress和meter元素 09:08
	* progress, 进度条
	```
		<script>
			function btn() {
			
				// not sucess!
				// for(var i=0; i<100; i++) {
				// setTimeout(function(){
				//	updateProgress(i);
				// }, 100);
				// }
				
				// right !
				var i = 0;
				function thread_one() {
					if (i <= 100) {
						i++;
						updateProgress(i);
					}
				}
				setInterval(thread_one, 100);
			}
			function updateProgress(newValue) {
				var progressBar = document.getElementById("p");
				progressBar.value = newValue;
				progressBar.getElementByTagName("span")[0].textContent = newValue;
			}
		</script>
		<section>
			<h2>progress</h2>
			<p>Done <progress id=p max=100 style="backgroundcolor: #269abc"><span>0</span></progress></p>
			<input type=button onclick="btn()" value=click>
		</section>
	```
	* meter, 规定范围的数值量
	```
		<meter value=10 min=0 max=100 low=10 high=90 optimum=80></meter>
		<meter>40/100</meter>
	```
	* Done at 2015-10-27 PM 16:01
* video 3: ol、dl、cite 和 small元素 04:46
	* ol, dl
	```
		<ol start=5 reversed>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ol>
		<dl>
			<dt>Hello</dt>
			<dd>C</dd>
			<dt>Blog</dt>
			<dd>like</dd>
		</dl>
	```
	* cite, 表示作品标题 <p>Movie<cite>need speed</cite></p>
	* small, 不改变字号 <p>Movie<small>need speed</small></p>
	* Done at 2015-10-27 PM 16:06

### 8.HTML5 编辑API之Range 对象（一）
* video 1: Range 对象基本概念 06:04
	* range, 代表页面上的一段连续区域
	* demo
	```
		<script>
			function rangeTest() {
				var html;
				showRangeDiv = document.getElementById("showRange");
				selection = document.getSelection();
				if (selection.rangeCount > 0) {
					html = "you pick up > " + selection.rangeCount + ".<br/>"
					for(var i = 0; i<selection.rangeCount; i++) {
						var range = selection.getRangeAt(i);
						html += "ID" + (i+1) + " content: " + range + ".<br/>";
					}
					showRangeDiv.innerHTML = html;
				}
			}
		</script>
		Selection object and range object
		<input type="button" value="clickme" onclick="">
		<div id="showRange"></div>
	```
	* Done at 2015-10-27 PM 16:19
	* TODO, Jedi-需要复习
* video 2: Range方法之SelectNode等方法 05:23
	* SelectNode
	* SelectNodeContents
	* deleteContents
	```
		<script>
			function deleteRangeContent(onlyContent) {
				var div = document.getElementById("div");
				var rangeObj = document.createRange();
				if (onlyContent) {
					rangeObj.selectNodeContents(div);
					rangeObj.deleteContents();
				} else {
					rangeObj.selectNode(div);
					rangeObj.deleteContents();
				}
			}
		</script>
		<div id="div" style="background-color: #e0a0b0;width: 300px;height:50px">
			content of div
		</div>
		<button type=button onclick="deleteRangeContent(true)">delete content</button>
		<button type=button onclick="deleteRangeContent(false)">delete element</button>
	```
	* Done at 2015-10-27 PM 16:56
* video 3: Range方法之setStartsetEnd等方法 08:07
	* setStart(), setEnd()
	```
		<script>
			function deleteChar() {
				var div = document.getElementById('mydiv');
				var textNode = div.firstChild;
				var rangeObj = document.createRange();
				rangeObj.setStart(textNode, 1);
				rangeObj.setEnd(textNode, 4);
				rangeObj.deleteContents();
			}
		</script>
		<div id=mydiv style="background-color: red">
			mydiv content
		</div>
		<input type=button value="delete">
	```
	* setStartBefore(), setStartAfter(), setEndBefore(), setEndAfter()
	```
		<script>
			function deleteRow() {
				var table = document.getElementById("mytable");
				if (table.rows.length > 0) {
					var row = table.rows[0];
					var rangeObj = document.createRange();
					rangeObj.setStartBefore(row);
					rangeObj.setEndAfter(row);
					rangeObj.deleteContents();
				}
			}
		</script>
		<table id=mytable border="1" cellspacing=0>
			<tr>
				<td>1</td>
				<td>2</td>
			</tr>
			<tr>
				<td>1</td>
				<td>2</td>
			</tr>			
		</table>
		<input type=button value="delete 1st row" onclick="deleteRow()">
	```
	* Done at 2015-10-27 PM 17:05
	
### 9. HTML5 编辑 API 之 Range 对象（二）
* video 1: Range 对象方法 08:45
	* cloneRange
	```
		<script>
			function cloneRange() {
				var rangeObj = document.createRange();
				rangeObj.selectNodeContents(document.getElementById("p"));
				var rangeClone = rangeObj.cloneRange();
				alert(rangeClone.toString());
			}
		</script>
		<p id=p>something</p>
		<input type=button onclick="cloneRange()">
	```	
	* cloneContents
	```
		<script>
			function cloneContent() {
				var div = document.getElementById("div");
				var rangeObj = document.createRange();
				rangeObj.selectNodeContents(div);
				var docFrangMent = rangeObj.cloneContents();
				div.appendChild(docFrangMent);
			}
		</script>
		<div id="div">
			Hello android <br/>
			<intput type=button onclick="cloneContent()">
		</div>
	```
	* extractContent
	```
		<script>
			function moveContent() {
				var srcDiv = document.getElementById("srcDiv");
				var disDiv = document.getElementById("desDiv");
				var rangeObj = document.createRange();
				rangeObj.selectNodeContents(srcDiv);
				var docFragment = rangeObj.extractContent();
				disDiv.appendChild(docFragment);
			}
		</script>
		<div id="srcDiv" style="background-color: aquamarine; width: 300px; height: 50px">Hello</div>
		<div id="desDiv" style="background-color: bisque; width: 300px; height: 50px"></div>
		<input type=button onclick="moveContent()">
	```
	* Done at 2015-10-27 PM 17:26
* video 2: Range对象方法之insertNode、compareBoundaryPoints方法 08:11
	* insertNode
	```
		<script>
			// 移动btn到指定位置
			function moveButton() {
				var btn = document.getElementById('button');
				var selection = document.getSelection();
				if (selection.rangeCount > 0) {
					var range = selection.getRangeAt(0);
					range.insertNode(btn);
				}
			}
		</script>
		<div onmouseup="moveButton()" style="width:400px; background-color: gray">
			something will happen
		</div>
		<button id="button">button</button>
	```
	* compareBoundaryPoints, 比较两个对象的起点位置、终点位置
	```
		<script>
			function testSelection() {
				var boldText = document.getElementById("boldTest");
				var boldRange= document.createRange();
				boldRange.selectNodeContents(boldText.firstChild);
				var selection = document.getSelection();
				if (selection.rangeCount > 0) {
					var selRange = selection.getRangeAt(0);
					if (selRange.compareBoundaryPoints(Range.START_TO_END, boldRange) <= 0) {
						alert("选取的文字在粗体前面");
					} else {
						if (selRange.compareBoundaryPoints(Range.END_TO_START, boldRange) >= 0) {
							alert("选取的文字在粗体后面");
						}
					}
				}
			}
		</script>
		Some <b id="boldTest">text</b> in the body.<br/>
		<button onclick="testSelection()">compare</button>
	```
	* Done at 2015-10-27 PM 17:40
	* TODO, Jedi-需要复习
	
* video 3: Range对象方法之collapse、detach方法 04:07
	* collapse, 移动到终点或起点
	```
		<script>
			var rangeObj = document.createRange();
			function selectRangeContents() {
				var div = document.getElementById("div");
				rangeObj.selectNode(div);
				rangeObj.detach();
			}
			function unselect() {
				rangeObj.collapse(false);
			}
			function showRange() {
				alert(rangeObj.toString());
			}
		</script>
		<div id="div" style="background-color: bisque;width: 300px; height: 50px">
			some content;
		</div>
		<button onclick="selectRangeContents()">select element</button>
		<button onclick="unselect()">cancle select</button>
		<button onclick="showRange()">echo range content</button>
	```
	* detach, 释放range对象
	* Done at 2015-10-27 PM 17:47
	* TODO, Jedi-需要复习
	
### 10.HTML5 音频视频
* video 1: HTML5音频播放 05:38
	* demo
	```
		// mp3, ogg
		<audio src="raw/1.mp3" controls="controls">not support</audio>
		<audio src="raw/1.mp3" id='mp3'>not support</audio>
		<button onclick="clickA()"></button>
		<script>
			var a documenet.getElementById('mp3');
			function clickA() {
				if (a.paused) {
					a.play();
				} else {
					a.paused();
				}
			}
		</script>
	```
	* Done at 2015-10-27 PM 18:30
	
* video 2: HTML5音频视频-编解码工具 07:27
	* 视频播放需要指定编解码工具
	* ffmpeg
	```
		// mp4 -> ogg
		ffmpeg -i 3.mp4 -acodec libvorbis 3.ogg
	```
	* Done at 2015-10-27 PM 18:38
	
* video 3: HTML5音频视频-视频播放 07:46
	* demo
	```
		<video src="raw/3.mp4" controls="controls">not support</video>
		<video src="raw/3.ogg" controls="controls">not support</video>
		
		<!-- for firefox-->
		<video id="ogg3" width=500px height=500px>
			<source src="raw/3.mp4">
			<source src="raw/3.ogg">
		</video><br/>
		
		<button onclick="clickV"></button>
		<button onclick="setSize(800, 800)"></button>
		<button onclick="setSize(300, 300)"></button>
		<script>
			var a documenet.getElementById('ogg3');
			function clickV() {
				if ( a.paused ) {
					a.play();
				} else {
					a.paused();
				}
			}
			function setSize(width, height) {
				a.width = width;
				a.height = height;
			}
		</script>
	```
	* Done at 2015-10-27 PM 18:48
	
### 11.HTML5拖
