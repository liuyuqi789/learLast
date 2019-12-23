const http = require('http')
const fs = require('fs')
const urlModel = require('url')

const app = http.createServer((req,res)=>{
    const {pathname} = urlModel.parse(req.url)
    if(pathname === '/'){
        let data = fs.readFileSync('www/index.html')
        res.end(data.toString())
    }
})

let port = 80
app.listen(port)
app.on('error',(e)=>{
    if(e.code === 'EADDRINUSE'){
        port ++
        app.listen(port)
    }
})