

const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        //Conectar a base de datos
        this.conectarDB();

        //midlewaers
        this.middlewares();

        //rutas
        this.routes();

        
       

    }

    //coneccion qa mongo
    async conectarDB(){
        await dbConection();
    }

    middlewares(){

        //cors

        this.app.use(cors());

        //lectura y parceo del body

        this.app.use( express.json() );

        //Directorio publico del proyecto

        this.app.use( express.static('public'));


    }

    routes(){
        this.app.use(  this.usuarioPath  ,require('../routes/VideoJuegos'));
    }

    //metodo listen

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto: ${this.port}`)
        })
    }

}

module.exports = Server;