import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { usersRouter } from './routes/users';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use(errorHandler);
app.use(notFoundHandler);

export default app;
