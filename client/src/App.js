import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';

import Login from './components/login';
import Dashboard from './components/dashboard';

class App extends Component {

  constructor() {
    super();
    this.state = {
      logged_in:true,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleChange = this.handleFrom.bind(this);
    // this.handleChange = this.handleTo.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleWishlist = this.handleWishlist.bind(this);

  }

  componentDidMount() {
    fetch('/auth/check')
      .then(res => {
        if (res.status == 200) {
            this.setState({logged_in: true})
      
        } 
      })
      // .then(bitcoin_prices =>{
      //   this.setState({bitcoin_prices}
      // } , () => console.log('bitcoin_prices fetched...', bitcoin_prices)));

    
  }



  render() {
    return (
      <div className="App">
        
        {/* <div className="row text-white"> */}
          {this.state.logged_in ? <Dashboard />: <Login />}
              
        {/* </div> */}


        
        
        
      </div>
    );
  }
}

export default App;
