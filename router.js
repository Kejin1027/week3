let express = require('express');
let router = express.Router();


let db = [];
router.get("/",function(req,res){
    res.send("Welcome to warehouse management system!");
})


router.get('/newItem/:Name/:Quantity/:Price',function(req,res){
    res.send("You have added a new item!");
    console.log(req.url);
    console.log(req.params);
    let randomNumber = Math.round(Math.random()*1000);
    let id = randomNumber.toString();
    let name = req.params.Name;
    let quantity = parseInt(req.params.Quantity);
    let price = parseInt(req.params.Price);
    let newIt = {
        id: id,
        name: name,
        quantity: quantity,
        price:price
    }
    db.push(newIt);
    console.log(db);
})

router.get('/listAllItems',function(req,res){
    res.send(generateList());
})

function generateList(){
    let item = 'Id   Name   Quantity   Price   Cost   </br>';
    for(let i = 0; i < db.length; i++){
        item += db[i].id + ' | ' + db[i].name + ' | ' + db[i].quantity + ' | ' + db[i].price +
        ' | ' + (db[i].quantity * db[i].price) + '</br>';
    }
    return item;
}

router.get('/delete/:ID',function(req,res){
    console.log(req.params);
    deleteItem(req.params.ID);
    res.send(generateList());
    
})

function deleteItem(id){
    for(let i = 0; i < db.length; i++){
        if (db[i].id === id){
            row = i;
            db.splice(row, 1);
            break;
        }
    }
    
};

router.get('/totalValue',function(req,res){
    let value = 0;
    for(let i = 0; i < db.length; i++){

        value += db[i].quantity * db[i].price;
    }
    res.send("Total value is: " + value);
})

module.exports = router;