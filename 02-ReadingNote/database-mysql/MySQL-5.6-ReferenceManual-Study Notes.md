# MySQL 5.6 Reference Manual - Study Notes

Online Document: https://dev.mysql.com/doc/refman/5.6/en/installing.html
Study by Jedi Chou

* History, 2016.6.8 14:06, create document.

## Chapter 2 Installing and Upgrading MySQL

* Installation of mysql generally follows the steps outlined here:
  1. Determine whether mysql runs and is supported on your platform.
  2. Choose which distribution to install.
  3. Download the distribution that you want to install.
  4. Install the distribution.
  5. Perform an necessary postinstalltion setup.
  6. If you want to run the MySQL benchmark script, Perl support for MySQL must be available.
  
* Unix, Linux, FreeBSD
* Microsoft Windows
* OS X

## 2.1 General Installation Guidance

### 2.1.1 Which MySQL Version and Distribution to install

* Version Different: Release, General Availability(GA)
* Version number, mysql-5.6.1-m1
  * The first number (5) is the major version number.
  * The second number (6) is the minor version number.
  * The third number (1) is the version number within the release series.

* Release names can also include a suffix to indicate the stability level of the release.
  * mN(for example, m1,m2,m3,...) indicates a milestone number.
