const http = require('http')

let at = http.createServer(function(request,response){
    if(request.url !== '/favicon.ico'){
        let i = (/user=(\d)/.exec(request.url.split('?')[1]))[1]
        // 可以写中文咯
        response.setHeader('Content-Type',"text/html;charset=utf-8")
        if(i === '1'){
            response.write('{"name":"飞科"}')
        }else if(i === '0'){
            response.write('{"name":"剃须刀"}')
        }
        response.end()
    }
})

at.listen(80)