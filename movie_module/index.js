//exportiert router objekt
//externes zu exportierendes modul

const Router = require('express').Router;
const { listAction } = require('./controller');

const router = Router();//routerobjekt

// router.get('/', (request, response) => {
//     response.send(data)
// });
//stattdesssen refeerenz auf methode des controllers listAction
router.get('/',listAction);// objekt in listAction extrahiert

module.exports = router; //data ist im request der server.js