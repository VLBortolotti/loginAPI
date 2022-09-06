require('dotenv').config();
const express = require('express');

const indexRoute = require('./routes/indexRoute');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();

// configurando resposta json
app.use(express.json());

// Public Route
app.use('/', indexRoute);

// Private Route
app.use('/user', userRoute);

app.use('/login', loginRoute)

// inicializando o servidor
const PORT = Number(process.env.PORT);
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Port: ${PORT}`);
});