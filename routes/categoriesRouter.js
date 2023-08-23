const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    muebles: {
      cocina: 100,
      baño: 200,
      sala: 400,
    },
    electrodomesticos: {
      television: 50,
      lavadora: 60,
      microondas: 70,
      nevera: 150,
    },
  });
});

router.get('/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
});

module.exports = router;
