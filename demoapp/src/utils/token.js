//需要获取本地存储的数据，然后，对外暴露
export const setToken=(token)=>{
    localStorage.setItem('TOKEN',token)
}

export const getToken=()=>{
    return localStorage.getItem('TOKEN');
}