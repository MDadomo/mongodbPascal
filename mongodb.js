//Connexion base de donnée Mongo 
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

MongoClient.connect('mongodb://10.44.100.39:27017//MoviesMongoDB',function(err,db) {
    if(err){
         throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});