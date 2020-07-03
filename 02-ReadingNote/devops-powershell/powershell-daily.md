# Daily PowerShell

## 2020.5.29 No.1

* 使用update-help无法更新某些help

```powershell
PS D:\> Update-Help -Force
Update-Help : 无法更新以下模块的帮助:
“AppBackgroundTask, AppLocker, Appx, AssignedAccess, BitLocker, BitsTransfer, BranchCache, CimCmdlets, ConfigCI, DirectAccessClientComponents, Dism, DnsClient, EventTracingManagement, IISAdministration, International, iSCSI, ISE, Kds, Microsoft.PowerShell.Archive, Micr
osoft.PowerShell.Core, Microsoft.PowerShell.Diagnostics, Microsoft.PowerShell.Host, Microsoft.PowerShell.LocalAccounts, Microsoft.PowerShell.Management, Microsoft.PowerShell.Security, Microsoft.PowerShell.Utility, Microsoft.WSMan.Management, MMAgent, MsDtc, NetAdapter,
NetConnection, NetEventPacketCapture, NetLbfo, NetNat, NetQos, NetSecurity, NetSwitchTeam, NetTCPIP, NetworkConnectivityStatus, NetworkSwitchManager, NetworkTransition, PackageManagement, PcsvDevice, PKI, PnpDevice, PowerShellGet, PrintManagement, ProcessMitigations, Pr
ovisioning, PSDesiredStateConfiguration, PSReadline, PSScheduledJob, PSWorkflow, PSWorkflowUtility, ScheduledTasks, SecureBoot, SmbShare, SmbWitness, StartLayout, Storage, TLS, TroubleshootingPack, TrustedPlatformModule, VpnClient, Wdac, WebAdministration, WindowsErrorR
eporting, WindowsSearch, WindowsUpdate”
访问被拒绝。命令无法更新 Windows PowerShell 核心模块或 $pshome\Modules 目录中任意模块的帮助主题。若要更新这些帮助主题，请使用“以管理员身份运行”命令启动 Windows PowerShell，然后重试运行 Update-Help。
所在位置 行:1 字符: 1
+ Update-Help -Force
+ ~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [Update-Help]，Exception
    + FullyQualifiedErrorId : UpdatableHelpSystemRequiresElevation,Microsoft.PowerShell.Commands.UpdateHelpCommand

Update-Help : 无法更新带有 UI 区域性 {zh-CN} 的模块“AppvClient, ConfigDefender, Defender, HostComputeService, HostNetworkingService, Microsoft.PowerShell.ODataUtils, Microsoft.PowerShell.Operation.Validation, UEV, Whea, WindowsDeveloperLicense”帮助: 无法连接到帮助内容
。存储帮助内容的服务器可能不可用。请确认该服务器可用，或等到该服务器重新联机，然后重试该命令。
所在位置 行:1 字符: 1
+ Update-Help -Force
+ ~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (:) [Update-Help]，Exception
    + FullyQualifiedErrorId : UnableToConnect,Microsoft.PowerShell.Commands.UpdateHelpCommand

Update-Help : 无法更新带有 UI 区域性 {zh-CN} 的模块“WindowsUpdateProvider”帮助: 在 HelpInfo XML 文件中检索不到 UI 区域性 zh-CN。确保模块清单中的 HelpInfoUri 属性有效或检查网络连接是否正常，然后重试该命令。
所在位置 行:1 字符: 1
+ Update-Help -Force
+ ~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ResourceUnavailable: (:) [Update-Help], Exception
    + FullyQualifiedErrorId : UnableToRetrieveHelpInfoXml,Microsoft.PowerShell.Commands.UpdateHelpCommand
```

* 使用admin权限即可进行更新！
* $pshome获得PowerShell的存储目录
* $pshome在我的电脑上路径为"C:\Windows\System32\WindowsPowerShell\v1.0"

## 2020.6.8

* 在Powershell中打开网站

```powershell
# 由此可编写类似 open-site -BrowerType -Site的cmdlet
start-process -FilePath "msedge.exe"
start-process -FilePath "msedge.exe" "www.bing.com"
start-process -FilePath "C:\Program Files (x86)\Internet Explorer\iexplore.exe" "esign.efoxconn.com"
```

* 各版本的Windows Server会有很大的不同

```powshell
$psversiontable
# 在33.98节点上PowerShell版本是4
# 这也可能是33.98两个节点没有IIS cmdlet的原因
```

* 获取磁盘的剩余空间和总空间

```powershell

Function Get-TSFreeSpace {
    [CmdletBinding()]
    param ($ComputerName = $env:COMPUTERNAME)
    $allDisks = Get-WmiObject -ComputerName $ComputerName -Class Win32_LogicalDisk -Filter "DriveType='3'"
    foreach ($disk in $allDisks) {
        $results += [PSCustomObject]@{
            'ComputerName' = $disk.DeviceID
            'FreeSpace(GB)'= $([int]($disk.FreeSpace / 1GB))
            'Size(GB)'= $([int]($disk.size / 1GB))
        }
    }
    $results
}

#########################################################################################
# 这个脚本有问题, 总是会报错, 应该PSCustomObject的使用有问题. 17:24
# 找了一圈资料也没看见$results += [PSCustomObject]@{}是可调用的例子. 17:25
#########################################################################################
# 方法调用失败，因为 [System.Management.Automation.PSObject] 不包含名为“op_Addition”的方法。
# 所在位置 D:\Get-TestFreeSpace.ps1:9 字符: 27
# +             'Size(GB)'= $([int]($disk.size / 1GB))
# +                           ~~~~~~~~~~~~~~~~~~~~~~~
#     + CategoryInfo          : InvalidOperation: (op_Addition:String) []，RuntimeException
#     + FullyQualifiedErrorId : MethodNotFound
#########################################################################################
```

