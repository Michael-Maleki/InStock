const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const fs = require('fs');
const inventory = require('../data/inventory.json')
const locations = require('../data/locations.json')

router.get('/', (req, res) => {
    res.status(200).json(locations);
});

router.get('/:warehouseId', (req, res) => {
  
    let locationInventory = inventory.filter(inventory => { return inventory.warehouseId === req.params.warehouseId})
    return (!locationInventory.toString()) ? res.status(404).json({'message': 'Invalid Warehouse ID'}) : res.status(200).json(locationInventory)

})

// router.post('/', (req, res) => {
//     const { body } = req;
//     const warehouseKP = {
//       id,
//       name,
//       address:{
//           street,
//           suiteNum,
//           city,
//           province,
//           postal,
//       },
//       contact:{
//           name,
//           title,
//           phone,
//           email,
//       },
//       inventoryCategories,
//     };

     
//      const Newwarehouse = {
//         router.post('/', (req, res) => {
//             const { body } = req;
//             const warehouseKP = {
//               id,
//               name,
//               address:{
//                   street,
//                   suiteNum,
//                   city,
//                   province,
//                   postal,
//               },
//               contact:{
//                   name,
//                   title,
//                   phone,
//                   email,
//               },
//               inventoryCategories,
//    let updatedwarehouse = inventory.push(Newwarehouse);
//     if (warehouseKP === Newwarehouse){
//     res.json(updatedwarehouse);
//     }
//     else{
//        res.status(404);
//     }
//    });

module.exports = router;