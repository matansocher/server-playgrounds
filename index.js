const express = require('express');

const app = express();

console.log('Server started');

app.get('/', (req, res) => {
  // console.log(res);
  res.send(JSON.stringify(req));
});

app.listen(3000, () => console.log('Listening on port 3000!'));
