// CONTROLLER

const model = require('./model');
const view = require('./view');

function listAction(request, response){
    const movies = model.getAll();//lädt liste d filme
    const body = view(movies);//übergebe sie dem view
    response.send(body);//an client gesendet
}
module.exports = {
    listAction,
};