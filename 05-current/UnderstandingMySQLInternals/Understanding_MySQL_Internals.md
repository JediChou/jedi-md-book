# Understanding MySQL Internals

Author: Sasha Pachev

## CHAPTER 1 MySQL History and Architecture

MySQL architecture is best understood in the context of its history.
Thus, the two are discussed in the same chapter.

### MySQL History

MySQL history goes back to 1979 when Monty Widenius, working for a small company
called TcX, created a reporting tool written in BASIC that ran on a 4 Mhzcomputer
with 16 KB RAM. Over time, the tool was rewritten in C and ported to run on
Unix. It was still just a low-level storage engine with a reporting front end. The tool
was known by the name of Unireg.

Working under the adverse conditions of little computational resources, and perhaps
building on his God-given talent, Monty developed a habit and ability to write
very efficient code naturally. He also developed, or perhaps was gifted from the start,
with an unusually acute vision of what needed to be done to the code to make it useful
in future development—without knowing in advance much detail about what
that future development would be.

In addition to the above, with TcX being a very small company and Monty being one of
the owners, he had a lot of say in what happened to his code. While there are perhaps a
good number of programmers out there with Monty’s talent and ability, for a number
of reasons, few get to carry their code around for more than 20 years. Monty did.
Monty’s work, talents, and ownership of the code provided a foundation upon
which the Miracle of MySQL could be built.

Some time in the 1990s, TcX customers began to push for an SQL interface to their
data. Several possibilities were considered. One was to load it into a commercial database.
Monty was not satisfied with the speed. He tried borrowing mSQL code for the
SQL part and integrating it with his low-level storage engine. That did not work well,
either. Then came the classic move of a talented, driven programmer: “I’ve had enough
of those tools that somebody else wrote that don’t work! I’m writing my own!”

Thus in May of 1996 MySQL version 1.0 was released to a limited group, followed
by a public release in October 1996 of version 3.11.1. The initial public release provided
only a binary distribution for Solaris. A month later, the source and the Linux
binary were released.

In the next two years, MySQL was ported to a number of other operating systems as
the feature set gradually increased. MySQL was originally released under a special
license that allowed commercial use to those who were not redistributing it with
their software. Special licenses were available for sale to those who wanted to bundle
it with their product. Additionally, commercial support was also being sold. This
provided TcX with some revenue to justify the further development of MySQL,
although the purpose of its original creation had already been fulfilled.

During this period MySQL progressed to version 3.22. It supported a decent subset
of the SQL language, had an optimizer a lot more sophisticated than one would
expect could possibly be written by one person, was extremely fast, and was very stable.
Numerous APIs were contributed, so one could write a client in pretty much any
existing programming language. However, it still lacked support for transactions,
subqueries, foreign keys, stored procedures, and views. The locking happened only
at a table level, which in some cases could slow it down to a grinding halt. Some programmers
unable to get around its limitations still considered it a toy, while others
were more than happy to dump their Oracle or SQL Server in favor of MySQL, and
deal with the limitations in their code in exchange for improvement in performance
and licensing cost savings.

Around 1999–2000 a separate company named MySQL AB was established. It hired
several developers and established a partnership with Sleepycat to provide an SQL
interface for the Berkeley DB data files. Since Berkeley DB had transaction capabilities,
this would give MySQL support for transactions, which it previously lacked.
After some changes in the code in preparation for integrating Berkeley DB, version
3.23 was released.

Although the MySQL developers could never work out all the quirks of the Berkeley
DB interface and the Berkeley DB tables were never stable, the effort was not wasted.
As a result, MySQL source became equipped with hooks to add any type of storage
engine, including a transactional one.

By April of 2000, with some encouragement and sponsorship from Slashdot, masterslave
replication capability was added. The old nontransactional storage engine,
ISAM, was reworked and released as MyISAM. Among a number of improvements,
full-text search capabilities were now supported. A short-lived partnership with
NuSphere to add Gemini, a transactional engine with row-level locking, ended in a
lawsuit toward the end of 2001. However, around the same time, Heikki Tuuri
approached MySQL AB with a proposal to integrate his own storage engine,
InnoDB, which was also capable of transactions and row-level locking.

Heikki’s contribution integrated much more smoothly with the new table handler
interface already polished off by the Berkeley DB integration efforts. The MySQL/InnoDB
combination became version 4.0, and was released as alpha in October of 2001.
By early 2002 the MySQL/InnoDB combo was stable and instantly took
MySQL to another level. Version 4.0 was finally declared production stable in March

