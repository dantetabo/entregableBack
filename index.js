
const path = require('path');
const rutasApi = require('./routers/index');
const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080;

/* PUG */
//app.set('views', './views');
//app.set('view engine', 'pug');

/* EJS */
app.set('views', './views');
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static(path.resolve(__dirname, './public')));

// Rutas
app.use('/api', rutasApi);

/* app.get('/', (req, res) => {
  res.render('index');
});
 */

app.get('/ejs', (req, res) => {
  const arreglo = [1,2,3];
  res.render('index', {showSaludo: false, saludo: "Saludo desde el server!", arreglo});
});

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
});