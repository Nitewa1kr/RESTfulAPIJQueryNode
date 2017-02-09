var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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
app.use(bodyParser.json());


//GET PRODUCTS.
app.get('/products', function(req, res)
{
    res.send({products: products});
});

//CREATE PRODUCTS
app.post('/products', function(req,res)
{
    var productName = req.body.name;
    currentID++;

    products.push({
        id: currentID,
        name: productName
    });
    res.send('Successfully created product!');
});

//UPDATE PRODUCTS
app.put('/products/:id', function(req, res){
    var id = req.params.id;
    var newName = req.body.newName;
    var found = false;
    products.forEach(function(product, index)
    {
        if(!found && product.id === Number(id))
        {
            product.name = newName;
        }
    });
    res.send('Successfully updated product!');
});

//DELETE
app.delete('/products/:id', function(req, res){
    var id = req.params.id;
    var found = false;

    products.forEach(function(product, index)
    {
        if(!found && product.id === Number(id))
        {
            products.splice(index, 1);
        }
    });
    res.send('Product successfully deleted');
});

//LISTEN ON
app.listen(PORT, function(){
    console.log('Server Listening on ' + PORT);
});