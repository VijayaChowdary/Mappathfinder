const express = require('express');
const { City } = require('../models');
const cors = require('cors')

const router = express.Router();
app.use(cors());


router.get('/', async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json(cities);
  } catch (error) {
    console.error('Error getting cities:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
