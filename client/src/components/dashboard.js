import React, { Component } from 'react';

import logo from './../bitcoin.png';
import './../App.css';
import Customers from './customers';
import Wishlist from './wishlist';
import Login from './login';




class Dashboard extends Component {

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
        <div >
        {/* <div className="App-header">
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
        </div> */}
        {/* <!-- Vertical navbar --> */}
<div className="vertical-nav bg-white" id="sidebar">
  <div className="py-4 px-3 mb-4 bg-light">
    <div className="media d-flex align-items-center">
      {/* <img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm"></img> */}
      <img src={logo} className="App-logo" alt="logo" />
      <div className="media-body">
        <h4 className="m-0">Jason Doe</h4>
        <p className="font-weight-light text-muted mb-0">Web developer</p>
      </div>
    </div>
  </div>

  <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>
<div className="row">
  <div className="col-12">
  <ul className="nav flex-column bg-white mb-0 text-left">
    <li className="nav-item">
      <button onClick={() => this.setState({wishlist: false})} className="App-title mt-0 btn btn-default" style={{color: !this.state.wishlist ? '#007bff': 'white', fontSize: '18px'}} className="nav-link text-dark  bg-light">
                <i className="fa fa-th-large  text-primary fa-fw"></i>
                &nbsp;Home
            </button>
    </li>
    <li className="nav-item">
      <button onClick={() => this.setState({wishlist: true})} className="App-title mt-0 btn btn-default" style={{color: this.state.wishlist ? '#007bff': 'white', fontSize: '18px'}} className="nav-link text-dark ">
                <i className="fa fa-heart  text-primary fa-fw"></i>
                &nbsp;Your Wishlist
            </button>
    </li>
    
    
  </ul>

  {/* <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>

  <ul className="nav flex-column bg-white mb-0">
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-area-chart  text-primary fa-fw"></i>
                &nbsp;Area charts
            </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-bar-chart  text-primary fa-fw"></i>
                &nbsp;Bar charts
            </a>
    </li>
    
  </ul> */}
  </div>
  </div>
</div>
{/* <!-- End vertical navbar --> */}


{/* <!-- Page content holder --> */}
<div className="page-content p-5" id="content">
  {/* <!-- Toggle button --> */}
  <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4 text-left"><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">Toggle Nav</small></button>

  {/* <!-- Demo content --> */}
  <h2 className="display-4 text-white ">Bitcoin Wishlist</h2>
  <p className="lead text-white mb-0">Add your favourite bitcoin prices to your wishlist</p>
  {/* <p className="lead text-white">Snippet by <a href="https://bootstrapious.com/snippets" className="text-white">
        <u>Bootstrapious</u></a>
  </p> */}
  <div className="separator my-4"></div>
  <div className="row text-white">
    {this.state.wishlist ? <Wishlist />: <Customers />}
       
  </div>

</div>
{/* <!-- End demo content --> */}

        
        
        
      </div>
       
    
      );
    }
  }
  
  export default Dashboard;
  