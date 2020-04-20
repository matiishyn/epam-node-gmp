import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './app';

createConnection().then(() => {
  app.listen(3000, () => {
    console.log('App is running');
  });
});
