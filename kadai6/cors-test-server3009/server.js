const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public_html')));
app.listen(3009, () => console.log('Listening on port 3009...'));
