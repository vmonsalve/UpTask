const express = require('express');
const routes  = require('./routes');
//Instanciar una app express
const app = express();
/*Usamos las rutas que estan en
nuestro directorio routes.*/
app.use('/', routes());
//Escucha esta app por el puerto 1337
app.listen(1337);
