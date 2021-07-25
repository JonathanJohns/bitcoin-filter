import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './bitcoin.png';
import './App.css';
import Customers from './components/customers';
import Wishlist from './components/wishlist';

class App extends Component {

  constructor() {
    super();
    this.state = {
      wishlist:false,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleChange = this.handleFrom.bind(this);
    // this.handleChange = this.handleTo.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleWishlist = this.handleWishlist.bind(this);

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title mt-3">Bitcoin Price Filter</h1>
    
          <div className="row mt-3">
            <div className="col-12 ">
              </div>
          <div className="col text-right" style={{borderRight: '1px solid silver'}}>
              <button onClick={() => this.setState({wishlist: false})} className="App-title mt-0 btn btn-default" style={{color: !this.state.wishlist ? '#007bff': 'white', fontSize: '18px'}}>Home</button>
          </div>
          <div className="col text-left">
               <button onClick={() => this.setState({wishlist: true})} className="App-title mt-0 btn btn-default" style={{color: this.state.wishlist ? '#007bff': 'white', fontSize: '18px'}}>Wishlist</button>
          </div>


          
        </div>
        </div>

        
        {this.state.wishlist ? <Wishlist />: <Customers />}
        
      </div>
    );
  }
}

export default App;
