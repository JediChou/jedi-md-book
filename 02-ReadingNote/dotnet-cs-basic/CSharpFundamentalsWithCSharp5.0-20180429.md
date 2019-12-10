# CSharp Fundamentals with CSharp 5.0

## 1. Introduction to CSharp

### 1.1 Introduction

* Author: K.Scott Allen (odetocode.com)
* Publisher: pluralsight

### 1.2 Setup

* Skill: search "visual studio download"
* Skill: Use express version
* Version
  - vs express 2013 for web
  - vs express 2013 for windows
  - vs express 2013 for windows desktop
  - vs team foudation server express 2013
  - vs express 2012 for windows phone
* Install is every easy


### 1.3 What is .NET

* A software framework
  - Commond Language Runtime (CLR)
  - Framework Class Library (FCL)
  - Its can process some special task. Like
  ```
   Files, HTTP, SQL, Speech, Data & Times
   Printing, XML, Timers and other.
  ```

### 1.4 What is the CLR 

* The CLR manages your application
  - CLR (it can controll every)
  - 1. Memory management
  - 2. Operating system and hardware independence
  - 3. Language independence

### 1.5 What is the FCL 

* Framework class library
  - A library of function to build applications
  - App <-> Microsoft DoNet framework <-> FCL

* Like
  - System.Console
  - System.Linq
  - System.Threading.Task
  - WCF
  
### 1.6 What is CSharp

* One of the language for .NET
  - Create applications, services, and reusable libraries
  - Syntax is similar to Java, C++, and JavaScript

### 1.7 Hello, World!

* Win10 + VSExpress 2013
* Skill: Need a microsoft account
* Action: 
  - Open a cmd.exe window
  - Notepad hello.cs
  - Write a hello world program
  - csc hello.cs

### 1.8 The Compiler

* The CSharp command line compiler
  - Transforms C# code into Microsoft Intermediate Language
    - file.cs -> csc.exe -> myapp.exe
    - VM, IL

### 1.9 Hello, Visual Studio

* Action
  - [file]
  - [new project]
  - visual csharp -> console application
  - input name
  - input location
  - write code
  - compile and debug/run

* Action
  - use "string[] args"
  - and use console.writeline to output args[0]

* Concept
  - solution file
  - project file
  - project properties
  - project references
  - app.config
  - source files
  - Action: run/debug

* TODO
  - hello.pdb
  - hello.vshost.exe
  - hello.vshost.exe.config
  - hello.vshost.exe.manifest

### 1.10 Editing CSharp

* Visual studio
  - An integrated development enviroment
  - Edit C# (and other) files
  - Runs the C# compiler
  - Debugging
  - Testing

### 1.11 Debugging CSharp

* Jedi: Nothing help

### 1.12 Types

* Vedio time: 00:03:20
* Create your own types (class)
* Primitive Types (bulit-in, ex: int, long, char)

### 1.13 Feeling Tired

* Skill: int.Parse(string parameter)
* Skill: Apply if-else.

### 1.14 Summary

* C# is one language for .NET (string typed & case sensitive)
* Visual Studio is an IDE (Edit & debugger)

## 2 Classes and Objects in CSharp

### 2.0 Introduction

* Nothing help

### 2.1 Class Definitions

* A design target

```
We need an electronic grade book to read the scores of an individual
student and then compute some simple statistics from the scores.

The grades are entered as floating point numbers form 0 to 100, and
the statistics should show the highest grade, the lowest grade, and
the average grade.
```

### 2.2 Classes and Objects

* Class Members Define
  - State
  - Behavior

* In this course
  - State
    - The grades a user entered
  - Behavior
    - Add a new grade
    - Calculate statistics

* Implement

```c#
abstract class GradeBook {
	List<float> _grades;
	public void AddGrade(float grade) {}
}
```

### 2.3 Classes and Objects

* Classes
  - Define a type
    - Use the types for variables and arguments
  - Create object
    - Invoke methods and save state

* Tip: Get a NullReferenceException when don't call construct method.


### 2.4 Constructors

* Special methods used to initialize objects.
* Initialize fields.
* Skill: ctor + tab

### 2.5 Objects and Variables

* A class is a blueprint for creating objects
* A class can also be used to type a variable
  - A variable can refer to any object of the same type

* Skill: Run to cousor

### 2.6 Reference Types

* Classes are reference types
* Variables point to objects
  - They dont't "hold" the objects in their storage location
* Without any help

### 2.7 OOP

Mean:

* Objects are nouns
* Methods are verbs
* Objects encapsulate functionality


