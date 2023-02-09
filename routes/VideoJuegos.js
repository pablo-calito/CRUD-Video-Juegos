const { Router } = require('express');
const { getVideojuegos, postVideojuegos, putVideojuegos, deleteVideojuegos } = require('../controllers/videojuegos');

const router = Router();


router.get('/', getVideojuegos);

router.post('/agregar', postVideojuegos);

router.put('/editar/:id', putVideojuegos);

router.delete('/delete/:id', deleteVideojuegos);






module.exports = router;