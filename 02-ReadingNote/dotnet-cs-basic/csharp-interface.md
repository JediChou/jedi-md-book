# pluralsign - C# Interface

Sub title: A Practical Guide to Interfaces

## 01.Interfaces, Abstract Classes, and Concrete Classes

### 01. Introduction

* Why Interfaces?
  * Maintainable
  * Extensible
  * Easily Testable

* Goals
  * Learn the "Why"
    * Maintainability
    * Extensibility
  * Implement Interfaces
    * .NET Framework interfaces
    * Custom interfaces
  * Create interface
    * Add Abstraction
  * Peek at Advanced Topics
    * Mocking
    * Unit Testing
    * Dependency Injection

* Pre-requisites
  * Basic understanding of C#
    * Classes
    * Inheritance
    * Properties
    * Methods

### 02. Overview

* Sub title: Interfaces, Abstract Classes, and Concreate Classes

### 03. Definitions

* What are Interfaces?
* Interfaces describe a group of related functions that can belong to any class or struct.

* For example: Contract
  * Memo: Public set of members:
  * Properties
  * Methods
  * Events
  * Indexers

* Scenario: Regular Polygons

### 04.Demo - Concrete Class

* Input short - propfull
* public Square(int length) : base(4, lenght){}

### 05.Demo - Abstract Class

* public abstract class ClassName
* public abstrace double GetArea()
* public override double GetArea()
* Commented method you will get an compile error

### 06.Demo - Interface

* Interface without public prefix.
* Compare
  * public class Octgan: IRegularPolygon
  * public class Octgan: Object, IRegularPolygon

### 07.Comparing Interfaces and Abstract Classes

* Concrete Class, Abstract Class, or Interface?
  * Concrete Class, NO Compile-time checking
  * Abstract Class, Compile-time checking
  * Interface, Compile-time checking

* Comparsion: Implementation Code
  * Abstract Classes may contain implementation

* Comparsion: Inheritance
  * Inherit from a single abstract Class
  * Implement any number of Interfaces

* Comparsion: Access Modifiers
  * Abstract class members can have access modifiers
  * Interface Members are automatically public

* Comparison: Valid Members
  * Abstract Classes
    * Fields
    * Properties
    * Constructors
    * Destructors
    * Methods
    * Events
    * Indexers
  * Interfaces
    * Properties
    * Methods
    * Events
    * Indexers

### 08.Summary

* The "What" of Interfaces
* Compiler-enforced implementation
* Comparison between Abstract Classes and Interfaces

## 02.Using Interfaces to Future-Proof Code

### 01.Overview

* Why Maintainable - Interface help us get thers
* Best Practice
  * Program to an abstraction rather than a concrete type

### 02.Programming to an Abstraction

* Program to an interface rather than a concrete class
* For example: Concrete class
  * Collections

  ```text
    List<T>
    Array
    ArrayList
    SortedList<TKey, TValue>
    HashTable
    Queue/Queue<T>
    Stack/Stack<T>
    Dictionary<TKey, TValue>
    ObservableCollection<T>
    And. Custom Types
  ```

* Collection Interfaces

```cs
public class List<T>: IList<T>,
  ICollection<T>, IList, ICollection,
  IReadOnlyList<T>, IReadOnlyCollection<T>,
  IEnumerable<T>, IEnumerable
```

* Follow "Interface Segregation Principle"
* IEnumerable
  * Used with
    * foreach
    * List Boxes

### 03.Demo - Concrete Class vs. Interface

* WPF programming
* Use IEnumerable interface, you can modify source and without effect for runabble codes.
  * approve maintainable increased

* List people, IEnumerable people;

```c#
List<Person> people;
IEnumerable<Person> people;
```

* PersonListBox.ItemSource = people;

### 04.Summary

* Best Practice
* Concrete Class
  * Brittle/Easily Broken
* Interface
  * Resilience in the face of change
  * Insulation from implementation details
* Next up: The "How".

## 03.Creating Interfaces to Add Extensibility

### 01. Overview

* 本章将会演示一个Rule Engineer
* 并使得各种Rule类型可以很容易以插件的方式运行

### 02.The Repository Pattern

* Different Data Sources
  * Relational Database
    * SQL Server, MySQL, Oracle, etc
  * Document/Object Database(NoSQL)
    * MongoDB, Hadoop, RavenDB, etc
  * Text Files
    * CSV, XML, JSON
  * SOAP Service
    * WCF, ASMX Web Service, Apache CXF, etc
  * REST Services
    * WebAPI, WCF, Apache CXF, JAX-RS, etc
  * Cloud Storage
    * AWS, Azure, Alibaba, HuaWei, etc
  
* Repository Pattern
  
  * Mediates between the doman and data mapping layers using a collection-like interface for accessing domain objects*
  
  * Layer to separte our application from the data storage technology
    * Application
    * Repository
    * Data Storage
    * Notice: use contract to connect every componet

  * Pluggable Repositories
    * Application
    * WCF Service Repositories (Plug-in)
    * CSV file Repositories (Plug-in)
    * SQL Database Repositories (Plug-in)

  * Simple Repository
    * Data Access Operation
      * C - Create action
      * R - Read action
      * U - Update action
      * D - Delete action

  * Creating a Repository Interface

    ```csharp
    public interface IPersonRepository
    {
      // Create
      void AddPerson(Person new Person);

      // Read
      IEnumrable<Person> GetPeople();
      Person GetPerson(string lastName);

      // Update
      void UpdatePerson(string lastName, Person updatedPerson);
      void UpdatePeople(IEnumrable<Person> updatedPeople);

      // Delete
      void DeletePerson(string lastName);
    }
    ```

### 03.Demo - Implementing a Service Repository

* 编写一个WPF应用，功能分别是加载WCF加载、加载CSV、SQLServer数据加载、清除数据的功能
* 展示了服务接口的约定，并显示了WCF服务是如何实现服务接口的
* Jedi: 并不是特别熟悉WCF，这块要去看下教程. 16:29
* 在接口上点击"Ctrl + ."，可以弹出快速实现接口的选项. 16:31
* 这个套路很实用
  * 增加服务类
  * 服务类实现服务接口
  * 增加外部服务的Proxy类，申明时进行实例化
  * 在每个服务接口中实现业务逻辑，或直接引用Proxy类的服务解决问题
* Jedi: 比较遗憾的地方，要是结合单元测试讲解就更好了. 16:44
* Jedi: 13min之后的内容并不申请，只是在UI上进行事件处理. 16:49

### 04.Demo - CSV and SQL Repositories

* CSVRepository
  * 定义个了一个path来接受CSV文件的地址
  * 构造函数中实现csv文件的加载，路径从app.config中的自定义key中取
  * AppDomain.CurrentDomain.BaseDirectory + filename;
* Study at 1:57
