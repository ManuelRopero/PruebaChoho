const express = require('express');
const app = express();

//rutas 
app.use('/api/asesor',require('./routes/asesor'));

//servidor
const puerto = 3000;
app.listen(puerto, () => console.log("Servidor corriendo en el puerto "+ puerto));

//module.exports = app;