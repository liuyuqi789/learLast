const box = document.querySelector('.body')
const head = document.querySelector('.head')
const lis = document.querySelectorAll('.body li')

// 找到最小的长度
function minS(lis){
    // 在这里,先找出所有的lis里的图片的撑开的高度
    let ary = [...lis].map(item=>item.scrollHeight)
    // 然后找到最短的那个
    let min = Math.min(...ary)
    // 最后,找到最短的那个的索引
    let index = ary.findIndex(item=>item === min)
    // 返回就行啦
    return {
        // lis的最短索引
        ylc:lis[index],
        min
    }
}
// 第一部分,渲染页面
function render(){
    fetch('../data.json').then(a=>a.json()).then(fy=>{
        fy.forEach(shuju=>{
            // 这就是最短的那个
            let {ylc} = minS(lis)
            // shuju就是那一堆数据
            let {pic,desc,author} = shuju
            // div
            let div = document.createElement('div')
            div.className = 'img_box'
            // 图片
            let img = document.createElement('img')
            img.src = pic
            // 第一个p
            let p = document.createElement('p')
            p.className = 'desc'
            p.innerText = desc
            // 第二个p
            let p2 = document.createElement('p')
            p2.className = 'author'
            p2.innerText = author
            // 放到div里
            div.append(img)
            div.append(p)
            div.append(p2)
            // 这个时候,需要判断 放到哪里呢?放到最短的下面,怎么判断最短的是哪个呢?写个方法
            ylc.append(div)
            // 让他来个好康的效果,用一个万能的定时器
            setTimeout(()=>{
                img.style.opacity = 1
            })
        })
    })
}
render()
// 第二部分,开始瀑布
window.onscroll = jieliu(fn,200)

// 瀑布分支
function fn(){
    // 防止上来就执行
    if(box.scrollHeight < window.innerHeight)return
    // 最短
    let {min} = minS(lis)
    // 可视区
    let ih = window.innerHeight
    // 滚动条
    let to = document.documentElement.scrollTop
    // 头部的高度
    let tg = head.offsetHeight
    console.log(tg)
    if(ih + to >= min + tg){
        render()
    }
}
// 防抖 就是把这个代码一起延后执行一下
function fangdou(callback,time){
    let timer
    // 回调函数,传进来的值可以进行处理
    return function(...arg){
        if(timer){
            // 如果timer有,就清掉
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            // 没有就加一个
            callback.call(this,...arg)
        },time)
    }
}

// 节流
function jieliu(callback,time){
    let prevTime = 0,timer
    return function(...arg){
        let nowTime = +new Date
        if(nowTime - prevTime > time){
            callback.call(this,...arg)
        }else{
            clearTimeout(timer)
            timer = setTimeout(()=>{
                if(+new Date - prevTime > time){
                    callback.call(this,...arg)
                }
            },time)
        }
        prevTime = nowTime
    }
}