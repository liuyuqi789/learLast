class Hua {
    constructor(id){
        this.disX = this.disY = 0
        this.box = document.getElementById(id)
        this.rightb = document.getElementById('rightb')
    }
    init(){
        this.rightb.addEventListener('mousedown',this.down.bind(this))
    }
    // 摁下
    down(ev){
        // 存下坐标点
        this.disX = ev.pageX
        this.disY = ev.pageY
        // 让box出来并且让点击位置为起始位置
        this.box.style.display = 'block'
        this.box.style.left = this.disX + 'px'
        this.box.style.top = this.disY + 'px'
        // 执行move up 事件
        this.rightb.addEventListener('mousemove',this.m = this.move.bind(this))
        this.rightb.addEventListener('mouseup',this.u = this.up.bind(this))
        ev.preventDefault();
    }
    // 移动,画框
    move(ev){
        // 碰撞
        let rig = document.querySelectorAll('#rightb li')
        rig.forEach(ele=>{
            if(bong(box,ele)){
                ele.style.background = 'yellow'
            }else{
                ele.style.background = ''
            }
        })
        // 往右移left不动,top不动 往左的时候才会看
        this.box.style.left = Math.min(ev.pageX,this.disX) + 'px'
        this.box.style.top = Math.min(ev.pageY,this.disY) + 'px'
        // 设置宽高
        this.box.style.width = Math.abs(ev.pageX - this.disX) + 'px'
        this.box.style.height = Math.abs(ev.pageY - this.disY) + 'px'
        ev.preventDefault();
    }
    // 抬起,消失
    up(){
        this.box.style.width = this.box.style.height = 0
        this.box.style.display = 'none'
        this.rightb.removeEventListener('mousemove',this.m)
        this.rightb.removeEventListener('mouseup',this.u)
    }
}

let h = new Hua('box')
h.init()