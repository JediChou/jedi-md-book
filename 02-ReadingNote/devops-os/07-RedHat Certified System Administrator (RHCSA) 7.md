Linuxacademy.com - RedHat Certified System Administrator (RHCSA) 7
==================================================================

* Introduction
  - About This Course And How to Prepare
  - Lab Servers and How To Follow Along
  
* Understand and use essential tools
  - Access a Shell Prompt and Issue Commands With Correct Syntax
  - User Input/Output Redirection
  - Use grep and Regular Expressions to Analyze Text
  - Access Remote System Using SSH
  - Log-in and Switch Users in Multiuser Targets
  - Archive, Compress, Unpack, and Uncompress Files Using tar, star, gzip, and bzip2
  - Create and Edit Text Files
  - Create, Delete, Copy, and Move Files & Directories
  - Create hard and soft links
  - List, set, and change standard ugo/rwx Permissions
  - List, set, and change standard ugo/rwx Permissions umask
  - Locate, Read, and Use System Documentation Including man, info, and files in /usr/share/doc
  - Finding Files with locate and find
  
* Quiz: Understand and use essential tools

* Exercise: Understanding umask (User mask)
* Exercise: Archiving and compressing files
* Exercise: Finding Files with locate and find

* Operate running systems
  - Boot, Reboot, and Shut Down a System Normally
  - Boot System Into Different Targets Manually
  - Interrupt the Boot Process in Order to Gain Access to a System
  - Identity CPU/Memory Intensive Process Adjust Process Priority with Renice, and kill processes (Part 1)
  - Identity CPU/Memory Intensive Process Adjust Process Priority with Renice, and kill processes (Part 2)
  - Identity CPU/Memory Intensive Process Adjust Process Priority with Renice, and kill processes (Part 3)
  - Identity CPU/Memory Intensive Process Adjust Process Priority with Renice, and kill processes (Part 4)
  - Locate and Interpet System Log Files and Journals
  - Access a Virtual Machine's Console
  - Start and Stop Virtual Machines
  - Start, Stop and Check the Status of Network Services
  - Securely Transfer Files Between Systems
  
* Quiz: Operate running systems

* Exercise: Working with systemd and targets
* Exercise: Recovering the root password
* Exercise: Interrupt the boot process to change the boot target
* Exercise: Power off systems
* Exercise: pgrep, pkill, kill, and jobs
* Exercise: nice, renice, and ps
* Exercise: Monitoring and calculating cpu load averages
* Exercise: Working with top
* Exercise: Virtual Machines

* Configure local storage
  - List, create, and delete partitions on MBR and GPT disks
  - Create and Remove Physical volumes, assign physical volumes to volume groups, and create & delete logical volumes
  - configure systems to mount file systems at boot by universally unique id (uuid) or label
  - add new partitions and logical volumes, and swap to a system non-destructively
  
* Quiz: Configure local storage

* Live! Lab: Managing logical volumes on redhat enterprise 7
* Exercise: Working with MBR partitions
* Exercise: Working with GPT partitions
* Exercise: Creating persistent mounts with file system labels
* Exercise: Creating swap space
* Exercise: Creating swap space from a lvm volume

* Creat and configure file systems
  - Create, mount, unmount, and use vfat, ext4, and xfs file systems
  - mount and unmount CIFS and NFS network file systems
  - Extend Existing logical volumes
  - Create and configure set-GID Directories for collaboration
  - Create and manage access control lists (ACLs)
  - Diagnose and Correct File Permission Problems
  
* Quiz: Create and configure file systems
* Exercise: Filesystem ACLs
* Live! Lab: Mounting CIFs and NFS Network File System
* Live! Lab: Extending Existing Logical Volumes

* Deploy, configure, and maintain systems
  - Configure Networking and Hostname Resolution Statically or Dynamically: Troubleshooting
  - Configure Networking and Hostname Resolution Statically or Dynamically: Network Manager
  - Configure Networking and Hostname Resolution Statically or Dynamically: Hostname Configuration Schedule Tasks Using at and cron
  - Start & Stop Services and Configure Services to Start Automatically at Boot
  - Configure Systems to Boot into a Specific Target Automatically
  - Install Red Hat Enterprise Linux Automatically Using Kickstart
  - Configure a Physical Machine to Host Virtual Guests
  - Install Red Hat Enterprise Linux Systems as Virtual Guests
  - Configure Systems to Lauchi Virtual Machine at Boot
  - Configure Network Services to Start Automatically at Boot
  - Configure a System to Use Time Services
  - Install and Update Software Packages from Red Hat
  - Network, a Remote Repository, or From the Local File System: YUM
  - Install and Update Software Package from Red Hat Network, a Remote Repository, or From the Local File System: RPM
  - Install and Update Software Package from Red Hat Network, a Remote Repository, or From the Local File System: Managing Repositories
  - Install and Update Software Package from Red Hat Network, a Remote Repository, or From the Local File System: Configure A Local Repository
  - Install and Update Software Package from Red Hat Network, a Remote Repository, or From the Local File System: Configure A Local Repository: The GPG Key
  - Update the Kernel Package Appropriately to Ensure a Bootable system
  - Modifying the System Bootloader
  
* Quiz: Deploy, configure, and maintain systems
* Exercise: Scheduling tasks on RedHat Systems
* Exercise: Working with time services
* Exercise: Working with YUM
* Exercise: Working with yum groups
* Exercise: Working with RPM
* Exercise: Managing Third Party Repositories
* Exercise: Creating a local repository
* Exercise: Networking
* Live! Lab: Working with Network Manager
* Live! Lab: Updae the kernel package to ensure a bootable system

* Manage users and groups
  - Create, Delete, and Modify Local User Accounts
  - Change Passwords and Adjust Password Aging for Local User Accounts
  - Create, Delete, and Modify Local Groups and Group Memberships
  - Using set-GID On Diretories
  - Configure a System to Use an Existing Authentication Service for User and Group Information: using Realmd
  - Configure a System to Use an Existing Authentication Service for User and Group Information: using authconfig
  
* Live! Lab: Using an Existing Authentication service
* Live! Lab: Using Existing LDAP Credential For Sign-on
* Quiz: Manage Users and Groups
* Exercise: Managing users and groups

* Manage security
  - Configure Firewall Settings Using firewall-config, firewall-cmd, or iptables
  - Configure Key-Based Authertication for ssh introduction to selinux
  - Set enforcing and permissive modes for selinux
  - list and indentify selinux file and process context restore default file contexts
  - using boolean settings to modify system selinux settings
  - diagnose and address routine selinux policy violations
  
* Live! Lab: Redhat security with firewallID
* Exercise: Configure key-based authentication for ssh
* Exercise: Working with selinux context, booleans, and troubleshooting

* Preparing for the exam
  - How to practice and study after completing the course
  - Best practices to remmember while taking the exam
  
* Quiz: Finding help or documentation while in the exam