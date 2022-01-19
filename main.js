const express = require('express');

const app = express();
const port = 3000;

//Routes address
app.use('/',require('./routes/main'));




app.listen(port,function(err){
    if(err){
        console.log('Error in running the server');
        return;
    }
    console.log('Your server is running successfully');
});