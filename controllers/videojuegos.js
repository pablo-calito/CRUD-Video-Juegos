//Importacion

const { response, request } = require('express');
const { query } = require('mongoose');

const VideoJuego = require('../models/videojuegos');


const getVideojuegos = async (req = request, res = response) => {
    
    //Condicion, 
    const query = { Estado: true };
    
    const listaJuegos = await Promise.all([
        VideoJuego.countDocuments(query),
       VideoJuego.find(query)
    ]);

    res.json({
        msg: 'GET API de VideoJuegos',
        listaJuegos
    });

}

const postVideojuegos = async(req = request, res = response) => {

    const { Nombre, Tipo, Precio, Creador, Clasificacion, Estado} = req.body;
    
    const VideoJuegoDB = new VideoJuego({Nombre, Tipo, Precio, Creador, Clasificacion, Estado});

    //Guardar en base de datos
    await VideoJuegoDB.save()

    res.json({
        msg: 'POST API de VideoJuegos',
        VideoJuegoDB
    });

}

const putVideojuegos = async(req = request, res = response) => {

const {id} = req.params;

const {_id, Nombre, Creador, ...resto} = req.body;

const juegoEditado = await VideoJuego.findByIdAndUpdate(id, resto);
    res.json({
        msg: 'PUT API de VideoJuegos',
        id,
        juegoEditado
    });

}

const deleteVideojuegos = async(req = request, res = response) => {

    const { id } = req.params;

    const juegoEliminado = await VideoJuego.findByIdAndDelete(id);

    res.json({
        msg: 'DELETE API de VideoJuegos',
        juegoEliminado
    });

}




module.exports = {
    getVideojuegos,
    postVideojuegos,
    putVideojuegos,
    deleteVideojuegos
}