# Self Study

Author: Jedi Chou, Create at 2021.10.22 8:48 AM

* Read news
* Download books from salttiger. **8:49**
* Check github messages. **9:10**
* Read mails from 13417xx51@139.com. **9:11**
* Check news from ZhiHu app or website. **9:12**
* Check gitee messages. **9:13**
* Read mails from skyzhx@163.com. **9:16**
* Update and upgrade packages at wsl. **9:17**
* Don't memorize words APP check-in. **9:17**
* NowCoder check-in. **9:18**
* 163 music APP check-in. **9:18**
* Read articles and check interview invitation (MaiMai APP). **9:19**
* Tencent cartoon APP check-in. **9:20**
* 101WeiQi daily exercise check-in. **9:26**, **9:26**
* Download ebook from jb51.net. **9:26**

* Exercise of Vocabulary (vocabulary.com). **10:30**
* Read WeiBo. **10:40**
* Go Game check
  * Leela Zero vs Leela Zero(B5s-W2s). **10:31**
  * Leela Zero vs Leela Zero(B5s-W2s). **10:43**
  * Leela Zero vs Leela Zero(B5s-W2s). **10:58**
* Reading mail from jedigit@163.com mail. **15:23**
* 百词斩

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
