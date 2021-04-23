# BAC document

## 3.5 降维

* pca (六维降两维）
* 因子分析
* 特征值

## 3.6 学习（神经网络）

* 原理讲解（有数学部分）

## 3.4 推荐算法

* 有3个数学方法
* 基于用户的协同过滤（根据项目找相似用户）
* 基于项目的协同过滤（根据用户找相似项目）

## 3.7 时间序列

* ARMA算法

## 7.1 html和css開發

## 7.2 取文件中的內容

## 7.3 使用request抓取网页

## 7.4 正則表達式

## 7.5 使用xpath获取网页的内容

## 7.6 使用beautifulsoap提取网页数据

* pattern: get content(requests) + parse (re, xpath, beautifulsoap) + dict
* 獲取數據的三個方法

## 8.1 Web与Python交互

## 8.2 Python访问数据库

* Jedi: 很糙.

## 8.3 Python人机交互

* Jedi: 都是淺嚐輒止

## 8.4 DbFirst開發Web

* Jedi: 真JB扯淡

## 8.5 Web調用Python

* Jedi: 這是副教授水平？
* Jedi: 至少应该讲个WebAPI！要再理解下刘老师的目的。

## 8.6 Python與Web聯動

## 8.7 Python生成數據Web繪圖

* Jedi: EChart
* Jedi: 廣告的成分比較多！何必咧～

深度学习应用开发-TensorFlow实践

## 深度神經網絡與深度學習框架

* Caffe, Caffe2 (優化時會用到C++)
* PyTorch (將Caffe2併入)
* MXNet (C++/Python/R/Julia/Go)
* CNTK
* Keras (高層庫)
* DL4J (Hadoop + Spark + Java + CPU/GPU)
* Chainer (學術型的，支持動態圖)
* PaddlePaddle (BaiDu)

* TensorFlow
* TensorBoard
* 支持計算圖可視化、度量可視化
* 從低層控制到高层应用，可供灵活选择
* 支持Estimator
  * Distributed Execution
  * Integrates TensorBoard
  * tensorflow serving,...
* 支持python, C++, java, go, c#, rust, julia, haskell, r, js, swift
* [The Definitive Guide to TensorFlow.NET](https://tensorflownet.readthedocs.io/en/latest/FrontCover.html)
* TensorFlow.js, TensorFlow lite
* Document: **0000 人工智能、机器学习与深度学习20-60.pdf**

## Anaconda與TensorFlow開發環境搭建

### Anaconda的下载

* www.anaconda.com/download
* 使用Python 3.6
* 清华镜像站: https://mirrors.tuna.tsinghua.edu.cn/anaconda/

### Anaconda的安装

* 建议版本：Anaconda3-4.2.0-Windows-x86_64.exe
* Anaconda修改国内镜像源

```text
通过conda config命令生成配置文件，这里使用清华的镜像：
https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
```

* 步骤

```shell
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --set show_channel_urls yes
```

* 查找配置文件(.condarc)，并删除其中的default
* 安装普通版本TensorFlow: conda install tensorflow
* 安装GPU版本TensorFlow: conda install tensorflow-gpu
* 测试是否安装成功（运行：加载库并显示版本号）

```python
import tensorflow as tf
tf.__version__
```

* doc: "第2章 TensorFlow开发环境搭建.pdf"
* doc: "0 Anaconda安装和环境配置.pdf"

## 第四讲 磨刀不误砍柴工：TensorFlow 编程基础

### TensorFlow的基础概念

* 视频, TensorFlow2 编程导学
* 文档, 导学讲义
* 视频, 还是先从HelloWorld讲起
* 视频, TensorFlow的计算模型：计算图
* 视频, 张量
* 视频, 操作
* 文档, 本节讲义

### TensorFlow的基本运算

* 视频, 会话
* 视频, 常量和变量
* 视频, 变量的赋值
* 视频, 占位符、Feed数据填充和Fetch数据获取
* 文档, 本节讲义

### TensorBoard可视化初步

* 视频, TensorBoard可视化初步-计算图
* 文档, 本节讲义

### （新）TensorFlow 2.0 编程基础

* 视频, TensorFlow 2.0 编程初体验
* 视频, Tensor 张量
* 视频, TensorFlow 2.0 中的常量与变量
* 视频, 在TensorFlow 2.0环境中实现TensorFlow 1.x代码的静态图执行模式
* 文档, 本节讲义

## 测试2：Tensorflow编程基础单元测试提交截止时间：2021/04/05 23:30 / 可尝试 2 次提交阶段
