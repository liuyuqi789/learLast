const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let sql = [
    {
        id:-1,
        name:'aa'
    },
    {
        id:0,
        name:'bb',
        type:0
    },
    {
        id:1,
        name:'cc',
        type:1
    },
    {
        id:2,
        name:'dd',
        type:9
    }
]

app.use(express.static('www'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/login',(req,res)=>{
    setTimeout(() => {
        res.json({code:0})
    }, 200)
})

app.post('/login2',(req,res)=>{
    const {body} = req
    let o = sql.find(item=>item.name === body.name)
    let obj = null
    if(o){
        obj = {
            code:0,
            type:o.type,
            name:o.name
        }
    }else{
        obj = {
            code:1
        }
    }
    res.json(obj)
})

app.get('/getary',(req,res)=>{
    setTimeout(() => {
        res.json({code:0,ary:[1,2,3,4]})
    }, 4000)
})

app.get('/noloading',(req,res)=>{
    setTimeout(() => {
        res.json({code:1})
    }, 3000)
})

app.listen(80)