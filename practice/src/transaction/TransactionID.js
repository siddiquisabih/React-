import React, { Component } from 'react'
import './transactionId.css'
import { connect } from "react-redux"



import Midware from "../store/middleware";
import { browserHistory } from 'react-router';





function mapStateToProps(state) {
    return {

        failEscrow: state.escrowFailed,
        successEscrow: state.transactionSuccessfull,
        escrowData: state.transactionStatusData

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTransactionDetail: (userIdPass) => {
            dispatch(Midware.transactionStatus(userIdPass))
        }

    }
}





class TransactionID extends Component {
    constructor() {
        super()
        this.state = {
            Hide: true,
            transaction: '',
            secretKey: '',
            escrowDetail: []
        }
    }


    proceed(ev) {
        var transaction = this.refs.transaction.value

        if (transaction !== '') {
            ev.preventDefault();
            this.setState({
                Hide: false,
                transaction: transaction
            })
        }

    }

    getFormDetail(ev) {
        var secret = this.refs.secretKey.value

        if (secret !== '') {
            ev.preventDefault();


            var detail = {
                transactionKey: this.state.transaction,
                passKey: secret
            }
            this.props.getTransactionDetail(detail)




        }




    }




    componentWillReceiveProps(prop) {

        if (prop.failEscrow === true) {

            alert('Invalid Details')
        }

        if (prop.successEscrow === true) {
            this.setState({
                escrowDetail: prop.escrowData
            })
            browserHistory.push('/transaction/detail')
        }





    }






    render() {

        return (
            <div>
                <form>
                    <div className={this.state.Hide ? 'center' : 'hidden'}>
                        <div className='maindiv'>
                            <div className="mainheadingg">
                                Transaction Status

                        </div>
                            <div className="topText">
                                {/* Use this page to find out the Status of a Transaction */}
                            </div>
                            <p className="inputBox">
                                <label>Transaction ID</label>
                                <input placeholder="Enter transaction Id" type="text" name="tranID" required ref='transaction' />
                            </p>

                            <p className="inputBox">
                                <label>Who are you?</label>
                                <select className="selectclass" name="coins" ref='viewer' >
                                    <option value="select">Select</option>
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seller">Seller</option>

                                </select>
                            </p>
                            <p className="inputBox">
                                <button type='submit' onClick={this.proceed.bind(this)} >Proceed
                            </button>
                            </p>

                        </div>
                    </div>
                </form>

                <form>

                    <div className={this.state.Hide ? 'hidden' : 'center'}>
                        <div className='maindiv2'>
                            <div className="mainheadingg">
                                Transaction Status

                        </div>
                            <div className="topText">
                                Use this page to find out the Status of a Transaction
                        </div>
                            <p className="inputBox">
                                <label>Secret key</label>
                                <input placeholder="Enter Secret Key" type="text" name="secretKey" required ref='secretKey' />
                            </p>

                            <p className="inputBox">
                                <button onClick={this.getFormDetail.bind(this)} >Submit
                            </button>

                            </p>

                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionID);