## 2020.6.9

* 有很多powershell内置变量可以直接使用

```powershell
$env:COMPUTER
```

* 在powershell中可以用管道组合来代替touch命令创建空文件，以下示例（很实用）：

```powershell
echo $null >> filename.txt
```

* runas命令有些搞不懂，怎么样都无法正确执行

## 2020.6.10

* 控制面板的msc文件. 12:00
  
  * Internet Information Services (IIS) 6.0 管理器
    * %windir%\system32\inetsrv\InetMgr6.exe
    * InetMgr6
    * Jedi: 这个程序连接远端IIS还需安装其他组件
  
  * Internet Information Services (IIS)管理器
    * %windir%\system32\inetsrv\InetMgr.exe
    * InetMgr
  
  * iSCSI 发起程序: %windir%\system32\iscsicpl.exe
  
  * ODBC Data Sources (32-bit): %windir%\syswow64\odbcad32.exe
  
  * ODBC 数据源(64 位): %windir%\system32\odbcad32.exe
  
  * System Configuration: %windir%\system32\msconfig.exe
  
  * Windows 内存诊断: %windir%\system32\MdSched.exe
  
  * 本地安全策略: %windir%\system32\secpol.msc /s
  
  * 磁盘清理: %windir%\system32\cleanmgr.exe
  
  * 打印管理: %systemroot%\system32\printmanagement.msc
  
  * 服务: %windir%\system32\services.msc
  
  * 防火墙: %windir%\system32\WF.msc
  
  * 恢复驱动器: %windir%\system32\RecoveryDrive.exe
  * 计算机管理: %windir%\system32\compmgmt.msc /s
    * Jedi: 注意这里有个/s参数，可能是控制权限用的. 12:02

* PowerShell的内置变量

```powershell
$env:windir
$env:path
$env:allusersprofile
$env:appdata
```

* 相关问题
  * 如何创建一个本地的PowerShell Galley (经查询有个github开源项目)? 12:04
  * 如何用PowerShell获取IIS的各项参数? 12:04
  * Win2008上的PowerShell 2.0如何升级到5.1? 12:05

* 其他的一些cpl (win10)
  * 添加删除程序: appwiz.cpl
  * 桌面设置: desk, desk.cpl
  * 防火墙: firewall, firewall.cpl
  * Flash播放器的配置: FlashPlayerCPLApp.cpl
  * 硬件设备管理器: hdwwiz.cpl
  
* Notice
  * FlashPlayerCPLApp.cpl在cmd中敲是有问题的
  * 但是点击FlashPlayerCPLApp.cpl会弹出设置选项的应用程序
  * Jedi: 猜测是FlashPlayerCPLApp.cpl未包含在path中

* 制作AppPool-Status.ps1

```powershell
#################################################
# File name: AppPool-Status.ps1
# Author: Jedi Chou (jedi_h._chou@foxconn.com)
# Description: List queue length of IIS AppPool.
# Date: 2020.6.10 17:52 PM

# Step-1 Import WebAdministration from Windows.
clear
Import-Module WebAdministration

# Step-2 Locate current to IIS virutal directory.
Set-location IIS:\appPools
$appPools_namelist = Get-ChildItem

# Step-3 Output queue length by AppPool
Write-Host $env:COMPUTERNAME, "AppPool number:", $appPools_list.Count
$appPools_namelist | Format-Table Name, @{expression={$_.queueLength};label="Queue Length"}  -AutoSize
```

## 2020.7.3

* [创建新guid](https://devblogs.microsoft.com/scripting/powertip-create-a-new-guid-by-using-powershell/)

```powershell
[guid]::NewGuid()
```

* 在Windows Terminal中配置新的shell

```json
{
    "acrylicOpacity": 0.75,
    "closeOnExit": true,
    "colorScheme": "Campbell",
    "commandline": "cmd.exe /k \"C://Program Files (x86)//Microsoft Visual Studio//2019//Enterprise//Common7//Tools//VsDevCmd.bat\"",
    "cursorColor": "#FFFFFF",
    "cursorShape": "bar",
    "fontFace": "Consolas",
    "fontSize": 10,
    "guid": "{26b30263-74e9-4146-b80e-11632e86d42c}",
    "historySize": 9001,
    "icon": "ms-appdata:///roaming/vs2019-32.png",
    "name": "Developer Command Prompt for VS2019",
    "padding": "0, 0, 0, 0",
    "snapOnInput": true,
    "startingDirectory": "%USERPROFILE%",
    "useAcrylic": true
},
```

我配置了vsts2019的命令行

```json
{
  "guid": "{b650d979-fc73-461b-b55b-c6264a3bb158}",
  "hidden": false,
  "name": "Visual studio 2019 community Command line",
  "commandline": "cmd.exe /k \"C://Program Files (x86)//Microsoft Visual Studio//2019//Community//Common7//Tools//VsDevCmd.bat\"",
  "startingDirectory": "%USERPROFILE%",
  "fontFace": "Consolas",
  "icon": "C:\\ca-util\\icon\\activity-icon.png"
}
```

同时配置了vsts2010的命令行

```json
{
  "guid": "{2e3a9d4b-7520-4e50-8313-a1fc5d2e18b4}",
  "hidden": false,
  "name": "Visual studio 2010",
  "commandline": "C:\Program Files (x86)\Microsoft Visual Studio 10.0\VC\vcvarsall.bat",
  "startingDirectory": "%USERPROFILE%",
  "fontFace": "Consolas",
  "icon": "C:\\ca-util\\icon\\activity-icon.png"
}
```
