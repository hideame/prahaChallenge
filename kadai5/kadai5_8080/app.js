// moduleをrequire
const express = require('express');

// サードパーティークッキー
const app = express();

const options = {
  setHeaders: function (res) {
    res.cookie('third-cookie', 'fuga', {
      httpOnly: true,
      // sameSite: 'None',
      // secure: true,
    })
  }
}

app.use(express.static('public', options));    // 静的ファイルを提供★

// ポート指定で接続
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
