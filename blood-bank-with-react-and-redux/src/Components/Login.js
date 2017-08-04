import React, { Component } from 'react';
import './App.css';
import {Link, browserHistory} from 'react-router'
import * as firebase from 'firebase';



// Initialize Firebase yahan firebase database ki details ain gi


// const config = {
//   apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
//   authDomain: "bloodbank-876e1.firebaseapp.com",
//   databaseURL: "https://bloodbank-876e1.firebaseio.com",
//   storageBucket: "bloodbank-876e1.appspot.com",
//   messagingSenderId: "560849097238"
// };
// firebase.initializeApp(config);



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
