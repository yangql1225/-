import {reqCartList,reqDeleteCart,reqUpdateCart} from '@/api/index'

const state={
    // result.data是一个数组
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
     state.cartList=cartList;
    }
}
const actions={
    //获取购物车列表
    async getCartList({commit}){
        let result =await reqCartList();
        //测试是否获取到数据
        
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    //删除购物车请求处理
    async getDeleteCart({commit},skuId){
       let result= await reqDeleteCart(skuId);
       
   if(result.code==200){
       return "ok";
   }else{
       return Promise.reject(new Error('falie'));
   }
   },
   //修改购物车产品选择状态
   async getUpdateCart({commit},{skuId,isChecked}){
       let result= await reqUpdateCart(skuId,isChecked);
      
       if(result.code==200){
           return "ok"
       }else{
           return Promise.reject(new Error("falie"))
       }
   },
   //删除选中的数据
   deleteAllCheckedCart({dispatch,getters}){
      
       let PromiseAll=[];
       //context: 小仓库； commit：提交mutations修改state; getters：计算属性；  dispatch：派发actions； state：当前仓库数据
       getters.cartList.cartInfoList.forEach(item=>{
        // 调用的是getDeleteCart，那么这里的返回结果就是 getDeleteCart的返回结果（promise）
        let promise= item.isChecked==1 ? dispatch('getDeleteCart',item.skuId):'';
        PromiseAll.push(promise);
       });
       //全部成功才返回成功
       return Promise.all(PromiseAll);
   },
   //全选按钮修改状态
   updateAllChecked({dispatch,state},isChecked){
   //全选是把状态为0 的修改成 1，达到全选的目的
        console.log(state);
        let PromiseAll=[];
       state.cartList[0].cartInfoList.forEach(item=>{
          
         let promise=dispatch('getUpdateCart',{skuId:item.skuId,isChecked});
          PromiseAll.push(promise);
      });
     //全部成功才返回成功
     return Promise.all(PromiseAll);
   }   
}
const getters={
   cartList(state){
       return state.cartList[0]||{}
   }
}

export default {
    state,
    mutations,
    actions,
    getters
}