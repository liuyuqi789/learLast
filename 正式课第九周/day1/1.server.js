const http = require('http')
const fs = require('fs')
const urlModel = require('url')
const qs = require('querystring')

const app = http.createServer((req,res)=>{
    let originAry = ['http://localhost:81']
    if(originAry.includes(req.headers.origin)){
        res.writeHead(200,{
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin':req.headers.origin
        })
    }

    const {pathname,query} = urlModel.parse(req.url)
    let lastName = ['\.js$','\.html$','\.css$','\.less$','\.jpg$']
    let re = new RegExp(lastName.join('|'))
    if(pathname === '/'){
        let data = fs.readFileSync('www/index.html')
        res.end(data.toString())
    }else if(re.test(pathname)){
        try {
            let data = fs.readFileSync('www'+pathname)
            res.end(data.toString())
        } catch (error) {
            let data = fs.readFileSync('www/404.html')
            res.end(data.toString())
        }
    }else{
        switch (pathname) {
            case '/add':
                const {mkdirname} = qs.parse(query)
                fs.mkdir('www/'+mkdirname+'/',(err)=>{
                    if(err){
                        if(err.code === 'EEXIST'){
                            fs.readdir('www',(error,filesAry)=>{
                                let num = 0
                                let b = filesAry.includes(mkdirname)
                                let name = ''
                                while(b){
                                    name = mkdirname.replace(/\(\d+\)/,'')
                                    b = filesAry.includes(name + '(' + (++num) + ')')
                                    name = name + '(' + (num) + ')'
                                }
                                fs.mkdir('www/' +name+ '/',(err)=>{
                                    res.end(JSON.stringify({code:1,msg:'文件夹创建成功'}))
                                })
                            })
                        }
                        return
                    }
                    res.end(JSON.stringify({code:1,msg:'创建文件夹成功'}))
                })
                break;
            
            case 'rename':
                if(/^post$/i.test(req.method)){
                    let temp = ''
                    req.on('data',(d)=>{
                        temp += d
                    })
                    req.on('end',()=>{
                        let o = qs.parse(temp.toString())
                        fs.rename('www/'+o.oldname,'www/'+o.newname,()=>{
                            res.end(JSON.stringify({code:1,msg:'重命名完成'}))
                        })
                    })
                }
                break;
                
            case '/jsonp':
                let o = qs.parse(query.toString())
                if(o.wd == 1){
                    let json = JSON.stringify({
                        code:1,
                        ary:[1,2,3,4,5]
                    })
                    res.end(o.callback+'(' + json + ')')
                }else{
                    let json2 = JSON.stringify({
                        code:1,
                        ary:[5,4,3,2,1]
                    })
                    res.end(o.callback+'(' + json2 + ')')
                }
                break;
            default:
                break;
        }
    }
})

let post = 80
app.listen(post)
app.on('error',(e)=>{
    if(e.code === 'EADDRINUSE'){
        post++
        app.listen(post)
    }
})