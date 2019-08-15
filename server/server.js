// express config
const express = require ('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const warehouseRoute = require('./routes/warehouseRoute.js');
const inventoryRoute = require('./routes/inventoryRoute.js');

// express middleware config

app.use(cors());

// middleware

app.use(express.json());


app.use('/warehouse', warehouseRoute);
app.use('/inventory', inventoryRoute);


app.listen(8080, () => {
    console.log('Server is operational.');
})