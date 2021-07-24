import express from 'express';

const app = express();

app.use(express.json()); //REST API, Body
app.use(express.urlencoded({ extended: false })); // HTML Form -> Body
const options = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};
app.use(express.static('public', options)); // able to grab contents in public folder



app.listen(8080);
