# vue移动端开发模板


### 模板功能点介绍

#### 1. css采用less，有以下区分

    a. reset.less // 重置样式
    b. rewrite.less // 根据UI整个修改UI框架（vux）
    c. common.less // 自定义全局公用样式
    d. mixin.less // 样式函数（色彩规范、字体规范、@2x@3x、伪类扩展点击区域、css3右箭头、点击触发颜色改变等等）
    e. index.less // 整个全局样式

#### 2. js做了以下功能

    a. ajax.js // 封装了axios，拦截请求和响应，请求成功失败统一处理
    b. api.js // 整个项目的请求
    c. dbClick.js // 为按钮添加指令防止快速连续多次点击
    d. fastclick.js // 解决移动端点击延迟
    e. filter.js // vue过滤器
    f. msg.js // 结合vux消息提示做了全局封装
    g. regList.js // 正则集合
    h. routerIntercept.js // 全局路由拦截处理

#### 3. components

    better-scroll // 结合better-scroll 封装了上拉加载下拉刷新的统一操作
    Loading.vue // 自定义loading组件

#### 4. router

    index.js // 路由懒加载

#### 5. skeleton

    homeSkeleton.vue // 骨架屏模板

#### 6. store

    a. state.js // 定义全局状态
    b. mutations-types.js // 修改全局状态所用常量
    c. mutations.js // 同步修改全局状态
    d. actions.js // 异步修改全局状态
    e. getters.js // 获取全局状态
    f. index.js // 整合整个store, 开启store logger

#### 7. views

    整个项目的视图文件夹

#### 8. App.vue // 根视图

#### 9. main.js // 项目入口

#### 10. main.skeleton.js // 骨架屏供node渲染入口

#### 11. static // 无需webpack打包的资源

#### 12. .editorconfig // 修改为4个空格的缩进


### 开发环境

    node v8.9.4
    npm 5.6.0

### 启动项目

``` bash
# 安装依赖
npm install

# 开发
npm run dev

# 打包
npm run build
or
npm run build --report // 查看打包后的各个资源具体大小，可进行针对性的优化
```

### webpack配置修改介绍

##### build

    a. webpack.base.conf.js

            // 定义绝对路径
            alias: {
                '@': resolve('src'),
                'assets': resolve('src/assets'),
                'router': resolve('src/router'),
                'store': resolve('src/store'),
                'components': resolve('src/components'),
            }

            // 集成vux按需加载
            module.exports = vuxLoader.merge(oldBaseConf, {
                plugins: ['vux-ui']
            })

    b. webpack.skeleton.conf.js // 骨架渲染供SkeletonWebpackPlugin插件调用

    c. webpack.dev.conf.js   webpack.prod.conf.js

            // 骨架屏插件集成 （vue-skeleton-webpack-plugin）
            new SkeletonWebpackPlugin({
                webpackConfig: require('./webpack.skeleton.conf'),
                quiet: true,
                minimize: true,
                router: {
                    mode: 'history',
                    routes: [
                        {
                            path: '*',
                            skeletonId: 'home'
                        }
                    ]
                }
            })


##### config

    a. index.js

            // 修改host，便于在手机上面查看
            dev
            host: '0.0.0.0',
                port: 5555,

            // 开启打包gzip, 开启后需安装compression-webpack-plugin
            build
            productionGzip: true

### 模板待解决问题

> 骨架屏在vue项目首次加载或者刷新进入数据请求较慢的页面时候，利用vue-skeleton-webpack-plugin插件在服务端渲染好指定的骨架页面，从而给用户良好的加载效果，提升用户体验，此模板在路由进行懒加载后，出现的待解决的问题是，骨架屏消失的时机是在分割的js代码加载之前，或者说是对应路由分割的js代码加载的时机实在骨架屏消失之后加载，从而还是出现了白屏，待后续解决。

