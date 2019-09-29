# Self Study

Author: Jedi Chou, Create at 2019.9.29 8:55 AM

* Daily study
  * Check-in
    -[x] Read articles and check interview invitation (MaiMai APP). 8:59
    -[x] 101WeiQi daily exercise check-in. 9:03
    -[x] NowCoder check-in and do an exercise that contains 20 puzzles. 9:03
    -[x] Don't memorize words APP check-in. 9:04
    -[x] 163 music APP check-in. 9:04
    -[x] Tencent cartoon APP check-in. 9:05
    -[x] Exercise of Vocabulary (vocabulary.com). 9:11
    -[x] Open class APP by 163.com check-in. 10:13

  * Micro habit
    -[x] Reading 1 minutes at SIMPLE Wiki. 9:39
    -[x] Read Sina Blog. 9:48

  * Reading
    -[x] Feedly RSS reader. 9:23
    -[x] 163.com mail. 10:16

* Weekly review
  -[x] Read a thesis and don't record. 10:53

## Other

* [pandoc](https://pandoc.org/)
  * [Repo](https://github.com/jgm/pandoc)
  * Jedi: 甜辣，就是这个！
  * Jedi: 为毛是Haskell

```shell

# pandoc需要这些包

Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  bridge-utils cgroupfs-mount containerd dconf-gsettings-backend dconf-service glib-networking glib-networking-common
  glib-networking-services gsettings-desktop-schemas libcairo-gobject2 libcanberra0 libcodeblocks0 libcolord2
  libdbus-glib-1-2 libdbusmenu-glib4 libdbusmenu-gtk3-4 libdconf1 libegl-mesa0 libegl1 libepoxy0 libgbm1 libgtk-3-0
  libgtk-3-bin libgtk-3-common libjs-coffeescript libjson-glib-1.0-0 libjson-glib-1.0-common liblttng-ust-ctl4
  liblttng-ust0 libnotify4 libogg0 libpq5 libproxy1v5 librest-0.7-0 libsoup-gnome2.4-1 libsoup2.4-1
  libstartup-notification0 libtdb1 liburcu6 libvorbis0a libvorbisfile3 libwayland-client0 libwayland-cursor0
  libwayland-egl1 libwayland-egl1-mesa libwayland-server0 libwxbase3.0-0v5 libwxgtk3.0-0v5 libxcb-util1 libxcb-xfixes0
  libxkbcommon0 notification-daemon pigz python-chardet python-pygments ruby-afm ruby-ascii85 ruby-blankslate
  ruby-classifier-reborn ruby-coderay ruby-coffee-script ruby-coffee-script-source ruby-colorator ruby-execjs
  ruby-fast-stemmer ruby-ffi ruby-hashery ruby-jekyll-coffeescript ruby-jekyll-feed ruby-jekyll-gist
  ruby-jekyll-paginate ruby-jekyll-sass-converter ruby-jekyll-watch ruby-json ruby-kramdown ruby-launchy-shim
  ruby-liquid ruby-listen ruby-mercenary ruby-mime-types ruby-mime-types-data ruby-multi-json ruby-oj ruby-parslet
  ruby-pdf-core ruby-pdf-reader ruby-pg ruby-posix-spawn ruby-prawn ruby-prawn-table ruby-pygments.rb ruby-rb-inotify
  ruby-rc4 ruby-rdiscount ruby-redcarpet ruby-rouge ruby-safe-yaml ruby-sass ruby-sequel ruby-sequel-pg ruby-stringex
  ruby-toml ruby-ttfunk ruby-yajl runc sound-theme-freedesktop ubuntu-fan xul-ext-ubufox
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  liblua5.1-0 libluajit-5.1-2 libluajit-5.1-common pandoc-data
Suggested packages:
  texlive-latex-recommended texlive-xetex texlive-luatex pandoc-citeproc texlive-latex-extra context wkhtmltopdf
The following NEW packages will be installed:
  liblua5.1-0 libluajit-5.1-2 libluajit-5.1-common pandoc pandoc-data
0 upgraded, 5 newly installed, 0 to remove and 2 not upgraded.
Need to get 7103 kB of archives.
After this operation, 53.7 MB of additional disk space will be used.
```

```shell
# 就这还报错

jedi@MIS-F3216338:/mnt/d$ ll *.md
-rwxrwxrwx 1 root root  915 Sep 19 19:50 SelfStudy-20190919.md*
-rwxrwxrwx 1 root root 2424 Sep 29 14:08 pandoc.md*
jedi@MIS-F3216338:/mnt/d$ pandoc SelfStudy-20190919.md -o test.pdf
! Font T1/cmr/m/n/10=ecrm1000 at 10.0pt not loadable: Metric (TFM) file not fou
nd.
<to be read again>
                   relax
l.105 \fontencoding\encodingdefault\selectfont

pandoc: Error producing PDF

# 气人 :-(
# 看提示应该是缺少某字体文件
```

```shell

# 日志信息
jedi@MIS-F3216338:/mnt/d$ ll *.log
-rwxrwxrwx 1 root root 108 Sep 29 14:40 missfont.log*
jedi@MIS-F3216338:/mnt/d$ cat missfont.log
mktextfm ecrm1000
mktextfm ecrm1000
mktextfm ecrm1000
mktextfm ecrm1000
mktextfm ecrm1000
mktextfm ecrm1000
```

```shell

# 执行以下命令后可以生成PDF文件
# 该命令应该是安装texlive所需要的字体
sudo apt-get install texlive-fonts-recommended

# Notice: 注意，在md中若有中文就会报错
# Error message
jedi@MIS-F3216338:/mnt/d$ pandoc simple.md -o example.pdf
! Package inputenc Error: Unicode char 中 (U+4E2D)
(inputenc)                not set up for use with LaTeX.

See the inputenc package documentation for explanation.
Type  H <return>  for immediate help.
 ...

l.118 中

Try running pandoc with --latex-engine=xelatex.
pandoc: Error producing PDF
```

* [Chocolatey](https://chocolatey.org/), 这个工具没有好好研究过.
  * Jedi: 之前本地有个PDF是讲这个的
  * [Repo Index](https://github.com/chocolatey-archive)
  * [Choco Repo](https://github.com/chocolatey/choco)

* [PyCharm - Getting started](https://www.jetbrains.com/help/pycharm/quick-start-guide.html)
