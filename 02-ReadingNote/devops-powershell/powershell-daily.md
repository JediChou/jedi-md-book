# Daily PowerShell

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
