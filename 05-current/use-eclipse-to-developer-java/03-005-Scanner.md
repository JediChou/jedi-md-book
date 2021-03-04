# 03-005 Scanner

* Accept user input.
* It is like Console.ReadLine(), or Console.ReadKey().

```java
import java.util.Scanner;

public class Main {
    private static Scanner scanner;
    public static void main(String[] args) {
        scanner = new Scanner(System.in);

        System.out.println("Input total price:");
        double total = scanner.nextDouble();

        System.out.println("Input current discount:");
        double discount = scanner.nextDouble();

        System.out.println("Final price is: " + total * discount);
    }
}
```
