# QEMU - Jedi Chou User Manual
Author: Jedi Chou
Date: 2016.3.17 18:54 PM
ENV: Windows 7

## Task 1: install minix
Use qemu-img command to create a hard disk image.
You can use this disk to install minix or other
OS.

```bat
qemu-img create vmdisk.img 5G
```

## Task 2: Install freedos

```bat
qemu-img create -f raw freedos.img 100M
qemu-system-x86_64w -localtime freedos.img -cdrom fd11src.iso -boot d
``` 

## Install software into Minix3
* Jedi Chou, 2016.3.18 AM 08:31
* Use Vmare Workstation 12 create a minix3 VM
* login into system and input "setup" command
    * configure some install option and setup base OS
* Install binary software from CDRom
    * use **pkgin-cd install python27**
    * use **pkgin-cd install clang**
