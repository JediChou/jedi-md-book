# How to call a HttpHandler

## Sample 1

[Ref](http://stackoverflow.com/questions/11535754/how-to-call-httphandler-from-cs-file-asp-net)

```javascript
$.ajax({
  url: "Services/name.ashx",
  contentType: "text/plan",
  data: {
    CustMobile: a,
    CustName: b,
    CustEmail: c
  },

  contentType: "application/json; charset=utf-8",
  success: function(data) {
    $('#loading').hide();
  },
  error: function() {
    $('#loading').hider();
  }
});
```

```c#
HttpWebRequest request = (HttpWebRequest) WebRequest.Create("<YourDomain>/Services/name.ashx?CustMobile=a&CustName=b&CustEmail=c");
HttpResponse response = (HttpWebResponse)request.GetResponse();
```

## Sample 2

* How to create http handler
* [ms228090](https://msdn.microsoft.com/en-us/library/ms228090.aspx)
* [ms228090](https://msdn.microsoft.com/zh-cn/library/ms228090.aspx)
