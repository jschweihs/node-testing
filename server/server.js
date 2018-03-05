const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    error: 'Page not found',
    name: 'Todo App 1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{
    name: 'Jake',
    age: 30
  }, {
    name: 'Tom',
    age: 28
  }, {
    name: 'Terry',
    age: 35
  }]);
});
app.listen(3000);

module.exports.app = app;
