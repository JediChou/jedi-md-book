# Welcome to F# - Advanced F# Program

These F# tutorials a wide range of information, tools, and programming techniques.

## A Little Bit of Currying

If you have a background in any of the popular programming languages, it may seem strange that function arguments in F# are passed with parentheses, and are separated by spaces rather than commas. Let's explore the essence of this notation to fully understand the implications, and options you have when programming your F# abstractions. Consider the following function:

### The Add Function

```F#
// File: try-fs-TheAddFunction.fs
let add x y = x + y
```

This function evaluates to val **add : x:int -> y:int -> int**, which can read as "add is a function that, given an integer, returns a function which given an integer returns an integer". In other words, function application associates to the left and the application **(add 1 2)** can be read (and written) as **((add 1) 2)**. Another userful way to look at this ability is that you can fix arguments of a function from left to right in order to specialize a more general function to perform a specific task. Consider for instance the following definition:

### Specialization of Add

```F#
// File: try-fs-SpecializationOfAdd.fs
let inc = add 1
let anotherInc x = add 1 x
printfn "%d is the same as %d" (inc 1) (anotherInc 1)
```

The two functions are equivalent though the inc function is obtained by **currying** and fixing the first argument of add to 1. Function specialization happens all the time during programming and it is usually expressed as it is in the anotherInc function definition.

The important aspect to be considered here is that the order of arguments matter in F#. It affects the ability to use currying to specialize a function. The functions in the collection modules (i.e Seq, List, etc.) have the collection as the last argument exactly for this reason: you can "configure" the function to indicate which collection to operate on.

### Using Specialized Filters

```F#
// File: try-fs-SpecializationOfAdd.fs
let searchEven = Seq.filter (fun v -> v % 2 = 0)
printfn "%d even numbers in [1, 100]"
    ([ 1 .. 100] |> searchEven |> Seq.legth)
printfn "%d even numbers in [1, 1000]"
    ([ 1 .. 1000] |> searchEven |> Seq.legth)
```

Sometimes arguments cannot easily swapped, consider for instance the following function:

### The sub function

```F#
// File: try-fs-TheSubFunction.fs
let sub x y = x - y
```

In this case we have a problem in that subtraction is not commutative, and usually it is more interesting to fix the subtracted value. For instance, we cannot specialize sub as we did with inc since we would fix the second argument. Of course we can still define a new function that uses sub inside, but one may wonder if this is an intrinsic limitation of F#.

It would be nice to be able to swap the arguments of sub without changing its definition so that use currying and fix the subtracted value (now the first argument). The following function can help us to do this:

### Swapping Arguments

```F#
// File: try-fs-SwappingArguments.fs
let swapargs f x y = f y x
```

It's interesting to have a look at the inferred type of swappings: **val swapargs : f:('a -> b-> 'c) -> x:'b -> y:'a -> y:'a ->'c** F# acknowledge the general form of the operation by generalizing the types of arguments that allow using **swapargs** with any function with tow curried arguments. Now we can derive the dec function using currying:

### The Dec Function

The F# compiler ensures that using swapargs will not affect performance since it is possible to reorder arguments appropriately during compile time.

In conclusion, currying is an important tool in the hands of F# programmers, particularly those interested in building abstractions that allow expressing recurring patterns. Remember that defining a function as first-class value may affect its usage, so choose wisely when you decide which arguments to pu first (i.e. put the filter function before the collection to filter).

## Operator Definition and Overloading

Operator overloading is a feature available in many programming languages. In F# not only can you overload existing operators, you can actually define nwe ones. The ability to define infix operators provides you with a greater degree of control over the syntax of your programs, making it possible to create expressions that are better suited to the problem at hand.

A brilliant example of this is the ubiquitous F# foward pipe operator (indicated as |>), which is not native in the language, but is instead defind as part of the F# libaray. The foward pipe operator is defined a follows:

### The Forward Pipe Operator Definition

```F#
let (|>) x f = f x
```

The operator is infix and simply indicates that the argument comes before the function that should receive it. Note that in F# all functions take one argument (as discuessed in the previous lession on currying), thus the operator can be applied to all functions.

