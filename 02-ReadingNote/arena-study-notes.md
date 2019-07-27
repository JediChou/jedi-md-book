# arena

## ch2 仿真基本概念

### 2.1 一個示例

#### 2.1.1 示例系統

* 等待線、隊列（queue）
* 先進先出，First-In, First Out, FIFO
* 模型的邏輯結構
* 數值成分（numberical）
* 時間單位
* Arena允許用不同的單位表示輸入時間，單必須聲明基準時間單位
* 系統在第0分鐘時開始運行
* 空閒且，empty-and-idle
* 各種時間量（零件編號、零件到達時間、到達間隔時間、服務時間）

### 2.1.2 研究目標

* 目標：20分鐘加工過程中的總產量，total production
* 目標：尋找最優化的“平均排隊等待時間”
* 目標：尋找可接受的“最大排隊等待時間” maximum waiting time in queue
* 目標：尋找“排隊等待的零件數對時間的平均值” time-average number of parts waiting in the queue
* 目標：最大排隊等待零件數, maximum number of parts that were ever waiting int the queue
* 目標：平均與最大系統逗留時間, average and maximum total time in the system, cycle time
* 目標：鑽床單利用率, utilization

## 2.2 分析方法

### 2.2.1 根據經驗猜測

### 2.2.2 排隊論方法

* M/M/1
* u[s]**2/(u(a)**2-u[s]**2)
  * u[s]服務時間分佈的期望值
  * u[a]到達時間分佈的期望值
* Weakness
  * u[a], u[s]估值不精確，因此結果也會有誤差
  * 只有假設到達時間和服務時間服從指數分佈時才能得出
  * 模擬長時間運行方可使用該公式
  * 該公式沒有提供系統可變性

### 2.2.3 機械仿真

## 2.3 仿真模型的組成元素

### 2.3.1 實體

* entity, 即參與者（移動、改變心態）
* 複製品，該實體的實現，realization
* 故障惡魔, mistake evil

### 2.3.2 屬性

* attribute，屬性
* 屬性與具體的實體是不可分割的
* 屬性可看作局部變量, local variables

### 2.3.3 （全局）變量

* global variable
* Arena inside variables: 對長、處於忙態的服務器台數、當前仿真時鐘
* User define variables: 平均服務時間、運輸時間、當前班次等
* For example: Transfer time

### 2.3.4 資源

* 特定資源, resource
* unit, available unit

### 2.3.5 隊列

### 2.3.6 統計累加器

* 迄今為止所加工完的零件數量
* 迄今為止所有零件排隊時間之和
* 迄今為止所有完成排隊的零件數量（求平均排隊時間時，它將作為分母）
* 迄今為止所觀察到的最大排隊時間
* 迄今為止所有零件的
