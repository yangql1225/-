
    // 导入需要引入的组件
    import Home from '@/pages/Home/index.vue'
    import Login from '@/pages/Login/index.vue'
    import Register from '@/pages/Register/index.vue'
    import Search from '@/pages/Search/index.vue'
    import Detail from '@/pages/Detail'
    import AddCartSuccess from '@/pages/AddCartSuccess'
    import ShopCart from '@/pages/ShopCart'
export default 
    [
        { path: '*', redirect: '/home', meta: { show: true } },
        { path: '/home', component: Home, meta: { show: true } },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
            name: 'search',
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

        },
        //params传参需要占位
        {path:'/Detail/:skuid',component: Detail, meta: { show: true }},
        //加入购物车成功路由
        { path: '/addcartsuccess',name:'addcartsuccess', component: AddCartSuccess , meta: { show: true }},
        //购物车路由
        { path: '/shopcart',name:'shopcart', component: ShopCart , meta: { show: true }},

    ]
