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
        if(url.includes('/post')){
            let html = ''
            req.on('data',(data)=>{
                html += data
            })
            req.on('end',()=>{
                let opt = huoqu(html)
                let msg = {
                    code:0,
                    msg:'可以注册'
                }
                let o = sql.find(item=>{item.username === decodeURI(opt.user)})
                if(o){
                    msg.code = 1
                    msg.msg = '有这个人了'
                }
                res.setHeader('content-type','text/html;charset=utf-8')
                res.write(JSON.stringify(msg))
                res.end()
            })
        }else{
            try {
                if(url === '/'){
                    url = '/index.html';
                }
                let data = fs.readFileSync('www'+url);
                res.write(data.toString());
                res.end();
            } catch (error) {
                let data = fs.readFileSync('www/404.html');
                res.write(data.toString());
                res.end();
            }
        }
    }
}).listen(80)