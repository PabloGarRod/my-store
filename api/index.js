const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErros,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = [
  'http://localhost:5501',
  'http://127.0.0.1:5501',
  'http://127.0.0.1:3000',
  'https://myapp.com',
];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hola mi server express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola soy nueva ruta');
});

app.get('/api/home', (req, res) => {
  res.send('BIENVENIDO A LA PÁGINA DE INICIO');
});

app.listen(port, () => {
  console.log('Mi port:', port);
});

routerApi(app);

app.use(logErros);
app.use(boomErrorHandler);
app.use(errorHandler);
