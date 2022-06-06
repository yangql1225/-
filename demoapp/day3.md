三级联动获取后台数据
v-for 循环数组
事件委派

点击一级-三级分类，home模块跳转到serch模块
     //搜索按钮的回调函数，需要向Search路由进行跳转
            // 路由传递参数的方式：
            // 1、字符串形式
            // this.$router.push('/search/'+this.keyword+'?k='+this.keyword.toUpperCase())
            // 2、模板字符串
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
            // 3、对象的形式
            //  this.$router.push({ name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}} )
            // 4、路由传递参数（对象写法）path 不可以结合params参数一起使用，即path写法不能和params一起使用
            //   indexe.js的路由配置：  path: '/search/:keyword'
            // this.$router.push({path:'/search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})
            // 5、如何指定params 参数可以 可以为不传，那么需要修改为 path: '/search/:keyword?' 
            // ‘? ’代表正则表达式
            // this.$router.push({name:'search',query:{k:this.keyword.toUpperCase()}})
            // 6、如何要求传空值 那么需要修改为 path: '/search/:keyword?' 用undefined 解决
            // this.$router.push({name:'search',params:{keyword:''||undefined},query:{k:this.keyword.toUpperCase()}})
            // 7、 编程式导航在进行路由跳转的时候：有报错：Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/search/1232?k=1232".，但是声明式导航没有这个问题。
            // 方法一： this.$router.push({ name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{} )
            //方法二： this.$router 是 VueRouter类的一个实例；
            //         this.$router.push 是VueRouter类的实例；
            //         所以方法二，在定义VueRouter的时候，在/router/index.js里面重写了push方法
            //如果有query参数，也要带过去

面包屑：
面包屑 和 路由 搜索框的联动；
兄弟组件联动： 删除面包屑关键字，同时清除 搜索框中的内容；
              $bus：全局事件总线（）

排序：
    谁应该有类名；
    谁应该有箭头;
    计算属性值。

分页器：
     分页连续的页码个数；
     自定义分页器在开发的时候，自己设置数据进行调试，先不和服务器取数据。
     对于分页器而言： 算出连续的页码的 开始数字和结束数字
     