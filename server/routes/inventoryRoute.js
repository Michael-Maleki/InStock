const express = require("express");
const router = express.Router();
const uuid = require("uuid/v1");
const inventory = require("../data/inventory.json");

router.get("/", (req, res) => {
  res.status(200).json(inventory);
});

router.get("/:inventoryId", (req, res) => {
  let inventoryItem = inventory.filter((inventory) => {
    return inventory.id === req.params.inventoryId;
  });
  return !inventoryItem.toString()
    ? res.status(404).json({ message: "Item does not exist" })
    : res.status(200).json(inventoryItem);
});

router.post("/", (req, res) => {
  const {
    name,
    description,
    quantity,
    lastOrdered,
    location,
    isInstock,
    categories,
  } = req.body;
  const Newinventory = {
    id: uuid(),
    name,
    description,
    quantity,
    lastOrdered,
    location,
    isInstock,
    categories,
    warehouseId: "W0",
  };
  if (Newinventory) {
    res.json(Newinventory);
    inventory.push(Newinventory);
  } else {
    res.status(404);
  }
});

router.delete("/", (req, res) => {
  let deletedItemId = req.body.id;

  let updatedInventory = inventory.find((item) => {
    return item.id === deletedItemId;
  });

  const spliceIt = inventory.indexOf(updatedInventory);

  inventory.splice(spliceIt, 1);

  res.status(200).json(inventory);
});

module.exports = router;
