const express = require('express');
app = express();

app.get('/greet', function (req, res){
    res.send('Hello, Express! ')
})

app.listen(3000, function (){
    console.log('Server running')
})