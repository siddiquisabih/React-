import React, { Component } from 'react';
import './App.css';
import {Link, browserHistory} from 'react-router'
import * as firebase from 'firebase';





class Login extends Component {
  constructor() {
    super()
    // this.signup = this.signup.bind(this)
    this.login = this.login.bind(this)

  }


//   signup() {

//     const email = this.refs.email.value;
//     const pass = this.refs.pass.value;
//     const auth = firebase.auth();
//     const signin = auth.createUserWithEmailAndPassword(email, pass).then((user) => {
//       let sabih = firebase.database().ref().child("hi");
//       sabih.push({ email: email, password: pass });


//  }




//     );
//   }




  //login form k liye hai yai
  login() {

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;

    const auth = firebase.auth();
    const signin = auth.signInWithEmailAndPassword(email, pass).then((result) =>{
      browserHistory.push("/Donor")
      console.log('yahoo again')
      
    }

    );
  }



  render() {
    return (

      <div className="App">

        <input  className="col-md-8"    ref="email" type="email" placeholder="Email" /><br />
        <input  className="col-md-8" type="password" ref="pass" placeholder="password" /><br />
        {/*<button onClick={this.signup} id="btnSignup" className="btn btn-primary">Signup</button>*/}
        <Link   onClick={this.login} id="btnLogin" className="btn btn-primary">Login</Link><br/>
      </div>);


  }
}

export default Login;
