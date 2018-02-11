//GET /products
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
    req.app.get('db').query("select * from products order by price asc;")
    .then(items => {
      res.json(items);
    });
  });

  http.createServer(app).listen(3000);
});
