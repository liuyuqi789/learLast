let style = localStorage.getItem('style')
if(!style){
    fetch('./index.css').then(e=>e.text()).then(d=>{
        let link = document.createElement('style')
        link.innerHTML = d
        document.querySelector('head').append(link)
        localStorage.setItem('style',d)
    })
}else{
    let link = document.createElement('style')
    link.innerHTML = style
    document.querySelector('head').append(link)
}

const lis = document.querySelectorAll('#ul li')
let ary = JSON.parse(localStorage.getItem('gwc')) || []
render(ary)

lis.forEach(ele=>{
    ele.onclick = function(){
        if(!ary.includes(this.innerText)){
            ary.push(this.innerText)
            localStorage.setItem('gwc',JSON.stringify(ary))
            render(ary)
        }
    }
})

ul2.onclick = function(ev){
    if(ev.target.tagName === 'LI'){
        ary = ary.filter(item=>item != ev.target.innerText)
        render(ary)
        localStorage.setItem('gwc',JSON.stringify(ary))
    }
}

window.onstorage = function(){
    ary = JSON.parse(localStorage.getItem('gwc')) || []
    render(ary)
}

function render(ary){
    let html = ary.map(item=>`<li>${item}</li>`).join('')
    ul2.innerHTML = html
}