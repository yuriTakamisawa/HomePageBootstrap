const Sequelize = require("sequelize");

const sequelize = new Sequelize("aprendizadoeCia", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão realizada com sucesso!");
  })
  .catch((erro) => {
    console.log("Falha na conexão: " + erro);
  });

module.exports = sequelize;
