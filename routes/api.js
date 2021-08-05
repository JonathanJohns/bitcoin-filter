
const { Router } = require('express');
const cors = require('cors');
const db = require('./../database')
const bitcoin_prices = require('./../bitcoin_prices')

const {check, validationResult} = require('express-validator');

const router = Router();

router.get('/customers', cors(), (req, res) => {
    const customers = [
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });
  
  router.get('/bitcoin-prices',cors(), (req, res) => {
    // const customers = [
    //   {id: 1, firstName: 'John', lastName: 'Doe'},
    //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    // ];
 res.json(bitcoin_prices);

    // if (req.user) {
     
    // } else {
    //   res.status(403).send({'msg': "Not Authenticated"})
    // }
    
  })
  
  router.get('/bitcoin-prices/:from/:to',cors(), (req, res) => {
  
    const user_id = 3;
  
    // console.log(req.params.from,req.params.to)
    console.log( `SELECT * FROM Orders
    WHERE date BETWEEN ${req.params.from} AND ${req.params.to};`)
  
    db.query(
      `SELECT * FROM wishlist
      WHERE date BETWEEN '${req.params.from}' AND '${req.params.to}';`,
      
      function(err, results) {
        console.log(results);
            res.json(results); 
      }
    );
  })
  
  
  router.get('/wishlist',cors(), (req, res) => {
  
    const user_id = 3;
  
    db.query(
      `SELECT * FROM wishlist WHERE user_id=${user_id} ORDER BY STR_TO_DATE(date, '%M %d, %Y') DESC`,
      
      function(err, results) {
        console.log(results);
            res.json(results); 
      }
  
      
    );
  })
  
  
  router.get('/bitcoin_prices/:from/:to',cors(), (req, res) => {
  
    const user_id = 3;
  
    db.query(
      `SELECT * FROM Orders
      WHERE OrderDate BETWEEN ${req.params.from} AND ${req.params.to};`,
      
      function(err, results) {
        console.log(results);
            res.json(results); 
      }
    );
  })
  
  const getPrimes = (max) => {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
  }

  router.post('/wishlist',cors(), (req, res) => {


    getPrimes(req.body.is_prime);
     let prime_numbers = 0;
  
    if (req.body.is_prime == 'true') {
      let primes = getPrimes(req.body.rate);
      prime_numbers = primes.length;
    }
    
  
    
    // const prime_numbers = 5;
    // console.log(prime_numbers)
    console.log(req.body.is_prime)
    db.query(
      `INSERT INTO wishlist (date,bitcoin_value, prime_numbers, user_id, is_prime)
      VALUES ('${req.body.date}', '${req.body.rate}', '${prime_numbers}', '${3}', '${req.body.is_prime}') 
      `,
      
      function(err, results) {
        // console.log(results);
        res.json(results);
      }
    );
  })


  router.get('/check', (req, res) => {
    if (req.user) {
        res.send(200);
    } else {
        res.send(403);
    }
    
});

  
module.exports = router;