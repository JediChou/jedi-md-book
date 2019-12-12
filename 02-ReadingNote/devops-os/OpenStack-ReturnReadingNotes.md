OpenStack开源云王者归来
=====================

# 第1章 OpenStack概述
* Cloud computer, Cloud storage
* Private cloud, Public cloud
* OpenStack Architecture

## 1.1 云计算简介
### 1.1.1 什么是云计算
* 比较四个方面
  - 资源弹性提供
  - 资源自助化
  - 便捷
  - 计量收费
  - 资源虚拟化

### 1.1.2 什么是云存储
* 四个层次
  - 硬件层
  - 管理层
  - API层
  - 客户端

### 1.1.3 ˽���ƺ͹�����
* ԭ�򣺰�ȫ�ԡ��ɿ���

## 1.2 Ϊʲôʹ���Ƽ���
### 1.2.1 ����1���򵥵ķ�������
* ������ʽ���򵥣�
* ���⣺��ȫ���ɿ��ԡ���չ�Ѷȡ�ά���ɱ�
* ����ʵ��

### 1.2.2���ֲ�ʽ��������
* ������ʽ����ȫ���ɿ���
* ���⣺��չ�Ѷȡ������Ѷȡ�ά���Ѷ�
* ����ʵ��

### 1.2.3���������⻯�ķ�������
### 1.2.4���Ƽ����Ľ�������
* IaaS->PaaS->SaaS
* IaaS: Network, storage, servers, virtualization
* PaaS: Middleware, o/s
* SaaS: Data Application

## 1.3 OpenStack�ܹ�
### 1.3.1 OpenStack���Ƽ���
### 1.3.2 OpenStack��չ����״
### 1.3.3 OpenStack����
* ģ��������
* �������ý�Ϊ����
* ���ο�������

### 1.3.4 OpenStackѧϰ����
* Source code: https://launchpad.net
* resposity: https://github.com/openstack

## 1.4 OpenStack��������������

### 1.4.1 ����������ϵͳNova
* Web UI, Nova, Hypervisor, OS

### 1.4.2 ���̴洢ϵͳGlance��Swift
* Glance��Ҫ�����ǹ���Image
* Swift��Object Storage�Ŀ�Դʵ��
* Swfit: file system, Swfit, self-define

### 1.4.3 ������������Quantum
### 1.4.4 OpenStack��������
* Keystone�ѵ���������ϵͳ��

## 1.5 С��

# ��2�� ���⻯����
## 2.1 ���⻯��������
### 2.1.1 KVM
### 2.1.2 Xen
### 2.1.3 Libvirt

## 2.2 ��װLibvirt���⻯����
### 2.2.1 ��װKVM
* Installation
  - BIOS����VT
  - ����VT
    - command: egrep -o "(vmx|svm)" /proc/cpuinfo
  - ��װ
    - apt-get install qemu-kvm ubuntu-vm-builder bridge-utils
    - modprobe kvm
    - modprobe kvm_intel
    - modprobe kvm_amd
  - ���鰲װ�Ƿ��ɹ�
    - kvm-ok
    - Ouput 1: INFO: /dev/kvm exists
    - Ouput 2: KVM acceleration can be used
  - �����û�root��kvm��
    - adduser root kvm

### 2.2.2 ��װLibvirt
* Դ�밲װLibvirt
  - ���Ȱ�װ����������
  - ����Libvirt��Դ���벢���а�װ
    - Notice: ��Ҫʹ��root��ִ���������� 
    ```shell
    tar zxf libvirt-0.10.2.tar.gz
    cd libvirt-0.10.2
    ./configure  --prefix=/usr
    make; make install
    ```
  - ����  /usr/bin/libvirtd -d
* apt-get��װLibvirt
```shell
apt-get install libvirt-bin qemu virt-manager
service libvirtd restart
virsh list --all
```
  - ����ͼ�ν���: virt-manager

## 2.3 �����������ļ�����
### 2.3.1 xml����hypervisor
* Jedi: �����ļ��Ľṹ��Ϣ

