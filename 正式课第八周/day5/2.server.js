const http = require('http')
const fs = require('fs')

http.createServer(function(req,res){
    // 异步哒
    // fs.readFile('www/1.txt',function(err,data){
    //     if(err){
    //         console.log(err)
    //         // res.end()
    //     }
    //     console.log(data.toString())
    // })
    // 同步哒
    if(req.url != '/favicon.ico'){
        try {
            let url = req.url
            if(url == '/'){
                url = 'www/index.html'
            }
            let data = fs.readFileSync('www/'+url)
            res.write(data.toString())
            res.end()
        } catch (error) {
            let data = fs.readFileSync('www/404.html')
            res.write(data.toString())
            res.end()
        }
    }
    
    
}).listen(80)