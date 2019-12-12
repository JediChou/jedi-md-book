# Oracle Study log

* Author: Jedi Chou (skyzhx@163.com)
* Create at 2018.10.22 17:22 PM

## 2018-10-22

* 发现Windows 2008卸载后其app目录(原安装目录)无法删除原因不明. 17:23
  * 尝试重启后删除. 17:23
  * 重启后发现D盘离线. 17:25
  * 尝试在控制面板卸载, 不行. 19:50
  * 发现D:\app\mis\product\11.2.0\dbhome_1\BIN\oci.dl无法删除. 19.52
  * 尝试停止服务net stop msdtc, 停止后仍旧无法删除. 19:52
  * 再次重启. 19:55
  * 无意中选择了登录, 发现虚拟机再也无法连接上. 19:57
  -[x] 明日需请海桥来检测下VM是否挂掉了. 19:59

## 2018-10-23

* 发现VM未挂掉，可以登录. 7:38 AM
* 还是无法删除掉oci.dll, 真是困惑呀. 7:39
* 经在网上查询使用tasklist /m可以获得关联的exe执行情况，执行获得以下信息. 8:48

```text
tasklist /m > find-keyword.txt
explorer.exe                  3848 ntdll.dll, kernel32.dll, KERNELBASE.dll,
                                   SYSFER.DLL, ADVAPI32.dll, msvcrt.dll,
                                   sechost.dll, RPCRT4.dll, GDI32.dll,
                                   USER32.dll, LPK.dll, USP10.dll,
                                   SHLWAPI.dll, SHELL32.dll, ole32.dll,
                                   OLEAUT32.dll, EXPLORERFRAME.dll, DUser.dll,
                                   DUI70.dll, IMM32.dll, MSCTF.dll,
                                   UxTheme.dll, POWRPROF.dll, SETUPAPI.dll,
                                   CFGMGR32.dll, DEVOBJ.dll, dwmapi.dll,
                                   slc.dll, gdiplus.dll, Secur32.dll,
                                   SSPICLI.DLL, PROPSYS.dll, CRYPTBASE.dll,
                                   comctl32.dll, WindowsCodecs.dll,
                                   profapi.dll, apphelp.dll, CLBCatQ.DLL,
                                   EhStorShell.dll, ntshrui.dll, srvcli.dll,
                                   cscapi.dll, IconCodecService.dll,
                                   CRYPTSP.dll, rsaenh.dll, RpcRtRemote.dll,
                                   SndVolSSO.DLL, HID.DLL, MMDevApi.dll,
                                   timedate.cpl, ATL.DLL, WINBRAND.dll,
                                   actxprxy.dll, ntmarta.dll, WLDAP32.dll,
                                   shdocvw.dll, msutb.dll, USERENV.dll,
                                   shacct.dll, SAMLIB.dll, MsftEdit.dll,
                                   msls31.dll, authui.dll, CRYPTUI.dll,
                                   CRYPT32.dll, MSASN1.dll, LINKINFO.dll,
                                   urlmon.dll, WININET.dll, iertutil.dll,
                                   VERSION.dll, WINSTA.dll, thumbcache.dll,
                                   PSAPI.DLL, NetworkExplorer.dll,
                                   ieframe.dll, OLEACC.dll, WINMM.dll,
                                   XmlLite.dll, MPR.dll, drprov.dll,
                                   ntlanman.dll, stobject.dll, BatMeter.dll,
                                   WTSAPI32.dll, es.dll, prnfldr.dll,
                                   WINSPOOL.DRV, dxp.dll, Syncreg.dll,
                                   netshell.dll, IPHLPAPI.DLL, NSI.dll,
                                   WINNSI.DLL, nlaapi.dll, pnidui.dll,
                                   QUtil.dll, wevtapi.dll, dhcpcsvc6.DLL,
                                   WS2_32.dll, dhcpcsvc.DLL, credssp.dll,
                                   npmproxy.dll, QAgent.dll, Actioncenter.dll,
                                   imapi2.dll, WINTRUST.dll, hgcpl.dll,
                                   SXS.DLL, ieproxy.dll, wkscli.dll,
                                   netutils.dll, StructuredQuery.dll,
                                   comsvcs.dll, mtxoci.dll, oci.dll,
                                   MSVCR80.dll, twext.dll, vpshell2.dll,
                                   MSVCP110.dll, MSVCR110.dll, ccLib.dll,
                                   srtsp64.dll, 7-zip.dll, werconcpl.dll,
                                   wer.dll, framedynos.dll, wercplsupport.dll,
                                   msxml6.dll, hcproviders.dll
```

