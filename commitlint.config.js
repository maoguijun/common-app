/*
 * @Author: maoguiun
 * @Date: 2019-11-07 18:00:49
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-07 18:25:41
 * @FilePath: \common-app\commitlint.config.js
 */
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            1,
            "always",
            [
                "feat",
                "fix",
                "docs",
                "style",
                "refactor",
                "test",
                "chore",
                "revert",
            ],
        ],
        "subject-full-stop": [0, "never"],
        "subject-case": [0, "never"],
    },
};
