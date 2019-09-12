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
        cards: {
            type: [{        
              url: {        
                type: String,        
                required: true        
              },        
              value: {        
                type: Number,        
                required: true        
              },        
              cleared: {        
                type:  Boolean,       
                default: false        
              }        
            }],        
            required: true       
          }    
    }
);

const Game = mongoose.model("Game", gameSchema) 
module.exports= { Game }