* 后禁止运行explorer.exe后，可在powershell中删除oci.dll（需有管理员权限）. 8:49

* Oracle在Windows 2008服务器上删除后有服务残留. 13:42
  * OracleVssWriterORCL
    * 显示：Oracle ORCL VSS Writer Service
    * 执行路径：d:\app\mis\product\11.2.0\dbhome_1\bin\OraVSSW.exe ORC
    * 说明：是Oracle对VSS提供支持的服务。
  * OracleDBConsoleorcl
    * 显示：OracleDBConsoleorcl
    * 执行路径：D:\app\mis\product\11.2.0\dbhome_1\bin\nmesrvc.exe
    * 说明：Oracle控制台服务，即企业管理器服务。
    * 只有该服务启动了，才可以使用Web方式的企业管理器管理数据库（非必须启动）。
  * OracleJobSchedulerORCL
    * 显示：OracleJobSchedulerORCL
    * 执行路径：d:\app\mis\product\11.2.0\dbhome_1\Bin\extjob.exe ORCL
    * 说明：数据库作业调度服务（非必要启动）。
  * OracleMTSRecoveryService
    * 显示：OracleMTSRecoveryService
    * 执行路径：D:\app\mis\product\11.2.0\dbhome_1\bin\omtsreco.exe "OracleMTSRecoveryService"
    * 说明：是允许数据库充当一个微软事务服务器、COM/COM+对象和分布式环境下的食物资源管理器的服务。
  * OracleOraDb11g_home1ClrAgent
    * 显示：OracleOraDb11g_home1ClrAgent
    * 执行路径：D:\app\mis\product\11.2.0\dbhome_1\bin\OraClrAgnt.exe agent_sid=CLRExtProc max_dispatchers=2 tcp_dispatchers=0 max_task_threads=6 max_sessions=25 ENVS="EXTPROC_DLLS=ONLY:D:\app\mis\product\11.2.0\dbhome_1\bin\oraclr11.dll"
    * 说明：提供对.NET支持的Oracle数据库扩展服务（非必须启动）。
  * OracleOraDb11g_home1TNSListener
    * 显示：OracleOraDb11g_home1TNSListener
    * 执行路径：D:\app\mis\product\11.2.0\dbhome_1\BIN\TNSLSNR
    * 说明：监听器服务（凡是通过Oracle Net网路连接数据库都属于远程方式，必须启动）。
  * OracleServiceORCL
    * 显示：OracleServiceORCL
    * 执行路径：d:\app\mis\product\11.2.0\dbhome_1\bin\ORACLE.EXE ORCL
    * 说明：数据库服务（数据库实例），是Oracle核心服务（必须启动）。

* 使用Windows2008系统内置的sc.exe可以对服务进行删除. 14:04
  * 在CMD下使用, sc delete service-name
  * 在PowerShell下使用, sc.exe delete service-name

