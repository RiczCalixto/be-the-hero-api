const express = require('express');

const routes = express.Router();

routes.get("/users", (req, res) => {
  return res.json({
    evento: "Semana omniStack",
    aluno: "RiCc"
  });
});

module.exports = routes;