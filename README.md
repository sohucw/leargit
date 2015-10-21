

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

3 分支管理策略
小结
git merge --no-ff -m "merge with no-ff" dev

Git分支十分强大，在团队开发中应该充分应用。

合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。