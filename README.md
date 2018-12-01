### package.json
```js
$ npm init //初始化一个package.json
//--save参数表示将该模块写入dependencies属性，--save-dev表示将该模块写入devDependencies属性
$ npm install express --save
$ npm install express --save-dev
```
- scripts: 指定了运行脚本命令的npm命令行缩写
- dependencies: 指定了项目运行所依赖的模块，
- devDependencies: 指定项目开发所需要的模块
- peerDependencies: 用来供插件指定其所需要的主工具的版本, npm 3.0版开始，peerDependencies不再会默认安装了
- bin: 用来指定各个内部命令对应的可执行文件的位置。
### Dependencies
#### 应用级别
- [expressjs](https://expressjs.com/zh-cn/resources/middleware.html)
#### 图表
- [bizcharts](https://bizcharts.net/products/bizCharts/api/bizcharts)
- [echarts-for-react](https://www.npmjs.com/package/echarts-for-react)
- [Chartkick](https://chartkick.com/react)
- [chartjs](https://www.chartjs.org/)
#### 编辑器
- [markdown](https://www.npmjs.com/package/markdown)
- [simditor](https://github.com/mycolorway/simditor)
- [ckeditor](https://ckeditor.com/): 对于[react](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html)的支持
#### 服务器请求、重定向、函数调用
- [request](https://github.com/request/request): http/https调用，功能完善
- [request-promise](https://github.com/request/request-promise): 基于Bluebird的Promise API的HTTP客户端，对request的再封装
- [urllib](https://github.com/node-modules/urllib): 摘要认证、重定向、Cookie、超时
- [bluebirdjs](https://github.com/petkaantonov/bluebird): 是一个功能齐全的promise库, 它专注于创新的特性和性能
- [!!!axios](https://github.com/axios/axios): 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
- [!!!Socket.IO](https://socket.io/docs/#What-Socket-IO-is): Socket实时通讯 [github.](https://github.com/socketio/socket.io/blob/master/docs/README.md), [中文介绍](https://eggjs.org/zh-cn/intro/index.html)
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
- [body-parser](https://github.com/expressjs/body-parser): express自带http body解析中间件
- [qs](https://github.com/ljharb/qs)
- [query-string](https://www.npmjs.com/package/query-string): 解析或构建URL查询字符串
- [open](https://www.npmjs.com/package/open): 打开链接
- [node-q](https://www.npmjs.com/package/node-q)
- [async](https://github.com/caolan/async): Async模块提供了强大的函数调用功能
#### 上传下载，导入导出，文件处理
- [excel-export](https://www.npmjs.com/package/excel-export): 导出excel
- [js-xlsx](https://www.npmjs.com/package/js-xlsx): excel解析与写入
- [markdown-it](https://github.com/markdown-it/markdown-it): Markdown解析
- [images](https://www.npmjs.com/package/images): 轻量级跨平台图像编解码库
- [sharp](https://github.com/lovell/sharp)： 图片处理
- [fs](http://nodejs.cn/api/fs.html): 文件系统，所有的文件系统操作都有同步和异步两种形式
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [formidable](https://www.npmjs.com/package/formidable): 文件上传
- [multer](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md): 值处理multipart/form-data类型的文件上传, 是写在busboy之上非常高效
- [busboy](https://www.npmjs.com/package/busboy): 文件上传
- [download](https://github.com/kevva/download)
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js): xml文件转换成js对象
#### cookie、session、缓存
- [memoize-one](https://github.com/alexreardon/memoize-one)
- [cookie-parser](https://github.com/expressjs/cookie-parser)
- [express-session](https://github.com/expressjs/session)：Express下session中间件
#### 加密
- [hash.js](https://github.com/indutny/hash.js?files=1)
- [crypto](https://nodejs.org/api/crypto.html#): [廖雪峰javascript教程 crypto](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501504929883d11d84a1541c6907eefd792c0da51000)
#### 基础数据类型的操作
- [lodash](https://www.lodashjs.com/docs/4.17.5.html): js原生的工具函数集，强大兼顾效率
- [lodash-decorators](https://steelsojka.github.io/lodash-decorators/variable/index.html)
- [underscore](http://www.bootcss.com/p/underscore/#): JavaScript工具库，提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象
- [moment](https://momentjs.com/)
- [date-fns](https://github.com/date-fns/date-fns): date-fns is like lodash for dates, 较moment更轻量级的事件处理库, [Official Site](https://date-fns.org/#)
- [numeral](http://numeraljs.com/#use-it)
- [nzh](https://github.com/cnwhy/nzh): 转换阿拉伯数字与中文数字
- [omit](https://github.com/benjycui/omit.js/): 创建已删除某些字段的对象副本
- [cuid](https://www.npmjs.com/package/cuid): 生成随机字符串
- [Chance](https://chancejs.com/usage/node.html): 随机生成器, [Github地址](https://github.com/chancejs/chancejs)
#### CSS
- [lesscss](http://lesscss.org/#)
- [postcss](https://github.com/postcss/postcss/blob/master/README-cn.md)
- [enquire-js](http://wicky.nillia.ms/enquire.js/#quick-start): 媒体查询
- [react-container-query](https://github.com/d6u/react-container-query): 媒体查询
- [rc-animate](https://motion.ant.design/): 页面动画
- [classnames](https://github.com/JedWatson/classnames)
#### 验证
- [email-validator](https://www.npmjs.com/package/email-validator)
- [validator](https://www.npmjs.com/package/validator): 验证字符串的类型（手机、邮箱、数据类型、货币等各种），以及转换成合法字符串（例如url escape、normalizeEmail）
- [ccap](https://www.npmjs.com/package/ccap): 生成图片验证码
#### 定时任务
- [cron定时任务](https://www.npmjs.com/package/cron)
- [node-cron定时任务](https://www.npmjs.com/package/node-cron)
#### NLP自然语言处理(Natural Language Processing)
- [natural](https://github.com/NaturalNode/natural): 自然语言处理工具，已支持中文
- [nodejieba](https://github.com/yanyiwu/nodejieba): 应该是目前性能最好的 Node.js 中文分词库
#### 其他
- [@antv/data-set](https://antv.alipay.com/zh-cn/index.html#__products)
- [@babel/runtime](https://babeljs.io/docs/en/)
- [dva-github](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)
- [dva-api](https://dvajs.com/api/#dva)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard): react提供的复制到剪贴板功能
- [react-document-title](https://github.com/gaearon/react-document-title)
- [react-fittext](http://react-fittext.kennethormandy.com/?selectedKind=FitText&selectedStory=Welcome&full=0&addons=0&stories=1&panelRight=0)
- [ReactTraining](https://github.com/ReactTraining)
- [react-router](https://reacttraining.com/react-router/core/api/Router)
- [Helmet](https://helmetjs.github.io/#)：抵御一些比较常见的 WEB 安全隐患，它其实是将多个安全中间件集中到了一起，大部分都是对于 HTTP Header 的操作
- [waveform-data](https://www.npmjs.com/package/waveform-data)：读入音频文件生成波形图
- [lunar-calendar](https://www.npmjs.com/package/lunar-calendar)：传入日期，即可获取较为详细的农历数据
- [internal-ip](https://github.com/sindresorhus/internal-ip): 获取IP地址
- [ipp](https://github.com/williamkapke/ipp): Internet 打印机协议
- [nodemailer](https://nodemailer.com/about/): 邮件
- [babel](https://babel.docschina.org/docs/en/): Babel是一个工具链，主要用于在旧的浏览器或环境中将ECMAScript 2015+代码转换为向后兼容版本的JavaScript代码。
- [node-http-proxy](https://github.com/nodejitsu/node-http-proxyy): http代理，可用于[搭建本地HTTP服务器时解决转发](https://segmentfault.com/a/1190000005101903)、ajax跨域问题
- [ipip](https://www.ipip.net/support/api.html): ip归属地查询


### DevDependencies
- eslint: [eslint + sylelint + prettier](https://github.com/collections/clean-code-linters)
- [cross-env](https://github.com/kentcdodds/cross-env)
- [cross-port-killer](https://github.com/milewski/cross-port-killer)
- [enzyme](https://github.com/airbnb/enzyme): react的js测试
- [tslint](https://palantir.github.io/tslint/#): 检查[TypeScript](https://www.typescriptlang.org/docs/home.html)语法
- [lint-staged](https://segmentfault.com/a/1190000009546913): 只lint改动的
- [umijs](https://umijs.org/zh/guide/#%E7%89%B9%E6%80%A7)
#### Mock数据
- [mockjs](http://mockjs.com/): mock数据，[github wiki](https://github.com/nuysoft/Mock/wiki)
- [lazy-mock](https://wjkang.github.io/lazy-mock/#/quickstart): 权限控制，mock实际请求
- [Faker.js](https://github.com/marak/Faker.js/): 可以faker各种具体类型的数据
- [lowdb](https://github.com/typicode/lowdb): 持久化数据到json文件

### 参考链接
- [!!!Node.js的优质库，按github star数量排序，Top10](http://awehunt.com/?tnid=5af1c0b67b4fac67bf3af2b4)
- [!!!好用的nodejs库 Github](https://github.com/sindresorhus/awesome-nodejs)
- [Node.js 常用工具、依赖和插件](https://www.jianshu.com/p/43e73134ec42)
- [常用的NPM包](https://cnodejs.org/topic/5b10eef857137f22415c482a): 后端、前端
- [Node.js 开发常用到的软件包](https://juejin.im/entry/58e45cd061ff4b006b2f65bf)
- [nodejs api](https://nodejs.org/api/)
- [nodejs cn](http://nodejs.cn/api/)
- [廖雪峰教程](https://www.liaoxuefeng.com/)
- [Electron](https://electronjs.org/):  是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生桌面应用程序的框架。[Github](https://github.com/electron/electron)
- [Koa2](https://demopark.github.io/koa-docs-Zh-CN/)
