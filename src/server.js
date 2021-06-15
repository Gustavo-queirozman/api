require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;
const routes = require('./routes');

const server = express();






server.use((req, res, next)=>{
    //console.log("Acessou o Middleware!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Content-type", "application/json");
    server.use(cors());
    next();
    
});

server.use(express.urlencoded())
server.use(express.json())
server.use('/', routes);

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
});

