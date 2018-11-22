import React, { Component } from 'react';
import './App.css';
import BuyerForm from "./form/buyerForm"
import TransactionID from "./transaction/TransactionID"
import { browserHistory } from "react-router"

import TransactionStatusForm from "./transaction/TransactionStatusForm"

class App extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand coinColor" href="#">Coin Grace</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="btn btn-outline-info btn-sm nav-link optionsColor" >Home</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-info btn-sm nav-link optionsColor" onClick={() => { browserHistory.push('/regular/escrow') }} >Escrow</button>
              </li>

              <li className="nav-item dropdown">
                <button className="btn btn-outline-info btn-sm nav-link dropdown-toggle optionsColor" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sell / Buy
                    </button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item">Sell</a>
                  <a className="dropdown-item">Buy</a>
                </div>
              </li>

              <li className="nav-item active">
                <button className="btn btn-outline-info btn-sm nav-link optionsColor" onClick={() => { browserHistory.push('/transaction/status') }}>Transaction Status</button>
              </li>

            </ul>
            <ul className="navbar-nav ">
              <li ><button className="btn btn-outline-info btn-sm nav-link optionsColor"> Sign Up</button></li>
              <li ><button className="btn btn-outline-info btn-sm nav-link optionsColor"> Login</button></li>
            </ul>
          </div>

        </nav>
        <div className="under">
          Under Construction
        </div>

      </div>
    );
  }
}

export default App;
