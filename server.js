const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/mongodb.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/',(req, res) => {
    res.json({"message": "Bienvenue sur l'application de gestion de film"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
