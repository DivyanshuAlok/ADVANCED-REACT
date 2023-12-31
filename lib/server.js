const express = require('express');
const config = require('./config');

const app = express();

app.use(express.static('public')); // middleware serving Public directory

app.listen(config.port, function listenHandler(){
    console.info('running on ${config.port}');
});