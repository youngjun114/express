import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

app.post(
  '/users',
  [
    body('name')
      .isLength({ min: 2 })
      .withMessage('Name should be minimum length of 2'),
    body('age').isInt().withMessage('please enter number'),
    body('email').isEmail().withMessage('Please enter proper email address'),
    body('job.name').notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  param('email').isEmail().withMessage('please enter email'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    res.send('💌');
  }
);

app.listen(8080);
