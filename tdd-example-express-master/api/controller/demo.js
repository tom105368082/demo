const express = require('express');
const router = express.Router();
const service = require('../service/demo');

router.get('/controller', (req, res) => {
  res.json({ message: 'Use API!' });
});

router.get('/service', (req, res) => {
  service.demo((error, result) => {
    if (error) return res.status(500).json({error: error});

    return res.json({ message: result });
  })
});

module.exports = router;
