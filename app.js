const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const port = 8081;

app.get('/', (req, res) => {
    res.send("Servidor local ativo");
});

app.listen(port, (err) => {
    if (err) {
        console.error('Erro ao iniciar o servidor:', err);
    } else {
        console.log('Servidor ativo.');
    }
});
