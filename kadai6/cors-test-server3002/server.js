const express = require('express');
const multipart = require('connect-multiparty');
const app = express();

app.use(multipart());

app.options('/test1', (req, res) => {
  console.log('/test1 - OPTIONS');
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.set('Access-Control-Allow-Headers', 'X-MY-ORIGINAL');
  res.set('Access-Control-Max-Age', '600');
  res.send();
})

app.post('/test1', (req, res) => {
  console.log('/test1');
  console.log(req.body);

  res.set('Access-Control-Allow-Origin', 'http://localhost:3001');

  const obj = {
    message: 'Hello from server!'
  };
  res.status(200).json(obj);
});

app.listen(3002, () => console.log('Listening on port 3002...'));
