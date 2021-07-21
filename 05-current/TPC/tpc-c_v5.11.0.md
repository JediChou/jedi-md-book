# TPC BEN CHMARK™ C

Standard Specification

Revision  5.11

Febru ary 2010

Transaction  Processing Perform an ce Council (TPC)

www.tpc.org

info@tpc.org

©2010 Transaction  Processing Performance Council

## Acknowledgments

The TPC acknowledges the substantial contribution of François Raab, consultant to the TPC-C subcommittee and technical editor of the TPC-C benchmark standard. The TPC also acknowledges the work and contributions of the TPC-C subcommittee member companies: Amdahl, Bull, CDC, DEC, DG, Fujitsu/ICL, HP, IBM, Informix, Mips, Oracle, Sequent, Sun, Sybase, Tandem, and Unisys.

## TPC Membership

(as of Febru ary 2010)

## Clause 0: PREAMBLE

## 0.1 Introduction

TPC Benchmark™ C (TPC-C) is an OLTP workload. It is a mixture of read-only and update intensive transactions that simulate the activities found in complex OLTP application environments.  It does so by exercising a breadth of system components associated with such environments, which are characterized  by:

* The simultaneous execution of multiple transaction types that span a breadth of complexity.
* On-line and deferred transaction execution modes.
* Multiple on-line terminal sessions.
* Moderate system and application execution time.
* Significant disk input/output.
* Transaction integrity (ACID properties).
