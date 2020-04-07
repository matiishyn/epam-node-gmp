import app from './server';
import CONFIG from './config';
import db from './services/db';

// authenticate or sync ?
db.authenticate().then(async () => {
  console.log('===> DB is OK');
  await app.listen(CONFIG.PORT);
  console.log(`===> Listening on port ${CONFIG.PORT}`);
});
