import 'dotenv/config';

// Exporting CONFIG constant to eliminate referencing to 'process.env'

interface IConfig {
  DB_URL: string;
  PORT: string;
}
const CONFIG: IConfig = {
  DB_URL: process.env.DB_URL || '',
  PORT: process.env.PORT || '3000',
};

export default CONFIG;
