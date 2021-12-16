const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})
app.use(express.static('views'))
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log('server running on port 3000')
})