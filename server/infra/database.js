require('dotenv').config();
const mongoose = require('mongoose');

// conectando-se ao mongodb pelo mongoose
const database = process.env.database;
const server_ip = process.env.server_ip;

exports.connect = () => {
       mongoose.connect(`mongodb://${server_ip}/${database}`)
       .then(() => {
           console.log('Banco de dados conectado')
         })
         .catch(err => {
            console.error('Erro ao conectar-se no banco de dados')
         })
    }

