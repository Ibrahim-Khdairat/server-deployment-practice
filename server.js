
'use strict';

const express = require('express');
const server = express();
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js')


server.get('/', (req, res) => {
    res.status(200).send('Every Thing Is Working Good  :)')
})

server.get('/data', (req, res) => {
    let output = {
        name: 'Ibrahim Khdairat',
        age: 26,
        major: 'Electrical Engineer',
        time: new Date().toString()
    }
    res.status(200).json(output)
})

server.get('/bad', (req, res, next) => {
    next('error from bad end point');
});



server.use('*', notFoundHandler)
server.use(errorHandler);

function start(port) {
    server.listen(port, () => console.log(`listining on port ${port}`))
}


module.exports = {
    start,
    server
}
