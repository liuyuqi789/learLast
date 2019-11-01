##数组方法 原版扩展
### push 往数组后面添加一项或多项 返回是新数组的长度
```
    let ary = [1,2,3]
    ary.push(3) // [1,2,3,3]
```
#### 问题思考:如何搞定一个push方法？
- push 的原理(方法)
```
    let ary = [1,'c']
    function push(ary,...arg){
        let arz = [...ary,...arg]
        let len = arz.length
        for(let i = 0 ; i < arz.length ; i++){
            ary[i] = arz[i]
        }
        return len
    }
    let a = push(ary,1,2,3)
    console.log(a) // 新数组的长度
    console.log(ary) // [1,'c',1,2,3]
```
### forEach 数组循环, 返回值为undefined
```
    let ary = [1,5,4,7,8,9]
    ary.forEach(ele=>console.log(ele))
```
#### forEach 实现
```
    let ary = [1,2,58,7,5,8,5,6]
    function forEach(ary,callback){
        for(let i = 0 ; i < ary.length ; i++){
            callback(ary[i])
        }
    }
    let arx = forEach(ary,ele => console.log(ele))
```
### map 循环并执行里面的代码，返回值为一个新数组
```
    let ary = [1,2,5,4,6]
    let arx = ary.map(item=>`<li>${item}</li>`)
    console.log(arx)
```
#### map 实现
```
    let ary = [1,2,3,4,5,77,88]
    function map(ary,callback){
        let arx = []
        for(let i = 0 ; i < ary.length ; i++){
            arx.push(callback(ary[i]))
        }
    }
    let cq = map(ary,item=>`<li>{item}</li>`)
```
### some 有一个成立就成立, 返回布尔值
```
    let ary = [1,null,undefined]
    let yx = ary.some(item=>item)
    console.log(yx)
```
### every 所有全成立,才会成立,返回布尔值
```
    let ary = [1,2,3,4,null]
    let ev = ary.every(item=>item)
    console.log(ev)
```
### filter 数组中过滤方法, 返回一个新数组,内容是满足条件的所有数组项
```
    let ary = ['i','c','b',1]
    let jg = ary.filter(item=>typeof item === 'string')
    console.log(jg)
```
#### 那么 问题来了 , 搞定一个filter？
```
    let ary = ['w','d','m','y','沃德玛雅',1]
    function filter(callback){
        // 诶？为啥要循环呀,因为要受热面均匀！(确信！)咳咳，因为要保证每一面……严肃!因为要
        // 保证每一个数组项ary[i]都用到，相当于循环数组里每一项都要满足这个条件，才能返回/// 新数组
        let arx = []
        for(let i = 0 ; i < ary.length ; i++){
            // 如果成立 callback就是那个函数啦, ary[i]每一项 成立之后(===true)
            if(callback(ary[i])){
                arx.push(ary[i])
            }
        }
        return arx
    }
    let cg = filter(ary,item => type of item === 'string')
    console.log(cg)
```
### find 和 findIndex 找到数组中符合条件的数据, 返回数据 找到数组中符合数据的索引 找不到返回undefined
```
    let ary = [1,2,3,4,7]
    let fin = ary.find(ele=>ele>1)
    console.log(fin)

    let finIndex = ary.findIndex(ele=>ele>1)
    console.log(findIndex)
```
#### find实现(然而当写>的时候,只会返回一个)
```
    let ary = [5,6,7,1,2,11,4,3]
    function find(ary,callback){
        for(let i = 0 ; i < ary.length ; i++){
            if(callback(ary[i])){
                return ary[i]
            }
        }
        return undefined
    }
    let a = find(ary,ele=>ele>5)
    console.log(a)

```
### flat 解决数组扁平化
```
    let ary = [1,2,3[4,5,6,[7,8,9]]]
    // 有几层 写几个
    console.log(ary.flat(3))
```
- Infinity 正无穷大 可以替代flat中的数字,不用考虑有几层

## Math 方法
- Math.PI 获取圆周率
- Math.ceil 向上取整
- Math.floor 向下取整
- Math.round 四舍五入
- Math.random 0-1取随机
- Math.abs 取绝对值
- Math.max 取最大值
- Math.min 取最小值
- Math.pow 取幂
> 随机公式 Math.round(Math.random()*(m-n))+n

## Date(时间) 对象
### Date 记录计算机当前的时间 是不安全的
- new Date(传入一个时间)设置时间
- let date = new Date  // (获取当前时间)
- date.getFullYear() 获取年
- date.getMonth() + 1 获取月份,记得+1,因为老外是从0开始的
- date.getDay() 获取星期几 星期日是0
- date.getHours() 获取小时
- date.getMinutes() 获取分钟
- date.getSeconds() 获取秒
- 时间戳  1970年到现在的时间 Date.now()

## 定时器
### setTimeout 只执行一次
```
    setTimeout(()=>{

    },几秒后执行)
```
### setInterval 一直执行
```
    setInterval(()=>{

    },几秒后执行)
```
### 关闭定时器
```
    clearTimeout(定时器的名字)
    clearInterval(定时器的名字)
```
### special 倒计时
```
    // 记住公式
    let d = new Date('2019 10 30 20:50')

    function fn(){
        let d2 = new Date // 获取现在时间
        let t = Math.floor((d-d2)/1000) // t是秒,用之后的时间-之前的时间
        let da = Math.floor(t/86400) // da是天
        t %= 86400
        let Hour = Math.floor(t/3600) // Hour是小时
        t %= 3600
        let Mi = Math.floor(t/60) // Mi是分钟
        t %= 60
    }
```
