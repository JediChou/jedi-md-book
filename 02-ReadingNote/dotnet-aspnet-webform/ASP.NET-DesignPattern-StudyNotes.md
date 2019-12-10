# ASP.NET设计模式

## Ch1. 成功应用程序的设计模式

* Target
  * 介绍“四人组”（Gang of Four, GoF）设计模式
  * 概述一些常见的设计原则和SOLID设计原则
  * 描述Fowler企业模式

* 设计模式的基础是坚实的面向对象设计原则

### 1.1 设计模式释义

* 设计模式是高层次的、抽象的解决方案模板
* Jedi: 即解决方案的解决方案，或解决方案的模板
* Jedi: 无法简单的将模式应用到程序中
* Jedi: 通过重构将问题泛化并实现设计模式
* Jedi: 设计模式不仅仅适用于软件开发

#### 1.1.1 起源

* Design Patterns: Elements of Reusable Object-Oriented Software
  * Author: Erich Gamma, Richard Helm, Ralph Johson, John Vlissides

* 23
  * 创建型模式
  * 结构型模式
  * 行为型模式

#### 1.1.2 必要性

* Jedi: 有效描述复杂问题的解决方案
* Jedi: 快速沟通
* Jedi: 快速转换成对成对象语言

#### 1.1.3 有效性

* 经典且受时间考验

#### 1.1.4 局限性

* 引用：设计模式并非银弹。
* 引用：您必须充分理解首要解决的问题，将其泛化。
* 陷阱：视图把设计模式运用到所做的每件事情，但最终取得的效果却与设计模式初衷相反。

### 1.2 设计原则

#### 1.2.1 常见设计原则

* KISS - 简约原则
* DRY - 不要重复自己
* Tell, Don't Ask - 讲述而不要询问
* YAGNI - 您不需要它
* SoC - 分离关注点

#### 1.2.2 SOLID设计原则

* SRP - 单一责任原则
* OCP - 开放封闭原则
* LSP - 里氏替换原则
* ISP - 接口分离原则
* DIP - 依赖倒置原则
* DI, IoC - 依赖注入和控制反转原则

### 1.3 Fowler的企业设计模式

* Patterns of Enterprise Application Architecture

#### 1.3.1 分层

* 细节在第3章

#### 1.3.2 领域逻辑模式

* 细节在第4章
* 组织业务逻辑的3种常见方法:
  * Transaction Script, 事务脚本
  * Active Record, 活动记录
  * Domain Model, 领域模型

#### 1.3.3 对象关系映射

* Unit of Work, 工作单元
* Repository, 资源库
* Data Mapper, 数据映射器
* Identity Map，标识映射
* Lazy Loading, 惰性加载或延迟加载
* Query Object, 查询对象

#### 1.3.4 Web表示模式

* 第8章
  * Focus 1: 业务逻辑与表示逻辑分离的模式
  * Focus 2: 让表现层有效测试的模式

* 模式
  * Model-View-Presenter, 模型-视图-表示器
  * Model-View-Controller, 模型-视图-控制器
  * Front Controller, 前端控制器
  * Page Controller, 页面控制器

#### 1.3.5 基本模式、行为模式和结构模式

* Null object - 空对象
* Separated Interface - 独立接口模式
* Gateway - 网关模式

### 1.4 其他有名的设计实践

#### 1.4.1 测试驱动设计

* TDD/Red-Green-Refactor
* Reference books
  * Test Driven Development: By Example, Kent Beck
  * The Art of Unit Testing: With Examples in .NET, Roy Osherove
  * Professional Enterprise .NET, Jon Arking & Scott Millett, (Wrox)

#### 1.4.2 领域驱动设计

* Domain-driven Design

#### 1.4.3 行为驱动设计

* Behavior-driven Design
* TDD + DDD

## Ch2. 剖析模式的模式

* Target
  * 如何使用设计模式阅读GoF设计模式
  * 学习并理解设计模式分组
  * 了解如何选择和应用设计模式
  * 利用一个快速示例来掩饰如何重构现有代码，以使用设计模式和原则，从而提高可维护性

### 2.1 GoF模式模板

#### 2.1.1 GoF模式模板

Jedi: 要重点掌握的概念

* 模式名称和分类：名称；类型: 创建型/结构型/行为型
* 意图：揭示该模型要设计解决的问题以及它为何有用。
* 别名：详细说明了某些模式的其他名称。
* 动机：描述了问题场景以及如何使用设计模式来解决它。
* 适用性: 设计模式具有优势的情况。
* 结构：即UML。
* 参与者：参与者就是设计模式中涉及的所有对象。
* 协助：详细说明了参与者如何合作以形成该设计模式。
* 效果：列举了在实现该设计模式时所带来的益处和需要权衡的问题。
* 实现: 详细说明了在该设计模式时的所有注意事项和最佳实践。
* 示例代码: 给出了设计模式的一种实现。
* 已知应用：给出了该模式在实际应用程序中的实现。
* 相关模式：列出了其他能够很好地与该设计模式协作或合作的模式