It might be worthy of mention that the version number change was not caused by the
addition of InnoDB. MySQL developers have always viewed InnoDB as an important
addition, but by no means something that they completely depend on for success.
Back then, and even now, the addition of a new storage engine is not likely to
be celebrated with a version number change. In fact, compared to previous versions,
not much was added in version 4.0. Perhaps the most significant addition was the
query cache, which greatly improved performance of a large number of applications.
Replication code on the slave was rewritten to use two threads: one for network I/O
from the master, and the other to process the updates. Some improvements were
added to the optimizer. The client/server protocol became SSL-capable.

Version 4.1 was released as alpha in April of 2003, and was declared beta in June of 2004.
Unlike version 4.0, it added a number of significant improvements. Perhaps
the most significant was subqueries, a feature long-awaited by many users. Spatial
indexing support was added to the MyISAM storage engine. Unicode support was
implemented. The client/server protocol saw a number of changes. It was made more
secure against attacks, and supported prepared statements.

In parallel with the alpha version of 4.1, work progressed on yet another development
branch: version 5.0, which would add stored procedures, server-side cursors,
triggers, views, XA transactions, significant improvements in the query optimizer,
and a number of other features. The decision to create a separate development
branch was made because MySQL developers felt that it would take a long time to
stabilize 4.1 if, on top of all the new features that they were adding to it, they had to
deal with the stored procedures. Version 5.0 was finally released as alpha in December 2003.
For a while this created quite a bit of confusion—there were two branches
in the alpha stage. Eventually 4.1 stabilized (October 2004), and the confusion was
resolved.

Version 5.0 stabilized a year later, in October of 2005.

The first alpha release of 5.1 followed in November 2005, which added a number of
improvements, some of which are table data partitioning, row-based replication,
event scheduler, and a standardized plug-in API that facilitates the integration of new
storage engines and other plug-ins.

At this point, MySQL is being actively developed. 5.0 is currently the stable version,
while 5.1 is in beta and should soon become stable. New features at this point go
into version 5.2.

### MySQL Architecture

For the large part, MySQL architecture defies a formal definition or specification.
When most of the code was originally written, it was not done to be a part of some
great system in the future, but rather to solve some very specific problems. However,
it was written so well and with enough insight that it reached the point where there
were enough quality pieces to assemble a database server.

#### Core Modules

I make an attempt in this section to identify the core modules in the system. However,
let me add a disclaimer that this is only an attempt to formalize what exists.
MySQL developers rarely think in those terms. Rather, they tend to think of files,
directories, classes, structures, and functions. It is much more common to hear “This
happens in **mi_open()**” than to hear “This happens on the MyISAM storage engine
level.” MySQL developers know the code so well that they are able to think conceptually
on the level of functions, structures, and classes. They will probably find the
abstractions in this section rather useless. However, it would be helpful to a person
used to thinking in terms of modules and managers.

With regard to MySQL, I use the term “module” rather loosely. Unlike what one
would typically call a module, in many cases it is not something you can easily pull
out and replace with another implementation. The code from one module might be
spread across several files, and you often find the code from several different modules
in the same file. This is particularly true of the older code. The newer code tends
to fit into the pattern of modules better. So in our definition, a module is a piece of
code that logically belongs together in some way, and performs a certain critical
function in the server.

One can identify the following modules in the server:

* Server Initialization Module
* Connection Manager
* Thread Manager
* Connection Thread
* User Authentication Module
* Access Control Module
* Parser
* Command Dispatcher
* Query Cache Module
* Optimizer
* Table Manager
* Table Modification Modules
* Table Maintenance Module
* Status Reporting Module
* Abstracted Storage Engine Interface (Table Handler)
* Storage Engine Implementations (MyISAM, InnoDB, MEMORY, Berkeley DB)
* Logging Module
* Replication Master Module
* Replication Slave Module
* Client/Server Protocol API
* Low-Level Network I/O API
* Core API

#### Interaction of the Core Modules

When the server is started on the command line, the Initialization Module takes control.
It parses the configuration file and the command-line arguments, allocates global
memory buffers, initializes global variables and structures, loads the access
control tables, and performs a number of other initialization tasks. Once the initialization
job is complete, the Initialization Module passes control to the Connection
Manager, which starts listening for connections from clients in a loop.

When a client connects to the database server, the Connection Manager performs a
number of low-level network protocol tasks and then passes control to the Thread
Manager, which in turn supplies a thread to handle the connection (which from now
on will be referred to as the Connection Thread). The Connection Thread might be
created anew, or retrieved from the thread cache and called to active duty. Once the
Connection Thread receives control, it first invokes the User Authentication Module.
The credentials of the connecting user are verified, and the client may now issue
requests.

