# code-inspect

# 前端代码检查，git提交验证

### 安装
    yarn add -D code-inspect

### 代码检查

    yarn lint

### 代码提交

    git add . // 先add
    yarn commit // 进行commit



### 代码提交流程


1. 安装commit插件，`yarn add -D commit-inspect`

2. 修改内容转到暂存区，`git add . (git add -A)`

3. 开始commit，`yarn commit`

4. 输入type（本次更新的类型），内容必须是["删除", "修改", "新增", "代码优化", "项目工程"]中的某一项，可以在根目录下`commitlint.config.js`文件进行修改
5. 输入scope（本次更新的地方）
6. 输入subject（本次更新的概要）
7. 输入body（本次更新的具体细节）
8. 输入footer（本次更新的备注，如修改了海庭的代码，可以输入@冯海庭）
9. commit完成，进行 `git push`
