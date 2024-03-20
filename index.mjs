import functions from '@google-cloud/functions-framework';


functions.http('hello', (req, res) => {
  res.send('Hello, world!');
});
