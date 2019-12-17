# Getting Started with ASP.NET MVC, ServiceStack and Bootstrap

* Study: Jedi Chou

## 01. Introduction

* Date: 2016.10.28 14:40
* Topic
  * What you already need to know
  * What hardware you need
  * What software you need
  * What we'll be covering
  * What we will be creating
  * What we will not be creating

* Resource
  * [link1](http://jliberty.me/html5fs)
  * [link2](http://jliberty.me/css3fs)
  * [link3](http://jliberty.me/JavaScriptFS)
  * [link4](http://jliberty.me/ServiceStatckAPIs)
  * [link5](http://jliberty.me/MVC4Fundametals)
  * [link6](http://jliberty.me/AngularFundamentals)

* Jedi: use bootstrap to create response website

## 02. Creating The Application with ASP.NET MVC

### 02.01 Introduction

* Date: 2016.10.28 14:48
* Will be talk about 'Creating Your Application With ASP.NET MVC'

### 02.02 Starting your MVC Application

* Date: 2016.10.28 14:50
* Topic
  * create a asp.net mvc project

* Step
  * Create a new web project with visual studio 2013
  * .net framework 4.5 -> asp.net web applicaiton
  * choice mvc option

### 02.03 What is MVC

* Date: 2016.10.28 14:53
* Topic
  * model, view, controller
  * model (data)
  * view (display)
  * controller ('gule', central node)
  * MVC server = IIS

### 02.04 The MVC Files

* Date: 2016.10.28 14:58
* Topic
  * *.cshtml, view html for csharp. For example: [@] About.cshtml
  * Layout structure

  ```c#
  .layout-top
  index.cshtml Here (or any page)
  .layout-footer
  ```

  * Views -> Shared directory
    * [@] _Layout.cshtml
    * [@] _LoginPartial.cshtml
    * [@] Erorr.cshtml

  * Remember: Layout.cshtml provides the top and bottom of every page

* Jedi don't understand
  * @style.Render("~/Content/css")
  * @style.Render("~/bundles/modernizr")
  * meta tag

  ```html
  <meta name="viewport" content="with=device-width, initial-scale=1.0">
  ```

  *razor syntax demo

  ```asp.net
    @RenderBody()
  ```

### 02.05 HTML and MVC

* Date: 2016.10.28 15:38
* Topic
  * mvc, html5, css3
  * modify index view and use echo ViewBag.Msg to view page

### 02.06 Summary

* Date: 2016.10.28 15:43
* Jedi: nothing else

## 03. Adding HTML and CSS3 with Bootstrap

### 03.01 Introduction

* Date: 2016.10.28 15:44
* Topic
  * [wrapbootstrap](https://wrapbootstrap.com)
  * Jedi: Collect some bootrap free themes
    * startbootstrap.com
    * bootstrapmade.com
    * [link1](http://www.chinaz.com/free/2014/0924/368583.shtml)
    * company website or personal site
      * [link1](https://startbootstrap.com/template-overviews/landing-page/)
      * [link2](https://startbootstrap.com/template-overviews/agency/)
      * [link3](https://www.prepbootstrap.com/bootstrap-theme/shield)
      * [link4](https://www.bootstrapzero.com/bootstrap-template/design-agency)
      * [link5](http://www.cssmoban.com)
      * [link6](http://bootstrapzero.com/bootstrap-template/worthy)
      * [link7](http://bootstrapzero.com/bootstrap-template/corlate)
      * [link8](https://www.prepbootstrap.com/bootstrap-theme/nine-stars)
      * [link9](https://gt3themes.com/bootstrap/timber-free-one-page-bootstrap-template/)
      * [link10](https://www.bootstrapzero.com/bootstrap-template/devaid)
      * [link11](https://startbootstrap.com/template-overviews/landing-page/)
      * [link12](http://www.themeum.com/wordpress/themes/starter-free-responsive-onepage-wordpress-theme/)
      * [link13 Wordpress themes]( https://bootstrapmade.com/demo/ModernaWp/)
      * [link14](https://bootstrapmade.com/demo/Shuffle/)
      * [link15](https://bootstrapmade.com/demo/Bocor/)
      * [link16](http://demo.themeum.com/wordpress/flat-theme/)
      * [link17](http://www.html5xcss3.com/2012/12/html5-template-kataklimt.html)
      * [link18](http://www.themeum.com/wordpress/themes/starter-free-responsive-onepage-wordpress-theme/)
      * [link19](https://github.com/BlackrockDigital/startbootstrap)

    * admins
      * [admin1](https://startbootstrap.com/template-overviews/sb-admin-2/)
      * very nice, [admin2](https://www.almsaeedstudio.com/)
      * [admin3](https://github.com/jiji262/Bootstrap_Metro_Dashboard)
      * [admin4](http://usman.it/free-responsive-admin-template/)
      * [admin5](https://github.com/lab2023/hierapolis)
      * [admin6](https://github.com/VinceG/Bootstrap-Admin-Theme)
      * [admin7](https://github.com/meritoo/Bootstrap-3-Admin-Theme)
      * [不太好看](http://www.egrappler.com/bootstrap-responsive-admin-template/index.html)
      * [admin8](https://github.com/keaplogik/Bootstrap-Clean-Dashboard-Theme)
      * [admin9 MIT](https://github.com/puikinsh/gentelella)
      * [admin10 MIT](https://github.com/puikinsh/Bootstrap-Admin-Template)
      * [admin11](http://demos.creative-tim.com/light-bootstrap-dashboard/typography)
      * [admin12](https://github.com/ALT-F1/bootstrap3-pug-former_jade-node-express-grunt)
      * [admin13](https://github.com/BlackrockDigital/startbootstrap-modern-business)

  * Jedi: List view is a layout style

* Step
  * Download Bootstrap 3 MetroMan themes to local storage

### 03.02 Creating the Layout Page

* Date: 2016.10.28 15:54
* Topic
  * Modify _layout.cshtml
  * modify index.cshtml

* Step: modify _layout.cshtml (Jedi Notice)
  * Delete all content of _Layout.cshtml
  * Find top bar content from index.html from MetronMan themes by sublime
    * include !doctag
    * include meta tag
    * include css tag
    * Copy from doctype tag to header end comment
  * Add @RenderBody() to file bottom
  * Add footer html code to file bottom
  * Copy all js to to mvc project script directory
  * Create a Templates directory under mvc project content directory
  * Copy Metron font/img/style to content/Templates directory
  * Replace all 'style/' to '~/Content/Templates/style/'
  * Replace all 'img/' to '~/Content/Templates/img/'
  * Replace all 'font/' to '~/Content/Templates/font/'
  * Modify title to 'website'
  * Modify contact info (email, address, phone number)
  * Modify social media info (twitter)
  * Modify all link that link to index.html ('~/home/index')
  * Done and check it~

* Step: modify index.cshtml
  * Copy html code (from Slider start to client ends) to index.cshtml
  * Replace all 'style/', 'img/', 'font/'
  * Done and check it~

### 03.03 Adding pages from Bootstrap

* Date: 2016.10.31 9:45
* Topic
  * Add under construction page to project
  * Add about us page to project
* Step
  * Add UnderConstruction action
  * Add UnderConstruction.cshtml
  * Modify some content
  * Add aboutus action
  * Add aboutus.cshtml
  * Modify some content
    * Special for img tags

### 03.04 Responsive Design

* Date: 2016.10.31 10:09
* Topic
  * Auto scale main menu (type, location, width, height)
  * Jedi: only a introduction

### 03.05 Bootstrap Columns

* Date: 2016.10.31 10:13
* Topic
  * How to use col-md-x or col-sm-x
  * Note: The syntax for marking column size changed from Bootstrap 2 to Bootrap 3. This is Bootstrap 3.
* Jedi, asp.net
  * @RenderSection("script", require: false)
  * col-md-3  md is mean 'middle device'
  * col-sm-3  sm is main 'small device'
  * need to some labs to verify this skill.

### 03.06 Summary

* Date: 2016.10.31 10:24
* Topic
  * Splitting Index.html to _Layout.cshtml and Index.cshtml
  * Fixup up references
  * Adding additional pages from the Bootstrap theme
  * Responsive Design
  * Bootstrap's 12 column

## 04. Working with Forms and Data

### 04.01 Introduction

* Date: 2016.10.31 10:28

### 04.02 Adding the Contact Form

* Date: 2016.10.31 10:48
* Topic
* Step
  * Copy form html to cshtml.
  * Fix google map link.
  * Fix Address content.
  * Fix or add Contact(string name, string email, string website, string comment) action
  * Notice: [HttpPost] tag for Contact action.
  * Debug this action (check parameters).
  * Create contact model.
  * Change Contact(string name, string email, string website, string comment) to Contact (ContactModel cm).
  * Debug this action again.
  * Add SendMail(ContackModel model) function.
  * Add a check script to cshtml.
  * Debug this js block.

* Jedi
  * form tag

    ```html
    <form class="form-hrizontal" method="POST">
    ```

  * code snippet quick: prop -> create class property

### 04.03 Validating the Contact Form

* Date: 2016.10.31 11:01
* Topic
* Step
* Jedi
  * "input type=email", check and study it (use html5 new feature).
  * How to create an inside message for our website.

### 04.04 Service Stack Introduction

* Date: 2016.10.31 11:13
* Topic
  * Workflow
    * Collecting Data
    * Serializing Data
    * Storing Data To Relational DB
    * Retrieving Data
    * Displaying Data
    * News Stories
      * Date
      * Headline
      * Story
    * Building an API (Creating a Service)
  * ServicesStack
    * Light weight and easy
    * Convention over configuration
    * Super fast
    * Json serializer/deserializer
    * Dependency Injection (IOC)
    * ORM , light weight ORM
    * Obtain throught NuGet
    * Flow1: Request->Filter->Your Code (Service)->Filter->Response
    * Flow2: Client code <-- (exchange) --> Service <- Others
  * POCO = Plain Old CLR Objects
  * [Resource](http://www.servicestack.net)
* Step
* Jedi
  * ServiceStack is a nuget package to implement by C#

### 04.05 Creating a Data Service and API

* Date: 2016.10.31 11:27
* Date: 2016.10.31 12:11
* Topic
* Step
  * Create a new website (WebSiteNewsService)
  * Create a new 'Empty' website
  * Use NuGet to install ServiceStack package (ServiceStack webservice framework * 3.9.67)
  * Modify Web.config
    * Add ServiceStack xml config block

      ```xml
          <system.webServer>
              <validation validateIntegratedModelConfiguration = "false" />
              <handlers>
                  <add path = "*" name="ServiceStack.Factory" type="ServiceStack.WebHost.Endpoints.ServiceStackHttpHandlerFactory, ServiceStack" verb="*" preCondition="integrateModel" resourceType="Unspecified" allowPathInfo="true" />
              </handlers>
          </system.webServer>
      ```

  * Create SubMission class
  * Create SubMissionResponse class
  * Create a service class
  * Add a global.asax file
  * Bind a route tag to Submission class
  * Add a StoryService class

* Jedi
  * ServiceStack namespace
    * ServiceStack
    * ServiceStack.Common
    * ServiceStack.Interfaces
    * ServiceStack.OrmLite
    * ServiceStack.OrmLite.SqlServer
    * ServiceStack.Redis
    * ServiceStack.ServiceInterface
    * ServiceStack.Text
  * TODO: 需再看一次
  * Notice: 目前版本和说讲的不一样

### 04.06 The Service Stack ORM and Your Repository

* Date: 2016.10.31 12:09
* Topic
* Step
  * Use nuget to install ServiceStack OrmLite package.
  * Add a DataRepository class.
  * Modify Global.asax (public override void Configure(Container ct)).
  * Use sqlite database.
  
* Jedi
  * ServiceStack.OrmLite namespace
    * ServiceStack.OrmLite
    * ServiceStack.OrmLite.SqliteNet
    * ServiceStack.OrmLite.SqlServer
  * New concept: LBS - Location Based Service

### 04.07 Invoking the Web Service To create Stories

* Date: 2016.11.1 20:09
* Step
  * Add controller at content directory (NewsController.cs)!
  * Modify DataRepository.cs -> GetStory method. (Jedi: like normal DAL style)

    ```c#
        public List<StoryResponse> GetStory(DateTime storDatetime)
        {
          using (var db = DbConnectionFactory.OpenDbConnection())
          {
            var responses = new List<StoryReponse>();
            var submissions = db.Select<Submission(e=>e.Submission);
            foreach (var submission in submissions)
            {
              responses.Add(new StoryReponse()
              {
                HeadLine = submission.Headline,
                StoryDate = submission.SubmissionTime,
                Id = submission.Id,
                Body = submission.Body;
              });
            }
            return responses;
          }
        }
    ```

  * Modify HomeController.cs's News Action

    ```C#
      // implement service call
      public ActionResult News()
      {
        var service = new JsonServiceClient("http://localhost:59068");  // create object for call serverice
        var storResponses = service.Post<List<StoryResponse>>("story"...); // get web service execute result
        ViewBag.Stories = storyResponses;  // save result to ViewBag
        return View(); // return view, and ViewBag will pass to web page.
      }
    ```

### 04.08 Summary

* Date: 2016.11.1 20:26
* Topic
  * Collecting, Serializing and Storing Data to a Relational DB
  * ORM
  * Creating and Display Data
  * Building an API with ServiceStack
    * Light weight and easy
    * Convention over configuration
    * Supper fast
    * Json serializer/deserializer
    * Dependency Injection (Ioc)
    * Light weight ORM
    * Obtain through NuGet
