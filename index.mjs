import functions from '@google-cloud/functions-framework';
import dotenv from 'dotenv';
dotenv.config();


functions.http('hello', (req, res) => {
  res.send('Hello, world!');
});
