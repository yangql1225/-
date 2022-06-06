//这里导入的reqGoodsInfo是在API文件里面定义的名字

import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
import { Promise } from 'core-js';
//导入uuid函数
import {getUUID} from '@/utils/uuid_token'
const state={
    goodsInfo:{},
    //游客的临时身份 UUID
    uuid_token:getUUID(),
};
const mutations={
    GETGOODSINFO(state,goodsInfo){
    state.goodsInfo=goodsInfo;
    }
};
const actions={
    //获取产品信息
   async getGoodsInfo({commit},skuId){
     let result=await reqGoodsInfo(skuId);
     
     if(result.code==200){
         commit('GETGOODSINFO',result.data)
    }
    },
    //加入购物车发起请求
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
    //  发请求
    let result=await reqAddOrUpdateShopCart(skuId,skuNum);
      
    //对服务器请求结果判断
    //在detail组件中调用了这个 addOrUpdateShopCart 函数发请求，因为加了async 返回的是promise
    if(result.code==200){
        return "ok"
     }else{
         return Promise.reject(new Error('faile'))
     }
    }

    
};
const getters={
    //路径导航简化数据
    categoryView(state){
        //数据返回要考虑为空的情况，为空之后，在组件中引用就会由undefined的报错，需要至少返回一个空对象
        return state.goodsInfo.categoryView||{};
    },
    // 产品信息数据简化内容
    skuInfo(state){
        return state.goodsInfo.skuInfo||{};
    },
    //商品售卖属性简化数据
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList||[];
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}