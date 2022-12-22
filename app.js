const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err){})

//Middleware - Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gary',
        titulo: 'Probando'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gary',
        titulo: 'Probando'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Gary',
        titulo: 'Probando'
    })
})

app.get('/hola', (req, res) => {
    res.send('Hola desde ruta hola')
})

app.get('*', (req, res) => {
    res.send('404 | Pagina no encontrada')
})

app.listen( port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);

})