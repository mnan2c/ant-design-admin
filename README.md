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
- [@antv/data-set](https://antv.alipay.com/zh-cn/index.html#__products)
- [@babel/runtime](https://babeljs.io/docs/en/)
- [bizcharts](https://bizcharts.net/products/bizCharts/api/bizcharts)
- [classnames](https://github.com/JedWatson/classnames)
- [dva-github](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)
- [dva-api](https://dvajs.com/api/#dva)
- [enquire-js](http://wicky.nillia.ms/enquire.js/#quick-start): 媒体查询
- [hash.js](https://github.com/indutny/hash.js?files=1)
- [lodash](https://www.lodashjs.com/docs/4.17.5.html)
- [lodash-decorators](https://steelsojka.github.io/lodash-decorators/variable/index.html)
- [memoize-one](https://github.com/alexreardon/memoize-one)
- [moment](https://momentjs.com/)
- [numeral](http://numeraljs.com/#use-it)
- [nzh](https://github.com/cnwhy/nzh): 转换阿拉伯数字与中文数字
- [omit](https://github.com/benjycui/omit.js/): 创建已删除某些字段的对象副本
- [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [qs](https://github.com/ljharb/qs)
- [rc-animate](https://motion.ant.design/): 页面动画
- [react-container-query](https://github.com/d6u/react-container-query): 媒体查询
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard): react提供的复制到剪贴板功能
- [react-document-title](https://github.com/gaearon/react-document-title)
- [react-fittext](http://react-fittext.kennethormandy.com/?selectedKind=FitText&selectedStory=Welcome&full=0&addons=0&stories=1&panelRight=0)
- [ReactTraining](https://github.com/ReactTraining)
- [react-router](https://reacttraining.com/react-router/core/api/Router)

### DevDependencies
- eslint: [eslint + sylelint + prettier](https://github.com/collections/clean-code-linters)
- [cross-env](https://github.com/kentcdodds/cross-env)
- [cross-port-killer](https://github.com/milewski/cross-port-killer)
- [enzyme](https://github.com/airbnb/enzyme): react的js测试
- [tslint](https://palantir.github.io/tslint/#): 检查[TypeScript](https://www.typescriptlang.org/docs/home.html)语法
- [lint-staged](https://segmentfault.com/a/1190000009546913): 只lint改动的
- [mockjs](http://mockjs.com/): mock数据，[github wiki](https://github.com/nuysoft/Mock/wiki)
- [umijs](https://umijs.org/zh/guide/#%E7%89%B9%E6%80%A7)
