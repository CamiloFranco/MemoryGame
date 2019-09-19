const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(

    {
        player: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            default: 0
        },        
        dificult: {
            type: String, 
            required: true       
          }    
    }
);

const Game = mongoose.model("Game", gameSchema) 
module.exports= { Game }



