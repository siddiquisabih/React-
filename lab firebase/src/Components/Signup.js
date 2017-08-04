import React, { Component } from 'react';
import * as firebase from 'firebase'
import {Link ,browserHistory} from 'react-router'

class Signup extends Component{
    constructor(props){
        super(props)
        this.signup = this.signup.bind(this)
    }

signup(){

let email = this.refs.email.val;
let password = this.refs.pass.val;
let auth = firebase.auth();
let signup = auth.createUserWithEmailAndPassword(email , password)
}



render(){
return(

<div>

        <input  className="col-md-8" ref="email" type="email" placeholder="Email" /><br />
        <input  className="col-md-8" type="password" ref="pass" placeholder="password" /><br />
        <button onClick={this.signup} className="btn btn-primary">Signup</button>
      </div>



);}}

export default Signup;