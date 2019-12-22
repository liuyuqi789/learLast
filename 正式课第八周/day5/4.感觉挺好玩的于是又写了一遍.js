const http = require('http')
const fs = require('fs')

// 切url方法哒
function huoqu(str){
    let obj = {}
    str.replace(/([^=]+)=([^&]+)&?/g,($0,$1,$2)=>{
        obj[$1] = $2
    })
    return obj
}

// 数据哒
let sql = [
    {
        id:0,
        username:'在吗',
        password:110
    },
    {
        id:1,
        username:'不在',
        password:120
    },
    {
        id:1,
        username:'人呢',
        password:119
    }
]

http.createServer((req,res)=>{
    let url = req.url
    if(url !== '/favicon.ico'){
        if(url.includes('?')){
            let ary = url.split('?')
            let jiekou = ary[0]
            let opt = huoqu(ary[1])
            switch(jiekou){
                // 注册
                case '/register' : 
                let msg1 = {
                    code:0,
                    msg:'可以注册'
                }
                let o = sql.find(item=>item.username === decodeURI(opt.user))
                if(o){
                    msg1.code = 1
                    msg1.msg = '有这个人了'
                }else{
                    if(opt.password){
                        sql.push({
                            id:Date.now(),
                            username:decodeURI(opt.user),
                            password:opt.password
                        })
                    }else{
                        msg1.code = 2
                        msg1.msg = '请输入密码'
                        res.writeHeader(404,{'content-type':'text/html;charset=utf-8'})
                        res.write(JSON.stringify(msg1))
                        res.end()
                        return
                    }
                }
                res.setHeader('content-type','text/html;charset=utf-8')
                res.write(JSON.stringify(msg1))
                res.end()
                break;
                default:
                break;
            }
        }else{
            try {
                if(url === '/'){
                    url = '/index.html'
                }
                let data = fs.readFile('www' + url)
                res.write(data.tostring())
                res.end()
            } catch (error) {
                let data = fs.readFile('www/404.html')
                res.write(data.tostring())
                res.end()                
            }
        }
    }
})