import express from 'express';
import userRouter from './router/user.js';
import postRouter from './router/post.js';

const app = express();

app.use(express.json());

// app
//   .route('/posts')
//   .get((req, res, next) => {
//     res.status(201).send('GET: /posts');
//   })
//   .post((req, res) => {
//     res.status(201).send('POST: /posts');
//   });

// app
//   .route('/posts/:id')
//   .post((req, res) => {
//     res.status(201).send('PUT: /posts/:id');
//   })
//   .delete((req, res) => {
//     res.status(201).send('DELETE: /posts/:id');
//   });

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);
