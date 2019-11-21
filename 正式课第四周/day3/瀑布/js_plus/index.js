class Tools{
    // 最小
    minS(lis){
        let ary = [...lis].map(item=>item.scrollHeight)
        let min = Math.min(...ary)
        let index = ary.findIndex(item=>item === min)
        return {
            index,
            min
        }
    }
    // 防抖
    fd(ary,time){
        let timer
        return function(){
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                ary.call(this)
            },time)
        }
    }
    // 节流
    jl(ary,time){
        let prevtime = 0
        return function(...arg){
            let newtime = +new Date
            if(newtime - prevtime > time){
                ary.call(this,...arg)
            }
            prevtime = newtime
        }
    }
}

class Waterfall extends Tools{
    constructor(){
        super()
        this.body = document.querySelector('.body')
        this.head = document.querySelector('.head')
        this.lis = document.querySelectorAll('.body li')
        this.wh = window.innerHeight
        this.loading = document.getElementById('loading')
        this.onoff = true
    }
    // 获取数据
    render(){
        fetch('../data.json').then(a=>a.json()).then(data=>{
            this.renderX(data)
        })
    }
    // 渲染
    renderX(data){
        data.forEach(item=>{
            this.onLd()
            this.cloading()
            let div = document.createElement('div')
            div.className = 'img_box'
            let img = document.createElement('img')
            img.src = item.pic
            div.append(img)
            div.innerHTML += `<p class="desc">${item.desc}</p>
            <p class="author">${item.author}</p>`
            let {index} = this.minS(this.lis)
            this.lis[index].append(div)
            setTimeout(()=>{
                this.offLd()
                this.cloading()
                div.children[0].style.opacity = 1
            },100)
        })
        
    }
    // 瀑布流
    scroll(){
        let pb = () =>{
            let os = window.pageYOffset
            let headx = this.head.offsetHeight
            let {min} = this.minS(this.lis)
            if(this.wh>this.body.scrollHeight)return
            if(this.wh + os >= headx + min){
                this.render()
            }
        }
        window.onscroll = this.fd(pb,200)
        window.onresize = () =>{this.wh = window.innerHeight}
    }
    // loading
    cloading(){
        this.loading.style.display = this.onoff?'block':'none' 
    }
    // 开关
    onLd(){
        this.onoff = true
    }
    offLd(){
        this.onoff = false
    }
}


let w = new Waterfall('.body');
w.render();
w.scroll();

   