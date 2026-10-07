const express=require('express')
const app=express()
const products=require('./data')
const cors=require('cors')
const bodyparser=require('body-parser')
app.use(cors());
app.use(bodyparser.json());

app.get('/data',(req,res)=>{
    res.json(products)
})

app.listen(3000,(req,res)=>{
    console.log('server is live');
})