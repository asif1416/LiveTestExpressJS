const express = require('express');
app = express();

app.get('/clearcookies', function (req, res){
    res.clearCookie('username');
    res.send('The cookies have been cleared');
})


app.listen(3000, function (){
    console.log('Server running')
})