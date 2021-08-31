document.write('<img src="http://0a2ec68d511d.ngrok.io/image/grapefruit-slice.jpeg"');

// set a cookie
app.use(function (req, res, next) {
  res.cookie('third-cookie', 'fuga', { maxAge: 3600, httpOnly: true });
  next();                             // <-- important!
});
