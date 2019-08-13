const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const fs = require('fs');
const inventory = require('../data/inventory.json')
const locations = require('../data/locations.json')

router.get('/', (req, res) => {
    res.send(200).json(locations);
});

module.exports = router;