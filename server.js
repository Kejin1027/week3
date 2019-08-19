let express = require('express');
let app = express();
let router = require('./router.js')


app.use('/',router);
app.use('/newItem/:Name/:Quantity/:Price',router);
app.use('/listAllItems',router);
app.use('/delete/:ID',router);
app.use('/totalValue',router);



app.listen(8080);