const express = require('express');
const morgan = require('morgan');
const movieRouter = require('./movie_module') //eigenes modul laden

const app = express();

app.use(express.static(__dirname + '/public'));//default 

app.get('/',(request, response) => response.redirect('/movie')); // auch wenn im url nicht /movie steht bekommt user data vom modul

// function log(request, response, next){
//     console.log(request.url);
//     next();
// }
// app.use(log);
app.use(morgan('common',{ immediate: true }));
// vom Alex: app.use( morgan( ':url :method :status :remote-addr' ) );

app.use('/movie', movieRouter); //movierouter für pfad verantwortlich url http://localhost:8080/movie

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})