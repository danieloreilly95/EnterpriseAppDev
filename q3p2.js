//GET /purchases
const express = require('express');
const http = require('http');
const massive = require('massive');
const app = express();

massive({
  host: '127.0.0.1',
  port: 5432,
  database: 'pgguide',
  user: 'postgres',
  password: '1234'
}).then(instance => {
  app.set('db', instance);

  app.get('/', (req, res) => {
    var input_name ="'Desktop Computer'; Select * from products";
    var sql = "select * from products where products.title = $6";
    req.app.get('db').query(sql, input_name)
    .then(items => {
      res.json(items);
    });
  });

  http.createServer(app).listen(3000);
});
