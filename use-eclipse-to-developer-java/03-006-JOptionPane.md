# 03-006 JOptionPane

```java
import javax.swing.JOptionPane;

public class DiscountCalculator extends JOptionPane {
    private static final long serialVersionUID = 1L;
    public static void main(String[] args) {
        String input1 = JOptionPane.showInputDialog("Enter total price:");
        double total = Double.parseDouble(input1);

        String input2 = JOptionPane.showInputDialog("Enter discount:");
        double discount = Double.parseDouble(input2);

        JOptionPane.showMessageDialog(null, "final price is: " + total * discount);
    }
}
```

## Error

* If wsl don't config X11, then you get an error

```text
jedi@MIS-F3216338:/mnt/d$ java -jar hello.jar
Exception in thread "main" java.awt.HeadlessException:
No X11 DISPLAY variable was set, but this program performed an operation which requires it.
        at java.desktop/java.awt.GraphicsEnvironment.checkHeadless(GraphicsEnvironment.java:208)
        at java.desktop/java.awt.Window.<init>(Window.java:548)
        at java.desktop/java.awt.Frame.<init>(Frame.java:423)
        at java.desktop/java.awt.Frame.<init>(Frame.java:388)
        at java.desktop/javax.swing.SwingUtilities$SharedOwnerFrame.<init>(SwingUtilities.java:1919)
        at java.desktop/javax.swing.SwingUtilities.getSharedOwnerFrame(SwingUtilities.java:1995)
        at java.desktop/javax.swing.JOptionPane.getRootFrame(JOptionPane.java:1689)
        at java.desktop/javax.swing.JOptionPane.showInputDialog(JOptionPane.java:580)
        at java.desktop/javax.swing.JOptionPane.showInputDialog(JOptionPane.java:527)
        at java.desktop/javax.swing.JOptionPane.showInputDialog(JOptionPane.java:475)
        at java.desktop/javax.swing.JOptionPane.showInputDialog(JOptionPane.java:439)
        at helloworld.DiscountCalculator.main(DiscountCalculator.java:8)
```
