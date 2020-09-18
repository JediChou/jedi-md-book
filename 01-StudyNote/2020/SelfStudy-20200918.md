# Self Study

Author: Jedi Chou, Create at 2020.9.18 07:26 AM

* Daily study
  * 101WeiQi daily exercise check-in. 7:26
  * 163 music APP check-in. 7:44
  * Read articles and check interview invitation (MaiMai APP). 7:45
  * Don't memorize words APP check-in. 7:45
  * NowCoder check-in. 7:45
  * Tencent cartoon APP check-in. 7:46
  * Read Sina Blog. 7:49
  * 163.com mail. 8:08
  * Exercise of Vocabulary (vocabulary.com). 8:12
  * Reading 1 minutes at SIMPLE wiki. 8:13

## Other

* 打卡
  * 更新香信的“调查问卷列表”. 7:44
  * 更新香信的“个人14天内旅居史”. 7:44
  * 编写Ding’Ding的工作日报

* Go Game check
  * Leela Zero vs Leela Zero. 7:25
  * Leela Zero vs Leela Zero. 7:35
  * Leela Zero vs Leela Zero. 7:43

* python中的“...”

```python
>>> class C:
...     def method(self):...
...     ...
...
>>> obj = C()
>>> obj.method()
>>> print(obj.method())
```

* python中的泛型

```python
from typing import TypeVar, Generic

T = TypeVar('T')

class Stack(Generic[T]):

    def __init__(self) -> None:
        # create an empty list with items of type T
        self.items: List[T] = []

    def push(self, item:T) -> None:
        self.items.append(item)

    def pop(self) -> T:
        return self.items.pop()

    def empty(self) -> bool:
        return not self.items

    def allitems(self):
        return self.items

if __name__ == "__main__":

    # construct an empty Stack[int] instance
    stack = Stack[int]()
    stack.push(2)
    stack.pop()
    stack.push('x')
    stack.push('y')
    stack.push('z')

    # output stack's item
    print(f"The stack.items's length is: {len(stack.items)}")
    [print(x) for x in stack.items]
```
