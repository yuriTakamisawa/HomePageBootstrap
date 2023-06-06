const Sequelize = require("sequelize");

const sequelize = new Sequelize("", "root", "", {
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

sequelize.query('CREATE DATABASE IF NOT EXISTS Contas;')
  .then(() => {
    console.log("Banco de dados 'Contas' criado com sucesso!");
    const Contas = sequelize.define("contas", {
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    });

    Contas.sync({ force: true })
      .then(() => {
        console.log("Tabela criada com sucesso!");
      })
      .catch((erro) => {
        console.log("Erro ao criar tabela: " + erro);
      });
  })
  .catch((erro) => {
    console.log("Erro ao criar banco de dados 'Contas': " + erro);
  });

  module.exports = Contas;
