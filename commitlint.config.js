module.exports = {
    // extends: ['@commitlint/config-conventional'],
    rules: {
      "type-enum": [2, "always", ["删除", "修改"]],
      "header-max-length": [2, "always", 72],
      "scope-enum": [2, "always", ["首页", "登录", "目录"]] // error if scope is given but not in provided list
    }
};