F# defines a grammar for operators that allows you to combinate a sequence of symbols to form a new operator. For instance, + <|> are infix operators and !~ is a prefix operator.

Although the definition of new operators can lead to more concise code, defining new operators should be undertaken with care since this parctice has the potential to obfuscat code. An example of this can be seen in regular expressions, which can be effective when paired with a lightweight syntax (as also seen in Perl). Let's see how to define operators to simplify the use of regular expression in F#:

### Regular Expression Operators

```F#
// File: try-fs-RegularExpressionOperators.fs

open System.Text.RegularExpressions

//test match
let (^?) a b = Regex.IsMatch(a, b)
// perform a match and returns match info
let (^!) a b = Regex.Match(a, b)
// Query the number of matches
let (!@) (a:Match) = a.Groups.Count - 1
// Access the nth match (1 based, equivalent of $1..$n notation)
let (^@) (a:Match) (b:int) = a.Groups.[b].Value
```

Now let's test these operators:

### Test of Operators

```F#
// File: try-fs-TestOfOperators.fs

open System.Text.RegularExpressions

//test match
let (^?) a b = Regex.IsMatch(a, b)
// perform a match and returns match info
let (^!) a b = Regex.Match(a, b)
// Query the number of matches
let (!@) (a:Match) = a.Groups.Count - 1
// Access the nth match (1 based, equivalent of $1..$n notation)
let (^@) (a:Match) (b:int) = a.Groups.[b].Value
let input = "F# 3.0 is a very cool programming language"
if input ^? @"F# [\d\.]+" then
  let m = input ^! @"F# ([\d\.]+)"
  printfn "matched %d groups and the F# version is %s"
     !@m (m^@1)
```

Two things are missing from the typical Perl usage: a syntax for substitution and the ability to specify regex options such as ignore case (typcially indicated by letters like i, s, and g). We can easily extend our definition to allow specifying a string with options:

### Revised Regular Expression Operators

```F#
open System.Text.RegularExpressions

let string2opt (s:string) =
    let mutable ret = RegexOptions.ECMAScript
    for c in s do
        match c with
        | 's' -> ret <- ret ||| RegexOptions.Singleline
        | 'm' -> ret <- ret ||| RegexOptions.Multiline
        | 'i' -> ret <- ret ||| RegexOptions.IgnoreCase
        | _ -> ()
    ret

// test match
let (^?) a (b, c) = Regex.IsMatch(a, b, string2opt c)
// perform a match and returns match info
let (^!) a (b, c) = Regex.Match(a, b, string2opt c)
// Query the number of matches
let (!@) (a:Match) = a.Groups.Count - 1
// Access the nth match (1 based, equivalent of $1..$n notation)
let (^@) (a:Match) (b:int) = a.Groups.[b].Value

let input = "F# 3.0 is a very cool programming language"
if input ^? (@"F# [\d\.]+", "i") then // ignore case
    let m = input ^! (@"F# ([\d\.]+)", "")
    printfn "matched %d groups and the F# version is %s" !@m (m^@1)
```

The ability to pass a tuple as a single argument allows the introduction of extra arguments, so the substitution operators can be defined as follows

### The Replace Operator Definition

```F#
open System.Text.RegularExpressions

//test match
let (^?) a b = Regex.IsMatch(a, b)
// perform a match and returns match info
let (^!) a b = Regex.Match(a, b)
// Query the number of matches
let (!@) (a:Match) = a.Groups.Count - 1
// Access the nth match (1 based, equivalent of $1..$n notation)
let (^@) (a:Match) (b:int) = a.Groups.[b].Value

let string2opt (s:string) =
    let mutable ret = RegexOptions.ECMAScript
    for c in s do
        match c with
        | 's' -> ret <- ret ||| RegexOptions.Singleline
        | 'm' -> ret <- ret ||| RegexOptions.Multiline
        | 'i' -> ret <- ret ||| RegexOptions.IgnoreCase
        | _ -> ()
    ret

let input = "F# 3.0 is a very cool programming language"

let (^~) a (b, c:string, d) = Regex.Replace(a, b, c, string2opt d)
printfn "%s" (input ^~ ("very", "super", ""))
```

