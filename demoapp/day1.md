电商商品汇项目：
前期环境准备：vscode wepack 淘宝镜像 vue-cli
1、vue-cli脚手架部署：

  node_nodules放置的是项目的依赖插件、框架等等
  public放置的是静态资源，比如图片，需要注意这里的静态资源，webpack进行打包的时候，会原封不动的打包到dist文件夹中；而不会当做一个模块打包到js文件里面。
  src放置的是源代码：
    assets 放置的是静态资源，一般放置的是多个组件共用的静态资源；需要注意，放置在这里的静态资源，在webpack打包带的时候，会把静态资源当做一个模块打包到js里面。
  components 放置的是非路由组件（全局组件）
  App.vue 唯一的根组件，Vue当中的组件都是.vue文件。
  main.js 程序的入口文件，整个程序当中，最先执行的文件。
  
  .gitignore github上传用的，git的忽略文件，相关的
  babel.config.js 配置文件，与babel相关，一个翻译官，可以吧ES6语法翻译成ES5语法，兼容性相关的。
  package.json 可以认为是项目的身份证，记录了项目的信息，版本，依赖，如何运行，项目的名称等信息
  package-lock.json 缓存性的文件。

  路由安装 npm i --save vue-router@3.5.3 
  router 放置路由关系 index.js 文件
  pages或者views 放置路由组件（.vue文件）

2、配置环境运行之后，浏览器自动打开
  （npm run serve 之后，浏览器自动打开）
   在根目录下的 package.json 文件里面修改配置 "serve": "vue-cli-service serve --open --host 10.242.1.25",

3、设计思路：对项目进行组件拆分（路由分析）
  非路由组件：
     Hearder,
     Footer ;
  路由组件：
    Home首页、Serch查询页、Loging登陆页面
  项目开发步骤：
    1、html/css 样式结构 在项目当中，不在一html,css样式为主，以业务、逻辑为主
    2、拆分组件
    3、获取服务器数据动态展示
    4、完成动态业务逻辑

4、路由组件和非路由组件之间的区别：
   路由组件需要在router文件夹进行注册，使用的即为组件的名字，使用<rouer-view></rouer-view>占位符；
   非路由组件以标签的形式被使用；
   $route: 一般获取路由信息，路径、query, params等等
   $router: 一般进行编程式导航，进行路由跳转[push\replace]

5、路由的跳转
  声明式导航： router-link 有to属性
  编程式导航：this.$router.push 、this.$router.pushreplace(编程式导航包含 声明式导航的功能)
  组件的显示和隐藏 v-if|v-show 一般使用v-show;
    方法；根据组件的$route.path 获取到路径信息;也可以 配置路由路径的时候设置元信息

    编程式导航在进行路由跳转的时候：有报错：Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/search/1232?k=1232".，但是声明式导航没有这个问题。
    this是当前组件实例
  
6、路由传参问题
   如何指定params可传可不传：在路由规则配置的时候，在参数占位符后加上个‘ ？’
   使用undefinde 解决不传空字符问题
   params 参数，属于路径的一部分，需要占位；
   query 参数，不属于路径的一部分，不需要占位；

    //搜索按钮的回调函数，需要向Search路由进行跳转
    // 路由传递参数的方式：
    // 1、字符串形式
    // this.$router.push('/search/'+this.keyword+'?k='+this.keyword.toUpperCase())
    // 2、模板字符串
    // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
    // 3、对象的形式
    this.$router.push({ name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}} )
    //路由组件可以传递props参数
            //1、布尔值写法
            // props: true
            //2、对象写法: 额外给路由组件传递一些props
            // props:{a:1,b:2}
            // 3、函数写法 常用
            props: ($route) => {
                return {
                    keyword: $route.params.keyword
                }
            }