* 再次安装Oracle
  * 设置安全更新（10-1）(不设置)
  * 安装选项（10-2）(仅安装资料库软体)
  * 安装类型（10-3）(单一执行处理资料库安装)
  * 产品语言（10-4）（默认为：繁体中文、英文)
  * 资料库版本（10-5）（Enterprise Edition 3.34GB）
  * 安装位置（10-6）（使用默认值）
    * Oracle基本目录：D:\app\min
    * 软体位置：D:\app\mis\product\11.2.0\dbhome_1
    * [INS-32025]选择的安装项与指定的Oracle本位目录中已安装的软体发生冲突
    * 变更目录
      * Oracle基本目录：D:\app2\bin
      * 软体位置：D:\app2\mis\product\11.2.0\dbhome_1
      * 问题得到解决
  * 先决条件检查（10-7）

    ```text
    磁碟空间：需要：3.34GB，可用：75.65GB
    来源位置: D:\Oracle11g-Intall\database\install\.\stage\products.xml
    安裝方法: 一般安裝
    資料庫版本: 企業版（僅安裝資料庫軟體(1)）
    Oracle基本目錄: D:\app2\mis
    軟體位置：D:\app2\mis\product\11.2.0\dbhome_1
    ```

    可以在这个窗口上导出rsp文件，相关rsp信息如下：
    ```text
    #-------------------------------------------------------------------------------
    # Do not change the following system generated value. 
    #-------------------------------------------------------------------------------
    oracle.install.responseFileVersion=/oracle/install/rspfmt_dbinstall_response_schema_v11_2_0

    #-------------------------------------------------------------------------------
    # The installation option can be one of the following
    # 1. INSTALL_DB_SWONLY
    # 2. INSTALL_DB_AND_CONFIG
    # 3. UPGRADE_DB
    #-------------------------------------------------------------------------------
    oracle.install.option=INSTALL_DB_SWONLY

    #-------------------------------------------------------------------------------
    # This variable holds the hostname of the system as set by the user. 
    # It can be used to force the installation to use an alternative   
    # hostname rather than using the first hostname found on the system
    # (e.g., for systems with multiple hostnames and network interfaces).
    #-------------------------------------------------------------------------------
    ORACLE_HOSTNAME=WIN-T1IK77GIF3I

    #-------------------------------------------------------------------------------
    # Unix group to be set for the inventory directory.  
    #-------------------------------------------------------------------------------
    UNIX_GROUP_NAME=

    #-------------------------------------------------------------------------------
    # Specify the location which holds the inventory files.
    # This is an optional parameter if installing on
    # Windows based Operating System.
    #-------------------------------------------------------------------------------
    INVENTORY_LOCATION=C:\Program Files\Oracle\Inventory

    #-------------------------------------------------------------------------------
    # Specify the languages in which the components will be installed.
    #
    # en   : English                  ja   : Japanese
    # fr   : French                   ko   : Korean
    # ar   : Arabic                   es   : Latin American Spanish
    # bn   : Bengali                  lv   : Latvian
    # pt_BR: Brazilian Portuguese     lt   : Lithuanian
    # bg   : Bulgarian                ms   : Malay
    # fr_CA: Canadian French          es_MX: Mexican Spanish
    # ca   : Catalan                  no   : Norwegian                 
    # hr   : Croatian                 pl   : Polish                    
    # cs   : Czech                    pt   : Portuguese                
    # da   : Danish                   ro   : Romanian                  
    # nl   : Dutch                    ru   : Russian                   
    # ar_EG: Egyptian                 zh_CN: Simplified Chinese        
    # en_GB: English (Great Britain)  sk   : Slovak                    
    # et   : Estonian                 sl   : Slovenian                 
    # fi   : Finnish                  es_ES: Spanish                   
    # de   : German                   sv   : Swedish                   
    # el   : Greek                    th   : Thai                      
    # iw   : Hebrew                   zh_TW: Traditional Chinese       
    # hu   : Hungarian                tr   : Turkish                   
    # is   : Icelandic                uk   : Ukrainian                 
    # in   : Indonesian               vi   : Vietnamese                
    # it   : Italian                                                   
    #
    # Example : SELECTED_LANGUAGES=en,fr,ja
    #-------------------------------------------------------------------------------
    SELECTED_LANGUAGES=zh_TW,en

    #-------------------------------------------------------------------------------
    # Complete path of the Oracle Home  
    #-------------------------------------------------------------------------------
    ORACLE_HOME=D:\app2\mis\product\11.2.0\dbhome_1

    #-------------------------------------------------------------------------------
    # Complete path of the Oracle Base. 
    #-------------------------------------------------------------------------------
    ORACLE_BASE=D:\app2\mis

    #-------------------------------------------------------------------------------
    # Installation Edition of the component.                        
    #                                                             
    # The value should contain only one of these choices.        
    # EE     : Enterprise Edition                                
    # SE     : Standard Edition                                  
    # SEONE  : Standard Edition One
    # PE     : Personal Edition (WINDOWS ONLY)
    #-------------------------------------------------------------------------------
    oracle.install.db.InstallEdition=EE

    #-------------------------------------------------------------------------------
    # This property is considered only if InstallEdition is EE.
    #
    # true  : Components mentioned as part of 'customComponents' property
    #         are considered for install.
    # false : Value for 'customComponents' is not considered.
    #-------------------------------------------------------------------------------
    oracle.install.db.isCustomInstall=false

    #-------------------------------------------------------------------------------
    # This property is considered only if 'IsCustomInstall' is set to true 
    #
    # Description: List of Enterprise Edition Options you would like to install.
    #
    #              The following choices are available. You may specify any
    #              combination of these choices.  The components you choose should
    #              be specified in the form "internal-component-name:version"
    #              Below is a list of components you may specify to install.
    #
    #              oracle.oraolap:11.2.0.0.2 - Oracle OLAP
    #              oracle.rdbms.dm:11.2.0.0.2 - Oracle Data Mining RDBMS Files
    #              oracle.rdbms.dv:11.2.0.0.2 - Oracle Database Vault option
    #              oracle.rdbms.lbac:11.2.0.0.2 - Oracle Label Security
    #              oracle.rdbms.partitioning:11.2.0.0.2 - Oracle Partitioning
    #              oracle.rdbms.rat:11.2.0.0.2 - Oracle Real Application Testing
    #              oracle.clrintg.ode_net_2:11.2.0.0.2 - Oracle Database Extensions for .NET 2.0 (Windows)
    #-------------------------------------------------------------------------------
    oracle.install.db.customComponents=

    ###############################################################################
    #                                                                             #
    # PRIVILEGED OPERATING SYSTEM GROUPS                                          #
    # ------------------------------------------                                  #
    # Provide values for the OS groups to which OSDBA and OSOPER privileges       #
    # needs to be granted. If the install is being performed as a member of the   #
    # group "dba", then that will be used unless specified otherwise below.       #
    #                                                                             #
    # The value to be specified for OSDBA and OSOPER group is only for UNIX based #
    # Operating System.                                                           #
    #                                                                             #
    ###############################################################################

    #-------------------------------------------------------------------------------
    oracle.install.db.DBA_GROUP=

    #-------------------------------------------------------------------------------
    oracle.install.db.OPER_GROUP=

    #-------------------------------------------------------------------------------
    # This variable represents the cluster node names selected by the .  
    # user for installation
    # Example : oracle.install.db.CLUSTER_NODES=node1,node2
    #-------------------------------------------------------------------------------
    oracle.install.db.CLUSTER_NODES=

    #-------------------------------------------------------------------------------
    # One of the following
    # - GENERAL_PURPOSE
    # - TRANSACTION_PROCESSING
    # - DATAWAREHOUSE
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.type=GENERAL_PURPOSE

    #-------------------------------------------------------------------------------
    # Global Database Name
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.globalDBName=

    #-------------------------------------------------------------------------------
    # The Starter Database SID 
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.SID=

    #-------------------------------------------------------------------------------
    # Database character set
    #
    #  One of the following
    #  AL32UTF8, WE8ISO8859P15, WE8MSWIN1252, EE8ISO8859P2,
    #  EE8MSWIN1250, NE8ISO8859P10, NEE8ISO8859P4, BLT8MSWIN1257,
    #  BLT8ISO8859P13, CL8ISO8859P5, CL8MSWIN1251, AR8ISO8859P6,
    #  AR8MSWIN1256, EL8ISO8859P7, EL8MSWIN1253, IW8ISO8859P8,
    #  IW8MSWIN1255, JA16EUC, JA16EUCTILDE, JA16SJIS, JA16SJISTILDE,
    #  KO16MSWIN949, ZHS16GBK, TH8TISASCII, ZHT32EUC, ZHT16MSWIN950,
    #  ZHT16HKSCS, WE8ISO8859P9, TR8MSWIN1254, VN8MSWIN1258
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.characterSet=
    #-------------------------------------------------------------------------------
    # Specify the total memory allocation for the database. (in MB)
    # Value should be at least 256 MB, and should not exceed the  
    # total physical memory available on the system.
    # Example: oracle.install.db.config.starterdb.memoryLimit=40
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.memoryLimit=
    oracle.install.db.config.starterdb.memoryOption=false

    #-------------------------------------------------------------------------------
    # This variable controls whether to load Example Schemas onto
    # the starter database or not.
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.installExampleSchemas=false

    #-------------------------------------------------------------------------------
    # This include enabling audit settings, configuring password  
    # profiles and revoking some grants to public. These settings 
    # are provided by default.  You may choose to disable all.    
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.enableSecuritySettings=true

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.password.ALL=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.password.SYS=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.password.SYSTEM=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.password.SYSMAN=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.password.DBSNMP=

    #-------------------------------------------------------------------------------
    # Can be one of the following 
    # 1. GRID_CONTROL
    # 2. DB_CONTROL
    # 
    oracle.install.db.config.starterdb.control=DB_CONTROL

    #-------------------------------------------------------------------------------
    # Determines the Management Service to use if Grid Control
    # is selected to manage the database.
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.gridcontrol.gridControlServiceURL=

    #-------------------------------------------------------------------------------
    # Determines whether to receive email notification for
    # critical alerts when using DB control.
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.dbcontrol.enableEmailNotification=false

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.dbcontrol.emailAddress=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.dbcontrol.SMTPServer=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.automatedBackup.enable=false

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.automatedBackup.osuid=

    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.automatedBackup.ospwd=

    #-------------------------------------------------------------------------------
    # Can be one of the following
    # - FILE_SYSTEM_STORAGE
    # - ASM_STORAGE
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.storageType=

    #-------------------------------------------------------------------------------
    # Database file location:
    # directory for datafiles, control files, redo logs.
    #
    # Applicable only when oracle.install.db.config.starterdb.storage=FILE_SYSTEM_STORAGE 
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.fileSystemStorage.dataLocation=

    #-------------------------------------------------------------------------------
    # Backup and recovery location
    #
    # Applicable only when oracle.install.db.config.starterdb.storage=FILE_SYSTEM_STORAGE 
    #-------------------------------------------------------------------------------
    oracle.install.db.config.starterdb.fileSystemStorage.recoveryLocation=

    #-------------------------------------------------------------------------------
    # Name of ASM disk group to be used for storage.
    #
    # Applicable only when oracle.install.db.config.starterdb.storageType=ASM_STORAGE
    #-------------------------------------------------------------------------------
    oracle.install.db.config.asm.diskGroup=

    #-------------------------------------------------------------------------------
    # Password for ASMSNMP user of the ASM instance.                  
    #
    # Applicable only when oracle.install.db.config.starterdb.storage=ASM_STORAGE 
    #-------------------------------------------------------------------------------
    oracle.install.db.config.asm.ASMSNMPPassword=

    #------------------------------------------------------------------------------
    # Specify the My Oracle Support Account Username.
    #
    #  Example   : MYORACLESUPPORT_USERNAME=metalink
    #------------------------------------------------------------------------------
    MYORACLESUPPORT_USERNAME=

    #------------------------------------------------------------------------------
    # Specify the My Oracle Support Account Username password.
    #
    # Example    : MYORACLESUPPORT_PASSWORD=password
    #------------------------------------------------------------------------------
    MYORACLESUPPORT_PASSWORD=

    #------------------------------------------------------------------------------
    # Specify whether to enable the user to set the password for
    # My Oracle Support credentials. The value can be either true or false.
    # If left blank it will be assumed to be false.
    #
    # Example    : SECURITY_UPDATES_VIA_MYORACLESUPPORT=true
    #------------------------------------------------------------------------------
    SECURITY_UPDATES_VIA_MYORACLESUPPORT=false

    #------------------------------------------------------------------------------
    # Specify whether user doesn't want to configure Security Updates.
    # The value for this variable should be true if you don't want to configure
    # Security Updates, false otherwise.
    #
    # The value can be either true or false. If left blank it will be assumed
    # to be false.
    #
    # Example    : DECLINE_SECURITY_UPDATES=false
    #------------------------------------------------------------------------------
    DECLINE_SECURITY_UPDATES=true

    #------------------------------------------------------------------------------
    # Specify the Proxy server name. Length should be greater than zero.
    #
    # Example    : PROXY_HOST=proxy.domain.com 
    #------------------------------------------------------------------------------
    PROXY_HOST=

    #------------------------------------------------------------------------------
    # Specify the proxy port number. Should be Numeric and atleast 2 chars.
    #
    # Example    : PROXY_PORT=25 
    #------------------------------------------------------------------------------
    PROXY_PORT=

    #------------------------------------------------------------------------------
    # Specify the proxy user name. Leave PROXY_USER and PROXY_PWD
    # blank if your proxy server requires no authentication.
    #
    # Example    : PROXY_USER=username
    #------------------------------------------------------------------------------
    PROXY_USER=

    #------------------------------------------------------------------------------
    # Specify the proxy password. Leave PROXY_USER and PROXY_PWD  
    # blank if your proxy server requires no authentication.
    #
    # Example    : PROXY_PWD=password
    #------------------------------------------------------------------------------
    PROXY_PWD=
    ```

