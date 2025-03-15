const express = require("express");

const app = express();

const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores')


// para informar que vamos utilizar os intermediários/Middleware
app.use((req, res, next) => {

}); 

//http://localhost:3000/professores
app.get("/professores", filtrarProfessores);

//http://localhost:3000/professores/3
app.get("/professores/:id", encontrarUmProfessor);



app.listen(3000);