#### 2.1.2 简化模板

* 名称和意图
* UML图
* 代码示例

### 2.2 设计模式分组

#### 2.2.1 创建型

* 目的：处理对象构造和引用
* 效果：让代码保持松耦合，将创建复杂对象的责任放在一个地方，这遵循了单一责任原则和分离关注点原则

* 列表
  * Abstract Factory: 抽象工厂。提供一个接口来创建一组相关的对象。
  * Factory Method: 工厂方法。提供使用一个类来委托创建有效对象的责任（Ch5）。
  * Builder: 生成器。将对象本身的构造分离出来，从而能够构造对象的不同版本。
  * Prototype: 原型模式。从一个原型实例来复制或克隆类，而不是创建新实例。
  * Singleton: 支持一个类只实例化一次，并只有一个可用来访问它的全局访问点。

#### 2.2.2 结构型

* 效果：处理对象的组合与关系
* 列表
  * Adapter: 适配器模式。使不兼容接口的类能够一起使用。
  * Bridge: 桥接模式。将抽象与其分离，允许实现和抽象彼此独立地改变。
  * Composite: 组合模式。可以像对待对象的单个实例那样来对待一组表示层次结构的对象。
  * Decorator: 修饰模式。能够动态包装一个类并扩展其行为。
  * Facade: 门面模式。提供一个简单的借口并控制对一组复杂借口和子系统的访问。
  * Flyweight: 享元模式。提供一种在许多小类之间高效共享数据的方式。
  * Proxy: 代理模式。为一个实例化成本很高的更复杂的类提供一个占位符。

#### 2.2.3 行为型

* 效果：处理对象之间在责任和算法方面的通信。
* 意义：这个分组中的模式将复杂行为封装起来并将其从系统控制流中抽象出来，这样就使复杂系统更容易理解和维护。
* 列表
  * Chain Of Responsiblity: 责任链模式。允许将命令动态链接起来处理请求。
  * Command: 命令模式。将一个方法封装成一个对象，并将该命令的执行与它的调用者分离。
  * Interpreter: 解释器模式。制定如何执行某种语言中的语句。
  * Iterator: 迭代器模式。提供以形式化的方式来导航集合的方法。
  * Mediator: 中介者。定义一个对象，可以让其他两个对象进行通信而不必让它们知道彼此。
  * Memento: 备忘录模式。允许将对象恢复到以前的状态。
  * Observer: 观察者模式。定义一个或多个类在另一个类发生变化时接到报警。
  * State: 状态模式。允许对象通过委托给独立的、可改变的状态对象来改变自己的行为。
  * Strategy: 策略模式。能够将算法封装到一个类中并在运行时转换，以改变对象的行为。
  * Template Method: 模板方法模式。定义算法流程控制，但允许子类重写或实现执行步骤。
  * Visitor: 访问者模式。能够在类上执行新的功能而不影响类的结构。

### 2.3 如何选择和运用设计模式

* 扩大知识面
* 谨记KISS原则
* 确认模式选择的正确性
* 封装变化的部分
* 是否与领域语言冲突

### 2.4 快速模式示例

* Lab-ASPattern0204

#### 2.4.1 根据设计原则进行重构

* 依赖倒置原则（依赖抽象而不要依赖具体）
* 依赖注入原则

#### 2.4.2 根据Adapter模式进行重构

TODO: 未完全理解

#### 2.4.3 利用企业模式

* Null Object模式
* TODO: 未完全理解

### 2.5 小结

## 第II部分

剖析ASP.NET应用程序：学习并应用模式

## Ch3.应用程序分层与关注点分离

* Target
  * 分层设计与传统的ASP.NET Web表单代码隐藏模型相比具有的优势
  * 逻辑分层的概念及分离应用程序关注点
  * 企业级ASP.NET应用程序中各不同层的责任
  * 将智能UI（Smart UI）反模式重构成分层方式的示例代码

### 3.1 应用程序体系结构与设计

* 如果基础不牢，就无法构建可维护、可伸缩的应用程序。

#### 3.1.1 反模式：智能UI

* LabASPattern.Chap3.SmartUI
* TODO: 精读

#### 3.1.2 分离关注点

Jedi: 本小节是个重头戏

* Figure 3-3
* LabASPatterns.Chap3.Layered
  * Step 1 to Step 9

* 业务层
  * Domain Model模式专门用来阻止复杂的业务逻辑和关系
  * Strategy模式将算法封装到一个类中，并可以在运行时转换，从而改变对象的行为。
  * Factory模式可以让类来委托创建有效对象的责任
  * Separated Interface模式确保客户端完全不知道具体的实现

