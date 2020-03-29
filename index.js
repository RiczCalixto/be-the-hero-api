const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  return res.json({
    evento: 'Semana omniStack',
    aluno: 'RIc',
  })
})

app.listen(3333);