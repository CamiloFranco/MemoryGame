const express = require("express");
const router = express.Router();
const { Game } = require("../models");

router.post("/create/game", (req, res) => { //findById y save es un evento de Event que un clase de mongoose
  const newGame= Game(req.body)
  newGame.save((err, game) => {
    !err ? res.status(201).send(game) : res.status(409).send(err);
  });
});

router.get("/start/game/:gameid", (req, res) => {
  Game.findById(req.params.gameid, (err, game) => {
    !err ? res.status(200).send(game) : res.status(404).send(err);
  });
});



router.put("/modify/game/:gameid", (req, res) => {  //Put modifica un valor del objeto enviado todos los datos del objeto
  const id = req.params.gameid;
  const newData = req.body;
  Game.findByIdAndUpdate(id, { $set: newData  }, { new: true }, (err,game)=>{
    !err ? res.status(200).send(game) : res.status(409).send(err);
  });
});

//Patch modifica un valor del objeto solo el valor que voy a modificar

router.delete("/delete/game/:gameid", (req,res)=>{
    Game.findByIdAndDelete(req.params.gameid, (err, game)=>{
        !err ? res.status(200).send(game) : res.status(404).send(err);
    })
})

router.delete("/pause/game/:gameid", (req,res)=>{
    Game.findByIdAndUpdate(req.params.gameid, { $set:{ is_active: false } }, { new:true }, (err, game)=>{
        !err ? res.status(200).send(game) : res.status(404).send(err);
    })
})

module.exports = {
  router
};
