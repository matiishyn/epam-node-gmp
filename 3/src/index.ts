import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { usersRouter } from './routes/users';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';
import CONFIG from './config';

import db from './services/db';

const app = express();

// todo move to separate file
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use(errorHandler);
app.use(notFoundHandler);

// db.sync().then(() => {
db.authenticate().then(() => {
  console.log('DB is OK');
  app.listen(CONFIG.PORT, (err) => {
    if (err) return console.error(err);
    return console.log(`Listening on port ${CONFIG.PORT}`);
  });
});
