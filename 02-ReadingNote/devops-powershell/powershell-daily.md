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

有很多powershell内置变量可以直接使用

```powershell
$env:COMPUTER
```
