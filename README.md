

// 创建分支
git branch name
// 切换分支
git checkout branchName
// 将本地仓库同步到远程  name 通常是方便记忆取的名字  url是远程git仓库的地址
git remote add name url

git remote -v  //


小结

Git鼓励大量使用分支：

查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>