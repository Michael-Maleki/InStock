const express = require("express");
const router = express.Router();
const uuid = require("uuid/v1");
const bodyParser = require("body-parser");
const fs = require("fs");
const inventory = require("../data/inventory.json");

router.get("/", (req, res) => {
  res.status(200).json(inventory);
});

<<<<<<< HEAD
router.get("/:inventoryId", (req, res) => {
  let inventoryItem = inventory.filter(inventory => {
    return inventory.id === req.params.inventoryId;
  });
  return !inventoryItem.toString()
    ? res.status(404).json({ message: "Item does not exist" })
    : res.status(200).json(inventoryItem);
});
=======
router.get('/:inventoryId', (req,res) => {
  
	let inventoryItem = inventory.filter(inventory => { return inventory.id === req.params.inventoryId})
  return (!inventoryItem.toString()) ? res.status(404).json({'message': 'Item does not exist'}) : res.status(200).json(inventoryItem)
>>>>>>> 7ebf6290c21feba6bd4b5ab1052ab489eff7f45b

router.post("/", (req, res) => {
  const { id,
    name,
    description,
    quantity,
    lastOrdered,
    location,
    isInstock,
    categories,
    warehouseId } 
}


<<<<<<< HEAD
module.exports = router;
=======
router.delete('/', (req, res) => {
  
  let deletedItemId = req.body.id;
  // console.log(typeof deletedItemId);
  
  let updatedInventory = inventory.find((item) => {
    return item.id === deletedItemId        
  });
  
  const spliceIt = inventory.indexOf(updatedInventory);
  // console.log(spliceIt);
  
  inventory.splice(spliceIt, 1);
  

  res.status(200).json(inventory);

})


module.exports = router;
>>>>>>> 7ebf6290c21feba6bd4b5ab1052ab489eff7f45b
