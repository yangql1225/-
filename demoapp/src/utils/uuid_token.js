//uuid 是随机字符串
import {v4 as uuidv4 } from 'uuid'
export const getUUID=()=>{
    //从本地存储获取uuid uuidv4()每调用一次会生成一个新的uuid，需要保证uuid只有一个
   let uuid_token=localStorage.getItem('UUIDTOKEN');
   //如果没有
   if (!uuid_token){
    //    就生成一个并且存储到本地存储
       uuid_token=uuidv4();
       localStorage.setItem('UUIDTOKEN',uuid_token);
   }
   //封装函数要返回值，不然是undefine
   return uuid_token;
   
}