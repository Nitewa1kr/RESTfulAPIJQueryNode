var express = require('express');
var app = express();

//JOSN OBJECT
var products = 
[
    {
        id: 1,
        name: 'laptop'
    },
    {
        id:2,
        name:'microwave'
    }
];
//CURRENT ID OF JSON
var currentID = 2;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
//GET PRODUCTS.
app.get('/products', function(req, res)
{
    res.send('SUCCESS!');
});

app.listen(PORT, function(){
    console.log('Server Listening on' + PORT);
});