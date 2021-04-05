const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const misRutas = require('./routes/Escribe');

app.use(bodyParser.urlencoded({extended: false}));


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/Escribe', misRutas);

app.use('/Holamundo', (request, response, next) => {
    response.send('Respuesta de la ruta "/Holamundo"'); 
});

app.use('/Cisco', (request, response, next) => {
    response.send('Respuesta de la ruta "/Cisco"'); 
});

app.use('/admin', (request, response, next) => {
	console.log('403');
	response.status(403);
    response.send('<h1>Recurso prohibido</h1>'); 
});

app.get('/', (request, response, next) => {
    //response.send('Respuesta de la ruta "/Cisco"');
	response.send('<html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab12</title></head><body><h1>Lab 12</h1><ul><li><a href="/Escribe/Escribe">Escribe</a></li><li><a href="/Holamundo">Hola mundo</a></li><li><a href="/Cisco">Cisco</a></li></ul></body></html>');

});

app.use((request, response, next) => {
	console.log('Error 404');
	response.status(404);
    response.send('<h1>Página no disponible</h1>'); //Manda la respuesta
});

app.listen(2022);