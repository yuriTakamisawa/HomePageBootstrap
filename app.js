const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Contatos } = require("./banco");
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});





  app.post("/contato", function(req, res){
        post.create({
            nome: req.body.nome,
            email: req.body.email,
            mensagem: req.body.mensagem
        }).then(function(){
            res.redirect("/index")
        }).catch(function(erro){
            res.send("Falha ao cadastrar: " + erro)
        })
    })

app.listen(port, (err) => {
  if (err) {
    console.error("Erro ao iniciar o servidor:", err);
  } else {
    console.log("Servidor ativo.");
  }
});