### 2.3.2 ������������Ϣ
* ʹ��uuidgen������UUID: #uuidgen
* ������ģ����CPU����: #cat /proc/cpuinfo | grep processor | wc -l

### 2.3.3 ϵͳ��Ϣ
* ��ͨ�������鿴������֧�ֵĻ�������
  - qemu-system-x86_64 -M ?

### 2.3.4 Ӳ����Դ����
* ��Դ�������ڴ�����
* acpi, advanced configuration and power interface
* apic, advanced programmable interrupt controller
* pae, physical address extension

### 2.3.5 ͻ���¼�����
```xml
<on_poweroff>destory</on_poweroff>
<on_reboot>restart</on_reboot>
<on_crash>restart</on_crash>
```

### 2.3.6 raw��ʽimage
* ����raw��ʽ��image
```shell
#qemu-img create -f raw ubuntu-12.10.raw 20G
Formatting 'ubuntu-12.10.raw', fmt=raw size=21474836480
```

* ����imageʱ������������������image��ʽ
```shell
#qemu-img info ubuntu-12.10.raw
image: ubuntu-12.10.raw
file format: raw
virtual size: 20G (2147826480 bytes)
disk size: 20G
```

* Ϊ����������raw��ʽ��imageʱ���������¸�ʽ
```xml
<disk type='file' device='disk'>
	<driver name='qemu' type='raw'/>
	<source file='%IMAGE_PATH%'/>
	<target dev='vda' bus='virtio'/>
	<address type='pci' domain='0x0000' bus='0x00' slot='0x06' function='0x0'/>
</disk>
```

### 2.3.7 qcow2��ʽimage
* ����һ��qcow2��ʽ��image
```shell
# qemu-img create -f qcow2 -o cluster_size= /
2M, backing_file=ubuntu-12.10.raw ubuntu-nova.qcow2 40G
```

* qcow2��raw����������ʡ�ռ�

### 2.3.8 ��ʽ��ѡ��
* ��ʽת��
* ռ�ÿռ�
* �������ļ�ϵͳ
* �ı��ռ�����ֵ
* ����
* ���ܡ�ѹ��������
* ɾ���ļ�

### 2.3.9 ����image
* ��������image
```shell
qemu-img create -f raw main-disk.raw 10G
qemu-img create -f raw add-disk.raw 10G
```

* �����ļ�
```xml
<disk type='file' device='disk'>
	<driver name='qemu' type='raw'/>
	<source file='/image/main-disk.raw'/>
	<target dev='vda' bus='virtio'/>
</disk>
<disk type='file' device='disk'>
	<driver name='qemu' type='raw'/>
	<source file='/image/add-disk.raw'/>
	<target dev='vdb' bus='virtio'/>
</disk>
```

### 2.3.10 ��������

* ����һ��iso��������
```shell
cp /dev/cdrom ubuntu-12.10.iso
```

* iso�������ļ���
```xml
<disk type='file' device='cdrom'>
	<driver name='qemu' type='raw'/>
	<source file='/image/ubuntu-12.10.iso'/>
	<target dev='hdb' bus='ide'/>
	<readonly/>
</disk>
```

### 2.3.11 ��������
* �Ž�����
* DHCP����
* ��̬IP����
* �������ŵ���������
* ������������������������
* TODO: �����ط��кܴ������ʣ�

### 2.3.12 vnc����
* �谴�������ã�����virt-manager���ɵ�vnc���õ����ⲿ�޷����ʣ�
```xml
<graphics type='vnc' port='5900' autoport='yes' listen='0.0.0.0' keymap='en-us'>
	<listen type='address' address='0.0.0.0'/>
</graphics>
```

## 2.4 ����image
* ����������ϵͳ��image���������ַ���: virt-manager��virsh

### 2.4.1 virt-manager����image

