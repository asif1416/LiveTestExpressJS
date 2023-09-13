const express = require('express');
app = express();

app.get('/', function (req, res){
    res.cookie('username', 'JohnDoe');
    res.cookie('language', 'en');
    res.end();
})


app.listen(3000, function (){
    console.log('Server running')
})