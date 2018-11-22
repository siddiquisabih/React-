import React, { Component } from "react"

import { Route, Router, browserHistory } from "react-router"

import BuyerForm from '../form/buyerForm'
import App from '../App'
import TransactionID from "../transaction/TransactionID";

import TransactionStatusForm from "../transaction/TransactionStatusForm";


class Routes extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}></Route>
                <Route path="/regular/escrow" component={BuyerForm} />
                <Route path="/transaction/status" component={TransactionID} />
                <Route path="/transaction/detail" component={TransactionStatusForm} />
            </Router>
        )
    }
}
export default Routes