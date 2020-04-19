#### 常用的Git命令
***
1. 创建远程仓库
2. 安装 git 软件
3. 创建项目文件夹
4. 配置 git 配置文件
  > 在全局配置使用者名称 `git config --global user.name 'xiaoming' ` 
  > 在全局配置使用者邮箱 ` git config --global user.email 'example@qq.com'`
  > 查看 git 配置文件，验证是否配置成功 `git config -l`
5. 初始化 git 相关文件 `git init`
6. 将本地项目和远程仓库中的项目关联 `git remote add origin 远程项目地址`
7. 将本地项目添加或更新的文件同步到远程仓库中
  > 1. 将本地更新文件提交到本地的暂存区 `git add 添加或更新的文件名` 或提交同步所有的添加或更新的文件 `git add .`
  > 2. 将暂存区的文件提交到本地仓库 `git commit -m "本次提交的注释"` 或一次性注释所有暂存区中的文件 `git commit  -am "本次提交的注释"` 
  > 3. 推送到远程仓库中 `git push -u origin master`

**以上就是一个本地文件提交到远程仓库的流程和相应的命令**
***
查看 git 当前状态 `git status`
查看 git 提交的记录 `git log`
##### 比较具体变化
比较**暂存区**与**工作区**的具体代码变化 `git diff 提交的文件名`
比较**本地仓库**中的版本变化 `git diff 版本ID 版本ID`
比较**工作区**与**本地仓库**的版本变化 `git diff 版本ID`
比较**暂存区**与**本地仓库**的变化 `git diff --cached 版本ID`
版本ID 仅输入5位或5位以上即可
##### 回滚命令
移动**本地仓库**的HEAD的指向 `git reset --soft`
将**本地仓库**的版本回滚到**暂存区** `git reset HEAD`
从**本地仓库**的版本回滚到**工作区** **注意小心使用，不然会浪费你的编辑成果** `git reset --hard 版本号`
将**暂存区**的某个文件删除 `git reset HEAD filename`
从**暂存区**中恢复文件到**工作区**，**注意小心使用，不然会浪费你的编辑成果** `git checkout -- filename`
reset 与 checkout 的区别 
**reset 进行文件的回滚，不会更改本地仓库的HEDA指向**
**checout 将本地仓库的HEDA指向为指定版本ID，并将工作区和暂存区的文件恢复成指定版本的状态**
##### 修改最后一次提交
`git commit --amend` 进入最后一次提交的内容编辑
##### 删除文件
删除**工作区**和**暂存区**的文件 `git rm filename`
要**工作区**和**暂存区**的文件不同 
1. 强制删除所有的文件 `git rm -f filename`
2. 删除**暂存区**的文件 `git rm --cached filename`
##### 重命名文件
`git rm oldfilename newfilename`
##### 分支管理
分支开发一个测试版本，不影响原分支的开发
**创建分支** `git branch 分支名`
**切换分支** `git checkout 分支名` **快速创建并切换分支** `git checkout -b 分支名`
**查看分支**以图形化的形式查看分支 `git log --decorate --oneline --graph --all`
**分支合并**将分支合并到主分支 `git merge 分支名`
出现冲突后，冲突是两个分支有同名但是内容不同的文件，git 无法确定要保留那个，因此需要自己手动处理冲突后，再合并分支。
**查看冲突** `git status` 查看所有有冲突的文件，git 会在文件中标记处，不同分支的内容，自行查看保留需要的内容后，提交到本级仓库，在执行合并分支即可。
**删除分支** `git branch -d 分支名`
**匿名分支** `git checkout ` 使用匿名分支，可以在匿名分支中测试新功能，而且提交也不会影响到原分支的状态