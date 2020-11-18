const express = require("express");
const router = express.Router();
const uuid = require("uuid/v1");
const inventory = require("../data/inventory.json");
const locations = require("../data/locations.json");

router.get("/", (req, res) => {
  res.status(200).json(locations);
});

router.get("/:warehouseId", (req, res) => {
  let locationInventory = inventory.filter((inventory) => {
    return inventory.warehouseId === req.params.warehouseId;
  });
  return !locationInventory.toString()
    ? res.status(404).json({ message: "Invalid Warehouse ID" })
    : res.status(200).json(locationInventory);
});

router.post("/", (req, res) => {
  const {
    name,
    address: { street, suiteNum, city, province, postal },
    contact: { contactName, title, phone, email },
  } = req.body;

  const Newwarehouse = {
    id: uuid(),
    name,
    address: {
      street,
      suiteNum,
      city,
      province,
      postal,
    },
    contact: {
      contactName,
      title,
      phone,
      email,
    },
  };
  if (Newwarehouse) {
    res.json(Newwarehouse);
    inventory.push(Newwarehouse);
  } else {
    res.status(400);
  }
});

module.exports = router;
