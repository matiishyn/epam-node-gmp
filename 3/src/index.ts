import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { usersRouter } from './users/users.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';

const PORT = process.env.PORT || '3000';
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, (err) => {
  if (err) return console.error(err);
  return console.log(`Listening on port ${PORT}`);
});
