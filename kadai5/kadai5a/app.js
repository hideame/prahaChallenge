var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // ファーストパーティークッキー
  res.cookie('name', 'fuga', {
    domain: 'localhost:3000',
    httpOnly: true
  });

  // サードパーティークッキー
  res.cookie('name', 'hoge', {
    domain: 'hoge.com',
    httpOnly: true
  });

  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});