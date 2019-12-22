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
        // 接口处理
        if(url.includes('?')){
            let ary = url.split('?')
            let jekou = ary[0]
            let opt = huoqu(ary[1])

            // 接口判断
            switch(jekou){
                // 失焦
                case '/getname' :
                let msg = {
                    code:0,
                    msg:'可以注册'
                }
                let o1 = sql.find(item=>item.username === decodeURI(opt.user))
                if(o1){
                    msg.code = 1
                    msg.msg = '有这个人了'
                }
                res.setHeader = ('content-type','text/html;charset=utf-8')
                res.write(JSON.stringify(msg))
                res.end()
                break;
                // 注册接口
                case '/register' :
                let msg1 = {
                    code:0,
                    msg:'注册成功'
                }
                let o = sql.find(item=>item.username === decodeURI(opt.user))
                if(o){
                    msg1.code = 0
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
                        msg1.msg = '参数不正确'
                        res.writeHead(400,{'content-type':'text/html;charset=utf-8'})
                        res.write(JSON.stringify(msg1))
                        res.end()
                        return
                    }
                }
                res.setHeader('cotent-type','text/html;charset=utf-8')
                res.write(JSON.stringify(msg1))
                res.end()
                break;

                default:
                break;
            }
        }else{
            // 如果是文件
            try{
                if(url === '/'){
                    url = '/index.html'
                }
                let data = fs.readFileSync('www'+url)
                res.write(data.toString())
                res.end()
            } catch(error){
                let data = fs.readFileSync('www/404.html')
                res.write(data.toString())
                res.end()
            }
        }
    }
}).listen(80)