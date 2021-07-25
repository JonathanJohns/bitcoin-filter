import React, { Component } from 'react';
import './customers.css';

import moment from 'moment';

// const danger = {
//   color: 
// }

class Wishlist extends Component {
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
    this.handleChange = this.handleFrom.bind(this);
    this.handleChange = this.handleTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


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

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleFrom(event) {
    this.setState({from: event.target.value});
  }
  handleTo(event) {
    this.setState({to: event.target.value});
  }



  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  componentDidMount() {
    fetch('/api/wishlist')
      .then(res => res.json())
      .then(bitcoin_prices => this.setState({bitcoin_prices}, () => console.log('bitcoin_prices fetched...', bitcoin_prices)));
  }

//   render() {
//     return (
//       <div>
//         <h2>bitcoin_prices</h2>
//         <ul>
//         {this.state.bitcoin_prices.map(customer => 
//           <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
//         )}
//         </ul>
//       </div>
//     );
//   }
// }
  render() {
    return (
      <div className="container text-left">
        <h2 className="my-3 text-left">Your Wishlist</h2>

        
        {/* <ul>
        {this.state.bitcoin_prices.map(customer => 
          <li key={customer.id}>{customer.code} {customer.rate}</li>
        )}
        </ul> */}

    <form className="form-inline mb-2" onSubmit={this.handleSubmit}> 
    <div class="form-group mb-2">
    <label for="staticEmail2" className="sr-only">from</label>
    <input type="date" placeholder="From" value={this.state.value} onChange={this.handleFrom} />
  </div>

  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">to</label>
    <input type="date" placeholder="to" value={this.state.value} onChange={this.handleTo} />
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
      <th scope="col" className="text-left">Prime Numbers</th>
      
      
    </tr>

    
  </thead>
  <tbody>
  {this.state.bitcoin_prices.map(price => 
          // <li key={price.id}>{price.code} {price.rate}</li>

          <tr key={price.id}>
      {/* <th scope="col">#</th> */}
      <th scope="col" className="text-left">{moment(price.date).format("Do MMMM YYYY")}</th>

      
      <th scope="col"  className="text-left"><span className={this.isOdd(price.bitcoin_value)}>${price.bitcoin_value}</span></th>
      <th scope="col" className="text-left">
        
        {/* {customer.rate} */}

        <button type="button" onClick={() => this.handleWishlist(price.id)} class="btn btn-primary">{price.prime_numbers}</button>
        
        </th>
      
      
    </tr>
        )}
   
  </tbody>
</table>
      </div>
    );
  }
}

export default Wishlist;
