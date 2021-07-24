import express from 'express';
const app = express();
const PORT = 8080;

// callback will be called when url is localhost:8080/api
// however this won't be called if there is anything after api
// ex) localhost:8080/api/docs
app.all('/api', (req, res, next) => {
  console.log('all');
  next();
});

// callback will be called when ulr is localhost:8080/sky
// also will be called if I put something after sky
// ex) localhost:8080/sky/docs
app.use('/sky', (req, res, next) => {
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    res.send('hello');
  },
  (req, res, next) => {
    console.log('first 2');
  }
);

app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  res.status(404).send('Not available!');
});
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
});
app.listen(PORT);
