import requests from "./request.js"

export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
});

//获取搜索模块数据
//需要向服务器传参:params至少是一个空对象，不然会请求失败
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

// 获取产品详情信息
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'
})
//产品添加到购物车中或者更新某一个产品的个数
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({
    url:`/cart/addToCart/${ skuId }/${ skuNum }`,
    method: 'post'
})
//购物车列表
export const reqCartList=()=>requests({
    url:'/cart/cartList',
    method: 'get'
})
//删除购物车请求
export const reqDeleteCart=(skuId)=>requests({
    url:`/cart/deleteCart/${skuId}`,
    method: 'delete'
})
//产品勾选状态
export const reqUpdateCart=(skuId,isChecked)=>requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})
//获取验证码
export const reqGetCode=(phone)=>requests(
    {
        url:`/user/passport/sendCode/${phone}`,
        method:'get'
    }
)
//用户注册
export const reqUserRegister=(data)=>requests({
    url:'/user/passport/register',
    method:'post',
    // data:data
    //可以简写：key:value一致可以简写
    data
})
//用户登录接口
export const reqUserLogin=(data)=>requests({
url:'/user/passport/login',
method:'POST',
data
})
//带用户的token向服务器获取服务器的信息
export const reqUserTokenInfo=()=>requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get',
    
    })
//退出登录
    










//user/passport/logout
    export const reqLogout=()=>requests({
        url:'/user/passport/logout',
        method:'get',
        
        })