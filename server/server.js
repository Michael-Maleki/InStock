// express config
const express = require ('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// express middleware config

app.use(cors());

// middleware

app.use(express.json());





app.listen(5000, () => {
    console.log('Server is operational.');
})