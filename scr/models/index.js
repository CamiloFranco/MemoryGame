//Todos los modelos los conectamos a la BD en este archivo index.

const mongoose = require("mongoose");
const { Game } = require("./Game");
//const { Artistas } = require("./Artist");

const DB_URL = "mongodb+srv://CamiloFranco42:FYcLXisp9sMcQ8S2@cluster0-tzccq.mongodb.net/clase-6?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {useNewUrlParser: true}, err =>{
    err ? console.log(err) : console.log("Connection Sucessfull");
}) //para aceptar el nuevo formta de URL

module.exports ={
    Game  
    //Artist
}