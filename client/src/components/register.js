import React, { Component } from 'react';






class Register extends Component {

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



    render() {
      return (
        <div className="limiter">
		<div className="container-login100" style={{background: 'white'}}>
			<div className="wrap-login100 p-t-50 p-b-90">
				<form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit}>
					<span className="login100-form-title p-b-51">
						Login
					</span>

					
					<div className="wrap-input100 validate-input m-b-16" data-validate = "Username is required">
						<input className="input100" type="text" name="username" placeholder="Username" value={this.state.value} onChange={this.handleFrom}></input>
						<span className="focus-input100"></span>
					</div>
					
					
					<div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password" value={this.state.value} onChange={this.handleFrom}></input>
						<span className="focus-input100"></span>
					</div>
					
					<div className="flex-sb-m w-full p-t-3 p-b-24">
						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" value={this.state.value} onChange={this.handleFrom}></input>
							<label className="label-checkbox100" for="ckb1">
								Dont have an Account?
							</label>
						</div>

						<div>
							<a href="#" className="txt1">
								Register?
							</a>
						</div>
					</div>

					<div className="container-login100-form-btn m-t-17">
						<button className="login100-form-btn" type="submit">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
       
    
      );
    }
  }
  
  export default Register;
  