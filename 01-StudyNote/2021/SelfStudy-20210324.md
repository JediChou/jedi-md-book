# Self Study

Author: Jedi Chou, Create at 2021.3.24 7:52 PM

* Daily study
  * 101WeiQi daily exercise check-in. 6:45, 6:45
  * 163 music APP check-in. 6:50
  * Don't memorize words APP check-in. 6:50
  * Tencent cartoon APP check-in. 6:50
  * NowCoder check-in. 6:50
  * Read articles and check interview invitation (MaiMai APP). 6:50
  * Read Sina Blog. 7:00
  * 百词斩. 7:10
  * Exercise of Vocabulary (vocabulary.com). 11:13

* Weekly task
  * reading 163.com mails. 9:21, 9:38
  * Reading 1 minutes at SIMPLE wiki or Baike.Baidu
  * Go Game check
    * Leela Zero vs Leela Zero. 8:27
    * Leela Zero vs Leela Zero. 8:59
    * Leela Zero vs Leela Zero. 9:22

## Proxy

* [ie proxy](Https://10.153.24.98;Http://10.153.24.98;Http://10.134.33.98;Http://10.98.29.190;Https://Ca.Foxconn.Com;Http://Ca.Foxconn.Com;Http://esign.efoxconn.com;Http://ks.esign.efoxconn.com;Http://evouchers.efoxconn.com;Http://emvouchers.efoxconn.com;10.*;10.*;*.efoxconn.com;*.foxconn.com;*.moko.cc;*.163.com;*.mm131.com;*.mmjpg.com;*.jd.com;*.github.com;github.com;pan.baidu.com;https://ssl.mail.163.com;*.weibo.com;developer.aliyun.com;*.bilibili.com;*.adobe.com;*.elastic.co;*.sina.com.cn;transfer.efoxconn.com;*.qq.com;*.cnblogs.com;*.youdao.com;*.blogspot.com;*.youdao.com;*.yinxiang.com;*.youku.com;*.iteye.com;*.layui.com;*.amazeui.org;*.golang.org;www.0daydown.com;*.minmaxtec.com)

* Intranet Proxy

```text
10.191.131.12:3128
Https://10.153.24.98;Http://10.153.24.98;Http://10.134.33.98;Http://10.98.29.190;Https://Ca.Foxconn.Com;Http://Ca.Foxconn.Com;Http://esign.efoxconn.com;Http://ks.esign.efoxconn.com;Http://evouchers.efoxconn.com;Http://emvouchers.efoxconn.com

10.130.2.191:808
```

## Vedio study

* Begin Series to Web API: 01 What are Web API. 11:39
* Begin Series to Web API: 02 Overvview of HTTP. 12:45
* Begin Series to Web API: 03 Create a Web API project. 13:02
  * 😣 My visual studio 2019 without OpenAPI option. 12:56
  * ✅ Project->Add->Connected service->Add OpenAPI. 13:10
  * 😣 I need choice a json or xaml file, but I don't know what that means. 13:10
  * 😣 I can't found swagger/index.html when I add swagger.configuration.json. 13:40
  * ✅ There has an article about swagger configuration at JianShu. 13:41
  * ✅ I delete swagger service option, and use nuget packages management install Microsoft.OpenAPI package. 13:42
  * 😣 I can't found swagger/index.html again. 13:43
  * ✅ The article in the JianShu is a right solution. 13:52
* Begin Series to Web API: 04 Working with Controllers and Action methods. 18:12
  * 💬 Controller attribute: \[Route("api/\[controller\]")\]
  * 💬 Controller attribute: \[ApiController\]
  * 💬 Method attribute: \[HttpGet\]
* Begin Series to Web API: 05 Web API CRUD Conventions. 18:52
  * create, read, update, delete
  * create, post, 201(created), 400(bad request)
  * read, get, 200(ok), 404(not found)
  * update, put/pathc, 204(not content), 404(not found)
  * delete, delete, 204(not content), 400(bad request)
  * attribute: HttpGet, HttpPost, HttpDelete
  * C# code: HttpDelete, return BadRequest();, return NoContent();
* Begin Series to Web API: 06 Understanding Web API Routes. 19:02
  * [graph.microsoft.com](https://graph.microsoft.com/v1.0/me)
  * protocal structure: scheme + host name + path
  * line 35: HttpDelete("{id}")
  * line 36: public ActionResult DeleteRecipes(string id)
  * Jedi: Notice line 36 and 37, the id will be match.
* Begin Series to Web API: 07 Debug with Swagger UI. 20:04
  * [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification/)
* Begin Series to Web API: 08_webapis_mid
* Begin Series to Web API: 09_webapis_mid
* Begin Series to Web API: 10_webapis_mid
* Begin Series to Web API: 11_webapis_mid
* Begin Series to Web API: 12_webapis_mid
* Begin Series to Web API: 13_webapis_mid
* Begin Series to Web API: 14_webapis_mid
* Begin Series to Web API: 15_webapis_mid
* Begin Series to Web API: 16_webapis_mid
* Begin Series to Web API: 17_webapis_mid
* Begin Series to Web API: 18_webapis_mid

## Muanual add Swagger support at ASP.NET Core Web API project

* Add nuget packages
  * Add Microsoft.OpenAPI packages.
  * Add NSwag.ApiDescription.Client.
  * Add Swashbuckle.AspNetCore.Swagger.
  * Add Swashbuckle.AspNetCore.SwaggerGen.
  * Add Swashbuckle.AspNetCore.SwaggerUI.

* Add SwaggerGen service to Startup (Startup.cs).

  ```C#
    services.AddSwaggerGen(c =>
    {
        //注意不能用大写V1，不然老报错，Not Found /swagger/v1/swagger.json
        // Jedi: Pay attension for the submitter's notice !
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    });
  ```

* Enable Swagger pipeline. Add some sections to Configure method (startup.cs).

  ```C#
    // Enable middleware to serve generated Swagger as a JSON endpoint.
    app.UseSwagger();

    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
    // specifying the Swagger JSON endpoint.
    // UseSwaggerUI方法调用启用静态文件中间件。
    app.UseSwaggerUI(c => {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    });

    // 在webapi中不需加載這個選項，但在ASP.NET Core MVC中要增加這個管道
    // app.UseMvc();
  ```
