// moduleをrequire
var express = require('express');
var app = express();

// express.json()を使ってパースする
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
		
// getパラメータに対する処理
app.get('/', function (request, response) {
  response.status(200).json({ text: "hello world" });	// ①jsonをHTTPステータス200で返す
});

// postパラメータに対する処理
app.post('/', function (request, response) {
  if (request.is('application/json')) {		// Content-Typeがapplication/jsonの場合
    response.status(201).send(request.body);	// ②リクエストbodyに含まれるjsonデータをHTTPステータス201で返す
   } else {					// Content-Typeがapplication/json以外の場合
    response.sendStatus(400);			// ③HTTPステータス400を返す
  }
});

// ポート指定で接続
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
