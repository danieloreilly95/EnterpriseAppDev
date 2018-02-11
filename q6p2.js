const express = require('express')
const app = express()

var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/pgguide');



sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection works');
  })
  .catch(function(err) {
    console.log('Connection does not work', err);
  });

  app.get('/', (req, res) =>  {
    sequelize.query("select * from products where id = 5", { type: sequelize.QueryTypes.SELECT})
      .then(function(users){
        console.log(users);
        res.json(users);
      });
  });

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
