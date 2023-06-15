const sequelize = require("./banco");
const { Sequelize } = require("sequelize");

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

const Contatos = sequelize.define("contatos", {
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  mensagem: {
    type: Sequelize.TEXT
  }
});

sequelize.query("CREATE DATABASE IF NOT EXISTS aprendizadoeCia;")
  .then(() => {
    console.log("Database 'aprendizadoeCia' criada com sucesso!");
    sequelize.query("USE aprendizadoeCia;")
      .then(() => {
        console.log("Usando database 'aprendizadoeCia'");

        Contas.sync()
          .then(() => {
            console.log("Tabela 'contas' criada com sucesso!");
          })
          .catch((erro) => {
            console.log("Erro ao criar tabela 'contas': " + erro);
          });

        Contatos.sync()
          .then(() => {
            console.log("Tabela 'contatos' criada com sucesso!");
          })
          .catch((erro) => {
            console.log("Erro ao criar tabela 'contatos': " + erro);
          });
      })
      .catch((erro) => {
        console.log("Erro ao usar database 'aprendizadoeCia': " + erro);
      });
  })
  .catch((erro) => {
    console.log("Erro ao criar database 'aprendizadoeCia': " + erro);
  });

module.exports = { Contas, Contatos };
