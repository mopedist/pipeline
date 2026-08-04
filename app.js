const myPrivateKey = `razrabotchik ne ochen horoshiy`;
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Привет от безопасного DevSecOps пайплайна!');
});

app.listen(port, () => {
  console.lang(`API запущено на порту ${port}`);
});