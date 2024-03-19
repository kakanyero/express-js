const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req,res)=>{
    res.send("hello world to te people out there....all the beautiful souls out there")
})
app.listen(PORT,(req,res)=>{
    console.log('hi developer,your app is almost ready')
})