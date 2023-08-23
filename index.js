const express = require('express');

const app = express();

const port = 3050;

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      precio: 1000,
    },
    {
      name: 'producto 2',
      precio: 1300,
    },
    {
      name: 'producto 3',
      precio: 2400,
    },
    {
      name: 'producto 4',
      precio: 1500,
    },
    {
      name: 'producto 5',
      precio: 2000,
    },
  ]);
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
