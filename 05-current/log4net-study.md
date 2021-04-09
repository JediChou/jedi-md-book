# Study Log4Net

## Part 1, Setting up Log4Net

* Why we need loogging framework?
  * It act as a fingerprint for the action, which application is performing.
  * Also it helps in debugging process.

* Setting up Log4Net
  * Using the "Nuget" package manager user interface
  * Using the package manager console.

```shell
install-package log4net
```

```shell
# other commands at console
Install-Package log4net -Version 2.0.12
dotnet add package log4net --version 2.0.12
paket add log4net --version 2.0.12
```

## Part 2, Create console Logger

* Configuration for Log4net
  * Configuration using "Application configuration File". i.e. "App.config"
  * The above method of configuration is also known an "Xml Configuration"
  * Configuration directly from the code, by creating custom logger class

* Creating the Logger
  * Type of Appender :- It represent where to log the information. It could be "Console", "File", or "Database".
  * Format of the logging information.
  * Level of the logging information.

* Creating the Console Logger
  * Type of Appender :- "Consoleappender".
  * Format of the logging information :-"%message"
  * Level of the logging information :-"ALL"
