"use strict";
const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.json())



//Not Found Route
app.use((req,res)=>{
   res.status(404).sendFile(__dirname+'/public/404/index.html')    
})

var PORT = process.env.PORT || 80

var server = app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`);
    
});
