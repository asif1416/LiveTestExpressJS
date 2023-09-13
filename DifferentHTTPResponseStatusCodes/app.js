const express = require('express');
app = express();

app.get('/success', function (req, res){
    res.status(200)
    res.send('200 OK')
})

app.get('/notfound', function (req, res){
    res.status(404)
    res.send('404 Not Found')
})

app.listen(3000, function (){
    console.log('Server running')
})