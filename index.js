// Inicializar variables de entorno .env
require('dotenv').config();

// Iniciar puerto de escucha
const port = process.env.PORT;
const express = require('express');
const service = express();

service.listen(port, () => {
    console.log(`API listening on ${port} port`);
});
// que los servicios respondan en json
service.use(express.json());

// Middleware
const cors = require('cors');
service.use(cors());

// Mapear controllers
service.use(require('../AdminUsuarios/User.Controllers/UserController'));