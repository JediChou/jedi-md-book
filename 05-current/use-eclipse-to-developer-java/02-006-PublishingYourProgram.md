# 006-Publish your program

## Export to a runnable JAR file

* Create a simplest Java program (like hello).
* Deploy to local disk:
  * Choice project node at Package Explorer.
  * Choice **Export** from pop menu.
  * Select Java->Runnable JAR file type at Export type tab.
  * Set Launch configurate to **Main - helloworld** at Runabble JAR File Export.
  * Set Export destination to **D:\helloworld.jar** at Runabble JAR File Export.
  * Keep Library handing default value (Extract required libraries into generated JAR)
  * Click **Finish** button.

## Execute runnable JAR file

* Very easy! Click JAR file.

## Other error

* You can execute JAR file if you choice JAR file.
  * java -jar hello.jar, you can get an error.
  * Error message: hello.jar中没有主清单属性
  * It is mean the JAR file is a library.
