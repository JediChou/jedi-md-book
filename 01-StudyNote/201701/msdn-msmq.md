使用消息组件
============
URL: https://msdn.microsoft.com/zh-cn/library/fzc40kc8(v=vs.90).aspx
\\10.134.154.125\OpenStack


## 消息处理介绍
* https://msdn.microsoft.com/zh-cn/library/8zax2582(v=vs.90).aspx

## 消息组件“如何”帮助主题

### 如何：创建队列
* https://msdn.microsoft.com/zh-cn/library/8bzbb471(v=vs.90).aspx
* 以编程方式创建公共队列
  - 点击项目并选择“添加引用”。添加对System.Messaging.dll的引用
  - 点击Create方法在计算机上创建公共队列
  ```C#
	System.Messaging.MessageQueue.Create(@"myMachine\MyQueue");
  ```
* 以编程方式创建专用队列
```C#
System.Messaging.MessageQueue.Create(@".\Private$\MyPrivateQueue");
```
* 验证是否已创建消息队列

### 如何：删除队列
* https://msdn.microsoft.com/zh-cn/library/z225707h(v=vs.90).aspx
* 使用Delete方法可以删除队列
```C#
System.Messaging.MessageQueue.delete(@".\Private$\SecondMessageQueue");
```

### 如何: 清除队列内容
* https://msdn.microsoft.com/zh-cn/library/sd7e5764(v=vs.90).aspx
* 使用编程方式清除队列内容
```C#
var msgqu = new MessageQueue();
msgqu.Path = @".\Private$\" + queue;
msgqu.Purge();
```

### 如何：创建 MessageQueue 组件实例
* 这里的例子足以说明问题
  - http://www.dotnetlearners.com/msmq/introduction%20to%20msmq.aspx
 
 
### 如何：创建事务性队列
* https://msdn.microsoft.com/zh-cn/library/0t144497(v=vs.90).aspx
* 用编程的方式创建
```C#
	System.Messaging.MessageQueue MessageQueue1 =
	   new System.Messaging.MessageQueue();
	MessageQueue1 = System.Messaging.MessageQueue.Create(".\\MyTransQueue", true);
```

### 如何：检索队列
* https://msdn.microsoft.com/zh-cn/library/9ss0c06x(v=vs.90).aspx
* 当您检索队列的静态列表时，系统会返回包含查询结果的 MessageQueue 对象。
  1. 创建 MessageQueue 类型的数组以存放查询结果。
  2. 调用 MessageQueue 类的适当方法：
     - 若要无条件地检索所有公共队列，请调用 GetPublicQueues 方法。
	 - 若要按条件检索公共队列，请将 Criteria 参数设置为适当的值并调用 GetPrivateQueuesByMachine 方法。
	 - 若要仅检索那些共享某个类别 GUID 的公共队列，请调用 GetPublicQueuesByCategory 方法并将该类别 GUID 指定为一个参数。
	 - 若要仅检索那些共享某个标签的公共队列，请调用 GetPublicQueuesByLabel 方法并将该标签指定为一个参数。
	 - 若要仅检索那些位于某个特定计算机上的公共队列，请调用 GetPublicQueuesByMachine 方法并将该计算机名指定为一个参数。
  3. 将结果指派到数组。
  ```C#
    private void button1_Click(System.Object sender, System.EventArgs e)
	{
		System.Messaging.MessageQueue[] mqlist;
		// Retrieve public queues.
		mqlist = System.Messaging.MessageQueue.GetPublicQueuesByMachine(
		   ".");
		// Clear the current contents of the list.
		this.listBox1.Items.Clear();
		// Display the results.
		for (int i = 0; i < mqlist.Length; i++)
		{
			this.listBox1.Items.Add(mqlist[i].Path);
		}
	}
  ```
* 当您检索队列的动态列表时，系统会返回包含查询结果的 MessageQueueEnumerator 对象。
