const head = document.querySelector('.head')
const box = document.getElementById('box')
const lis = document.querySelectorAll('.body li')

// 渲染
function render(){
    fetch('../data.json').then(a=>a.json()).then(woqu=>{
        woqu.forEach(ele => {
            let {pic,desc,author} = ele
            let {elm} = minS(lis)
            // div
            let div = document.createElement('div')
            div.className = 'img_box'
            // img
            let img = document.createElement('img')
            img.src = pic
            // p
            let p = document.createElement('p')
            p.className = 'desc'
            p.innerText = desc
            // 2p
            let p2 = document.createElement('p')
            p2.className = 'author'
            p2.innerText = author
            // 放入
            div.append(img)
            div.append(p)
            div.append(p2)
            // 新插入的都放到最短的下面
            elm.append(div)
            setTimeout(()=>{
                img.style.opacity = 1
            })
        });
    })
}
render()

// 最短的
function minS(lis){
    // 让一个数组全是当前内容的长度
    let ary = [...lis].map(item=>item.scrollHeight)
    // 最短的
    let min = Math.min(...ary)
    // 最短的索引
    let index = ary.findIndex(item=>item === min)
    return {
        elm:lis[index],
        min
    }
}

// 瀑布流
window.onscroll = fangdou(pb,200)

// 水遁,水里有拖把
function pb(){
    // 上来就判断
    if(box.scrollHeight < window.innerHeight) return
    // 可视区
    let ih = window.innerHeight
    // 最短的
    let {min} = minS(lis)
    // 滚动条
    let gd = document.documentElement.scrollTop
    // 多余の高
    let dy = head.scrollHeight
    if(ih + gd >= min + dy){
        render()
    }
}

// 防抖
function fangdou(caba,time){
    let timer
    return function(...arg){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            caba.call(this,...arg)
        },time)
    }
}