# Self Study

Author: Jedi Chou
Create at 2019.2.12 7:45 AM

* Daily study
  * Check-in
    -[x] Don't memorize words APP check-in. 7:36
    -[x] 101WeiQi daily exercise check-in
    -[x] Open class APP by 163.com check-in. 8:01
    -[x] Read articles and check interview invitation (MaiMai APP). 11:26
    -[x] NowCoder check-in and do an exercise that contains 20 puzzles. 11:37
    -[x] 163 music APP check-in. 11:37
    -[x] Tencent cartoon APP check-in. 11:38

  * Micro habit
    -[x] Commit a C code to GITHUB or GITEE. 7:53
    -[x] Reading 1 minutes at SIMPLE Wiki. 7:56
    -[x] Read Sina Blog. 8:44
    -[x] Read a thesis and don't record. 16:13

  * Reading
    -[x] ZHIHU Daily check. 9:01
    -[x] Feedly RSS reader. 9:54
    -[x] InfoQ check. 10:17
    -[x] Exercise of Vocabulary (vocabulary.com) 11:20

  * Mail
    -[x] 163.com mail. 15:52

* Cool idea: Use AI and PPT that bosses interested to generate new PPT. 10:02
* Immuature idea: Use AI to implemented a IT maintain framework and apply it to CFA IMS architecure. 10:04
* Immuature idea: Trainning your GO level with AI (using a lot of adaptability training). 10:09
* Code excises
  * Recreate basic collections by C#, Python, JavaScript, C, and compare their performance.

* The Mocha unit test practices at Windows 10. 11:26
  * Get an error that detail message is "cannot find module 'chai'".
  * Get same error at Windows 10 WSL and CMD environment.
  * Add NODE_PATH enviornment variable to current user, then can run at CMD environment.
  * The problem still exists at Win10 WSL.

    ```shell
      user:/mnt/d/test$ cnpm install mocha -g
      Downloading mocha to /usr/local/lib/node_modules/mocha_tmp
      Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/mocha_tmp'
    ```

    Or

    ```shell
      user:/mnt/d/test$ cnpm install --gloal mocha
      npminstall WARN package.json not exists: /mnt/d/test/package.json
      ✔ Installed 0 packages
      ✔ Linked 0 latest versions
      ✔ Run 0 scripts
      ✔ All packages installed (used 15ms(network 7ms), speed 0B/s, json 0(0B), tarball 0B)
    ```

    And I get an same error message.

    ```shell
      user:/mnt/d/test$ mocha add.test.js
      module.js:549
          throw err;
    ```

  * Tips: "module.exports = add;", notice 'exports', it is not 'export'.