* 服务层
  * Facade模式为一系列复杂的接口和子系统提供了一个简单的借口并控制对其的访问。
  * 视图模型是为特定视图优化的强类型的类，并包含用来辅助完成数据表示的逻辑。

* 数据访问层
  * 使用了Linq To SQL

* 表示层
  * Model-View-Presenter

* 用户体验层

### 3.2 小结

## Ch4.业务逻辑层：组织

* Target
  * 何时以及如何使用Transaction Script模式来组织业务逻辑
  * 何时以及如何使用Active Record模式和Castle Windsor项目来组织业务逻辑
  * 何时以及如何使用Domain Model模式和NHibernate来组织业务逻辑
  * 阐释使用Anemic Model和Domain Model模式来组织业务逻辑的差异
  * 理解DDD以及如何运用它让自己专注于业务逻辑而不是基础设施关注点

### 4.1理解业务组织模式

#### 4.1.1 Transaction Script

* 每个过程都包含了完成业务事务所需的所有业务逻辑，包括工作流、业务规则和数据持久化验证检查。
* Transaction Script模式的一个优势是它易于理解
* Transaction Script模式非常适于那些逻辑中只包含很少或不包含可能增长的功能集合的小型应用程序，以及有不熟悉面向对象编程概念的初级开发者的团队。
* 缺点1：当应用程序变大而且业务逻辑变得复杂时，方法的数目也会变多，从而形成一个充斥着功能交叠的细粒度方法的无用API。
* 缺点2: 代码基很快会变得笨重且不可维护

#### 4.1.2 Active Record

* AR是一种流程的模式，尤其在底层数据库模型匹配业务模型时它特别有效。
* 在Active Record模式中，每个业务对象均负责自己的持久化和相关的业务逻辑。
* Active Record模式非常适用于在数据模型和业务模型之间具有一对一映射关系的简单应用程序（Blog）
* 特别是CRUD的业务模式。
* 可结合代码生成框架。
* Active Record也非常简单、易于掌握。
* TODO: 有个实验
  * 证明针对CRUD特别适合快速创建应用程序
  * 擅长处理底层数据模型能够很好映射到业务模型的情况
  * 当出现不匹配时（阻抗失效），该模式很难应付

#### 4.1.3 Domain Model

* Domain Model与Active Record模式之间的差别
  * POCO(plain old command runtime object)和PI(persistence ignorance)
  * LabASPatterns.Chap4.DomainModel
    * LabASPatterns.Chap4.DomainModel.Model
    * LabASPatterns.Chap4.DomainModel.AppService
    * LabASPatterns.Chap4.DomainModel.Repository
    * LabASPatterns.Chap4.DomainModel.UI.Web
  * Figure 4-4

* LabASPatterns.Chap4.DomainModel.Model
  * 包含应用程序内的所有业务逻辑
  * 领域对象存放在此处，并与其他对象建立关系
  * 还将以借口的形式为领域持久化和检索定义契约
  * 将采用Repository模式来实现所有的持久化管理需求
  * Model项目不会引用任何其他项目，从而确保“让它与任何基础设施关注点保持隔离，并坚定地只关注业务领域”

* LabASPatterns.Chap4.DomainModel.Repository
  * Repository引用了Model项目，从而从数据库提取并持久化领域对象。
  * Repository项目只关注领域对象持久化和检索的责任。

* LabASPatterns.Chap4.DomainModel.AppService
  * AppService项目充当应用程序的网关。
  * 表示层将通过消息（简单的数据传输对象）与AppService通信。
  * AppService层还将定义视图模型，这些是领域模型的展开视图，只用于数据显示。

* LabASPatterns.Chap4.DomainModel.UI.Web
  * 负责应用程序的表示和用户体验需求。
  * 这个项目只与AppService交互，并接收专门为用户体验视图创建的强类型视图模型。

* 与Transaction Script和Active Record模式相比，Domain Model的另一个优势是
  * 不包含数据访问代码
  * 可以很容易地进行单元测试而不必模拟并隔离数据访问层所依赖的类。

* 另外, Domain Model模式可能并不总能匹配应用程序需求。它的强大之处在于处理复杂的业务逻辑，但对于只包含非常少量业务逻辑的应用程序而言，采用一个全方位的领域模型有大材小用之嫌。

* Domain Model不足之处在于，与Active Record和Transaction Script相比，为了精通领域模型模式，需要面临陡峭的学习曲线。

#### 4.1.4 Anemic Domain Model

* Anemic Domain Model有时候被称为一种反模式。
* 与Domain Model非常类似, 仍会找到表示业务领域的领域对象。
* 这些领域对象不包含任何行为。
* 相反，这些行为位于模型之外，而让领域对象作为简单的数据传输类。
