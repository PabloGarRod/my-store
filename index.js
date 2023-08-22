const express = require('express');

const app = express();

const port = 3050;

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'producto 1',
    precio: 1000,
  });
});

app.get('/home', (req, res) => {
  res.send('BIENVENIDO A LA PÁGINA DE INICIO');
});

app.get('/categorias', (req, res) => {
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
