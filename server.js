const express = require('express');
const cors = require('cors');
const db = require('./database')
const bitcoin_prices = require('./bitcoin_prices')

// const bodyParser = require('body-parser')
// express.use(bodyParser.urlencoded({ extended: false }))

// // parse expresslication/json
// express.use(bodyParser.json())





const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false, 
}));

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/bitcoin-prices',cors(), (req, res) => {
  // const customers = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  // ];

  res.json(bitcoin_prices);
})

app.get('/api/wishlist',cors(), (req, res) => {

  const user_id = 3;

  db.query(
    `SELECT * FROM wishlist WHERE user_id=${user_id}`,
    
    function(err, results) {
      console.log(results);
          res.json(results); 
    }
  );
})

app.post('/api/wishlist',cors(), (req, res) => {

  const prime_numbers = 5;

  db.query(
    `INSERT INTO wishlist (date,bitcoin_value, prime_numbers, user_id)
    VALUES ('${req.body.date}', '${req.body.rate}', '${prime_numbers}', '${3}') 
    ORDER BY id DESC    `,
    
    function(err, results) {
      console.log(results);
      res.json(results);
    }
  );
})

const port = 3000;

app.listen(port, () => `Server running on port ${port}`);