const http = require('http');

http.createServer( (request, response) => {

    response.write('Hola Mundo');

    response.end();

})

.listen( 9000 );

console.log('escuchando el puerto', 9000)