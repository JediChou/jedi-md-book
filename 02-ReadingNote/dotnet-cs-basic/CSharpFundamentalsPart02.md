# CSharp Fundamentals - Part 2

* Jedi study at 2019.4.3 12:20 PM

## C# and LINQ

### C# and LINQ: 00-Overview

* Page 1
  * Lambda Expressions
  * Query Language
  * Extension Methods
  * Func`<T`>
  * Expression`<T`>

## C# and LINQ: 01-Enter LINQ

* LINQ provides general-purpose query facilities
  * Object Data
  * Relational Data
  * XML Data

* 50+ Query Operators
  * Projection
  * Filtering
  * Partioning
  * Grouping
  * Aggregation

* LINQ

```c#
ISequence<T> Where(ISequence<T> input);
```

```c#
public interface ISequence<T>
{
  ISequence<T> Where(ISequence<T> input);
}
```

```C#
public interface ISequance<T>
{
  // Where
  // Group
  // Join
  // Skip
  // Take
  // Select
  // Count
  // Average
  // Min
  // Max
  // Zip (New for 4.0!)
  // ...
}
```

```c#
public class SqlSequence<T> : ISequence<T>
{
  // Where
  // Group
  // Join
  // Skip
  // Take
  // Select
  // Count
  // Average
  // Min
  // Max
  // ...
}
```

## C# and LINQ: 02-Extension Methods

* Demo1

## C# and LINQ: 03-Extensions and Lambdas

* System.Linq defines operators for LINQ
  * Standard query operators like Select, OrderBy, Where, and many more

## C# and LINQ: 04-Lambdas and Funcs

* Good skills and practices.

## C# and LINQ: 05-Funcs and Expressions

```c#
IEnumerable<string> filteredList =
  cities.Where( s => s.StartsWith("L"));
```

* What if cities is not an in-memory collection?
  * LINQ works with databases, for example
  * Does filtering occur inside the database, or inside our app domain?
