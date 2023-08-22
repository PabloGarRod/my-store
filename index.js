const express = require('express');

const app = express();

const port = 3050;

app.get('/', (req, res) => {
  res.send('Hola mi server express');
});

app.listen(port, () => {
  console.log('Mi port:', port);
});
