//登录和注册的模块
import {reqGetCode,reqUserRegister,reqUserLogin,reqUserTokenInfo} from '@/api'
import {setToken,getToken} from '@/utils/token'
const state={
    code:'',
    token:getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code=code;
    },
    USERLOGIN(state,token){
        state.token=token;
    },
    USERTOKENINFO(state,userInfo){
        state.userInfo=userInfo;
    }
};
const actions={
    //获取验证码
   async  getCode({commit},phone){
     
   let result=  await reqGetCode(phone);
//    console.log(result)
   if(result.code==200){
    commit('GETCODE',result.data);
    return "ok"
}else{
    return Promise.reject(new Error('faile'))
}
  },
  //用户注册
  async getUserRegister({commit},userRegisterInfo){
  let result =await  reqUserRegister(userRegisterInfo);
  
  if(result.code==200){
   
    return "ok"
}else{
    return Promise.reject(new Error('faile'))
}
  },
  //用户登录(登录成功获取到token)
  async getUserLogin({commit},userData){
   let result=await reqUserLogin(userData);
   
   //服务下发的token是用户的唯一标识符
   if(result.code==200){
       commit('USERLOGIN',result.data.token);
       //获取到token之后进行本地存储
       setToken(result.data.token);
       return "ok"
   }else{
       return Promise.reject(new Error('faile'))
   }

  },
  //带token获取信息用户信息
  async getUserTokenInfo({commit}){
     let result=await reqUserTokenInfo();
     console.log('home加载完',result);
     if(result.code==200){
         commit('USERTOKENINFO',result.data);
         return "ok";
     }else{
         return Promise.reject(new Error('faile'))
     }
  }
  


};
const getters={
   userInfo(){
       return state.userInfo||{}
   }
};

export default {
    state,
    mutations,
    actions,
    getters,

}
