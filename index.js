require('dotenv').config()

const Server = require('./models/server');


const servidoriniciado = new Server();


servidoriniciado.listen();



