import React, { Component } from 'react';
import './customers.css';

import moment from 'moment';

// const danger = {
//   color: 
// }

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      bitcoin_prices: [],
      value: '',
      from: '',
      wishlist: '',
      to: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFrom= this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleWishlist = this.handleWishlist.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

  }

  isOdd(num) {
    if(num % 2 === 0) {
      // document.write('Number is even!');
      // return false;
      // return `<span style="color:red>${num}</span>`;
      return 'text-danger';
   } else {
      // document.write('Number is odd!');
      // return `<span style="color:green>${num}</span>`;
      // return true;
      return 'text-success';
   }
  }
  isPrime(num) {
    if(num % 2 === 0) {
      // document.write('Number is even!');
      // return false;
      // return `<span style="color:red>${num}</span>`;
      return 'false';
   } else {
      // document.write('Number is odd!');
      // return `<span style="color:green>${num}</span>`;
      // return true;
      return 'true';
   }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleFrom(event) {
    this.setState({from: event.target.value});
  }
  handleTo(event) {
    this.setState({to: event.target.value});
  }



  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  handleWishlist(id) {
    console.log(id)

    let infos = this.state.bitcoin_prices;

    let final = infos.filter(info => {
      return info.id === id
    })

    const format = {
      date: final[0].date,
      rate: final[0].rate,
      is_prime: this.isPrime(final[0].rate),
    }

    // console.log(format)

    // alert('alert this')
    // async () => {
    //   const rawResponse = await fetch('http://localhost:3000/api/wishlist', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     // body: JSON.stringify({a: 1, b: 'Textual content'})
    //     body: JSON.stringify(format)
    //   });
    //   const content = await rawResponse.json();
 
      fetch('http://localhost:3000/api/wishlist', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({a: 1, b: 'Textual content'})
        body: JSON.stringify(format)
      }).then(res => console.log(res.json()));
      
      // const content = await rawResponse.json();
  
}

  handleFilter(event) {
    event.preventDefault();

    let from = this.state.from;
    let to = this.state.to;
    fetch(`/api/bitcoin-prices/${from}/${to}`)
      .then(res => res.json())
      .then(bitcoin_prices => this.setState({bitcoin_prices}, () => console.log('bitcoin_prices fetched...', bitcoin_prices)));
  }
  


  componentDidMount() {
    fetch('/api/bitcoin-prices')
      .then(res => res.json())
      .then(bitcoin_prices => this.setState({bitcoin_prices}, () => console.log('bitcoin_prices fetched...', bitcoin_prices)));
  }


  render() {
    return (
      <div className="container text-left bg-white rounded text-dark">
        <h2 className="my-3 text-left">Select a range</h2>

        
        {/* <ul>
        {this.state.bitcoin_prices.map(customer => 
          <li key={customer.id}>{customer.code} {customer.rate}</li>
        )}
        </ul> */}

    <form className="form-inline mb-2" onSubmit={this.handleFilter}>
    <div class="form-group mb-2">
    <label for="staticEmail2" className="sr-only">from</label>
    <input type="date" placeholder="From" value={this.state.from} onChange={this.handleFrom} />
  </div>

  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">to</label>
    <input type="date" placeholder="to" value={this.state.to} onChange={this.handleTo} />
  </div>
        {/* <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" /> */}
        <button type="submit" value="Submit" class="btn btn-sm btn-primary mb-2">Filter</button>
      </form>

  

        
        
        <table className="table table-bordered table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col"  className="text-left">Date</th>
      <th scope="col" className="text-left">Price</th>
      <th scope="col" className="text-left">Wishlist</th>
      
      
    </tr>

    
  </thead>
  <tbody>
  {this.state.bitcoin_prices.map(price => 
          // <li key={price.id}>{price.code} {price.rate}</li>

          <tr key={price.id}>
      {/* <th scope="col">#</th> */}
      <th scope="col" className="text-left">{moment(price.date).format("YYYY/MM/DD")}</th>

      
      <th scope="col"  className="text-left"><span className={this.isOdd(price.rate)}>${price.rate}</span></th>
      <th scope="col" className="text-left">
        
        {/* {customer.rate} */}

        <button type="button" onClick={() => this.handleWishlist(price.id)} class="btn btn-primary">Add to wishlist</button>
        
        </th>
      
      
    </tr>
        )}
   
  </tbody>
</table>
      </div>
    );
  }
}

export default Customers;
