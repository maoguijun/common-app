<!--
 * @Author: maoguiun
 * @Date: 2019-11-07 18:19:50
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-12 17:23:17
 * @FilePath: \common-app\README.md
 -->

# 本项目简要介绍

## 文件目录

```bash
├── build
├── commitlint.config.js
├── config
|  ├── env.js
|  ├── jest
|  |  ├── cssTransform.js
|  |  └── fileTransform.js
|  ├── modules.js
|  ├── paths.js
|  ├── pnpTs.js
|  ├── webpack.config.js
|  └── webpackDevServer.config.js
├── public  # 静态文件
├── scripts # 脚本
|  ├── build.js
|  ├── start.js
|  └── test.js
└── src  #项目源码
   ├── App.css
   ├── App.js # app 入口
   ├── App.test.js
   ├── components # 公用组件
   ├── containers # 容器
   |  └── counter
   ├── index.css
   ├── index.js # 主入口
   ├── logo.svg
   ├── reducers # 主 reducer
   |  └── index.js
   ├── serviceWorker.js
   └── stores # 主 store
      └── index.js
```

## start

```bash
npm start
# or
yarn start
```

## build

```bash
npm run build
```

## commit

提供了 npm run commit 来规范 commit 内容，但是没有使用 commitlint 强制限制，commit 脚本可以帮助开发者更好的维护 commit-msg, 以下两种方式都可以

```bash
git add .
git commit -m ''
git push


#
git add .
npm run commit
git push
```

## eslint

依旧提供了 pre-commit + eslint, 项目刚开始让我们一起维护我们的代码，一起编写更易于阅读和维护的代码
