// moduleをrequire
const express = require('express');

// ファーストパーティークッキー
const app = express();

// set a cookie
app.use(function (req, res, next) {
  res.cookie('first-cookie', 'hoge', { maxAge: 3600, httpOnly: true });
  next();                             // <-- important!
});
app.use(express.static('public'));    // 静的ファイルを提供★

// サードパーティークッキー
// const app3 = express();

// set a cookie
// const options = {
//   setHeaders: function (res) {
//     res.cookie('third-cookie', 'fuga', {
//       // maxAge: 3600,
//       httpOnly: true,
//     })
//   }
// }
// app3.use(express.static('public', options));    // 静的ファイルを提供★

// ポート指定で接続
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
// app3.listen(8080, function () {
//   console.log('Example app listening on port 8080!');
// });
