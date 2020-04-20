import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Routes } from './routes';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](
    route.route,
    (req: Request, res: Response, next: Function) => {
      const result = new (route.controller as any)()[route.action](
        req,
        res,
        next
      );
      if (result instanceof Promise) {
        result.then((reslt) =>
          reslt !== null && reslt !== undefined ? res.send(reslt) : undefined
        );
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    }
  );
});

export default app;
