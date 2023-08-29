const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErros,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();

const port = 3000;

app.use(express.json());

const whiteList = [
  'http://localhost:5501',
  'http://127.0.0.1:5501',
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
app.use(cors(options));

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
