# ASP.NET MVC2 From Novice To Professional - Microsoft Webcast

## Ch1 MVC Architecture Introduction

1. From 00:00:00 To 00:10:19
2. From 00:10:19 To 00:55:46

## Ch2 ASP.NET MVC2 From Novice To Professional-MVC Demo

1. From 00:00:00 To 00:56:30 Dont understand
2. Must view again.

## Ch3 ASP.NET MVC2 From Novice To Professional-Skill of MVC Viewer Part 1

1. From 00:00:00 To 00:30:27 - (Smoking with Lin)
2. From 00:30:28 To 00:39:25

* Key content: Html.TextBox

## Ch4 ASP.NET MVC2 From Novice To Professional-Skill of MVC Viewer Part 2

* Key content: Html.ActionLink & Html.RouteLink

```text

  Use these components to generate navigate infomations
  ActionLink can call special Controller link
  <%:Html.ActionLink("something", "anotherAction")%>
    <a href="/Home/anotherAction">something</a>
  <%:Html.ActionLink("something","Withdraw","Account")%>
  <%:Html.ActionLink("something","Withdraw","Account",new{id=34231},null%>
  <%:Html.ActionLink("something","Withdraw","Account",null,new{title="about"})%>
  <%:Html.RouteLink("s",new{action="anotherAction"})%>
```

* Key content: Html.BeginForm

```text
Simulate <form> tag
First: <%using(Html.BeginForm(){%>xxx<%}%>
Second: <%Html.BeginForm();%>xxx<%Html.EndForm();%>
```

* Key content: Html.Hidden

```text
<%:Html.Hidden("guidno","xx-xx-xx")%>
    <input id="guidno" name="guidno" type="hidden" value="xx-xx-xx"/>
<%:Html.HiddenFor(m=>m.Guid)%>
```

* Key content: Html.DropDownList & Html.ListBox

```c#
public ActionResult Edit(int id) {
    Nodb context = new Nodb();
    var prodcut = context.ProductS.Single(p=>p.ProductID==id);
    ViewDate["CategoryId"] = from c in p.Categories
        select new SelectListItem {
            Text=c.CategoryName,
            Value=c.CategoryId,
            Selected=(c.CategoryId==p.CategoryId)
        };
    return View(Product);
}

<%:Html.DropDownList("CategoryId")%>
<%:Html.DropDownListFor(m=>m.categoryid)%>
```

* Key content: Html.PassWord

```c#
<%:Html.Password("upwd")%>
  <input id="my-password" name="upwd" type="password" value="*"/>
<%:Html.PassWord(m=>m.upwd)%>
```

* Key context: Html.RadioButton

```c#
<%:Html.RadioButton("color","red")%>
<%:Html.RadioButton("color","yellow","true")%>
<input id="color" name="color" type="radio" value="red"/>
<input checked="checked" id="color" name="color" type="radio" value="yellow"/>
```

* Key context: Html.Partial & Html.RenderPartial

```c#
// Difficult, output html snippet code
public void Partial(string partialViewName);                                             // 1st
public void Partial(string partialViewName, object model);                               // 2nd
public void Partial(string partialViewName, ViewDataDictionary ViewDate);                // 3rd
public void Partial(string partialViewName, object model, ViewDataDictionary ViewData);  // 4th
<%Html.RenderPartial("MyUserControl");%>
use response.write(), without ":" <%:Html.Partial("MyUserControl");%>
```

* Key context: Html.Action & Html.RenderAction

```text
To call special Action of special Controller.
ChildAction ?
Jedi, don't understand.
```

* Key context: RenderAction

```text
pass parameter, action name
```

* Key context: Html.TextArea

```c#
<%:Html.TextArea("text","hello</br> world")%>
```

* Key context: Html.ValidationMessage
  * echo result of ModelState validate.
  * Html.validationSummary
  * View engneer.
    * Request->Routing->Controller->ViewResult->ViewEngine->Response
    * config ViewEngine in Global.asax.cs
    * Use View to create custome engine
      * Interface IViewEngine
      * Interface IView
      * ViewContext properties
  * ViewEngine (Jedi dont understand, this is a cool feature)
  * Spark (Jedi dont understand, this is a cool feature)
  * ViewEngine or ActionResult
  * Advice: balance
