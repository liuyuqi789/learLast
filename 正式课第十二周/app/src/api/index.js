import axios from 'axios';

//instance可以被多次设置拦截,那么有可能会导致，（覆盖或者合并），所以要重新通过class去封装一个
const instance = axios.create();//001

instance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if(token){
        config.headers['Authorization'] = sessionStorage.getItem('token');
    }
   
    return config;
},error => {
    return Promise.reject(error);
})

//响应拦截
//获取token或者别的令牌信息，然后存储到本地
instance.interceptors.response.use(config => {
    console.log(config)
    if(config.data.power){ //权限信息，要把权限信息写入本地
        sessionStorage.setItem('power',JSON.stringify(config.data.power));
    }
    if(config.data.token){
        sessionStorage.setItem('token',config.data.token);
    }
    return config.data;
},error => {
    return Promise.reject(error);
});

export default instance;

