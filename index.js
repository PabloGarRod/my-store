const express = require('express');
const routerApi = require('./routes');

const {
  logErros,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();

const port = 3050;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta');
});

app.get('/home', (req, res) => {
  res.send('BIENVENIDO A LA PÁGINA DE INICIO');
});

app.listen(port, () => {
  console.log('Mi port:', port);
});

routerApi(app);

app.use(logErros);
app.use(boomErrorHandler);
app.use(errorHandler);
