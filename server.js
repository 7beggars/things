const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.post('/finalizar', (req, res) => {
  const respostas = req.body.respostas; // Supondo que as respostas sejam enviadas no corpo da solicitação

  fs.appendFile('log.txt', respostas + '\n', (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao salvar as respostas no arquivo de log.');
    } else {
      res.status(200).send('Respostas salvas com sucesso no arquivo de log.');
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});
