# 智能合约和区块链操作系统

* Jedi: 出處不詳. 2021.6.30 10:43 AM

* Ch04 智能合约和区块链操作系统, 4.1 以太坊：神一样的存在. 10:10
* Ch04 智能合约和区块链操作系统, 4.2 智能合约的定义、编译和测试. 10:10
  * JediL 有3种环境的配置，要安排实验逐一验证！
* Ch04 智能合约和区块链操作系统, 4.3 以太坊虚拟机EVM. 10:27
  * length: 8:33 mins

* Ch04 智能合约和区块链操作系统, 4.4 智能合约Solidity编程初探. 11:26
  * 静态语言，类似JavaScript
  * 不同1: address, 本身就是具备一个地址.
  * 不同2: payable, 内嵌支付功能.
  * 不同3: state, 存储在网络上区块链上.
  * 不同4: 运行环境在去中心化的区块链上.
  * 不同5: 一旦发生异常，所有的调用都会被回撤.
  * 开始学习Solidity的最好方式是remix
  * [remix](https://remix.ethereum.org)
  * [remix cn](http://remix.hubwiz.com/)
  * 源码文件结构(版本申明、引用文件、路径相关、在实际的编译中使用、代码注释、文档注释)
  * 引用文件：全局引入、自定义命名空间引入、分別定义引入
  * 合约结构
    * 状态变量（State variables）
    * 函数（Functions）
    * 函数修饰符（Function Modifiers）
    * 事件（Events）
    * 结构类型（Structs Types）
    * 枚举类型（Enum Types）
  * Jedi: 函数修饰符（Modifier）有点特殊，有点像单元测试中的setup().

* Ch04 智能合约和区块链操作系统, 4.5 以太坊的共识机制与挖矿. 11:55
  * PPT01P: 共识机制在以太坊中的价值（一致性要求）
  * PPT01P: 安全可靠的状态共识 <- 在不信任的网络中进行消息传递，要求有容错机制 <- 网络堵塞、网络故障、虚假消息
  * PPT02P: 以太坊共识机制版本，Froniter、Homestead、Metropolis、Serenity
  * PPT02P: PoW -> PoS
  * PPT02P: 讲课时以太网的共识机制处于“Homestead”（家园）
  * PPT03P: 如何解决记账权中心化问题 (Jedi: 不是特别懂)
  * PPT04P: Casper共识协议（基于保证金的经济激励共识协议）
  * PPT05P: 以太坊挖矿原理, PoW + Ethash(Dagger-Hashimoto)
  * PPT05P: 挖矿流程(Jedi: 没太听明白)
  * PPT05P: 挖矿步骤(Jedi: wallet+computer+dig client)
  * PPT05P: Claymore's Dual ETH + DCR/SC GPU Miner v6.3

* Ch04 智能合约和区块链操作系统, 4.6 EOS概述
  * PPT01P

```solidity
import "filename";
import * as symbolName from "filename"
import {symbol as alias, symbol2} from "filename"
```