* ����������
  - ��װ������virt-manager����ʹ����������
  ```shell
  apt-get install virt-manager
  virt-manager
  ```
  - ��virt-manager��ʼ����֮�󣬵���new��װ������һ���µ�������
  - ����Forward��Ŧ֮��
  - ��װ�������ϣ����ڶ�ȡ�ٶȼ�������ԭ����ǿ�ҽ�������iso��Ϊ��װ����
  - ���úð�װ���ʺ󣬵���Forward��Ŧ
  - ����Forward��ť�������������̴�������
  - ����Finish��ť�����ɽ���ϵͳ��װ����

  - ��װ���������Ͽɽ����ر�
  ```shell
  virsh destory ubuntu-12.10
  ```

* ���������������ļ�
```
virsh list -all
virsh dumpxml ubuntu-12.10 > ubuntu-12.10.xml
```

* ����image
�����������������ļ�֮�����ҵ�������Ӳ��image���岿��
```xml
<disk type='file' device='disk'>
	<driver name='qemu' type='raw'/>
	<source file='/var/lib/libvirt/images/ubuntu-12.10.img'/>
</disk>
```
��image���е���Ӧ��Ŀ¼
```shell
mv /var/lib/libvirt/images/ubuntu-12.10.img /image/
```

* undefine������
ȡ������
```shell
#virsh undefine ubuntu-12.10
Domain ubuntu-12.10 has been undefined
```

ȡ����������ʹ��virsh����������������ʾ
```shell
virsh list -all
```

* undefine��delete������
  - undefine����ɾ�����ص���Դ�ļ�����delete��
  - ������ִ��delete
  ```shell
  virsh dumpxml ubuntu-12.10 > ubuntu-12.10.xml
  cat ubuntu-12.10.xml | grep file=  # ������������ռ��Դ�ļ���·��
  rm -rf /var/lib/libvirt/images/ubuntu-12.10.img
  ```
  - ͸��vir-managerɾ��


## 2.4 virsh�����image
* ����ģ��(�����ļ�)->ָ��UUID->����image->ָ��iso->�趨����->����������->vnc�鿴
```shell
# create a configuration file from template
cp tempalte.xml ubuntu-12.10.xml

# set uuid
UUID=`uuidgen`
sed -i "%s,%UUID,$UUID,g" ubuntu-12.10.xml

# set image parameter and create image
qemu-img create -f raw ubuntu-12.10.raw 30G
sed -i "s,%IMAGE_PATH%,/image/ubuntu-12.10.raw,g" ubuntu-12.10.xml

# set iso path and assiocate to configuration file
sed -i "s,%ISO_PATH%,/image/ubuntu-12.10-server-amd64.iso,g" ubuntu-12.10.xml

# config virtual network card
MAC="fa:95:$(dd if=/dev/urandom count=1 2>/dev/null | md5sum | sed 's/^\(..\_\(..\)\(..\).*$(\1:\2:\3:\4/')"
sed -i "s,%MAC,$MAC,g" ubuntu-12.10.xml
MAC2="52:54:$(dd if=/dev/urandom count=1 2>/dev/null | md5sum | sed 's/^\(..\_\(..\)\(..\).*$(\1:\2:\3:\4/')"
sed -i "s,%MAC2,$MAC2,g" ubuntu-12.10.xml

# start virtual machine
virsh define ubuntu-12.10.xml
virsh list --all
virsh start ubuntu-12.10

# use vnc to connect virtual machine
virsh vncdisplay ubuntu-12.10

# other: install vnc-viewer and use it
apt-get install vncviewer
vncviewer 10.239.82.26:0
```

## 2.5 ��������������
### 2.5.1 �ֶ���װ
### 2.5.2 ֱ�Ӹ���
* use a shell script to copy image and create configuration file
  - weakness: slow

### 2.5.3 qcow2���ٴ���
* script
* ����: ��������ȫ��ͬ��������ʱ�޷�ʹ�ã��������ڱ�����MAC��ַδ�޸�

### 2.5.4 �޸�qcow2 image
* Limitation:
  - �������ĸ��Ĳ����ֶ�����Ҫ�����Զ���
  - ���ܵȵ�����������֮���ٸ��ġ�����֮���ٸ��������������ٴ�����������
  - ��������
  - ���ۣ�����������Ψһ�취���ǽ�qcow2 image����֮�����ٸ������е�������������MAC��ַ

* 1. ����qcow2�ļ�
  
