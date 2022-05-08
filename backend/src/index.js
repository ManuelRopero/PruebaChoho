const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors())
//rutas 
app.use('/api/asesor',require('./routes/asesor'));

//servidor
const puerto = 3001;
app.listen(puerto, () => console.log("Servidor corriendo en el puerto "+ puerto));

//module.exports = app;