The Connection Thread passes the request data to the Command Dispatcher. Some
requests, known in the MySQL code terminology as *commands*, can be accommodated
by the Command Dispatcher directly, while more complex ones need to be
redirected to another module. A typical command may request the server to run a
query, change the active database, report the status, send a continuous dump of the
replication updates, close the connection, or perform some other operation.

In MySQL server terminology, there are two types of client requests: a query and a
command. A *query* is anything that has to go through the parser. A command is a
request that can be executed without the need to invoke the parser. We will use the
term query in the context of MySQL internals. Thus, not only a *SELECT* but also a
*DELETE* or *INSERT* in our terminology would be called a query. What we would call a
query is sometimes called an SQL statement.

If full query logging is enabled, the Command Dispatcher will ask the Logging Module
to log the query or the command to the plain-text log prior to the dispatch. Thus
in the full logging configuration all queries will be logged, even the ones that are not
syntactically correct and will never be executed, immediately returning an error.

The Command Dispatcher forwards queries to the Parser through the Query Cache
Module. The Query Cache Module checks whether the query is of the type that can
be cached, and if there exists a previously computed cached result that is still valid.
In the case of a hit, the execution is short-circuited at this point, the cached result is
returned to the user, and the Connection Thread receives control and is now ready to
process another command. If the Query Cache Module reports a miss, the query
goes to the Parser, which will make a decision on how to transfer control based on
the query type.

One can identify the following modules that could continue from that point: *the Optimizer*,
*the Table Modification Module*, *the Table Maintenance Module*, *the Replication Module*,
and *the Status Reporting Module*. Select queries are forwarded
to the Optimizer; updates, inserts, deletes, and table-creation and schema-altering
queries go to the respective Table Modification Modules; queries that check, repair,
update key statistics, or defragment the table go to the Table Maintenance module;
queries related to replication go to the Replication Module; and status requests go to
the Status Reporting Module. There also exist a number of Table Modification Modules:
Delete Module, Create Module, Update Module, Insert Module, and Alter Module.

At this point, each of the modules that will receive control from the Parser passes the
list of tables involved in the query to the Access Control Module and then, upon success,
to the Table Manager, which opens the tables and acquires the necessary locks.
Now the table operation module is ready to proceed with its specific task and will
issue a number of requests to the Abstracted Storage Engine Module for low-level
operations such as inserting or updating a record, retrieving the records based on a
key value, or performing an operation on the table level, such as repairing it or
updating the index statistics.

The Abstracted Storage Engine Module will automatically translate the calls to the
corresponding methods of the specific Storage Engine Module via object polymorphism.
In other words, when dealing with a Storage Engine object, the caller thinks it
is dealing with an abstracted one, when in fact the object is of a more specific type: it
is the Storage Engine object corresponding to the given table type. The interface
methods are virtual, which creates the effect of transparency. The correct method
will be called, and the caller does not need to be aware of the exact object type of the
Storage Engine object.

As the query or command is being processed, the corresponding module may send
parts of the result set to the client as they become available. It may also send warnings
or an error message. If an error message is issued, both the client and the server
will understand that the query or command has failed and take the appropriate measures.
The client will not accept any more result set, warning, or error message data
for the given query, while the server will always transfer control to the Connection
Thread after issuing an error. Note that since MySQL does not use exceptions for
reasons of implementation stability and portability, all calls on all levels must be
checked for errors with the appropriate transfer of control in the case of failure.

If the low-level module has made a modification to the data in some way and if the
binary update logging is enabled, the module will be responsible for asking the Logging
Module to log the update event to the binary update log, sometimes known as
the replication log, or, among MySQL developers and power users, the binlog.

Once the task is completed, the execution flow returns to the Connection Thread,
which performs the necessary clean-up and waits for another query or command
from the client. The session continues until the client issues the Quit command.

In addition to interacting with regular clients, a server may receive a command from
a replication slave to continuously read its binary update log. This command will be
handled by the Replication Master Module.

If the server is configured as a replication slave, the Initialization Module will call the
Replication Slave Module, which in turn will start two threads, called the SQL
Thread and the I/O thread. They take care of propagating updates that happened on
the master to the slave. It is possible for the same server to be configured as both a
master and a slave.

Network communication with a client goes through the Client/Server Protocol Module,
which is responsible for packaging the data in the proper format, and depending
on the connection settings, compressing it. The Client/Server Protocol Module in
turn uses the Low-Level Network I/O module, which is responsible for sending and
receiving the data on the socket level in a cross-platform portable way. It is also
responsible for encrypting the data using the OpenSSL library calls if the connection
options are set appropriately.

To Pdf book page 26.