## 2018-10-25

* 安装至88%时出现错误. 11:28
  * 状态与提示
    * 进度：正在启动服务'OracleMTSRecoveryService'
    * 提示：启动服务发生错误. 找不到服务OracleMTSRecoveryService.
  * 问题发现
    * D:\app2\mis\product\11.2.0\dbhome_1\BIN
    * D:\app\mis\product\11.2.0\dbhome_1\bin\omtsreco.exe "OracleMTSRecoveryService"
    * 描述：实际文件应在d:\app2下，但服务的在Windows服务中的执行路径为d:\app下，因是删除有残留

* 开启注册表删除所有Oracle相关项后再重新安装. 11:51
* 服务器重启. 11:51
* 重新安装. 15:09
  * 安装成功. 15:48
* 卸载Oracle11gr2 16:42
  * Oracle Universal Installer在开始菜单中找. 18:43
* 再次安装看是否在不删除残留目录和注册表的情况下能否成功。18:47
* 安装成功. 18:55
  * 另外发现安装日志及其错误都存放在C:\Program Files\Oracle\Inventory\logs中. 18:56
    * installActions2018-10-25_06-46-58PM, 文本文件（Jedi:大概3MB）
    * oraInstall2018-10-25_06-46-58PM，有内容（Jedi:作用不名，但有一些DLL调用信息）
    * oraInstall2018-10-25_06-46-58PM.err，无内容
  * oraInstall2018-10-25_06-46-58PM中的psapi.dll似乎是用来配置.NET的GAC设置. 19:01
  * install actions日志的内容其实蛮有看头. 19:05
* 卸载. 19:10
  * 卸载也是有记录的. 19:10
  * dbhome_1, dbhome_2只能删除前者. 19:11
  * dbhome_2也可删除（原因不名）. 19:13
