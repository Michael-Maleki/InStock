// express config
const express = require ('express');
const cors = require('cors');
const fs = require('fs');
const inventory = require('./data/inventory.json')
const locations = require('./data/locations.json')
const app = express();

// express middleware config

app.use(cors());

// middleware

app.use(express.json());


app.get('/warehouse/:warehouseId', (req, res) => {
  
  let locationInventory = inventory.filter(inventory => { return inventory.warehouseId === req.params.warehouseId})
  return (!locationInventory.toString()) ? res.status(404).json({'message': 'Invalid Warehouse ID'}) : res.status(200).json(locationInventory)

})


app.listen(5000, () => {
    console.log('Server is operational.');
})