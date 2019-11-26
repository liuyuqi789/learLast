class Xxk {
    constructor(that){
        this.box = that
        this.opts = {
            btns:['b1','b2','b3'],
            divs:['d1','d2','d3']
        }
    }

    init(opts){
        this.zuobtn(opts)
        this.zuodiv()
        this.fangfa()
    }

    zuobtn(opts){
        opts.btns.forEach((item,i)=>{
            this.box.append($(`<button class="${i==0?'active':''}">${item}</button>`))
        })
    }

    zuodiv(){
        this.opts.divs.forEach((item,i)=>{
            this.box.append($(`<div class="${i==0?'show':''}">${item}</div>`))
        })
    }

    fangfa(){
        this.btns = this.box.find('button')
        this.divs = this.box.find('div')
        let that = this
        this.btns.click(function(){
            $(this).addClass('active').siblings('button').removeClass('active')
            that.divs.eq($(this).index('button')).addClass('show').siblings('div').removeClass('show')
        })
    }
}

class Dade {
    constructor(that){
        this.box = that
        this.disX = 0
        this.disY = 0
    }

    position(){
        this.box.css({
            position:'absolute',
            top:0,
            left:0
        })
    }

    mousedown(){
        let that = this
        this.box.mousedown(function(ev){
            that.disX = ev.pageX - $(this).offset().left
            that.disY = ev.pageY - $(this).offset().top
            that.mousemove()
            that.mouseup()
            return false
        })
    }

    mousemove(){
        let that = this
        $(document).mousemove(function(ev){
            that.box.css({
                left:ev.pageX - that.disX,
                top:ev.pageY - that.disY
            })
        })
    }

    mouseup(){
        $(document).mouseup(function(){
            $(this).off('mousemove')
            $(this).off('mouseup')
        })
    }
}

$.fn.extend({
    tabs:function(opts){
        let t = new Xxk(this)
        t.init(opts)
        return this
    },
    dialog:function(){
        let d = new Dade(this)
        d.position()
        d.mousedown()
    }
})