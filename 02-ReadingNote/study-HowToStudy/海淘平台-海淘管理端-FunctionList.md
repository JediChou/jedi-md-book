# 海淘平台功能列表

## Base Information

* [Demo link](http://wx.huihedian.com)
* account: 15036097135
* password: 111111

## 商城管理

### 商城管理*商城信息

* 商城信息设置
  * [URL](http://wx.huihedian.com/System/shopInfo)
  * UI
    * 分销商城名称 (Text)
    * 分销商城客服 (Text)
    * 商城客服电话 (Text)
    * 商城头像商标 (Image)
    * 分销商程简介 (Text)
    * 商城版权信息 (Text)
    * 商城技术支持 (Text + Option: [开启显示, 关闭隐藏] )
    * 验证手机号码 (Option: [开启验证, 关闭验证])
    * 商城分店功能 (Option: [开启分店, 关闭分店])
    * 商城分店名称 (Option: [允许修改, 禁止修改])
    * 分店名称前缀 (Text)
    * 商城悬浮按纽 (Option: [开启悬浮, 关闭悬浮])
    * 微信授权设置 (Option: [开启授权, 关闭授权])
    * 预存金额体现 (Option: [允许提现, 禁止体现])
    * 保存 (Button)
  * Operation
    * Normal: Modify
    * Special Verify*分销商城简介: 在微信链接分享描述中显示
    * Special Verify*验证手机号码: 关闭后, 将不发送短信验证手机号, 验证短信是付费功能, 如无需要请关闭
    * Special Verify*微信授权设置: 选择关闭授权, 将不授权获取会员的微信头像和昵称
    * Special Verify*预存现金提现: 开启后, 预存金额可以提现
  
* 会员中心设置
  * [URL](http://wx.huihedian.com/System/shopInfo)
  * UI
    * 分销按纽文字 (Text)
    * 商城底部链接 (Option: [显示链接, 隐藏链接])
    * 会员中心广告 (Option: [开启广告, 关闭广告])
    * 会员中心广告图 (File Selector)
    * 广告图片链接 (Text*Link)
    * 虚拟会员数量 (Number)
    * 产品销售记录 (Option: [显示记录, 隐藏记录])
    * 会员退款设置 (Option: [付款后即可退款, 发货后才可退款])
    * 登录短信验证 (Option: [开启验证, 关闭验证])
    * 保存 (Button)
  * Operation
    * Normal: Modify
    * Special Verify*分销按纽文字: 此文字在产品详情中分销引导按纽上显示
    * Special Verify*会员中心广告: 鼠标放上可以查看例图
    * Special Verify*广告图片链接: 链接请以http开头
    * Special Verify*产品销售记录: 开启后, 产品详情页将显示销售记录
    * Special Verify*登录短信验证: 开启此功能，登录后台需要手机短信验证，手机短信验证需充值短信数量
  
* 批量转账设置
  * [URL](http://wx.huihedian.com/System/shopInfo)
  * UI
    * 支付宝批量转账 (Option:[开启批量转账, 关闭批量转账])
    * 微支付批量转账 (Option:[开启批量转账, 关闭批量转账])
    * 姓名真实性校验 (Option:[必须真实姓名, 无需真实姓名])
    * 上传apiclient_key (File Selector)
    * 上传apiclient_cert (File Selector)
  * Operation
    * Normal: Modify
    * Special Verify*支付宝批量转账: 此功能用于支付宝批量自动发放佣金，手工打款发放佣金的商城,请勿开通此功能，开启前，请先去支付宝签约
    * Special Verify*微支付批量转账: 此功能用于微信支付批量自动发放佣金，手工打款发放佣金的商城,请勿开通此功能，开启前，请先开通微信企业付款
    * Special Verify*姓名真实性校验: 用于微支付批量转账时，检验是否需要验证用户真实姓名,建议选择无需要真实姓名，选择必须真实姓名有些非真实姓名会支付失败
    * Special Verify*上传apiclient_key: 登录商户平台－安全设置－API安全下载证书
    * Special Verify*上传apiclient_cert: 登录商户平台－安全设置－API安全下载证书
  
* 产品价格显示
  * [URL](http://wx.huihedian.com/System/shopInfo)
  * UI
    * 商品原价显示 (Option: [显示商品原价, 关闭商品原价])
    * 打折商品现价 (Option: [有打折也显示现价, 有打折不显示现价])
    * 产品描述留白 (Option: [开启两边留白, 关闭两边留白])
    * 保存 (Button)
  * Operation
    * Normal Operation: Modify
  
* 购物条件设置
  * [URL](http://wx.huihedian.com/System/shopInfo)
  * UI
    * 购物需要身份证 (Option: [开启, 关闭])
    * 佣金转余额审核 (Option: [开启, 关闭])
    * 购物时填邮箱 (Option: [开启, 关闭])
    * 保存 (Button)
  * Operation
    * Normal Operation: Modify
    * Special Verify*购物时填邮箱: 开启后，收货地址需要填写邮箱。

## 商城管理*修改密码

* [URL](http://wx.huihedian.com/System/updatepwd)
* UI
  * 输入新密码 (Text)
  * 重复新密码 (Text)
  * 保存设置 (Button)
* Operation
  * Normal Operation: Modify
  * Special Verify*输入新密码: 密码不能少于6位数

## 商城管理*功能名称

* 会员中心
  * [URL](http://wx.huihedian.com/System/setFunction)
  * UI
    * "会员中心"名称 (Text)
    * “我的积分”名称 (Text)
    * “账户充值”名称 (Text)
    * “余额提现”名称 (Text)
    * “已付款订单”名称 (Text)
    * “已收藏商品”名称 (Text)
    * “修改资料”名称 (Text)
    * “地址管理”名称 (Text)
    * “会员等级与特权”名称 (Text)
    * “会员互动”名称 (Text)
  * Operation
    * Normal Operation: Save, Reset
    * Special Verify*会员中心名称: Required
    * Special Verify*我的积分名称: Required
    * Special Verify*账户充值名称: Required
    * Special Verify*余额提现名称: Required
    * Special Verify*已付款订单名称: Required
    * Special Verify*已收藏商品名称: Required
    * Special Verify*修改资料名称: Required
    * Special Verify*地址管理名称: Required
    * Special Verify*会员等级与特权名称: Required
    * Special Verify*会员互动名称: Required

* 分销中心
  * [URL](http://wx.huihedian.com/System/setFunction/type/2.html)
  * UI
    * 分销中心名称 (Text)
    * 分销专题名称 (Text)
    * 分销产品名称 (Text)
    * 分销商名称 (Text)
    * 我的分销商名称 (Text)
    * 会员名称 (Text)
    * 分销订单名称 (Text)
    * 我的佣金名称 (Text)
    * 上月佣金排行名称 (Text)
    * 店中店名称 (Text)
    * 我的上级名称 (Text)
    * 保存 (Button)
    * 重置 (Button)
  * Operation
    * Normal Operation: Save, Reset
    * Special Verify*分销中心名称: Required
    * Special Verify*分销专题名称: Required
    * Special Verify*分销产品名称: Required
    * Special Verify*分销商名称: Required
    * Special Verify*我的分销商名称: Required
    * Special Verify*会员名称: Required
    * Special Verify*分销订单名称: Required
    * Special Verify*我的佣金名称: Required
    * Special Verify*上月佣金排行名称: Required
    * Special Verify*店中店名称: Required
    * Special Verify*我的上级名称: Required

* 下级字样
  * [URL](http://wx.huihedian.com/System/setFunction/type/3.html)
  * UI
    * 一级分销名称 (Text)
    * 二级分销名称 (Text)
    * 三级分销名称 (Text)
    * 保存 (Button)
    * 重置 (Button)
  * Operation
    * Normal Operation: Save, Reset
    * Special Verify*一级分销名称: Required
    * Special Verify*二级分销名称: Required
    * Special Verify*三级分销名称: Required

* 会员下级字样
  * [URL](http://wx.huihedian.com/System/setFunction/type/4.html)
  * UI
    * 一级会员名称 (Text)
    * 二级会员名称 (Text)
    * 三级会员名称 (Text)
    * 保存 (Button)
    * 重置 (Button)
  * Operation
    * Normal Operation: Save, Reset
    * Special Verify*一级会员名称: Required
    * Special Verify*二级会员名称: Required
    * Special Verify*三级会员名称: Required

## 商城管理*绑定域名

* [URL](http://wx.huihedian.com/System/bind_domain)
* UI
  * 域名 (Text)
  * 备案号 (Text)
  * 状态 (Static Text)
  * 保存 (Button)
* Operation
  * Normal Operation: Save

## 商城管理*浮动公告

* [URL](http://wx.huihedian.com/System/affiche)
* UI
  * 提示 (Float Div)
  * 浮动公告功能 (Option:[开启, 关闭])
  * 鼠标放上可查看例图 (Float Div)
  * 保存设置 (Button)
* Operation
  * Operation: Save
  * Special Verify*提示: Close
  * Special Verify*鼠标放上可查看例图: Check

## 模板管理*商城模板

* [URL](http://wx.huihedian.com/Shop/list_homepage)

* 当前使用的模板
  * UI
    * 模板预览图 (Image)
    * 模板名称 (Static Text)
    * 商城首页链接 (Static Link)
    * 分销申请链接 (Static Link)
    * 复制1 (Button*复制商城首页链接)
    * 复制2 (Button*复制分销申请链接)
    * 商城首页二维码 (Image)
    * 分销申请二维码 (Image)
    * 编辑 (Button)
  * Operation
    * 复制商城首页链接
    * 复制分销申请链接
    * 扫描商城首页二维码
    * 扫描分销申请二维码
    * 编辑当前使用的模板

* 可使用的模板
  * UI
    * 模板列表 (List 4*n)
    * 启用 (Button)
    * 编辑 (Button)
  * Operation
    * 启用
    * 编辑

* 编辑
  * 富文本
    * Operation: 源代码
    * Operation: 加粗
    * Operation: 下划线
    * Operation: 删除线
    * Operation: 字体颜色
    * Operation: 背景色
    * Operation: 居左对齐
    * Operation: 居中对齐
    * Operation: 居右对齐
    * Operation: 无序列表
      * 方式1
      * 方式2
      * 方式3
      * 方式4
      * 方式5
    * Operation: 有序列表
      * 方式1
      * 方式2
      * 方式3
      * 方式4
      * 方式5
      * 方式6
      * 方式7
      * 方式8
      * 方式9
      * 方式10
      * 方式11
    * Operation: 引用
    * Operation: 插入表格
    * Operation: 删除表格
    * Operation: 表格前插入行
    * Operation: 右合并单元格
    * Operation: 下合并单元格
    * Operation: 拆分成行
    * Operation: 拆分成列
    * Operation: 完全拆分单元格
    * Operation: 合并多个单元格
    * Operation: 前插入列
    * Operation: 删除列
    * Operation: 删除行
    * Operation: 段落格式
    * Operation: 字号
    * Operation: 添加图片
    * Operation: 表情
    * Operation: 超链接
    * Operation: 消除格式
    * Operation: 段后距离
    * Operation: 段前距离
    * Operation: 行间距离
  * 标题
    * Operation: 修改标题名称
    * Operation: 设置显示类型 (Option:[样式一, 样式二, 样式三, 样式四])
    * Operation: 设置显示方式 (Option:[居左, 居中, 居右])
  * 自定义模块
    * Operation: 修改
  * 商品
    * Operation: 设置布局方式 (Option:[小图, 大图, 一大两小, 列表, 双列有标题])
    * Operation: 选择商品进行绑定
  * 商品列表
    * Operation: 设置布局方式 (Option:[小图, 大图, 一大两小, 列表])
    * Operation: 选择商品分组
    * Special*Verify: 选择商品分组后, 左侧实时预览暂不支持显示其包含的商品数据
    * Operation: 显示商品个数 (Option:[6,12,18])
  * 商品搜索
    * Operation: 执行搜索
  * 文本导航
    * Operation: 选择商品链接
    * Operation: 设置导航名称
    * Operation: 添加新的商品导航链接
    * Operation: 删除已有商品导航链接
    * Operation: 调整商品导航链接*向上调整
    * Operation: 调整商品导航链接*向下调整
  * 图片导航
    * Operation: 选择商品链接
    * Operation: 设置导航名称
    * Operation: 添加新的商品导航链接
    * Operation: 删除已有商品导航链接
    * Operation: 调整商品导航链接*向上调整
    * Operation: 调整商品导航链接*向下调整
  * 图片广告
    * Operation: 设置显示方式 (Option:[折叠轮播, 分开显示])
    * Operation: 设置整体上下留白方式 (Option:[是, 否])
    * Operation: 添加新的图片链接
    * Operation: 设置新的图片标题
    * Operation: 调整图片链接*向上调整
    * Operation: 调整图片链接*向下调整
    * Operation: 删除图片链接
  * 分割线
    * Operation: 添加分割线
    * Operation: 删除分割线
  * 辅助空白
    * Operation: 添加辅助空白
    * Operation: 删除辅助空白
    * Operation: 设置高度 (Option:[1..100px])
  * 顶部菜单
    * Operation: 显示导航类型 (Option:[纯文字导航, 小图标导航])
    * Operation: 设置是否显示边距 (Option:[无边距, 有边距])
    * Operation: 编辑纯文字导航*设置链接目标
    * Operation: 编辑纯文字导航*设置导航名称
    * Operation: 编辑纯文字导航*设置背景颜色
    * Operation: 编辑纯文字导航*设置文字颜色
    * Operation: 新增纯文字导航
    * Operation: 删除纯文字导航
    * Operation: 调整纯文字导航*向上调整
    * Operation: 调整纯文字导航*向下调整
    * Operation: 编辑小图标导航*设置链接目标
    * Operation: 编辑小图标导航*设置导航名称
    * Operation: 编辑小图标导航*修改
    * Operation: 编辑小图标导航*上传
    * Operation: 编辑小图标导航*背景颜色
    * Operation: 编辑小图标导航*文字颜色
    * Operation: 新增小图标导航
    * Operation: 删除小图标导航
    * Operation: 调整小图标导航*向上调整
    * Operation: 调整小图标导航*向下调整
  * 橱窗
    * Operation: 设置布局方式 (Option:[2列, 3列])
    * Operation: 设置链接目标 (Option:[选择产品, 产品分组, 专题页面, 页面分类, 营销活动, 商城主页, 会员主页, 分销申请, 全部产品, 购物车, 产品分类, 自定义链接])
  * 视频
    * Operation: 设置视频地址
    * Operation: 添加视频
    * Operation: 删除视频
    * Special*Verify: 仅支持腾讯视频, 一定填写带有vid或者sid的视频地址
  * 音频
    * Operation: 设置显示头像
    * Operation: 选择语音*mp3
    * Operation: 选择语音*wma
    * Operation: 选择语音*wav
    * Operation: 选择语音*amr
    * Operation: 添加语音
    * Operation: 删除语音
  * 公告
    * Operation: 添加公告
    * Operation: 删除公告
    * Operation: 设置公告内容
    * Operation: 内容过长会自动显示
  * 商品分类
    * Operation: 添加商品分类
    * Operation: 删除商品分类
    * Operation: 设置显示方式 (Option:[瀑布流, 对齐])
    * Operation: 设置商品分类属性*链接目标 (Option:[选择产品, 产品分组, 专题页面, 页面分类, 营销活动, 商城主页, 会员主页, 分销申请, 全部产品, 购物车, 产品分类, 自定义链接])
    * Operation: 设置商品分类属性*分类名称
    * Operation: 设置商品分类属性*背景颜色
    * Operation: 设置商品分类属性*文字颜色

## 模板管理*会员中心

* [URL](http://wx.huihedian.com/Shop/user_center)
* UI
  * 预览页 (Float DIV)
  * 等级 (Checkbox)
  * ID (Checkbox)
  * 顶部背景图 (Image Selector)
  * 会员中心-我的积分 (Checkbox)
  * 会员中心-我的优惠券 (Checkbox)
  * 会员中心-账户充值 (Checkbox)
  * 会员中心-余额体现 (Checkbox)
  * 会员中心-我的订单 (Checkbox)
  * 会员中心-已收藏商品 (Checkbox)
  * 会员中心-修改资料 (Checkbox)
  * 会员中心-会员等级与特权 (Checkbox)
  * 会员中心-会员互动 (Checkbox)
  * 分销中心-分销专题 (Checkbox)
  * 分销中心-分销产品 (Checkbox)
  * 分销中心-我的分销商 (Checkbox)
  * 分销中心-我的会员 (Checkbox)
  * 分销中心-分销订单 (Checkbox)
  * 分销中心-我的佣金 (Checkbox)
  * 分销中心-上月佣金排行 (Checkbox)
  * 分销中心-店中店 (Checkbox)
  * 分销中心-二维码 (Checkbox)
  * 分销中心-推广名片 (Checkbox)
* Operation
  * 设置预览页
  * 设置等级
  * 设置ID
  * 顶部背景图
  * 设置-会员中心-我的积分
  * 设置-会员中心-我的优惠券
  * 设置*会员中心*账户充值
  * 设置*会员中心*余额体现
  * 设置*会员中心*我的订单
  * 设置*会员中心*已收藏商品
  * 设置*会员中心*修改资料
  * 设置*会员中心*会员等级与特权
  * 设置*会员中心*会员互动
  * 设置*分销中心*分销专题
  * 设置*分销中心*分销产品
  * 设置*分销中心*我的分销商
  * 设置*分销中心*我的会员
  * 设置*分销中心*分销订单
  * 设置*分销中心*我的佣金
  * 设置*分销中心*上月佣金排行
  * 设置*分销中心*店中店
  * 设置*分销中心*二维码
  * 设置*分销中心*推广名片

## 模板管理*商城导航

* [URL](http://wx.huihedian.com/Shop/navigation)
* UI
  * 设置页面导航页 (Option:[商城主页:Checkbox, 会员主页:Checkbox, 专题主页:Checkbox, 商品列表页:Checkbox])
  * 设置
* Operation

## 模板管理*分销说明

## 模板管理*分销二维码

## 模板管理*自定义通用模块

## 模板管理*详情公共模块

## 模板管理*产品限购提示页

## 自定义专题*分销专题

## 自定义专题*专题分类

## 产品管理

### 产品管理*上传产品

### 产品管理*出售中的产品

### 产品管理*仓库中的产品

### 产品管理*已售罄的产品

### 产品管理*警戒的产品

### 产品管理*自定义类目

### 分组管理*产品分组

### 分组管理*产品分类

## 订单管理

### 订单管理*所有订单

### 订单管理*导出订单

### 订单管理*删除日志

### 订单管理*备份订单导入

### 售后服务*退/换货审核

### 售后服务*产品评价

### 售后服务*自定义评价

### 物流管理*运费模板

### 物流管理*快递单模板

### 物流管理*货到付款

### 物流管理*提货点管理

## 用户管理

## 会员列表

## 会员等级

## 会员权益

## 会员导出

## 站内信

## 会员分组

## 备份会员导入

# 代理商管理

## 分销商管理
* URL:
* UI
* Operation

## 分销商审核

## 分销商等级

## 分销商导出

## 分销商分组

## 佣金排名设置

## 佣金调整日志

## 分销商审核日志

# 佣金管理

## 提现申请管理

## 提现记录

## 账号充值记录

## 分销商佣金列表

## 资金监控日志

## 返利统计

## 佣金转余额审核列表

# 营销管理

## 营销管理*每日签到设置

## 营销管理*优惠券管理

## 营销管理*扫码送优惠券

## 营销管理*购物送优惠券

## 营销管理*购物分享送优惠券

## 营销管理*满额包邮

## 营销管理*关注送积分

## 营销管理*分享送积分

## 营销管理*充值送积分

## 营销管理*积分兑换产品

## 营销管理*积分日志

## 营销管理*限时秒杀

## 营销管理*限时打折

## 群发*微信群发

## 群发*微信群发统计

## 群发*站内信群发

## 群发*站内信群发统计

## 群发*短信群发

## 群发*短信群发统计

# 活动管理

## 幸运大转盘

## 疯狂砸金蛋

## 好运翻翻看
* URL:
* UI
* Operation

## 骰子大王
* URL:
* UI
* Operation

## 奖品列表
* URL:
* UI
* Operation

# 素材管理

## 素材库管理

* 所有图文
  * URL:
  * UI
  * Operation
  
* 单条图文
  * URL:
  * UI
  * Operation
  
* 多条图文
  * URL:
  * UI
  * Operation

# 系统设置

## 系统设置*支付宝收款账号
* URL:
* UI
* Operation

## 系统设置*微信收款账号
* 主公众号
  * URL:
  * UI
  * Operation
  
* 第二公众号
  * URL:
  * UI
  * Operation
  
* 第三公众号
  * URL:
  * UI
  * Operation
  
* 第四公众号
  * URL:
  * UI
  * Operation

## 系统设置*佣金设置
* URL:
* UI
* Operation

## 系统设置*提现设置
* URL:
* UI
* Operation

## 系统设置*积分比例
* URL:
* UI
* Operation

## 系统设置*分销申请设置
* URL:
* UI
* Operation

## 系统设置*分销商自动审核设置
* URL:
* UI
* Operation

## 系统设置*成为分销商等级设置
* URL:
* UI
* Operation

## 系统设置*代理设置
* URL:
* UI
* Operation

## 系统设置*自动确认收货设置
* URL:
* UI
* Operation

## 系统设置*自动取消订单设置
* URL:
* UI
* Operation

## 微信设置*首次关注
* URL:
* UI
* Operation

## 微信设置*自动回复
* URL:
* UI
* Operation

## 微信设置*信息托管
* URL:
* UI
* Operation

## 微信设置*自定义菜单
* URL:
* UI
* Operation

## 微信设置*微信设置
* 主公众号
  * URL:
  * UI
  * Operation
  
* 第二公众号
  * URL:
  * UI
  * Operation
  
* 第三公众号
  * URL:
  * UI
  * Operation
  
* 第四公众号
  * URL:
  * UI
  * Operation
  
## 微信设置*开通指引

* URL:
* UI
* Operation

## 微信设置*一键关注

* URL:
* UI
* Operation

## 微信设置*多客服

* URL:
* UI
* Operation

## 微信设置*消息设置

* URL:
* UI
* Operation

## 微信设置*模板消息

* URL:
* UI
* Operation

## 短信*发送记录

* URL:
* UI
* Operation

## 短信*短信充值

* URL:
* UI
* Operation

## 短信*充值记录

* URL:
* UI
* Operation

## 管理及权限*管理员

* URL:
* UI
* Operation

## 管理及权限*权限角色

* URL:
* UI
* Operation

## 系统日志*查看日志

* URL:
* UI
* Operation