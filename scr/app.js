const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000; // para poner a escuchar al servidor por el puerto que este configurado en process.env.PORT o si no lo pone a escuchar en 3000 
const app = express(); 
//const { User } = require("./models/User"); 

app.use(express.urlencoded({ extended: true })); // mediaware para decir si los datos son media, o texto plano
app.use(express.json()); //para cambiar todo en formato json
app.use(cors()); // manejar el trafico ip, en formato direccion ip o en url

const { router } = require("./routes");
app.use ("/api/v1", router);

app.listen(PORT, err => {
    !err ? console.log(`App running on port: ${PORT}`) : console.log(err);
});




