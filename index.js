const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

const port = 3050;

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      id: i + 1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Soy un filter');
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'producto 2',
    precio: 1300,
  });
});

app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});

app.get('/home', (req, res) => {
  res.send('BIENVENIDO A LA PÁGINA DE INICIO');
});

app.get('/categories', (req, res) => {
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

app.listen(port, () => {
  console.log('Mi port:', port);
});
