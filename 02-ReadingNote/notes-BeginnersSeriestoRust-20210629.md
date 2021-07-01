# Beginner's Series to Rust

* [Series Page](https://channel9.msdn.com/Series/Beginners-Series-to-Rust)

## Introduction to the series [1 of 35]

* 1+3
* 完全面向初學者

## What is Rust and why should you learn it [2 of 35]

* Rust is a Systems programmer language.
  * Operating system
  * Web Browsers
  * Databases
  * Web Servers
  * Fireware
  * Embedded Devices
* System languages: C/C++
  * You need high level control skills.
  * No garbage collection.
* What does Rust bring to the table?
* *Feature*: Memory safety
  * **Use after free*
  * *Dangling pointers*
  * Null Pointer exceptions
  * Data races
  * Iterator invalidation
* *Feature*: Zero cost Abstractions
* *Feature*: Expressive
* *Feature*: Modern
  * Intergrated build tooling
  * Package manager
  * Open-source package repository
  * Default testing framework
  * Auto generated documentation
* *Feature*: Manu uses
  * Systems programming
  * Web APIs
  * Toosl and utilities
  * Gaming
  * Desktop/Mobile applications

## Learn about the Rust community [3 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/Learn-about-the-Rust-community-3-of-35--Beginners-Series-to-Rust)

* [Rust Community](https://www.rust-lang.org/community)
* [RustConf](https://rustconf.com)
* [Rust Goernance](https://www.rust-lang.org/governance)
* [Rust Twitter](https://twitter.com/hashtag/rustlang)
* [Rust Reddit](https://www.reddit.com/r/rust/)
* 2021.6.29 17:19 PM

## Install the tools to develop with Rust [4 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/Install-the-tools-to-develop-with-Rust-4-of-35--Beginners-Series-to-Rust)

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

```shell
source $HOME/.cargo/env
```

```shell
> rustup
> rustc --version
```

* Jedi: Install rust and Visual Code.
* 2021.6.29 17:37 PM

## Create your first application [5 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/Create-your-first-application-5-of-35--Beginners-Series-to-Rust)

* 第一：在vscode中編輯main.rs
* 第二：在shell中用rustc編譯（rustc main.rs）
* 2021.7.1 17:12 PM

## What is Cargo? [6 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/What-is-Cargo-6-of-35--Beginners-Series-to-Rust)

* Cargo is a project manager.
* Test runner, dependency manager, bootstrapper.

```shell
jedi@MIS-F3216338:/mnt/d$ cargo --version
cargo 1.53.0 (4369396ce 2021-04-27)
```

* Install rust-analyzer at vscode.
* rust-analyzer支持包加載等，方便開發
* 2021.7.1 19:19 PM

## Learn about variables [7 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/Demo-Using-Cargo-7-of-36--Beginners-Series-to-Rust)

* Declare variables
  * Bound to values using the keyword `let`
  * Immutable by default

```rust
// use let
fn main() {
  let x = 5;
}
```

```rust
// without let
fn main() {
  let x = 5;
  x = 6; // causes an error
}
```

```rust
fn main() {
  let mux x = 5;
  x = 6; // value updates to 6
}
```

* About immutability
  * Creates predictability in our code.
  * Can be more conenient to make variables mutable.
  * There are trade-offs either way.

* Declare a constant
  * Use the keyword const.
  * Name of the constant should be capitalized, with underscores in between words.
  * Can only be set to an expression.

```rust
fn main() {
  const SCORE_LIMIT: u32 = 100;
}
```

* Shadow a variable
  * Declare a new variable with the same name as the previous, creating a new binding.
  * Value of variable updated again using the let keyword.

```rust
fn main() {
  let x = 5;
  let x = x + 1; // x is now 6
}
```

* 2021.7.1 19:34 PM

## Demo: Declare and use variables [8 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/Demo-Declare-and-use-variables-8-of-35--Beginners-Series-to-Rust)

```rust
fn main() {
    let mut x: i32 = 5;
    println!("x value is {}", x);
    
    x = 10;
    println!("x value is {}", x);

    let y: bool = true;
    println!("y value is {}", y);
    
    let y: bool = false;
    println!("y value is {}", y);

    const JEDI_STRING: &str = "Something will be happen!";
    println!("{}", JEDI_STRING);
}
```

* Study at 2021.7.1 19:47 PM
* Demo at 2021.7.1 19:59 PM

## Learn about scalar data types [9 of 35]

* [Link](https://channel9.msdn.com/Series/Beginners-Series-to-Rust/Learn-about-scalar-data-types-9-of-35--Beginners-Series-to-Rust)

* Focus on scalar types.

* Integers
  * Integers are whole numbers
  * They are either signed or unsigned.
  * Signed variants
    * Can be positie or negatie numbers.
    * Store -(2**(n-1)) to 2**(n-1)-1
  * 8-bit, i8, u8
  * 16-bit, i16, u16
  * 32-bit, i32, u32
  * 64-bit, i64, u64
  * 128-bit, i126, u128
  * arch, isize, usize

* Floating-point
  * Numbers with decimal points
  * Types: f32 and f64
  * Default type is f64

* Numberical operations
  * Number types support mathematical operations
  * addition
  * subtraction
  * multipilication
  * division
  * remainder

* Booleans
  * Have a value of either `true` or `false`
  * Specified using the keyword `bool`

* Characters
  * Represent letters
  * Specified using `char` keyword
  * Using single quotes
  * Four bytes in size

* Study at 2021.7.1 20:28 PM

## Demo: Create and use scalar data types [10 of 35]

```rust
fn main() {
    let a: u8 = 5;
    let b: u8 = 1;

    let x: f64 = 2.0;
    let y: f32 = 3.0;

    let sum: u8 = a + b;

    let difference: f64 = x - 1.0;

    let product: u8 = 4 * a;
    
    let quotient: f32 = 9.0/y;
    
    let remainder: u8 = a % b;
    
    let t: bool = true;
    let f: bool = false;

    let c: char = '🚙';
    let d: char = 'a';
}
```

* Study at 2021.7.1 20:35 PM