The syntax we used to introduce new operators can be also be used to redefine the existing ones, although once redefined these cannot be overloaded. Therefore the redefined operator must handle all possible values. For instance, if you develop a new type Point repressenting a point in the 2D Cartesian space, you cannot simply the operator as + since it would inhibit the sum among any other type including numbers!

Operator overloading is possible only for some operators (see Operator Overloading (F#) for more information), and it must be done within the type definition. For instance here is an implmentation of the Point type which defines the sum operator among points without disrupting any other types:

### Overloading an Operator Within a Type

```F#
type Point(x:float, y:float) =
  member this.X = x
  member this.Y = y

  static member (+) (p1:Point, p2:Point) =
      new Point(p1.X + p2.X, p1.Y+p2.Y)

let p1, p2 = new Point(0., 1.), new Point(1.,1.)
p1 + p2
```

Operator definition and overloading helps you to define programming idioms that allow more concise combinations than those which are possible through the function application. However you must take care no to abuse this mechanism since operators may result in code that is more diffcult to read. Therefore you should use it only when you spot a very general that could benefit from concise notation.

## Active Patterns

Pattern matching is a major feature of F# and once you use it you won't want to live without it. When you have a value, you can deconstruct it and bind with names in such seamless way that you will forget all the code you would have needed in other proramming languages.

Here is a simple example that looks for specific versions in a list of triples:

## Searching in a List with Pattern Matching

```F#
let input = [ (1., 2., 0.); (2., 1., 1.); (3., 0., 1.) ]
let rec search lst =
    match lst with
    | (1., _, z) :: tail ->
        printfn "found x = 1, and z = %f"; search tail
    | (2., _, _) :: tail ->
        printfn " found x = 2."; search tail
    | _ :: tail -> search tail
    | [] -> printfn "done".
search input
```

You can try changing the values of the input list in order observe different behaviors of the search function. What we mainly appreciate here is the ablilty to do four things at once:

* Unpack the list in a head and tail
* Give me a sort of template to the head value (a triple whose first argument is a float)
* Bind an element of the head triple to a name (in this case z)
* Check different conditions through a set of rules

Unfortunately not al of these beautiful things can be used straight away with objects. Why? Simply because objects are .NET objects, and they follow rules that depend on the Common Language Runtime (CLR) and not just F#. Moreover the set of predicates you can express using out of the box features is not entirely satisfactory, so the language has a very powerful feature called active patterns.

The active patterns features offers a way to customize the F# pattern matching syntax in a general way. As with all powerful mechanisms, you should use it wisely (it has been said that with great power comes great responsibility). The core idea is to consent to introduce in the pattern a label (with or without arguments) that cause the invocation of a function defined with a special syntax. This can be used for any kind of computation and to deal with any type including objects.

### The Norm Active Pattern

This example uses an active pattern to find a vector or versor within a given list.

```F#
let (|Norm|) (a:float, b:float, c:float) =
    sqrt(a*a + b*b + c*c)
let v = (1., 0., 0.)
match v with
| Norm(1.) -> printfn "Versor found!"
| Norm(n) -> printfn "Simple vector with norm %f" n
```

Sometimes you may want to classify values, for instance vector vs. versor:

### Classification with Patterns

```F#
let (|Vector|Versor|)
    (a:float, b:float, c:float) =
    if sqrt(a*a + b*b + c*c) = 1. then Versor
        else Vector
let v = (1., 0., 0.)
match v with
| Versor -> printfn "Versor found!"
| Vector -> printfn "Is a vector"
```

You can also define incomplete classification patterns. The following pattern matches the string itself to determine whether it is a palindrome (wehter the string is the same when read left-to-right and right-to-left):

## Incomplete Classification

```F#
let rec isPalindrome (s:string)
    (fromidx:int) (toidx:int) =
  if s = null then false
  elif toidx - fromidx < 2 then true
  elif s.[fromidx] = s.[(toidx - 1)] then
      isPalindrome s (fromidx + 1) (toidx - 1)
  else false
let (|PALINDROME|_|) (s:string) =
    if isPalindrome s 0 s.Length then Some s
        else None
match "aba" with
| PALINDROME(v) -> printfn "The string %s is palindrome" v
| "Antonio" -> printfn "Hello Antonio"
| _ -> printfn "Not a special string!"
```

In this cae, the returned value is an option addressing the problem of what should be returned in case of a non-palindrome string.

In this latter example we use an active pattern whose completion time is dependent upon the input string's length. This kind of pattern should be used with care since the user of your pattern has the right to expect that the time necessary for computing a pattern is constant as it is for standard patterns.

Active patterns are ideal if you want to define a rule-based sub-language in F#: you can define patterns to match against any kind of value and use names depending on a particular domain. F# will let you bind the value returned by your pattern as if were a native F# type preserving the beauty of pattern matching inside the language.

## Computation Expressions

Now that we have learned how to customize language syntax by means of currying, operator definition, and active patterns, we can grasp the basics of a powerful mechanism known as computation expressions. You can use computation expressions to alter the standard evaluation rule of the language and define sub-languages that model certain programming patterns.

The goal of this lession is to give you an idea of the inner workings of computation expressions.

As we did for operators, let's examine the useage of computation expressions to find a construct that is not native to the language, but instead an application of a mechanism of the language.

Computation expressions are the basis for seq, async and query, three important features of F#. Sequence (seq) generalize the notion of a stream of values and are ubiquitous in F# programming, asynchronous workflows (async) offer support for asynchronous programming patterns, and language integrated query (query) allow for interaction with data sources. All three of these features are available on Try F#.

### An infinite (up to maxint) list of numbers

```F#
let N = seq {
    let n = ref 0
    while true do
        yield !n
        n := !n + 1
}
N |> Seq.take(10) |> Seq.iter
    (fun v -> printfn "%d" v)
```

The sequence N enumerates all integer numbers from 0 up to the maximum integer value for type int; however the program neither hangs nor allocates a large amount of memory since the computation of the sequence is lazy: elements are only computed as they are requested.

The behavior of this code is curious indeed, since if you try to execute the code inside the curly braces (having replaced yield !n a print statment) the program will print billions of results and wind up in a gigantic loop.

How is it possible for the sequence syntax to alter the semantics of the language so much? This si the core of the computation expressions in F#. The F# compiler rewrites (de-sugars) compuataion expressions before compiling, tranforming the code within curly into an expression. For instance, the previous sequence is de-sugared to:

### Example of De-sugaring of a Computation Expression

```F#
let n = ref 0
seq.While ((fun () -> true),
    seq.Delay (fun () ->
        seq.Combine(seq.Yield(!n),
            seq.Delay(fun() -> n := !n + 1))))
```

This example, although not mean to run here, gives us an idea of how a compuation expresion is de-sugared by F#. Now imagine being able to define your own version of seq, an object capable of being called by the compiler to redefine what a particular compuational expression does.

Computation expressions are usually puzzling because you need to determine how de-sugared methods interact to obtain the desired result. In general, you need this machinhery whenever you have two value domains and you want to a nice syntax to jump from one to the other. For sequences the goal is to work with single elements, even if building the sequence is the overarching context.

Let's consider a very simple example where we want to make some projections on the likelihood of our being alive after a number of years. Of course we could do it without computation expressions, but we would like to have a magic construct performing boundary checks for a range of years compatible with a human lifetime. To address this fundamental problem we first define a new computation expression (age) that allows combining age-labeled numbers and automatically checks to see whether boundaries are preserved. The computation expression is introduced by a "builder" type which defines the methods call by the de-sugared form of the expression (a complete list of de-sugared is available here).

At minimum you need to implement **Bind**, **Delay**. The following example demonstrates creating an instance of a builder type:

### The Age Computation Expression Builder

```F#
type Age =
| PossiblyAlive of int
| NotAlive

type AgeBuilder() =
    member this.Bind(x, f) =
        match x with
        | PossiblyAlive(x) when x >= 0 && x <= 120 -> f(x)
        | _ -> NotAlive
    member this.Delay(f) = f()
    member this.Return(x) = PossiblyAlive x

let age = new AgeBuilder()

let willBeThere a y =
  age {
    let! current = PossiblyAlive a
    let! future = PossiblyAlive (y + a)

    return future
  }
willBeThere 38 150
```

If you play with the **willBeThere** function, you'll find out that you will only be considered **PossiblyAlive** if the total age is between 0 and 120. The de-sugared form **willBeThere** is shown here:

### De-Sugared Form of willBeThere

```F#
type Age =
| PossiblyAlive of int
| NotAlive

type AgeBuilder() =
    member this.Bind(x, f) =
        match x with
        | PossiblyAlive(x) when x >= 0 && x <= 120 -> f(x)
        | _ -> NotAlive
    member this.Delay(f) = f()
    member this.Return(x) = PossiblyAlive x

let age = new AgeBuilder()

let willBeThere2 a y =
  age.Delay(fun () ->
    age.Bind(PossiblyAlive a, fun current ->
      age.Bind(PossiblyAlive (y+a), fun future ->
        age.Return(future))))

willBeThere2 38 80
```

By calling the inner function with the integer value of the age (without the label), the **Bind** function makes it possible to move from the **age** domain to the **int** domain to perform calculations.

Computational expressions offer a unique opportunity to customize language syntax to introduce particular domains and make easily programmable. Since it is possible to completely alter the semantics of the language, this construct shoule be used wisely as it can have the effect of making code more difficult to read.

## Quotation: Leveraging the Language Parser to Define Your Own Lanuage

In a programmer's life (perhaps also in yours) the opportunity arises to develope a program that manipulates another program. Usually this is done for the purpose of automating some tedious task at hand in the normal development lifecycle. Eventually you'll end up writing an interpreter of some language where the ability to define a special syntax provides more freedom and flexibility than a library from an existing programming language.

F# allows you to quote a fragment of program that returns a value representing it:

### Example of Quotation

```F#
let q = <@ 2 + 2 * 3 @>
```

F# interactive shows a tree representing the simple expression enclosed between &lt@ and @&gt, moreover the type of the whole expression is **Quotation.Expr&ltint&gt** which of course represents an expression whose returned value is of type **int**. Here are a few more examples:

### More Quotation Examples

```F#
let w = <@ while true do printfn "It never ends..." @>
let f = <@ fun x y -> x + y @>
```

Go ahead and try it for yourself to see what you can quote and what you cannot. Quotations render a very valueable service for a number of occasions, though there is a significant limitation on this mechanism: there is no evaluation function for quotations. Using F# quotations allows you to piggyback on the F# compiler to get a code fragment and type checked; it is up to you to decide what to do with the final quotation tree representing the code.

With F# 3.0 there is a notable exception to this fact: you can transform quotations into executable code within a type provider, an F# module capable of interacting with the compiler at compile time to generate specialized code. Type providers are not in the scope of this lesson, but you can think of them as restricted form of quotations evaluation.

You may wonder why the mechanism has been introduced before type providers, but many applications are made possible thanks to this ability. A significant example of this is a cross-compiler (F# to JavaScript) used by Websharper to allow the development of web applications using F# to describe both server side and client side computations. Moreover, **F# PowerPack** comes with a quotation evaluator that allows you to evaluate these expressions.

In this lesson we'll learn how to navigate a quotation tree and synthesize a new quotation tree by combinating its fragments. Let's start with simple example that evaluates quotations tree made only of additions and multiplications.

### Simple Interpreter of Exprssions

```F#
open Microsoft.FSharp.Quotations
open Microsoft.FSharp.Quotations.Patterns
open Microsoft.FSharp.Quotations.DerivedPatterns

let rec evalExpr q =
    match q with
    | SpecificCall <@ (+) @> (_, _, [a; b]) ->
        let l, r = evalExpr a, evalExpr b
        l + r
    | SpecificCall <@ (*) @> (_, _, [a; b]) ->
        let l, r = evalExpr a, evalExpr b
        l * r
    | Value (v, t) ->
        if t = typeof<int> then v :?> int
            else failwith "Only integer values supported"
    | _  -> failwith "Unsupported expression"

evalExpr <@ 22 + 2 * 22 + 45 @>
```

The F# libraries provide a set of active patterns that can help to effectively match quotation tree nodes. As you can see from the ouput of evaluating an expression involving additions and multiplications, operands map to function applications with special names such as **op_Addition**.

Our simple evaluation function recursively traverse the tree recognizing additions and multiplications and propagtes values from laves to the root obtaining the result. One of the useful things of quotations is that you can splice a quotation inside another one as is in the following example:

## Splicing Example

```F#
let e = if System.DateTime.Today.Day % 2 = 0 then
            <@ + 1 @>
        else
            <@ - 1 @>
let resf = <@ fun x -> %e + x @>
```

The resulting function **resf** is the increment or decrement function depending on the day of the month.

Splicing is quite natural to get, imagine inserting a quoted expression in the placeholder removing the quotes. F# type checks splicing, if you try to splice an expression with a type incompatible with the splicing site an error is risen. As a final example we present a classic in program specilization literature, how to specialize the pow function if the exponent is known. Here are two possible algorithms for computing the integer power function:

## Different Algorithms for Computing the Integer Power Function

```F#
let rec simplepow x y =
    if y = 0 then 1
    else x * (simplepow x (y - 1))

let rec pow x y =
    if y = 0 then 1
    elif y % 2 = 0 then
        let v = pow x (y / 2)
        v * v
    else
        x * (pow x (y - 1))

seq { 1..16 } |> Seq.iter
    (fun v -> printfn "2^%d = %d" v (pow 2 v))
```

The simplepow function simple performs the iterative multiplication y times of x to compute xy. pow performs a smarter computation that consists reduces and multiplication operations; the idea is exemplified by the following expansion:

x^10 = (x^5)^2 = (x*(x^4))^2 = (x*(x^2)^2)^2

In practice, you factorize the exponent to get a sequence of multiplication an square operations. This algorithms requires the number of steps equal to the number of bits in the exponent, and is much more efficient than **simplepow**. However, if you always need to compute pow with the given exponent y, you may want to generate the actual multiplication sequence and square for it.

The following mimics the pow algorithms for generating the exact sequence of square and mulitiplication operations for a given exponent:

### Generating the Specialized pow for a Given Exponent

```F#
open Microsoft.FSharp.Quotations

let sqr e = <@ let v = %e in v * v @>
let mul x e = <@ %x * %e @>

let rec genpow y x =
    if y = 0 then <@ 1 @>
    elif y % 2 = 0 then sqr (genpow (y / 2) x)
    else mul x (genpow (y - 1) x)

let x = new Var("x", typeof<int>)

let specialpow y =
  Expr.Lambda(x, genpow y (Expr.Cast<int>((Expr.Var(x)))))
```

In this example we generated the body using splicing and a recursive function **genpow** mimicking the pow function of the previous example. The x argument of genpow is of type **Expr&ltint&gt** but we would like to generate a function that raises its argument to y.

To perform this final task we need a little bit of explicit manipulation because we need to introduce a name used as an argument of our generated function and in the body. To do this we will create a value of type **Var** representing our variable and then we explicitly build a Lambda node (corresponding to fun x -> ...) indicating the save variable we pass to **genpow**.

One final but important consideration should be made about the last argument of the genpow call which may look magic. F# quotations come in two flavors, typed and untyped. So far we have used the first kind and every node is tagged with an argument type (our expressions were of type Expr&ltint&gt not just Expr). It is possible (and sometimes useful) to avoid types by using <@@ ... @@> quotes to get untyped expressions. You can also splice using %%e instead of %e.

In our example, Expr.Var(x) returns an untyped expression (with type Expr) but out genpow needs an Expr&ltint&gt, which explains the cast using the Cast function before passing the variable to the function.

Quotations are generally intuitive, as proven by countless frameworks such as PHP, ASP, and many others; in F# you can leverage the compiler to obtain type-checked syntax trees that you can use for many applications. Now with type providers these are the core mechanism for generating code at compile time and extending the compiler itself!
