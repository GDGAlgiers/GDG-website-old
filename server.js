const express = require('express');
const app = express();

app.use(express.static('public'))

var PORT = process.env.PORT || 80
var server = app.listen(PORT,()=> {
    console.log(`Server listening on port ${PORT}`);
    
});
