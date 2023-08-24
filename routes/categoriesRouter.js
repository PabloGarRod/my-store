const express = require('express');
const CategoriesServices = require('../services/categoriesServices');

const router = express.Router();

const service = new CategoriesServices();

router.get('/', (req, res) => {
  res.json(service);
});

router.get('/:categoryName', (req, res) => {
  const { categoryName } = req.params;
  const category = service.findOne(categoryName);
  res.json(category);
});

module.exports = router;
