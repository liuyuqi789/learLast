//面包屑功能
const {getParents,bong,getChild,getChilds} = tools
const $breadnNav = $('.bread-nav')

let list = null

function createMenu(id){
    $breadnNav.html('')
    let pary = getParents(id) //找当前id下的所有父级包括自己
    pary.forEach((item,i,all)=>{
        let $navChild = null
        //如果item是数组的最后一项，那么元素应为span
        if(i === all.length-1){
            $navChild = $('<span>'+ item.title +'</span>')
        }else{
            $navChild = $('<a href="javascript:void(0);">'+ item.title +'</a>')
        }
        
        //点击面包屑，让文件夹和面包屑一起动
        $navChild.click(function(){
            //每点击一次面包屑按钮都把全选的数据清除一次
            tools.getChild(data,id).forEach(item=>item.checked = false)
            render(item.id)
            createMenu(item.id)
        })
        $breadnNav.append($navChild)
    })
}
createMenu(0)




