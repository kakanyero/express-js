
//THIS IS A SIMPLE APP

/*const express = require('express')
const app = express()
const PORT = 5000


app.get('/', (req,res)=>{
    res.send("hello world to te people out there....all the beautiful souls out there")
})
app.listen(PORT,(req,res)=>{
    console.log('hi developer,your app is almost ready')
})
*/


// USING THE express.static() FUNCTION



const express = require('express')
const app = express()
const path = require('path')
const PORT = 5000

app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res,next)=>{
    res.render('index.html')
})

app.listen(PORT,(req,res,next)=>{
    console.log('it worked')
})
