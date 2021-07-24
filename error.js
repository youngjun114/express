import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

// synchronous with error handler
app.get('/file', (req, res) => {
  fs.readFile('/file1.txt', (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

// async with error handler
app.get('/file1', (req, res) => {
  try {
    const data = fs.readFileSync('/file1.txt');
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

// promise with error handler
app.get('/file2', (req, res) => {
  fsAsync //
    .readFile('/file2.txt')
    .then((data) => res.send(data))
    .catch((error) => res.sendStatus(404));
});

// async with error handler
app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

// this will be not called if async was used
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'something went wrong' });
});

app.listen(8080);
