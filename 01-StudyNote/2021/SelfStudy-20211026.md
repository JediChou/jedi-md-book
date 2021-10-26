# Self Study

Author: Jedi Chou, Create at 2021.10.26 7:50 AM

* Download books from salttiger. **8:12**
* Check gitee messages. **8:14**
* Read mails from skyzhx@163.com. **8:18**
* Read mails from 13417xx51@139.com. **8:18**
* Check github messages. **8:19**
* Check news from ZhiHu app or website. **8:19**
* Update and upgrade packages at wsl. **8:20**
* Don't memorize words APP check-in. **8:22**
* NowCoder check-in. **8:23**
* 163 music APP check-in. **8:24**
* Read articles and check interview invitation (MaiMai APP). **8:24**
* Tencent cartoon APP check-in. **8:25**
* 101WeiQi daily exercise check-in. **8:27**, **8:28**
* Download ebook from jb51.net. **8:30**

* Read WeiBo. **8:30**
* Exercise of Vocabulary (vocabulary.com). **8:56**
* Go Game check
  * Leela Zero vs Leela Zero(B5s-W2s). **9:01**
  * Leela Zero vs Leela Zero(B5s-W2s). **9:13**
  * Leela Zero vs Leela Zero(B5s-W2s). **9:26**
* 百词斩. **10:30**
* Read news. **15:30**
* Reading mail from jedigit@163.com mail. **10:15**

## Other

* key
  * asp.net mvc, webapi, ef
  * c# parallel, async
  * regx, multi-thread
  * JWT, oauth2, log(ELK)
  * call back
  * Interface: IDisposable
* Powershell-cmdlet: `msiexec /package connector-net.msi /quiet`
* NPM repo config(`https://repo.minmaxtec.com/repository/npm/`)

```english-words
 I'm not sure how long it would take for them to get a look at it. I figure the PR would be a good opportunity to gamble in order to accelerate the process.
```

* OpenResty
* BK
  * bk-PaaS: Python, CSS, html, JavaScript, Go, Shell
  * bk-bcs: Go, Lua, Makefile, TSQL, Dockerfile
  * bk-ci: Kotlin, Java, Vue, JavaScript, Go
  * bk-bcs-saas: Python, Vue, CSS, html, Kotlin
  * bk-cmdb: Go, Vue, JavaScript, Python, CSS
  * bk-sops =  Python, Vue, JavaScript, CSS, HTML
  * Jedi: 计算BK平台的工具链

  ```python
  def split_chain(string, splitter):
    tmp = string.split(splitter)
    return [x.strip().lower() for x in tmp]

  if __name__ == "__main__":
    
    bk_paas = "Python, CSS, html, JavaScript, Go, Shell"
    bk_bcs = "Go, Lua, Makefile, TSQL, Dockerfile"
    bk_ci = "Kotlin, Java, Vue, JavaScript, Go"
    bk_bcs_saas = "Python, Vue, CSS, html, Kotlin"
    bk_cmdb =  "Go, Vue, JavaScript, Python, CSS"
    bk_sops =  "Python, Vue, JavaScript, CSS, HTML"

    ret = []
    ret += split_chain(bk_paas, ',')
    ret += split_chain(bk_bcs, ',')
    ret += split_chain(bk_ci, ',')
    ret += split_chain(bk_bcs_saas, ',')
    ret += split_chain(bk_cmdb, ',')
    ret += split_chain(bk_sops, ',')
    ret = list(set(ret))
    ret.sort()
    print(ret)
    print(len(ret))
  ```

UI: BU, BU Master, 外部厂商
