"use strict";
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'))
app.use(express.json())


app.post('/api/v1/contact',cors(),(req,res)=> {
    const {body : data} = req
    const {senderName , senderEmail, message} = data;
    res.setHeader('Content-Type','text/html')
    res.send(/*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Document</title>
        </head>
        <body>
            <h1>Sender : ${senderName}</h1>
            <h1>Email : ${senderEmail}</h1>
            <p>Message : ${message}</p>
        </body>
        </html>
    `)
})

//Not Found Route
app.use((req,res)=>{
    res.status(404).sendFile(__dirname+'/public/404/index.html')    
 })

var PORT = process.env.PORT || 80

var server = app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`);
    
});
