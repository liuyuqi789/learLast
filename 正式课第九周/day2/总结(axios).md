### axios
- 并发:
```
    axios.all([a,b]).then(axios.spread(function(a,b){
        //a和b一起完成
    }))
```

- 请求拦截器（interceptors.requst）是指可以拦截每次或指定HTTP请求，并可修改配置项。

- 响应拦截器（interceptors.response）可以在每次HTTP请求后拦截住每次或指定HTTP请求，并可修改返回结果项。

#### 拦截器
- 全局拦截
```
    axios.interceptors.request.use 请求拦截
        开loading
        登录验证
        权限验证

    axios.interceptors.response.use响应拦截
        关loading
        二次操作数据
        如果接口自带登录验证或者权限验证，也可以做路由跳转
```

- 技术网站:https://www.jianshu.com/p/13cf01cdb81f

- 解除拦截:
    拦截器都有一个返回值，把返回值放到eject里面即可
    axios.interceptors.response.eject(返回值)

- 自定义拦截器（局部拦截）:
（自定义拦截了之后，只要用instance请求的都会被拦截）
```
    const instance = axios.create();
            instance === axios

            instance.interceptors.response.use()

            instance.get('/a')
            axios.get('/b')

        axios({
            url:,
            method
            ..
        }).then()
```