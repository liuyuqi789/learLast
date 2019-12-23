const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(bp.urlencoded({extended:false}))

let u = express.static('www')
app.use(u)

app.get('/login',(req,res)=>{
    if(req.query.user === 'xxx'){
        // 还可以用json
        res.send({
            code:1,
            msg:'哈哈'
        })
    }
})
app.post('/register',(req,res)=>{
    console.log(req.body);
})
app.listen(80)