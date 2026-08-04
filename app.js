const myPrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA3Tz2mr7SZiAMfQyuvBjM9Xi
bFakeKeyForDevSecOpsCourseDoNotUseIt123
-----END RSA PRIVATE KEY-----`;
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Привет от безопасного DevSecOps пайплайна!');
});

app.listen(port, () => {
  console.lang(`API запущено на порту ${port}`);
});