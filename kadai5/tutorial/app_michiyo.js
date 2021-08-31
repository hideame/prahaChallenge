const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// GETリクエストに応答する
app.get('/', (req, res) => {
    // ①jsonをHTTPステータス200で返す
    res.status(200).json({ text: 'hello world' });
})

app.use(express.json());

// POSTリクエストに応答する
app.post('/', (req, res) => {
    if (req.is('application/json')) {
        // ②jsonデータをレスポンスのbodyに含めて200を返す
        res.status(201).send(req.body);
    } else {
        // ③application/json以外の時は400を返す
        res.sendStatus(400);
    }
});
