## git github
- git,可以理解为一个工具,是为了方便修改代码以及处理错误的一种版本控制工具
- github,是外国提供的一个开元的网站、可以传代码,储存代码,也可以交流心得、学习，看大神等
### git 与 github 的区别
- git 是 一种道具,版本控制工具
- github 是网站、远程代码管理仓库 也可以学一些知识

### 集中式与分布式
- 集中式缺点:
   必须联网、速度慢、都使用一个中央服务器、有可能造成数据丢失
- 分布式:
    不用联网就能进行版本控制,速度快 本地就是一个服务器传到网上所有人都可以用

### 初始化版本控制状态
    随便创建一个文件,在当前目录下点击鼠标右键 git bash here
    输入 git init 会创建一个.git 隐藏文件
    版本控制到是基于.git文件,若果删除,后果自负

    查看git状态
        git status
    通过Tab键可以一键补全文件(需要开头)
    通过ll或者ls查看目录的文件
    通过上下键切换刚才输入的命令

### 设置创作者信息
- 设置用户名 git config --global user.name "名字,最好github上用户名,好记"
- 设置邮箱 git config --global user.email "你的邮箱,最好github上的邮箱(能收到邮件的邮箱)"

- 从工作区到暂存区
   git add 文件名
   git add ./all 把当前目录的所有文件都放到暂存区
- 从暂存区到版本区
   git commit -m "注释,项目描述"
- 快捷方法: 工作区->版本区 执行该命令必须要文件已经提交过一次(就是当前文件上传过，但是更改的话就可以用，第一次上传不能用)
   git commit -a -m "注释"
- 查看版本
   git log
   git reflog (如果版本操作的多请用这个)
- 撤销、回滚
   git reset --hard 版本ID (经常配合git reflog使用)
   git reset的惨痛教训:https://blog.csdn.net/qq_31608451/article/details/78342365
- 查看各区间的区别:
   工作区->暂存区:git diff
   工作区->版本区:git diff master
   暂存区->笨笨去:git diff --cached

### 指定某些文件不上传
- 创建一个 .gitignore文件 touch .gitignore
- 配置过滤项 文件前 + / 文件夹后 + / 
    场外援助:https://www.cnblogs.com/zhihang/p/10611475.html
- 如果配置不起作用，可以先把之前的操作清除一下,然后重写
    git rm -r --cached .

### github(辣就是个网址撒)
- 有很多同类型网址(竞争挺激烈) 比如码云、coding...
- 目的是把我们的代码放到远程仓库
- 步骤: 
- 1、github上先创建一个项目:+号下面第一个,最后一项要勾选
- 2、绑定秘钥,一次就好 ssh-keygen -t rsa -C "邮箱名" 在c盘用户里找到 .ssh 文件夹，找到id.rsa.pub文件 复制下来放到远程地址的setting
->ssh秘钥->添加秘钥，名称下面
- 3、确认版本库是最新的
- 4、查看绑定的远程仓库: git remote -v 
- 5、添加远程仓库: git remote add origin(可以随便起,突然想起了变量) 你的远程仓库项目地址
planB: git clone 你的远程仓库地址
- 6、git pull origin master 先拉再推
- 7、git push origin master 上传(成功的话会在远程中看到)
```
    创建连接有两种方法,一种是需要秘钥的git remote add流
    一种是直接git clone方法
```
## node 的粗略学习!第一次
    NPM: 安node的时候送的,就像冲话费送的一样,是安装模块的方法
    目前是世界上最大的资源管理平台
    Yarn: 需要 npm install yarn -g(丢人,还需要npm安)目前实施最快的资源管理平台(你跟npm干一架吧)

### 项目的初始化
    npm init -y 会生成一个package.json的文件,文件里写上所有的项目配置依赖 同理，如果clone别人的,那么你需要直接  npm install 他就会自动根据package.json里的项目依赖下载

### 下载资源
    npm install 资源名
        -g 全局安装
        -S 项目依赖
    下载下来会自动生成一个node_modules文件夹,文件夹终究是你需要的资源
    yarn add 资源名
    yarn remove 资源名

### 删除资源
    npm uninstall 资源名

### 场外救援
    npm是外国的网站,不可避免的会出现一些下载速度过慢的情况,那么如何解决呢
    这个时候要用到nrm
    步骤: npm install nrm -g (安装)
    nrm test (测速) 
    nrm use xxx (使用)
    这样,你就会发现你的电脑安装依赖的时候,速度就像飞一样

