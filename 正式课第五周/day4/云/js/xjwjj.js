// 获取数据
let ary = []
for(let i in data){
    ary.push(data[i].title)
}
// 创建文件
function render(ary){
    // 右边的
    $('#rightb').html('')
    // 左边的
    $('#lefta').html('')
    $.each(ary,((i,item)=>{
        // 右边
        let $list = $(`<li>
            <div>
            <img src="./img/wjj.jpg">
            <input type="text">
            <p>${item}</p>
            </div>
        </li>`) 
        // 左边
        let $zuo = $(`<li>${item}</li>`)
        $('#lefta').append($zuo)
        $list.find('input').hide()
        $('#rightb').append($list)
    }))
}
render(ary)
// 点击新建文件夹
$('#new').click(()=>{
    let $li = $(`<li>
        <div>
        <img src="./img/wjj.jpg">
        <input type="text" value="新建文件夹">
        </div>
    </li>`) 
    $('#rightb').append($li)
    let $txt = $li.find('input')
    $txt.select()
    $txt.blur(()=>{
        let v = $txt.val()
        let num = 1
        let nval = ''
        let bool = ary.includes(v)
        nval = v
        while(bool){
            let s = v.replace(/\(\d+\)$/,'') + `(${num++})`
            bool = ary.includes(s)
            nval = s
        }
        ary.push(`${nval}`)
        render(ary)
    })
})