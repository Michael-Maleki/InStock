const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const fs = require('fs');
const inventory = require('../data/inventory.json')

router.get('/', (req, res) => {
    res.status(200).json(inventory);
});

router.get('/:inventoryId', (req,res) => {

  

	let inventoryItem = inventory.filter(inventory => { return inventory.id === req.params.inventoryId})
  return (!inventoryItem.toString()) ? res.status(404).json({'message': 'Item does not exist'}) : res.status(200).json(inventoryItem)

})


module.exports = router;