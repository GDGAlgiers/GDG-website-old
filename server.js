"use strict";
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.static('public'))
app.use(express.json())



app.post('/api/v1/contact',(req,res,next)=> {
    console.log(req.body)
    const {body : data} = req
    const {name , email, message} = data;
    res.status(200)
    res.end()
})

//Not Found Route
app.use((req,res)=>{
    res.status(404).sendFile(__dirname+'/public/404/index.html')    
 })

var PORT = process.env.PORT || 80

var server = app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`);
    
});
