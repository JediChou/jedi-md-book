# ASP.NET开发实战1200例 第一卷

## Ch1 搭建ASP.NET开发环境

### 1.1 ASP.NET环境配置

#### 实例001 安装和配置Visual Studio 2008开发环境

#### 实例002 安装和配置IIS (Web服务器)

* 注意后续要用aspnet_regiis来注册.NET框架

#### 实例003 安装MSDN帮助编程学习

#### 实例004 在VS2008中设定断点及调试程序

* Jedi: 关于调试还有很多技巧，在这里没有突出，只是给了个入门而已

### 1.2 应用Web.Config配置网站

#### 实例005 配置Access数据库连接

```xml
    <appSetting>
        <add key="accessCon" value="Provider=Microsoft.Jet.OLEDB.4.0;Data Source=|DataDirectory|db_acess.mdb"/>
    </appSetting>
```

* 连接字符串最好要加密一下

#### 实例006 配置SQL Server数据库连接

```xml
    <appSetting>
        <add key="sqlCon" value="Data Source=(local);Database=Northwind;Uid=sa;Pwd="/>
    </appSetting>
```

```c#
    string conn = ConfigurationManager.AppSettings["sqlCon"].ToString();
    Response.Write("SQL Server数据库连接字符串: " + conn);
```

* other: 在visual code中进行dotnet core编程时，如果将目录剪切到其他目录下，则要dotnet restore，否则目录变化而项目却无法感知。
